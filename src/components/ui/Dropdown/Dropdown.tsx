//@ts-nocheck
import React from 'react'
import * as Select from '@radix-ui/react-select'
import ArrowDown from '@/components/icons/ArrowDown'
import { getTypographyClassNames } from '@/libs/typography'
import classNames from 'classnames'

import * as ScrollArea from '@radix-ui/react-scroll-area'

type DropdownItemProps = {
  value: string
  label: string
}

type DropdownProps = {
  value: string | number
  onValueChange: (value: string) => void
  name: string
  items: Array<DropdownItemProps>
  placeholder?: string
  variant?: 'borderless' | 'normal'
  size?: 'medium' | 'big'
  textColor?: string
  bgColor?: string
  className?: string
  disabled?: boolean
}

const Dropdown = ({
  value,
  onValueChange,
  name,
  items,
  placeholder,
  variant,
  size,
  textColor,
  bgColor,
  className,
  selectItemClassName,
  disabled,
  ...otherProps
}: DropdownProps) => {
  const rootClasses = classNames(
    'flex flex-row justify-between select-none hover:shadow-accent',
    variant === 'borderless' ? '' : 'border border-stroke rounded-1',
    size === 'big' ? 'px-2 py-2' : 'px-1 py-1',
    textColor ? `text-${textColor}` : '',
    className || '',
    disabled ? 'opacity-40 hover:shadow-none' : ''
  )

  const selectedOption = items.find((item) => item.value === value)

  return (
    <Select.Root
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      value={selectedOption}
      onValueChange={(selectedOption) => onValueChange(selectedOption?.value || null)}

    >
      <Select.Trigger
        className={classNames(rootClasses, getTypographyClassNames('body3'), 'text-main', `bg-${bgColor}`)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <Select.Icon className="h-[18px] ml-auto text-gray-600">
          <ArrowDown height="18" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={8}
          className={
            'bg-white py-1 px-0.5 border-1 border-stroke rounded-1 overflow-auto w-[var(--radix-popper-anchor-width)]'
          }
          position="popper"
        >
          <Select.Viewport>
            <ScrollArea.Root type="auto">
              <ScrollArea.Viewport>
                <Select.Group>
                  {items.map((item, index) => (
                    <Select.Item
                      className={classNames(
                        getTypographyClassNames('body3'),
                        'flex items-center px-2 h-[40px] bg-white text-maim mb-1 cursor-pointer hover:border-transparent outline-none rounded-[3px] last:mb-0',
                        'hover:bg-pink-light',
                        selectItemClassName
                      )}
                      key={index}
                      value={item}
                    >
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </ScrollArea.Viewport>
              <Select.Separator />
            </ScrollArea.Root>
          </Select.Viewport>
          {/*<Select.ScrollDownButton />*/}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export { Dropdown }
