import { Link } from "react-router-dom"
import Footer from "@components/Footer"
import IconRetom from '~icons/carbon/circle-packing'

function index() {
  return (
    <div className="flex flex-col items-center p-10">
      <IconRetom className="text-5xl dark:text-white" />
      <div className="flex mt-2 space-x-1 items-center">
        <h5 className="text-center text-lg font-semibold dark:text-white">Retom</h5>
        <p className="text-center text-xs opacity-50 dark:text-white">(Vitesse For React)</p>
      </div>
      <p className="text-center text-sm mt-2 opacity-75 dark:text-white">Opinionated React Vite Starter Template</p>
      <input className="rounded px-4 py-2 mt-8 w-[250px] text-center bg-transparent border-gray-200 dark:border-gray-700 border-[1px] outline-none" type="text" placeholder="What's your name?" aria-label="What's your name?" />
      <button className="bg-gray-400 text-white px-4 py-1 rounded mt-2">GO</button>
      <Footer />
    </div>
  )
}

export default index
