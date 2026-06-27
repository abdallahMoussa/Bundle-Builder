import { twMerge } from 'tailwind-merge'
interface BadgeProps {
    title: string
    className?: string
}

const Badge = ({ title, className = '' }: BadgeProps) => {
    return (
        <span
            className={twMerge('inline-flex w-fit absolute z-10 top-2 left-2 leading-[100%] text-white px-1.5 py-px text-[12px] font-semibold bg-brand-purple rounded-full', className)}
        >
            {title}
        </span>
    )
}

export default Badge


