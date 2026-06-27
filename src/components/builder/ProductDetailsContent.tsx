import { Product } from '../../types'

interface ProductDetailsContentProps {
    product: Product
    t: (key: string) => string
}

const ProductDetailsContent = ({
    product,
    t,
}: ProductDetailsContentProps) => {

    return (
        <div className="text-left">

            {product?.variants && product.variants?.length > 0 && (
                <div className="mb-6 flex justify-center gap-3 overflow-x-auto">
                    {product.variants.map((variant, index) => (
                        <button
                            key={variant.id ?? index}
                            className="h-16 w-16 shrink-0 rounded border border-gray-300 p-1"
                        >
                            <img
                                src={variant.image}
                                alt={`variant-${index}`}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            <p className="mt-4 text-sm sm:text-xl">
                <b>{t('productName')}:</b>
            </p>

            <h2 className="px-2 text-sm sm:text-xl">{product.name}</h2>

            <p className="mt-4 text-sm sm:text-xl">
                <b>{t('description')}:</b>
            </p>

            <p className="px-2 text-sm sm:text-xl">
                {product.description}
            </p>

            <p className="my-4 text-sm sm:text-xl">
                <b>{t('price')}:</b>
                <span className="mx-2 text-brand-purple">
                    ${product.price}
                </span>

                {product.compareAtPrice && (
                    <del className="text-texts-sale">
                        ${product.compareAtPrice}
                    </del>
                )}
            </p>

            <b className='mt-4'>{t('availableVariants')}:</b>
            <p className="mt-1 flex gap-2 text-sm sm:text-lg">
                {product.variants?.map((variant, i) => (
                    <span key={i} className="rounded-sm border px-2 py-0">
                        {variant.label}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default ProductDetailsContent