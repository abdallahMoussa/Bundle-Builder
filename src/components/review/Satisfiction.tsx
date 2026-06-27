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
            <div className="col-span-3">
                <div className="flex justify-end">
                    <Badge title={t('asLowAs')} className="rounded-[3px] -mx-2 relative mb-2 font-medium text-[12px] tracking-[-1%]" />
                </div>
                <div className="flex justify-end items-end gap-3">
                    <Price reviewing compareAtPrice={savings + FAST_SHIPPING_COAST} className="pb-px" />
                    <Price reviewing price={total} className="scale-130 leading-8 tracking-[-13%]" />
                </div>
            </div>
        </div>
    )
}

export default Satisfiction