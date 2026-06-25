type DividerProps = {
    direction?: 'horizontal' | 'vertical'
    thickness?: string
    color?: string
    className?: string
}

const Divider = ({
    direction = 'horizontal',
    thickness = '1px',
    color = 'border-borders-main',
    className = '',
}: DividerProps) => {
    if (direction === 'vertical') {
        return <div className={`w-px self-stretch bg-current ${color} ${className}`.trim()} style={{ height: '100%', width: thickness }} />
    }

    return <hr className={`w-full border-0 ${color} ${className}`.trim()} style={{ borderTopWidth: thickness }} />
}

export default Divider