import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice( {
    name: "lotSlice",
    initialState:
    {
        lotName: "",
        lotPictures: null
    },

    reducers: {
        setName: (state, action) => {
            state.lotName = action.payload
        },
        setPictures: (state, action) => {
            state.lotPictures = action.payload
        }
    }
})

export const {setName, setPictures} = counterSlice.actions
export default counterSlice.reducer
