import type { FC } from 'react'

type Props = {
    subtotal: number
    savings: number
    shipping: number
    total: number
}

const OrderSummary: FC<Props> = ({ subtotal, savings, shipping, total }) => {
    return (
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
                <span>Savings</span>
                <span className="text-emerald-600">-${savings.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default OrderSummary
