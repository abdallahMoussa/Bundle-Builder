import type { FC } from 'react'
import { iconModules, iconNameMap } from '../../utils/icon-mapper'

type IconProps = {
    name: string
    className?: string
    size?: number
    alt?: string
}

const Icon: FC<IconProps> = ({ name, className, size = 24, alt = '' }) => {
    const resolvedName = iconNameMap[name] ?? name
    const normalizedName = resolvedName.endsWith('.svg') ? resolvedName : `${resolvedName}.svg`
    const iconPath = iconModules[`../assets/icons/${normalizedName}`]

    if (!iconPath) {
        return null
    }

    return <img src={iconPath} alt={alt} width={size} height={size} className={className} />
}

export default Icon
