import React from 'react'
import classNames from 'classnames'
import { getTypographyClassNames } from '@/libs/typography'

export type LabelProps = React.ComponentPropsWithoutRef<'div'> & {
  labelClassName?: string
  message?: React.ReactNode | string
  disabled?: boolean
}

const Label = ({ className, title, children, labelClassName, message, disabled = false, ...otherProps }: LabelProps) => {
  return (
    <div {...otherProps} className={classNames('flex flex-col w-full', disabled && 'opacity-30', className)}>
      <label className={classNames(getTypographyClassNames('body3'), 'text-gray-dark mb-[4px]', labelClassName)}>
        {title}
      </label>
      {children}
      {message && (
        <span className={classNames(getTypographyClassNames('body3'), 'mt-0.5 text-2xs text-accent')}>{message}</span>
      )}
    </div>
  )
}

export { Label }
