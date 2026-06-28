import { useTranslation } from "react-i18next"
import { FAST_SHIPPING_COAST } from "../../utils/constants"
import Badge from "../common/Badge"
import Price from "../common/Price"
import imgSrc from '@/assets/images/satisfcation-badge.png'

interface SatisfictionProps {
    total: number
    savings: number
}
const Satisfiction = ({ total, savings }: SatisfictionProps) => {
    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-4 items-center gap-3">
            <div className="col-span-1">
                <img src={imgSrc} alt="Satisfaction badge" className="w-full" />
            </div>
            <div className="hidden sm:block lg:hidden col-span-3 tracking-[0.6px] leading-[110%] text-sm">
                <b>{t('satisfictionHeader')}</b>
                <p className="pt-3">{t('satisfictionDescription')}</p>
            </div>
            <div className="col-span-3 sm:col-span-4 lg:col-span-3 sm:grid sm:grid-cols-2 lg:block items-center">
                <div className="flex justify-end sm:justify-start lg:justify-end">
                    <Badge title={t('asLowAs')} className="rounded-[3px] relative font-medium text-[12px] tracking-[-1%] sm:right-0 lg:-right-2 -right-2" />
                </div>
                <div className="flex justify-end items-end gap-3">
                    <Price reviewing compareAtPrice={savings + FAST_SHIPPING_COAST} className="pb-px text-semibold" />
                    <Price reviewing price={total} className="scale-130 leading-8 tracking-[-13%] text-semibold" />
                </div>
            </div>
        </div>
    )
}

export default Satisfiction