import type { FC } from 'react'
import type { Variant } from '../../types'

type Props = {
    variants: Variant[]
    selectedVariantId: string
    onSelect: (variantId: string) => void
    variantCounts?: Record<string, number>
}

const VariantSelector: FC<Props> = ({ variants, selectedVariantId, onSelect, variantCounts = {} }) => {
    return (
        <div className="flex flex-wrap gap-1.5">
            {variants.map((variant) => {
                const isSelected = variant.id === selectedVariantId
                return (
                    <button
                        key={variant.id}
                        type="button"
                        onClick={() => onSelect(variant.id)}
                        className={`cursor-pointer transition duration-120 grid grid-cols-[auto_1fr_auto] items-center gap-1 rounded-xs border-[0.5px] px-1 py-1 ${isSelected ? 'border-brand-green bg-brand-green/4' : 'border-borders-silver'}`}
                    >
                        <img
                            src={variant.image}
                            alt={variant.color}
                            className="h-4 w-4 rounded-full object-cover"
                        />
                        <span className='text-[10px] text-texts-main'>{variant.label}</span>
                        {variantCounts[variant.id] > 0 && variants?.length > 1 &&
                            <span className='rounded-full transition duration-150 bg-brand-green/30 px-1.5 py-0 text-[10px] font-semibold text-slate-700 shadow-sm'>
                                {variantCounts[variant.id]}
                            </span>}
                    </button>
                )
            })}
        </div>
    )
}

export default VariantSelector
