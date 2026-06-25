import { useTranslation } from "react-i18next"

const LearnMore = () => {
    const { t } = useTranslation()

    return (
        <a href="#" className="text-[12px] font-medium tracking-[0.6px] underline text-brand-purple">
            {t('learnMore')}
        </a>)
}

export default LearnMore