import { createSlice } from "@reduxjs/toolkit"

export const langStore = createSlice({
    name: "langStore",
    initialState: {
        lang: 0,
    },
    reducers: {
        nextLang: function(state){
            state.lang = (state.lang + 1) % 2
        }
    }
})

export const { setLang, nextLang } = langStore.actions

export default langStore.reducer