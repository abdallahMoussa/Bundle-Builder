import { FiMoon, FiSettings, FiSun } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

type LangSwitcherProps = {
    className?: string
}

const LangSwitcher = ({ className = '' }: LangSwitcherProps) => {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'ar' : 'en'
        i18n.changeLanguage(nextLang)
        document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr'
    }

    const toggleThemeMode = () => {
        document.documentElement.classList.toggle('dark')
    }

    const isDarkMode = document.documentElement.classList.contains('dark')

    return (
        <div dir='ltr' className={`group absolute z-10 -left-1 -top-1 ${className}`.trim()}>
            <div className="flex flex-col items-start">
                <button
                    type="button"
                    aria-label="Toggle language"
                    className="cursor-pointer rounded-br-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm opacity-75 transition-all duration-300 hover:opacity-100"
                >
                    <FiSettings className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                </button>

                <div className="mt-1 -ml-1 max-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white opacity-0 shadow-sm transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="flex w-full items-center cursor-pointer justify-center p-2 text-slate-700 hover:bg-slate-50"
                        aria-label="Switch language"
                    >
                        <span className="text-sm font-semibold">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                    </button>
                    <button
                        type="button"
                        onClick={toggleThemeMode}
                        className="flex w-full items-center cursor-pointer justify-center p-2 text-slate-700 hover:bg-slate-50"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <FiSun className=" h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LangSwitcher
