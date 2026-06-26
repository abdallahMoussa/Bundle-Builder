

interface BadgeProps {
    title: string
}
const Badge = ({ title }: BadgeProps) => {
    return (
        <span className="inline-flex w-fit absolute z-10 top-2 left-2 rounded-full leading-[100%] text-white px-1.5 py-1 text-[12px] font-semibold bg-brand-purple">
            {title}
        </span>)
}

export default Badge