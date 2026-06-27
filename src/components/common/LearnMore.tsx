import { FC } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useTranslation } from 'react-i18next'

import { Product } from '../../types'
import ProductDetailsContent from '../builder/ProductDetailsCntent'

interface LearnMoreProps {
    product: Product
}

const MySwal = withReactContent(Swal)

const LearnMore: FC<LearnMoreProps> = ({ product }) => {
    const { t } = useTranslation()

    const handleLearnMore = async () => {
        MySwal.fire({
            title: t('productDetails'),
            width: 700,
            confirmButtonText: t('close'),
            html: (
                <ProductDetailsContent
                    product={product}
                    t={t}
                />
            ),
        })
    }

    return (
        <button
            type="button"
            onClick={handleLearnMore}
            className="cursor-pointer text-[12px] font-medium tracking-[0.6px] text-brand-purple underline hover:saturate-150"
        >
            {t('learnMore')}
        </button>
    )
}

export default LearnMore