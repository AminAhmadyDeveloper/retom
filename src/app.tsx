import { Suspense } from "react"
import {IntlProvider} from "react-intl"
import "@style/global.css"
import { useRoutes } from "react-router-dom"
import { Provider } from "react-redux"
import routes from "~react-pages"
import store from "@/store"
import messagesInFarsi from "@/assets/i18n/fa"
import ReactTooltip from "react-tooltip"

function App() {
  return (
    <div className=" bg-white dark:bg-[#121212]">
      <Provider store={store}>
        <IntlProvider messages={messagesInFarsi} locale="fa" defaultLocale="en">
          <ReactTooltip/>
          <Suspense>
            {useRoutes(routes)}
          </Suspense>
        </IntlProvider>
      </Provider>
    </div>
  )
}

export default App
