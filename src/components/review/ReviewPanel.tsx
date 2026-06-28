import { useTranslation } from 'react-i18next'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'
import ReviewItemComponent from './ReviewItem'
import Divider from '../common/Divider'
import { useEffect, useMemo } from 'react'
import { ReviewItem } from '../../types'
import FastShipping from './FastShipping'
import Satisfiction from './Satisfiction'
import Swal from 'sweetalert2'
import { FAST_SHIPPING_COAST } from '../../utils/constants'

const ReviewPanel = () => {
    const { t } = useTranslation()
    const { reviewItems, saveSystem, summary, loadSavedItems, resetCart } = useBundleBuilder()

    useEffect(() => {
        loadSavedItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkoutHandler = () => {
        Swal.fire({
            title: t('orderPlacedSuccessfully'),
            icon: 'success',
            draggable: true,
            confirmButtonText: t('ok')
        }).then(() => {
            resetCart()
        })
    }

    const saveSystemHandler = () => {
        Swal.fire({
            title: t('orderSavedSuccessfully'),
            text: t('orderSavedDescription'),
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: t('leave'),
            cancelButtonText: t('stay'),
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://www.linkedin.com/in/abdallah-moussa/'
            }
            saveSystem()
        })
    }

    const groupedItems = useMemo(() => {
        return reviewItems.reduce<Record<string, ReviewItem[]>>((groups, item) => {
            const category = item.category
            if (!groups[category]) {
                groups[category] = []
            }
            groups[category].push(item)
            return groups
        }, {})
    }, [reviewItems])

    const categoryOrder = ['cameras', 'sensors', 'accessories', 'plan']
    const isCheckoutDisabled = reviewItems.length === 0


    return (
        <aside className="w-full self-start text-start rounded-[10px] bg-brand-baby-blue p-3.75 lg:sticky lg:top-4 lg:w-1/3">
            <p className="text-sm font-medium text-[12px] uppercase tracking-[1.6px] text-texts-label">{t('review')}</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-5'>
                <div>
                    <div className="flex flex-col gap-1.25 items-start justify-between p-1.25 pt-4">
                        <h2 className="text-[22px] font-semibold text-slate-900">{t('reviewTitle')}</h2>
                        <p className="text-sm font-medium leading-[130%] tracking-[0.6px] text-texts-description/75">{t('reviewDescription')}</p>
                    </div>
                    <Divider className='my-2' />

                    <div className="mt-5 space-y-6">
                        {Object.keys(groupedItems).length === 0 ? (
                            <p className="text-sm text-texts-description/50 text-center py-4">
                                {t('noItems', 'No items in your cart')}
                            </p>
                        ) : (
                            <>
                                {categoryOrder.map((category) => {
                                    const items = groupedItems[category]
                                    if (!items || items.length === 0) return null

                                    return (
                                        <div key={category} className="space-y-3">
                                            <h3 className="text-[12px] font-regular text-texts-title uppercase tracking-wide">
                                                {t(category)}
                                            </h3>
                                            {items.map((item, index) => (
                                                <ReviewItemComponent index={index} key={`${item.productId}-${item.variantId}`} item={item} />
                                            ))}
                                            <Divider />
                                        </div>
                                    )
                                })}
                                <FastShipping />
                            </>
                        )}
                    </div>
                </div>
                {!isCheckoutDisabled && <div className="lg:mt-5 sm:mt-1 mt-5">
                    <Satisfiction total={summary.total} savings={summary.savings} />
                    <div className='text-center'>
                        <span className='text-sm tracking-[-0.6px] text-semibold text-brand-green'>{t('congrats', {
                            value: `${(summary.savings + FAST_SHIPPING_COAST).toFixed(2)}$`
                        })}</span>
                    </div>
                    <button
                        type="button"
                        disabled={reviewItems.length === 0}
                        onClick={checkoutHandler}
                        className="w-full rounded-sm bg-brand-purple px-4 py-3 text-[17px] font-semibold text-white hover:saturate-150 transition duration-150 cursor-pointer active:scale-[0.99]"
                    >
                        {t('checkout')}
                    </button>
                    <div className='text-center'>
                        <span onClick={saveSystemHandler} className='underline cursor-pointer hover:text-brand-purple transition-all duration-150 active:saturate-150 select-none text-texts-label text-sm text-regular italic'>{t('saveLater')}</span>
                    </div>

                </div>}
            </div>



        </aside>
    )
}

export default ReviewPanel