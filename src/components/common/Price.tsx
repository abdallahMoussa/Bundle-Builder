interface PriceProps {
    compareAtPrice?: number
    price: number
    priceSufex?: string
}

const Price = ({ compareAtPrice, price, priceSufex }: PriceProps) => {
    const isFree = price === 0

    return (
        <div className="flex flex-col items-end gap-0 tracking-[0.6px] leading-normal">
            {compareAtPrice ? (
                <span className="text-[16px] -mb-1 text-texts-sale line-through">
                    ${compareAtPrice.toFixed(2)}{priceSufex}
                </span>
            ) : null}

            <span className="text-[16px] text-texts-label/85 font-semibold">
                {isFree ? 'FREE' : `$${price.toFixed(2)}${priceSufex ?? ''}`}
            </span>
        </div>
    )
}

export default Price