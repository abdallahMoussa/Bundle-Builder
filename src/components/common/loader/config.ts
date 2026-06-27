export const basePartClass = 'absolute bg-white'

export const loaderParts = [
    {
        id: 'loader-part1',
        animationClass: 'pulse-1',
        className: '-top-1.5 -left-0.5 w-10.25 h-11.5',
        clipPath: 'polygon(100% 0%, 2% 50%, 100% 100%)',
    },
    {
        id: 'loader-part2',
        animationClass: 'pulse-2',
        className: '-top-1.5 -right-px w-10.25 h-11.5',
        clipPath: 'polygon(0% 1%, 100% 50%, 0% 100%)',
    },
    {
        id: 'loader-part3',
        animationClass: 'pulse-3',
        className: 'bottom-0 -right-px w-10.25 h-17.5',
        clipPath: 'polygon(100% 0%, 100% 67%, 0% 100%, 0% 32%)',
    },
    {
        id: 'loader-part4',
        animationClass: 'pulse-4',
        className: 'bottom-0 -left-0.5 w-10.25 h-17.5',
        clipPath: 'polygon(100% 32%, 100% 100%, 0% 67%, 0% 0%)',
    },
]