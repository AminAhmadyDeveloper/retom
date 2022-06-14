import IconRetom from "~icons/carbon/circle-packing"
import SunIcon from "~icons/carbon/sun"
import MoonIcon from "~icons/carbon/moon"
import TranslateIcon from "~icons/carbon/language"
import MDIcon from "~icons/carbon/dicom-overlay"
import GithubIcon from "~icons/carbon/logo-github"
import {toDark, toLight} from "@utils/changeAppDarkMode"
import { useDispatch } from "react-redux"
import { nextLang } from "@store/langStore"
import { useDarkMode } from "usehooks-ts"
import { Link } from "react-router-dom"
import styles from "@utils/styleConstants"
import {useIntl} from "react-intl"

function Footer() {
    const { toggle, isDarkMode } = useDarkMode()
    isDarkMode ? toLight() : toDark()
    const dispatch = useDispatch()
    const intl = useIntl()

    return (
        <div className="flex space-x-4 pt-8 text-xl dark:text-white">
            <Link data-tip={intl.messages.home} to="/" className={styles.footerButtonClass}><IconRetom /></Link>
            <a data-tip={intl.messages.toggleDark} className={styles.footerButtonClass} onClick={toggle}>
                {toggle? <MoonIcon /> : <SunIcon />}
            </a>
            <a data-tip={intl.messages.toggleLangs} className={styles.footerButtonClass} onClick={languageChange}><TranslateIcon /></a>
            <a className={styles.footerButtonClass}><MDIcon /></a>
            <a className={styles.footerButtonClass}><GithubIcon /></a>
        </div>
    )

    function languageChange() {
        dispatch(nextLang())
    }
    
}

export default Footer