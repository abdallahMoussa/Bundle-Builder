import Price from '../common/Price'

const FastShipping = () => {

    const item = {
        name: 'Fast Shipping',
        price: 0,
        compareAtPrice: 5.99, image: '/src/assets/icons/shipping.svg',

    }
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
                <div className={`h-10 w-10 min-w-10 items-center justify-center overflow-hidden rounded-[5px] bg-white p-1`}>
                    <img src={item.image} alt={item.name} className="w-full" />

                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                </div>
            </div>
            <div className="text-right flex gap-3">

                <Price reviewing price={item.price} compareAtPrice={item.compareAtPrice} />
            </div>
        </div>
    )
}

export default FastShipping