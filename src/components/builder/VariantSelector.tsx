import type { FC } from 'react'
import type { Variant } from '../../types'

type Props = {
    variants: Variant[]
    selectedVariantId: string
    onSelect: (variantId: string) => void
}

const VariantSelector: FC<Props> = ({ variants, selectedVariantId, onSelect }) => {
    return (
        <div className="grid grid-cols-3 gap-1.5 ">
            {variants.map((variant) => {
                const isSelected = variant.id === selectedVariantId
                return (
                    <button
                        key={variant.id}
                        type="button"
                        onClick={() => onSelect(variant.id)}
                        className={` cursor-pointer transition duration-120 grid grid-cols-3 items-center gap-1 py-px px-0.27 rounded-xs border-[0.5px] ${isSelected ? 'border-brand-green bg-brand-green/4 ' : 'border-borders-silver'
                            }`}
                    >
                        <img
                            src={variant.image}
                            alt={variant.color}
                            className=" grid-cols-2"
                        />
                        <span className='text-texts-main text-[10px]'>{variant.label}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default VariantSelector
