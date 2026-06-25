import { useTranslation } from 'react-i18next'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'
import OrderSummary from './OrderSummary'
import ReviewItem from './ReviewItem'
import Divider from '../common/Divider'

const ReviewPanel = () => {
    const { t } = useTranslation()
    const { reviewItems, summary } = useBundleBuilder()

    return (
        <aside className="w-full text-start rounded-[10px] bg-brand-baby-blue p-3.75 lg:sticky lg:top-4 lg:w-1/3">
            <p className="text-sm font-medium text-[12px] uppercase tracking-[1.6px] text-texts-label">{t('review')}</p>
            <div className="flex flex-col gap-1.25 items-start justify-between p-1.25 pt-5">
                <h2 className="text-[22px] font-semibold text-slate-900">{t('reviewTitle')}</h2>
                <p className="text-sm font-medium leading-[130%] tracking-[0.6px] text-texts-description/75">{t('reviewDescription')}</p>
            </div>
            <Divider className='my-2' />

            <div className="mt-5 space-y-3">
                {reviewItems.map((item) => (
                    <ReviewItem key={`${item.productId}-${item.variantId}`} item={item} />
                ))}
            </div>

            <div className="mt-5">
                <OrderSummary
                    subtotal={summary.subtotal}
                    savings={summary.savings}
                    shipping={summary.shipping}
                    total={summary.total}
                />
            </div>

            <button
                type="button"
                className="mt-5 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
                {t('checkout')}
            </button>
        </aside>
    )
}

export default ReviewPanel