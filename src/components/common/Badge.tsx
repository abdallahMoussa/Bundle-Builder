import { twMerge } from 'tailwind-merge'
interface BadgeProps {
    title: string
    className?: string
}

const Badge = ({ title, className = 'top-0 [html:lang(en)_&]:left-0 [html:lang(ar)_&]:right-0' }: BadgeProps) => {
    return (
        <span
            className={twMerge('inline-flex w-fit absolute z-10 leading-[100%] text-white px-1.5 py-px text-[12px] font-semibold bg-brand-purple rounded-full', className)}
        >
            {title}
        </span>
    )
}

export default Badge


