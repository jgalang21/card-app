import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice( {
    name: "lotSlice",
    initialState:
    {
        lotName: ""
    },

    reducers: {
        setName: (state, action) => {
            state.lotName = action.payload
        }
    }
})

export const {setName} = counterSlice.actions
export default counterSlice.reducer
