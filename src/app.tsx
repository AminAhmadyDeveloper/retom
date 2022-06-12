import { Suspense } from "react"
import "@style/global.css"
import { useRoutes } from "react-router-dom"
import { Provider } from "react-redux"
import routes from "~react-pages"
import store from "@/store"

function App() {
  return (
    <div className=" bg-white dark:bg-[#121212]">
      <Provider store={store}>
          <Suspense>
            {useRoutes(routes)}
          </Suspense>
      </Provider>
    </div>
  )
}

export default App
