import { type FC, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Icon from '../common/Icon'
import Divider from '../common/Divider'
import { STEP_NUMBERS } from '../../utils/constants'
import Button from '../common/Button'

type Props = {
    title: string
    nextTitle: string
    stepLabel: string
    isOpen: boolean
    selectedCount: number
    onToggle: () => void
    onNext: () => void
    children: ReactNode
    lastStep: boolean
}

const AccordionStep: FC<Props> = ({
    title,
    nextTitle,
    stepLabel,
    isOpen,
    selectedCount,
    onToggle,
    onNext,
    children,
    lastStep,
}) => {
    const { t } = useTranslation()

    return (
        <div
            className={`${isOpen ? 'rounded-[10px] bg-brand-baby-blue' : ''} pt-3.75 mb-3`}>
            <p onClick={onToggle} className="text-[12px] cursor-pointer text-start font-500 font-medium uppercase px-3.75 tracking-[1.6px] leading-[100%] text-texts-label">
                {stepLabel} {t('of')} {STEP_NUMBERS}
            </p>
            <Divider className='h-[0.5px] my-2' color='text-texts-description' />
            <div onClick={onToggle} className={`flex cursor-pointer justify-between align-middle pt-2 px-3.75 ${!isOpen ? 'border-b border-b-texts-main' : ''}`}>
                <div className="flex items-center align-middle gap-2">
                    <Icon name="Camera" className="h-5.5 w-5.5" />
                    <h3 className="text-[22px] font-semibold tracking-[0.2px] text-texts-main">{t(title)}</h3>
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-brand-purple">
                    <p className='font-medium font-500'>
                        {selectedCount > 0 ? `${selectedCount} ${t('selected')}` : ''}
                    </p>
                    <Icon name={`${isOpen ? 'ChevronUp' : 'ChevronDown'}`} className="mt-1 h-3 w-3" />
                </span>
            </div>

            <div
                className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="px-5 py-5">
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-2">
                        {children}
                    </div>

                    {!lastStep && isOpen && (
                        <div className="mt-5 flex justify-center">
                            <Button
                                onClick={onNext}
                                label={`${t('next')}: ${t(nextTitle)}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default AccordionStep
