import { useTranslation } from "react-i18next"

interface PriceProps {
    compareAtPrice?: number
    price?: number
    priceSufex?: string
    reviewing?: boolean
    className?: string
}

const Price = ({
    compareAtPrice,
    price,
    priceSufex = '',
    reviewing = false,
    className = ''
}: PriceProps) => {

    const { t } = useTranslation()
    const isFree = price === 0

    const comparePriceClass = reviewing
        ? 'text-texts-label/85'
        : 'text-texts-sale'

    const priceClass = reviewing
        ? 'text-brand-purple'
        : 'text-texts-label/85'

    return (
        <div className={`flex flex-col items-end gap-0 leading-normal tracking-[0.6px] lg:text-[16px] ${className}`}>
            {compareAtPrice && (
                <span
                    className={`-mb-1 line-through ${comparePriceClass}`}
                >
                    ${compareAtPrice.toFixed(2)}
                    {priceSufex}
                </span>
            )}

            {price !== undefined && <span className={`font-semibold uppercase ${priceClass}`}>
                {isFree ? t('free') : `$${price?.toFixed(2)}${priceSufex}`}
            </span>}
        </div>
    )
}

export default Price