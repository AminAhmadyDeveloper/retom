import { configureStore } from "@reduxjs/toolkit"
import userStore from "@store/userStore"

export default configureStore({
  reducer: {
    user: userStore,
  },
})
