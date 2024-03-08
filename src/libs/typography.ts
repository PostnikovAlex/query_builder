import classNames from "classnames";

export type TypographyVariant = 'h1' | 'h2' | 'body1' | 'body2' | 'body2-medium' | 'body3' | 'body4' | 'body5' | 'btn-small' | 'order-status' | 'text-3xs'
export const getTypographyClassNames = (variant?: TypographyVariant): string => {
    let result: classNames.Argument = []

    switch (variant) {
        case 'h1':
            result = ['text-h1', 'font-medium', 'leading-h1']
            break
        case 'h2':
            result = ['text-h2', 'font-medium', 'leading-h2']
            break
        case 'body2':
            result =  ['text-body2', 'font-regular', 'leading-body2']
            break
        case 'body2-medium':
            result =  ['text-body2', 'font-medium', 'leading-body2']
            break
        default:
            result =  ['text-body1', 'font-regular', 'leading-body1']
    }

    return classNames(result)
}