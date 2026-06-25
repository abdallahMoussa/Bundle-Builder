import type { FC } from 'react'
import type { ReviewItem as ReviewItemType } from '../../types'

type Props = {
    item: ReviewItemType
}

const ReviewItem: FC<Props> = ({ item }) => {
    return (
        <div className="flex items-center justify-between gap-3  px-3 py-3">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white text-lg">
                    📷
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-900">{item.productName}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">x{item.quantity}</p>
                <p className="text-xs text-slate-500">${item.totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ReviewItem
