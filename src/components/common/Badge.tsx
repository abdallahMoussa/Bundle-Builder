

interface BadgeProps {
    title: string
}
const Badge = ({ title }: BadgeProps) => {
    return (
        <span className="inline-flex w-fit absolute top-0 left-0 rounded-full leading-[100%] text-white px-1.5 py-1 text-[12px] font-semibold bg-brand-purple">
            {title}
        </span>)
}

export default Badge