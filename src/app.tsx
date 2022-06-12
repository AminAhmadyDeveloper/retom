import { Suspense } from "react"
import "@style/global.css"
import { useRoutes } from "react-router-dom"
import routes from "~react-pages"

function App() {
  return (
    <div className="h-screen bg-white dark:bg-[#121212]">
      <Suspense>
        {useRoutes(routes)}
      </Suspense>
    </div>
  )
}

export default App
