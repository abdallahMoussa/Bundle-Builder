import type { ButtonHTMLAttributes, FC } from 'react'

type Props = {
    label?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({
    label,
    className = '',
    type = 'button',
    ...props
}) => {
    return (
        <button
            type={type}
            className={`rounded-[7px] cursor-pointer border border-brand-purple text-brand-purple  px-6 py-2.25 text-lg font-semibold  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button