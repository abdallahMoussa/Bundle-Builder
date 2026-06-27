import { useEffect } from 'react'
import Builder from './components/builder/Builder'
import ReviewPanel from './components/review/ReviewPanel'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    })
  }, [])
  return (
    <div className="relative min-h-screen py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 lg:flex-row">
        <Builder />
        <ReviewPanel />
      </div>
    </div>
  )
}

export default App
