import type { FC } from 'react'

type Props = {
    value: number
    onIncrement: () => void
    onDecrement: () => void
    disabled?: boolean
    className?: string
}

const buttonClass =
    'flex h-5 w-5 items-center justify-center rounded-sm text-borders-grey border-2 bg-borders-light-grey border-borders-light-grey text-lg font-bold cursor-pointer disabled:cursor-default disabled:bg-transparent disabled:text-borders-light-grey'

const QuantityStepper: FC<Props> = ({
    value,
    onIncrement,
    onDecrement,
    disabled = false,
    className = ''
}) => {
    return (
        <div className="flex items-center gap-1 mt-1">
            <button
                type="button"
                onClick={onDecrement}
                disabled={disabled || value <= 0}
                className={`${buttonClass} ${className}`}
            >
                −
            </button>

            <span>{value}</span>

            <button
                type="button"
                onClick={onIncrement}
                disabled={disabled}
                className={`${buttonClass} ${className}`}
            >
                +
            </button>
        </div>
    )
}

export default QuantityStepper