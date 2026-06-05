import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface CartState {
    value: []
}

const initialState: CartState = {
    value: [],
}

export const fetchCarts = createAsyncThunk('cart/fetchCarts', async () => {
    const BASE_URL = "http://localhost:4000";
    const res = await axios.get(`${BASE_URL}/api/carts`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
    return res.data.data
})


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCarts: (state, action) => {
            state.value = action.payload
        },
        // fetchCarts: (state) => {
        //     axios
        //         .get(`${BASE_URL}/api/carts`, {
        //             headers: {
        //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
        //             },
        //         })
        //         .then((res) => {
        //             console.log(res.data.data);
        //             state.value = res.data.data
        //         })
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarts.pending, (state) => {
            })
            .addCase(fetchCarts.fulfilled, (state, action) => {
                state.value = action.payload  // ✅ safe — proxy is active
            })
            .addCase(fetchCarts.rejected, (state, action) => {
            })
    },
})

// Action creators are generated for each case reducer function
export const { setCarts } = cartSlice.actions

export default cartSlice.reducer