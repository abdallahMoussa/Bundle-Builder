
interface PriceProps {
    compareAtPrice?: number
    price: number
}
const Price = ({ compareAtPrice, price }: PriceProps) => {
    return (
        <div className="flex flex-col items-end gap-0 tracking-[0.6px] leading-normal">
            {compareAtPrice ? (
                <span className="text-[16px] -mb-1 text-texts-sale line-through">${compareAtPrice.toFixed(2)}</span>
            ) : null}
            <span className="text-[16px] text-texts-label/85 font-semibold ">${price.toFixed(2)}</span>
        </div>)
}

export default Price