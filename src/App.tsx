import { useEffect, useState } from 'react'

import Builder from './components/builder/Builder'
import LoaderMain from './components/common/loader/LoaderMain'
import ReviewPanel from './components/review/ReviewPanel'

function App() {
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

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