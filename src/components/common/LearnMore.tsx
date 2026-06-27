import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'

import { Product } from '../../types'
import { FC } from 'react'

interface LearnMoreProps {
    product: Product
}

const LearnMore: FC<LearnMoreProps> = ({ product }) => {
    const { t } = useTranslation()

    const variantsImages = product.variants
        ?.map((variant) => `<div class="w-16 h-16 sm:w-24 sm:h-24 rounded-md bg-black/5 p-3">
                                <img 
                                src="${variant.image}" 
                                alt="${variant.label}" 
                                class="h-full m-auto"
                            /></div>
                            `).join('') ?? ''

    const handleLearnMore = () => {
        Swal.fire({
            title: t('productDetails'),
            width: 700,
            confirmButtonText: t('close'),
            html: `
                <div class="text-left">
                <div class="flex justify-center gap-3">
                ${variantsImages}
                </div>
                <p class="mt-4 text-sm sm:text-xl py-0">
                    <b>${t('productName')}:</b> 
                </p>
                <h2 class="text-sm sm:text-xl py-0 px-2">
                ${product.name ?? ''}
                </h2>
                <p class="mt-4 text-sm sm:text-xl py-0">
                    <b>${t('description')}:</b> 
                </p>
                <p class="text-sm sm:text-xl py-0 px-2">
                ${product.description ?? ''}
                </p>
                <p class="my-4 text-sm sm:text-xl">
                    <b>${t('price')}:</b> <span class="text-brand-purple mx-2">$${product.price ?? ''}</span> <del class="text-texts-sale">$${product.compareAtPrice}</del>
                </p>

                ${product.variants?.length
                    ? `
                        <p class="my-4 text-sm sm:text-xl">
                         <b>${t('availableVariants')}:</b>
                        </p>

                        ${product.variants
                        .map(
                            (variant) => `
                                <span class="py-1 px-2 text-sm sm:text-xl shadow-sm border border-brand-purple rounded-sm mx-1">
                                ${variant.label}
                                </span>
                            `
                        )
                        .join('')}
                    `
                    : ''
                }
                </div>
            `,
        })
    }

    return (
        <button
            type="button"
            onClick={handleLearnMore}
            className="text-[12px] cursor-pointer hover:saturate-150  font-medium tracking-[0.6px] underline text-brand-purple"
        >
            {t('learnMore')}
        </button>
    )
}

export default LearnMore