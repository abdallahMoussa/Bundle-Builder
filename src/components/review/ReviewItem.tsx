import type { FC } from 'react'
import type { ReviewItem as ReviewItemType } from '../../types'
import Price from '../common/Price'
import QuantityStepper from '../builder/QuantityStepper'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'

type Props = {
    item: ReviewItemType
}

const ReviewItem: FC<Props> = ({ item }) => {
    const {
        increment,
        decrement,
    } = useBundleBuilder()
    const isPlanCategory = item.category === 'plan'
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
                <div className={`h-10 w-10 min-w-10 items-center justify-center overflow-hidden rounded-[5px] ${isPlanCategory ? 'p-1' : 'bg-white p-2 '}`}>
                    {item.image ? (
                        <img src={item.image} alt={item.productName} className="w-full" />
                    ) : (
                        <span className="text-lg">📷</span>
                    )}
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-900">{item.productName}</p>
                    {item.category !== 'plan' && <p className="text-xs text-slate-500">{item.variantLabel}</p>}
                </div>
            </div>
            <div className="text-right flex gap-3">
                {!isPlanCategory && <QuantityStepper
                    className='bg-white'
                    value={item.quantity}
                    onIncrement={() => {
                        increment(item.productId, item.variantId)
                    }}
                    onDecrement={() => {
                        decrement(item.productId, item.variantId)
                    }} />}

                <Price reviewing price={item.price} compareAtPrice={item.compareAtPrice} priceSufex={item.priceSufex} />
            </div>
        </div>
    )
}

export default ReviewItem
