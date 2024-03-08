import classNames from 'classnames'
import type { ButtonSize, ButtonColor, ButtonVariant } from './Button'

export const getDefaultClassNames = (
  size: ButtonSize | undefined,
  variant: ButtonVariant | undefined,
  color: ButtonColor | undefined,
  disabled: boolean | undefined
): classNames.Argument => {
  const result: classNames.ArgumentArray = [
    'flex',
    'flex-row',
    'items-center',
    'justify-center',
    'gap-x-2',
    'border',
    'border-solid',
  ]

  switch (size) {
    case 'small': {
      result.push('p-1')
      break
    }
    case 'large': {
      result.push('p-3')
      break
    }
    case 'long': {
      result.push('px-3', 'py-2')
      break
    }
    case 'medium':
    default: {
      result.push('h-[40px] px-2')
    }
  }

  if (!disabled) {
    switch (color) {
      case 'success': {
        if (variant === 'outlined') {
          result.push(
            'bg-white',
            'border-stroke',
            'text-main',
            'hover:border-transparent',
            'hover:shadow-outlined',
            'hover:shadow-success'
          )
        } else if (variant === 'text') {
          result.push('text-main', 'border-transparent', 'hover:bg-success-hover', 'active:bg-success-focus')
        } else {
          result.push('bg-success', 'text-white', 'border-success', 'hover:bg-success-hover', 'active:bg-success-focus')
        }
        break
      }
      case 'info': {
        if (variant === 'outlined') {
          result.push(
            'bg-white',
            'border-stroke',
            'text-main',
            'hover:border-transparent',
            'hover:shadow-outlined',
            'hover:shadow-info'
          )
        } else if (variant === 'text') {
          result.push('text-main', 'border-transparent', 'hover:bg-info-hover', 'active:bg-info-focus')
        } else {
          result.push('bg-info', 'text-white', 'border-info', 'hover:bg-info-hover', 'active:bg-info-focus')
        }
        break
      }
      case 'default': {
        if (variant === 'text') {
          result.push('text-main', 'border-transparent', 'hover:text-accent-hover', 'active:text-accent-focus')
          break
        }
      }
      case 'neutral': {
        if (variant === 'outlined') {
          result.push(
            'bg-transparent',
            'border-body2',
            'border-stroke',
            'hover:border-transparent',
            'hover:shadow-outlined',
            'hover:shadow-accent'
          )
          break
        }
      }
      case 'white': {
        result.push('text-main', 'bg-white');
        break;
      }
      case 'accent':
      default: {
        if (variant === 'outlined') {
          result.push(
            'bg-white',
            'border-stroke',
            'text-main',
            'hover:border-transparent',
            'hover:shadow-outlined',
            'hover:shadow-accent'
          )
        } else if (variant === 'text') {
          result.push('text-accent', 'border-transparent', 'hover:text-accent-hover', 'active:text-accent-focus')
        } else {
          result.push('bg-accent', 'text-white', 'border-accent', 'hover:bg-accent-hover', 'active:bg-accent-focus')
        }
      }
    }
  } else {
    if (variant === 'outlined') {
      result.push('bg-white', 'border-disabled', 'text-main-disabled')
    } else if (variant === 'text') {
      result.push('text-main-disabled', 'border-transparent')
    } else {
      result.push('bg-disabled', 'text-main-disabled', 'border-disabled')
    }
  }

  switch (variant) {
    case 'text':
      break
    case 'contained':
    case 'outlined':
    default: {
      result.push('rounded-[5px]')
    }
  }

  return result
}
