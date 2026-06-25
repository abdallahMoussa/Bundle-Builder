export const iconNameMap: Record<string, string> = {
    Camera: 'cam',
    ChevronUp: 'chevron-up',
    ChevronDown: 'chevron-down',
}

export const iconModules = import.meta.glob('../assets/icons/*.svg', {
    eager: true,
    import: 'default',
}) as Record<string, string>
