import { createSlice } from "@reduxjs/toolkit"

export const themeStore = createSlice({
    name: "themeStore",
    initialState: {
        dark: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.dark = !state.dark
        }
    }
})

export const { toggleTheme } = themeStore.actions

export default themeStore.reducer