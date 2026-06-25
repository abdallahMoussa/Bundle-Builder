import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productData } from '../data/products'
import type { Product, ReviewItem } from '../types'
import type { AppDispatch, RootState } from '../store'
import {
    decrementQuantity,
    incrementQuantity,
    setQuantity,
    setSelectedVariant,
} from '../store/slices/bundleSlice'
import { setActiveStep, setSaved } from '../store/slices/uiSlice'

export const useBundleBuilder = () => {
    const dispatch = useDispatch<AppDispatch>()
    const bundle = useSelector((state: RootState) => state.bundle)
    const ui = useSelector((state: RootState) => state.ui)

    const increment = (productId: string, variantId: string) => {
        dispatch(incrementQuantity({ productId, variantId }))
    }

    const decrement = (productId: string, variantId: string) => {
        dispatch(decrementQuantity({ productId, variantId }))
    }

    const setVariant = (productId: string, variantId: string) => {
        dispatch(setSelectedVariant({ productId, variantId }))
    }

    const setQty = (productId: string, variantId: string, quantity: number) => {
        dispatch(setQuantity({ productId, variantId, quantity }))
    }

    const selectStep = (stepIndex: number) => {
        dispatch(setActiveStep(stepIndex))
    }

    const toggleStep = (stepIndex: number) => {
        dispatch(setActiveStep(ui.activeStep === stepIndex ? -1 : stepIndex))
    }

    const nextStep = (currentStep: number) => {
        dispatch(setActiveStep(Math.min(currentStep + 1, productData.length - 1)))
    }

    const getQuantity = (productId: string, variantId: string) => {
        return bundle.selections[productId]?.[variantId] ?? 0
    }

    const getSelectedVariant = (productId: string) => {
        return bundle.selectedVariants[productId] ?? 'default'
    }

    const getProductQuantityTotal = (product: Product) => {
        const variantIds = product.variants?.map((variant) => variant.id) ?? ['default']
        return variantIds.reduce((total, variantId) => total + getQuantity(product.id, variantId), 0)
    }

    const getSelectedCountForStep = (stepId: string) => {
        const step = productData.find((entry) => entry.id === stepId)
        if (!step) {
            return 0
        }

        return step.products.filter((product) => getProductQuantityTotal(product) > 0).length
    }

    const reviewItems = useMemo<ReviewItem[]>(() => {
        return productData.flatMap((step) =>
            step.products.flatMap((product) => {
                const variantIds = product.variants?.map((variant) => variant.id) ?? ['default']
                return variantIds.flatMap((variantId) => {
                    const quantity = getQuantity(product.id, variantId)
                    if (quantity <= 0) {
                        return []
                    }

                    const variant = product.variants?.find((entry) => entry.id === variantId)

                    return [
                        {
                            productId: product.id,
                            productName: product.name,
                            variantId,
                            variantLabel: variant?.label ?? 'Standard',
                            quantity,
                            price: product.price,
                            compareAtPrice: product.compareAtPrice,
                            image: variant?.image,
                            category: product.category,
                            totalPrice: product.price * quantity,
                        } satisfies ReviewItem,
                    ]
                })
            }),
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bundle.selections])

    const summary = useMemo(() => {
        const subtotal = reviewItems.reduce((sum, item) => sum + item.totalPrice, 0)
        const originalSubtotal = reviewItems.reduce((sum, item) => {
            return sum + (item.compareAtPrice ? item.compareAtPrice * item.quantity : item.price * item.quantity)
        }, 0)

        return {
            subtotal,
            savings: Math.max(0, originalSubtotal - subtotal),
            shipping: subtotal > 0 ? 9.99 : 0,
            total: subtotal + (subtotal > 0 ? 9.99 : 0),
        }
    }, [reviewItems])

    return {
        steps: productData,
        bundle,
        ui,
        increment,
        decrement,
        setVariant,
        setQty,
        selectStep,
        toggleStep,
        nextStep,
        getQuantity,
        getSelectedVariant,
        getProductQuantityTotal,
        getSelectedCountForStep,
        reviewItems,
        summary,
        saveSystem: () => dispatch(setSaved(true)),
    }
}
