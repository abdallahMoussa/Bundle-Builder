import { useState } from 'react'
import { Product } from '../../types'
import Badge from '../common/Badge'
import { useTranslation } from 'react-i18next'
import { savingsPercentage } from '../../utils/helpers'

interface ProductImageProps {
    product: Product
    selectedVariantId: string
    visible: boolean
}
const ProductImage = ({ product, selectedVariantId, visible }: ProductImageProps) => {
    const { t } = useTranslation()
    const [isImageLoading, setIsImageLoading] = useState(true)
    const activeVariant = product.variants?.find((variant) => variant.id === selectedVariantId)

    const imageSrc = activeVariant?.image ?? product.variants?.[0]?.image ?? product.image
    return (
        <div
            className={`
                    xs-w-1/3 md:w-full lg:w-1/3
                    transition-all duration-700 delay-100 
                    ${visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
                  `}
        >
            {product.compareAtPrice && <Badge title={`${t('save')} ${savingsPercentage(product.price, product.compareAtPrice)}%`} />}

            <div className='relative flex min-h-full items-center justify-center overflow-hidden'>
                {isImageLoading && (
                    <div className='absolute inset-0 top-0 m-3 h-20 animate-pulse rounded-lg bg-brand-purple' />
                )}

                <img
                    src={imageSrc}
                    alt={product.name}
                    onLoad={() => setIsImageLoading(false)}
                    onError={() => setIsImageLoading(false)}
                    className={`
                      w-24 m-auto object-cover p-0 xl:p-4
                      transition-all duration-700
                      ${isImageLoading ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
                      `}
                />
            </div>
        </div>)
}

export default ProductImage