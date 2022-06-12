import IconRetom from "~icons/carbon/circle-packing"
import SunIcon from "~icons/carbon/sun"
import MoonIcon from "~icons/carbon/moon"
import TranslateIcon from "~icons/carbon/language"
import MDIcon from "~icons/carbon/dicom-overlay"
import GithubIcon from "~icons/carbon/logo-github"
import {toDark, toLight} from "@utils/changeAppDarkMode"
import { useDarkMode } from "usehooks-ts"
import { Link } from "react-router-dom"
import styles from "@utils/styleConstants"

function Footer() {
    const { toggle, isDarkMode } = useDarkMode()
    isDarkMode ? toLight() : toDark()

    return (
        <div className="flex space-x-4 pt-8 text-xl dark:text-white">
            <Link to="/" className={styles.footerButtonClass}><IconRetom /></Link>
            <a className={styles.footerButtonClass} onClick={toggle}>
                {toggle? <MoonIcon /> : <SunIcon />}
            </a>
            <a className={styles.footerButtonClass}><TranslateIcon /></a>
            <a className={styles.footerButtonClass}><MDIcon /></a>
            <a className={styles.footerButtonClass}><GithubIcon /></a>
        </div>
    )
}

export default Footer