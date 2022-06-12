import { createSlice } from "@reduxjs/toolkit"

export const userStore = createSlice({
    name: "userStore",
    initialState: {
        name: "",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setName } = userStore.actions

export default userStore.reducer