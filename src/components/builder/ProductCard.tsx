import { useEffect, useState, type FC } from 'react'

import type { Product } from '../../types'
import { truncate } from '../../utils/helpers'
import LearnMore from '../common/LearnMore'
import Price from '../common/Price'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'

import VariantSelector from './VariantSelector'
import QuantityStepper from './QuantityStepper'
import ProductImage from './ProductImage'

type Props = {
    product: Product
    quantity: number
    index: number
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
    index,
}) => {
    const isSelected = quantity > 0

    const [visible, setVisible] = useState(false)

    const { getQuantity } = useBundleBuilder()

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, index * 120)

        return () => clearTimeout(timer)
    }, [index])

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
            className={`
                  relative h-full flex flex-wrap rounded-[10px] bg-white p-3 pb-1 shadow-sm hover:z-100
                  transition-all duration-700 ease-out
                  ${visible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                  ${isSelected ? 'border-2 border-brand-purple/70' : 'border-2 border-transparent'}
                `}
        >
            <ProductImage product={product} selectedVariantId={selectedVariantId} visible={visible} />

            <div
                className={`
                    flex flex-col gap-3 md:w-full lg:w-2/3 xs-m-auto
                    transition-all duration-700 delay-200
                    ${visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
                    `}
            >
                <div
                    className={`
                        text-start transition-opacity duration-500 delay-300
                        ${visible ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <h3 className='text-[16px] font-semibold leading-normal tracking-[0.6px] text-texts-main'>{product.name}</h3>

                    <div className='text-[12px] leading-[130%]'>
                        <p className='mt-1 text-slate-500'>
                            {truncate(product.description, product.category === 'plan' ? 75 : 30)}
                        </p>

                        {product.category !== 'plan' && <LearnMore product={product} />}
                    </div>
                </div>

                {product.category !== 'plan' && product.variants && product.variants?.length > 0 && (
                    <div
                        className={`
                        flex flex-wrap items-center gap-3
                        transition-opacity duration-500 delay-400
                        ${visible ? 'opacity-100' : 'opacity-0'}
                    `}
                    >
                        <VariantSelector
                            variants={product?.variants || []}
                            selectedVariantId={selectedVariantId}
                            onSelect={onSelectVariant}
                            variantCounts={variantCounts}
                        />
                    </div>
                )}

                <div
                    className={`
                      flex flex-row-reverse items-center justify-between -mt-2
                      transition-opacity duration-500 delay-500
                      ${visible ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                    <Price
                        className='sm:text-sm'
                        compareAtPrice={product.compareAtPrice}
                        price={product.price}
                        priceSufex={product.priceSufex}
                    />

                    {product.category !== 'plan' && (
                        <QuantityStepper value={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
