import isSystemDark from './../utils/isSystemDark'
import { toDark, toLight } from './changeAppDarkMode'

export default function (themeMode) {
    if (themeMode === 'system' && isSystemDark) toDark()
    if (themeMode === 'system' && !isSystemDark) toLight()
    else if (themeMode === 'dark') toDark()
    else if (themeMode === 'light') toLight()
}

export const isDarkMode = (themeMode) => themeMode === 'dark' || (themeMode === 'system' && isSystemDark)