import { useTranslation } from 'react-i18next'
import { useBundleBuilder } from '../../hooks/useBundleBuilder'
import AccordionStep from './AccordionStep'
import ProductCard from './ProductCard'

const Builder = () => {
    const { t } = useTranslation()
    const {
        steps,
        ui,
        toggleStep,
        nextStep,
        getSelectedVariant,
        getProductQuantityTotal,
        getSelectedCountForStep,
        increment,
        decrement,
        setQty,
        setVariant,
    } = useBundleBuilder()

    const allStepsClosed = ui.activeStep === -1

    return (
        <section className={`w-full self-start flex flex-col gap-1.5 lg:w-2/3 ${allStepsClosed ? 'bg-brand-baby-blue rounded-[10px]' : ''}`}>

            {steps.map((step, index) => {
                const isOpen = ui.activeStep === index
                const selectedCount = getSelectedCountForStep(step.id)

                return (
                    <AccordionStep
                        key={step.id}
                        title={step.title}
                        nextTitle={steps[index + 1]?.title}
                        stepLabel={`${t('step')} ${index + 1}`}
                        isOpen={isOpen}
                        selectedCount={selectedCount}
                        onToggle={() => toggleStep(index)}
                        onNext={() => nextStep(index)}
                        lastStep={index === steps.length - 1}
                    >
                        {isOpen && step.products.map((product, index) => {
                            const quantity = getProductQuantityTotal(product)
                            const selectedVariantId = getSelectedVariant(product.id)

                            return (
                                <ProductCard
                                    key={product.id}
                                    index={index}
                                    product={product}
                                    quantity={quantity}
                                    selectedVariantId={selectedVariantId}
                                    onIncrement={() => {
                                        const variantId = product.variants?.find((variant) => variant.id === selectedVariantId)?.id ?? product.variants?.[0]?.id ?? 'default'
                                        increment(product.id, variantId)
                                    }}
                                    onDecrement={() => {
                                        const variantId = product.variants?.find((variant) => variant.id === selectedVariantId)?.id ?? product.variants?.[0]?.id ?? 'default'
                                        decrement(product.id, variantId)
                                    }}
                                    onQuantityChange={(value) => {
                                        const variantId = product.variants?.find((variant) => variant.id === selectedVariantId)?.id ?? product.variants?.[0]?.id ?? 'default'
                                        setQty(product.id, variantId, value)
                                    }}
                                    onSelectVariant={(variantId) => setVariant(product.id, variantId)}
                                />
                            )
                        })}
                    </AccordionStep>
                )
            })}
        </section>
    )
}

export default Builder