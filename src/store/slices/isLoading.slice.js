import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers:{
        setIsLoadingGlobal:(state, actions) => actions.payload
    }
})

export const {setIsLoadingGlobal} = isLoadingSlice.actions

export default isLoadingSlice.reducer;