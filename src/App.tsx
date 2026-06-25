import Builder from './components/builder/Builder'
import ReviewPanel from './components/review/ReviewPanel'

function App() {

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
