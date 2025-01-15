import { createSlice } from "@reduxjs/toolkit";


const INIT_STATE = {
    list: [],
}


const productsSlice = createSlice({
    name: 'products',
    initialState: INIT_STATE,
    reducers:{

    }
})

export default productsSlice.reducer;