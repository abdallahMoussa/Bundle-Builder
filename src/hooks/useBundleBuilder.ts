import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { productData } from '../data/products'
import type { Product, ReviewItem, BundleState } from '../types'
import type { AppDispatch, RootState } from '../store'
import {
    decrementQuantity,
    incrementQuantity,
    loadBundle,
    resetBundle,
    setQuantity,
    setSelectedVariant,
} from '../store/slices/bundleSlice'
import { Lang, setActiveStep, setLang, setSaved } from '../store/slices/uiSlice'

import { useLocalStorage } from './useLocalStorage'

export const useBundleBuilder = () => {
    const dispatch = useDispatch<AppDispatch>()

    const bundle = useSelector((state: RootState) => state.bundle)
    const ui = useSelector((state: RootState) => state.ui)

    const { saveValue, getValue, removeValue } = useLocalStorage()

    const increment = useCallback(
        (productId: string, variantId: string) => {
            dispatch(incrementQuantity({ productId, variantId }))
        },
        [dispatch],
    )

    const decrement = useCallback(
        (productId: string, variantId: string) => {
            dispatch(decrementQuantity({ productId, variantId }))
        },
        [dispatch],
    )

    const setVariant = useCallback(
        (productId: string, variantId: string) => {
            dispatch(setSelectedVariant({ productId, variantId }))
        },
        [dispatch],
    )

    const resetCart = useCallback(
        () => {
            dispatch(resetBundle())
            removeValue('bundle-saved')
        },
        [dispatch, removeValue],
    )



    const setQty = useCallback(
        (productId: string, variantId: string, quantity: number) => {
            dispatch(setQuantity({ productId, variantId, quantity }))
        },
        [dispatch],
    )

    const selectStep = useCallback(
        (stepIndex: number) => {
            dispatch(setActiveStep(stepIndex))
        },
        [dispatch],
    )

    const toggleStep = useCallback(
        (stepIndex: number) => {
            dispatch(setActiveStep(ui.activeStep === stepIndex ? -1 : stepIndex))
        },
        [dispatch, ui.activeStep],
    )

    const toggleLang = useCallback(
        () => {
            const lang = ui.lang === 'en' ? 'ar' : 'en' as Lang
            dispatch(setLang(lang))
            saveValue('lang', lang)
        },
        [dispatch, saveValue, ui.lang],
    )

    const nextStep = useCallback(
        (currentStep: number) => {
            dispatch(setActiveStep(Math.min(currentStep + 1, productData.length - 1)))
        },
        [dispatch],
    )

    const getQuantity = useCallback(
        (productId: string, variantId: string) => bundle.selections?.[productId]?.[variantId] ?? 0,
        [bundle.selections],
    )

    const getSelectedVariant = useCallback(
        (productId: string) => bundle.selectedVariants?.[productId] ?? 'default',
        [bundle.selectedVariants],
    )

    const getProductQuantityTotal = useCallback(
        (product: Product) => {
            const variantIds = product.variants?.map((variant) => variant.id) ?? ['default']

            return variantIds.reduce((total, variantId) => total + (bundle.selections?.[product.id]?.[variantId] ?? 0), 0)
        },
        [bundle.selections],
    )

    const getSelectedCountForStep = useCallback(
        (stepId: string) => {
            const step = productData.find((entry) => entry.id === stepId)

            if (!step) {
                return 0
            }

            return step.products.filter((product) => getProductQuantityTotal(product) > 0).length
        },
        [getProductQuantityTotal],
    )

    const loadSavedItems = useCallback(
        () => {
            const saved = getValue<BundleState>('bundle-saved')

            if (saved) {
                dispatch(loadBundle(saved))
            }
        },
        [dispatch, getValue],
    )

    const reviewItems = useMemo<ReviewItem[]>(() => {
        return productData.flatMap((step) =>
            step.products.flatMap((product) => {
                const variantIds = product.variants?.map((variant) => variant.id) ?? ['default']

                return variantIds.flatMap((variantId) => {
                    const quantity = bundle.selections?.[product.id]?.[variantId] ?? 0

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
                        },
                    ]
                })
            }),
        )
    }, [bundle.selections])

    const summary = useMemo(() => {
        const subtotal = reviewItems.reduce((sum, item) => sum + item.totalPrice, 0)

        const originalSubtotal = reviewItems.reduce(
            (sum, item) => sum + (item.compareAtPrice ? item.compareAtPrice * item.quantity : item.price * item.quantity),
            0,
        )

        const shipping = subtotal > 0 ? 9.99 : 0

        return {
            subtotal,
            savings: Math.max(0, originalSubtotal - subtotal),
            shipping,
            total: subtotal + shipping,
        }
    }, [reviewItems])

    const saveSystem = useCallback(() => {
        saveValue('bundle-saved', { ...bundle, ...ui })
        dispatch(setSaved(true))
    }, [bundle, dispatch, saveValue, ui])

    return {
        steps: productData,
        bundle,
        ui,
        loadSavedItems,
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
        resetCart,
        saveSystem,
        toggleLang
    }
}
