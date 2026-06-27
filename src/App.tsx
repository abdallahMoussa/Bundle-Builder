import { useEffect, useState } from 'react'

import Builder from './components/builder/Builder'
import LoaderMain from './components/common/loader/LoaderMain'
import ReviewPanel from './components/review/ReviewPanel'
import { useBundleBuilder } from './hooks/useBundleBuilder'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const { ui } = useBundleBuilder()

  useEffect(() => {
    i18n.changeLanguage(ui.lang)
    document.documentElement.dir = ui.lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = ui.lang
    document.documentElement.setAttribute('data-theme', ui.lang)
  }, [i18n, ui.lang])

  useEffect(() => {
    const stopLoadingTimer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    const hideLoaderTimer = setTimeout(() => {
      setShowLoader(false)
    }, 5000)

    return () => {
      clearTimeout(stopLoadingTimer)
      clearTimeout(hideLoaderTimer)
    }
  }, [])

  return (
    <div className="relative min-h-screen py-5">
      {showLoader ? (
        <LoaderMain loading={loading} />
      ) : (
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 lg:flex-row">
          <Builder />
          <ReviewPanel />
        </div>
      )}
    </div>
  )
}

export default App