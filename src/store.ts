import { configureStore } from "@reduxjs/toolkit"
import userStore from "@store/userStore"
import langStore from "@store/langStore"

export default configureStore({
  reducer: {
    user: userStore,
    lang: langStore,
  },
})
