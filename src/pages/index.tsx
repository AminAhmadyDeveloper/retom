import { Link } from "react-router-dom"
import Footer from "@components/Footer"
import IconRetom from "~icons/carbon/circle-packing"
import { useSelector, useDispatch } from "react-redux"
import { setName } from "@store/userStore"
import styleConstants from "@utils/styleConstants"
import { useIntl } from "react-intl"
import fa from "@assets/i18n/fa.json"
import fr from "@assets/i18n/fr.json"

function index() {
  const dispatch = useDispatch()
  const intl = useIntl()
  intl.messages = askLanguage().lang
  intl.locale = askLanguage().local
  
  return (
    <div className="flex flex-col items-center p-10">
      <IconRetom className="text-5xl dark:text-white opacity-75" />
      <div className="flex mt-2 space-x-1 items-center">
        <h5 className="text-center text-lg font-semibold dark:text-white">Retom</h5>
        <p className="text-center text-xs opacity-50 dark:text-white">(Vitesse For React)</p>
      </div>
      <p className="text-center text-sm mt-2 opacity-75 dark:text-white">
        {intl.messages.desc}
      </p>
      <input onChange={onNameChange}
      className={styleConstants.InputTextClass}
      type="text" placeholder={intl.messages.whatsYourName}
      aria-label="What's your name?" />
      <Link to={go()} className={styleConstants.buttonClass}>{intl.messages.go}</Link>
      <Footer />
    </div>
  )

  function onNameChange(textField) {
    dispatch(setName(textField.target.value))
  }

  function go() {
    const name = useSelector(state => state.user.name)
    return `/hi/${name}`
  }

  function askLanguage() {
    const langIndex = useSelector(state => state.lang.lang)
    const langList = [fa, fr]
    const localList = ["fa", "fr"]
    return {
      lang: langList[langIndex],
      local: localList[langIndex]
    }
  }
}

export default index
