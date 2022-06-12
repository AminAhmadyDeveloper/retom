import IconRetom from '~icons/carbon/circle-packing'
import SunIcon from '~icons/carbon/sun'
import MoonIcon from '~icons/carbon/moon'
import TranslateIcon from '~icons/carbon/language'
import MDIcon from '~icons/carbon/dicom-overlay'
import GithubIcon from '~icons/carbon/logo-github'

function Footer() {
    return (
        <div className="flex space-x-4 pt-8 text-xl">
            <a className="dark:text-white rounded cursor-pointer"><IconRetom /></a>
            <a className="dark:text-white rounded cursor-pointer"><SunIcon /></a>
            <a className="dark:text-white rounded cursor-pointer"><TranslateIcon /></a>
            <a className="dark:text-white rounded cursor-pointer"><MDIcon /></a>
            <a className="dark:text-white rounded cursor-pointer"><GithubIcon /></a>
        </div>
    )
}

export default Footer