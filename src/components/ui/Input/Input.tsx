import React, { forwardRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { getTypographyClassNames } from '@/libs/typography'
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react'
import Close from '@/components/icons/Close'

type InputProps = React.ComponentPropsWithRef<'input'> & {
  type?: string
  error?: string
  isTextArea?: boolean
  start?: React.ReactNode
  end?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { start, end, error, type = 'text', className, isTextArea = false, ...otherProps },
  ref
) {
  const [open, setOpen] = useState(false)
  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom',
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({
        fallbackAxisSideDirection: 'none',
      }),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })

  useEffect(() => {
    if (error) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [error])

  return (
    <>
      <div
        ref={refs.setReference}
        className={classNames('flex flex-row border border-stroke px-1 h-[40px] rounded-1', error && '!border-accent', className)}
      >
        {start}

        {isTextArea ? 
        (<input
          type={type}
          {...otherProps}
          ref={ref}
          className={classNames(getTypographyClassNames('body3'), 'w-full outline-none focus:outline-none')}
        />) : 
        (
          <textarea
            type={type}
            {...otherProps}
            ref={ref}
            className={classNames(getTypographyClassNames('body3'), 'w-full outline-none focus:outline-none resize-none')}
          />
        )}

        {end}
      </div>
      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="flex flex-row pl-1 pr-3 py-1 min-w-[140px] bg-alert border border-accent rounded-1 shadow-primary"
        >
          <span className={classNames(getTypographyClassNames('body4'), 'text-accent')}>{error}</span>

          <span onClick={() => setOpen(false)} className="absolute right-0 top-0 cursor-pointer">
            <Close color={'black'} />
          </span>
        </div>
      )}
    </>
  )
})

export { Input }
