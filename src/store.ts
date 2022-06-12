import { configureStore } from "@reduxjs/toolkit"
import userStore from "@store/userStore"
import themeStore from "@store/themeStore"

export default configureStore({
  reducer: {
    user: userStore,
    theme: themeStore,
  },
})
