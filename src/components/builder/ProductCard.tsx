import type { FC } from 'react'
import QuantityStepper from './QuantityStepper'
import VariantSelector from './VariantSelector'
import type { Product } from '../../types'
import Badge from '../common/Badge'
import { truncate } from '../../utils/helpers'
import LearnMore from '../common/LearnMore'
import Price from '../common/Price'

type Props = {
    product: Product
    quantity: number
    selectedVariantId: string
    onIncrement: () => void
    onDecrement: () => void
    onQuantityChange: (value: number) => void
    onSelectVariant: (variantId: string) => void
}

const ProductCard: FC<Props> = ({
    product,
    quantity,
    selectedVariantId,
    onIncrement,
    onDecrement,
    onSelectVariant,
}) => {
    const isSelected = quantity > 0

    return (
        <div
            className={`rounded-[10px] shadow-sm bg-white p-3 flex transition ${isSelected ? 'border-2 border-brand-purple/70' : 'border-2 border-transparent'}`}
        >
            <div className="flex flex-col gap-3 relative lg:w-full xl:w-1/3">
                {product?.badge ? (
                    <Badge title={product.badge} />
                ) : null}
                <div className="flex h-full items-center justify-center overflow-hidden">
                    {product.variants?.[0]?.image ? (
                        <img
                            src={product.variants[0].image}
                            alt={product.name}
                            className="h-full w-full object-cover p-2"
                        />
                    ) : (
                        <span className="text-3xl">📷</span>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-3 lg:w-full xl:w-2/3">
                <div className='text-start'>
                    <h3 className="text-[16px] tracking-[0.6px] leading-normal font-semibold text-texts-main">{product.name}</h3>
                    <div className='text-[12px] leading-[130%]'>
                        <p className="mt-1 text-slate-500">{truncate(product.description)}</p><LearnMore />
                    </div>
                </div>


                <div className="flex flex-wrap items-center gap-3">
                    {product.variants && product.variants.length > 1 ? (
                        <VariantSelector
                            variants={product.variants}
                            selectedVariantId={selectedVariantId}
                            onSelect={onSelectVariant}
                        />
                    ) : null}
                </div>

                <div className="flex flex-wrap -mt-2 items-center justify-between gap-3">
                    <QuantityStepper
                        value={quantity}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />

                    <Price compareAtPrice={product.compareAtPrice} price={product.price} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
