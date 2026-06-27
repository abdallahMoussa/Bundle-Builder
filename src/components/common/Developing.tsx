import { useTranslation } from "react-i18next"
import { FaCog } from "react-icons/fa"

const Developing = () => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col items-center">
            <div className="relative rotate-90">
                <FaCog className="absolute top-3 -right-1.5 text-brand-purple text-xl animate-[spin_1.5s_linear_infinite_reverse]"
                />
                <FaCog className="text-brand-purple text-2xl mb-1 animate-[spin_2s_linear_infinite]"
                />
                <FaCog className="text-brand-purple text-4xl animate-[spin_3s_linear_infinite]"
                />
            </div>
            <p>{t('darkModeComingSoon')}</p>
        </div>)
}

export default Developing