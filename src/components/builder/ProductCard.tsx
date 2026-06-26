import { useState, type FC } from 'react'
import QuantityStepper from './QuantityStepper'
import VariantSelector from './VariantSelector'
import type { Product } from '../../types'
import Badge from '../common/Badge'
import { truncate } from '../../utils/helpers'
import LearnMore from '../common/LearnMore'
import Price from '../common/Price'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'

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
    const [isImageLoading, setIsImageLoading] = useState(true)
    const { getQuantity } = useBundleBuilder()
    const variantCounts = (product.variants ?? []).reduce<Record<string, number>>((acc, variant) => {
        acc[variant.id] = getQuantity(product.id, variant.id)
        return acc
    }, {})

    const handlePlanToggle = () => {
        if (product.category !== 'plan') return

        if (quantity > 0) {
            onDecrement()
        } else {
            onIncrement()
        }

    }

    return (
        <div
            onClick={handlePlanToggle}
            className={`rounded-[10px] relative shadow-sm bg-white p-3 pb-1 flex flex-wrap transition ${isSelected ? 'border-2 border-brand-purple/70' : 'border-2 border-transparent'}`}
        >
            <div className="flex flex-col gap-3 justify-start xs-w-1/3 md:w-full m-auto lg:w-1/3">
                {product?.badge ? (
                    <Badge title={product.badge} />
                ) : null}
                <div className="relative flex h-full items-center justify-center overflow-hidden">
                    {(() => {
                        const activeVariant = product.variants?.find(
                            (variant) => variant.id === selectedVariantId,
                        )

                        const imageSrc =
                            activeVariant?.image ??
                            product.variants?.[0]?.image ??
                            product.image

                        return imageSrc ? (
                            <>
                                {isImageLoading && (
                                    <div className="absolute m-3 z-0 inset-0 animate-pulse bg-slate-100" />
                                )}

                                <img
                                    src={imageSrc}
                                    alt={product.name}
                                    onLoad={() => setIsImageLoading(false)}
                                    onError={() => setIsImageLoading(false)}
                                    className={`w-24 m-auto object-cover p-0 xl:p-4 transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'
                                        }`}
                                />
                            </>
                        ) : (
                            <span className="text-3xl">📷</span>
                        )
                    })()}
                </div>
            </div>

            <div className="flex flex-col gap-3 md:w-full lg:w-2/3 xs-m-auto">
                <div className='text-start'>
                    <h3 className="text-[16px] tracking-[0.6px] leading-normal font-semibold text-texts-main">{product.name}</h3>
                    <div className='text-[12px] leading-[130%]'>
                        <p className="mt-1 text-slate-500">{truncate(product.description, product?.category === 'plan' ? 75 : 30)}</p>{product?.category !== 'plan' && <LearnMore />}
                    </div>
                </div>


                <div className="flex flex-wrap items-center gap-3">
                    {product.category !== 'plan' && product?.variants && product?.variants?.length > 0 ? (
                        <VariantSelector
                            variants={product.variants}
                            selectedVariantId={selectedVariantId}
                            onSelect={onSelectVariant}
                            variantCounts={variantCounts}
                        />
                    ) : null}
                </div>

                <div className="flex flex-wrap flex-row-reverse -mt-2 items-center justify-between gap-3">
                    <Price compareAtPrice={product.compareAtPrice} price={product.price} priceSufex={product?.priceSufex} />
                    {product.category !== 'plan' && <QuantityStepper
                        value={quantity}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />}

                </div>
            </div>
        </div>
    )
}

export default ProductCard
