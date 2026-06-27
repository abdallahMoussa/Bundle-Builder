import { Product } from "../../types"

interface ProductDetailsContentProps {
    product: Product
    t: (key: string) => string
}

const ProductDetailsContent = ({
    product,
    t,
}: ProductDetailsContentProps) => (
    <div className="text-left">
        <div className="flex justify-center gap-3">
            {product.variants?.map((variant) => (
                <div
                    key={variant.label}
                    className="h-16 w-16 rounded-md bg-black/5 p-3 sm:h-24 sm:w-24"
                >
                    <img
                        src={variant.image}
                        alt={variant.label}
                        className="m-auto h-full"
                    />
                </div>
            ))}
        </div>

        <p className="mt-4 py-0 text-sm sm:text-xl">
            <b>{t('productName')}:</b>
        </p>

        <h2 className="px-2 py-0 text-sm sm:text-xl">
            {product.name}
        </h2>

        <p className="mt-4 py-0 text-sm sm:text-xl">
            <b>{t('description')}:</b>
        </p>

        <p className="px-2 py-0 text-sm sm:text-xl">
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

        {!!product.variants?.length && (
            <>
                <p className="my-4 text-sm sm:text-xl">
                    <b>{t('availableVariants')}:</b>
                </p>

                <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                        <span
                            key={variant.label}
                            className="rounded-sm border border-brand-purple px-2 py-1 text-sm shadow-sm sm:text-xl"
                        >
                            {variant.label}
                        </span>
                    ))}
                </div>
            </>
        )}
    </div>
)

export default ProductDetailsContent 