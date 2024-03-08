import React, { forwardRef, useEffect, useMemo } from 'react'
import { getDefaultClassNames } from './Button.utils'
import { getTypographyClassNames, type TypographyVariant } from '@/libs/typography'
import classNames from 'classnames'

export type ButtonVariant = 'contained' | 'outlined' | 'text'

export type ButtonSize = 'small' | 'medium' | 'large' | 'long'

export type ButtonColor = 'accent' | 'success' | 'info' | 'default' | 'neutral' | 'white'

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  /**
   * Вариант кнопки
   */
  variant?: ButtonVariant
  size?: ButtonSize
  start?: React.ReactNode
  end?: React.ReactNode
  color?: ButtonColor
  helperContent?: React.ReactNode
  textVariant?: TypographyVariant
  textColor?: string
  slotContainerClasses?: string
  borderColor?: string
}

/**
 * Кнопка бывает разных типов и размеров
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled,
      children,
      color,
      start,
      end,
      helperContent,
      variant,
      size,
      textVariant = 'body2',
      textColor = 'text-main',
      slotContainerClasses,
      ...otherProps
    },
    ref
  ) => {
    const defaultClassNames = useMemo(
      () => getDefaultClassNames(size, variant, color, disabled),
      [size, variant, color, disabled]
    )
    
    return (
      <button type="button" {...otherProps} className={classNames(defaultClassNames, className)} disabled={disabled}>
        {start}
        {(children || helperContent) && (
          <div className={classNames(getTypographyClassNames(textVariant), 'flex grow-0 shrink', textColor, slotContainerClasses ? slotContainerClasses : '')}>
            {children}
            {helperContent}
          </div>
        )}
        {end}
      </button>
    )
  }
)

// fix ESLint react/display-name warning
Button.displayName = 'Button'

export { Button }
