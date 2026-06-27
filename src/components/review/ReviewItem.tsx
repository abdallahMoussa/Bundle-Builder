import { useEffect, useState, type FC } from 'react'
import type { ReviewItem as ReviewItemType } from '../../types'
import Price from '../common/Price'
import QuantityStepper from '../builder/QuantityStepper'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'

type Props = {
    item: ReviewItemType
    index: number
}

const ReviewItem: FC<Props> = ({ item, index }) => {
    const [visible, setVisible] = useState(false)
    const [isImageLoading, setIsImageLoading] = useState(true)

    const { increment, decrement } = useBundleBuilder()

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, index * 100)

        return () => clearTimeout(timer)
    }, [index])

    const isPlanCategory = item.category === 'plan'

    return (
        <div
            className={`
        flex items-center justify-between gap-3
        transition-all duration-500 ease-out
        ${visible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-3 opacity-0'
                }
      `}
        >
            <div className="flex items-center gap-3">
                <div
                    className={`
            relative h-10 w-10 min-w-10 overflow-hidden rounded-[5px]
            ${isPlanCategory ? 'p-1' : 'bg-white p-2'}
          `}
                >
                    {item.image ? (
                        <>
                            {isImageLoading && (
                                <div className="absolute inset-0 animate-pulse rounded-[5px] bg-slate-200" />
                            )}

                            <img
                                src={item.image}
                                alt={item.productName}
                                onLoad={() => setIsImageLoading(false)}
                                onError={() => setIsImageLoading(false)}
                                className={`
                  h-full w-full object-contain
                  transition-all duration-300
                  ${isImageLoading
                                        ? 'scale-95 opacity-0'
                                        : 'scale-100 opacity-100'
                                    }
                `}
                            />
                        </>
                    ) : (
                        <span className="text-lg">📷</span>
                    )}
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-900">
                        {item.productName}
                    </p>

                    {!isPlanCategory && (
                        <p className="text-xs text-slate-500">
                            {item.variantLabel}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex gap-3 text-right">
                {!isPlanCategory && (
                    <QuantityStepper
                        className="bg-white"
                        value={item.quantity}
                        onIncrement={() =>
                            increment(item.productId, item.variantId)
                        }
                        onDecrement={() =>
                            decrement(item.productId, item.variantId)
                        }
                    />
                )}

                <Price
                    reviewing
                    price={item.price}
                    compareAtPrice={item.compareAtPrice}
                    priceSufex={item.priceSufex}
                />
            </div>
        </div>
    )
}

export default ReviewItem