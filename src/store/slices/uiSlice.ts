import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UIState } from '../../types'

const initialState: UIState = {
    activeStep: 0,
    isSaved: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveStep: (state, action: PayloadAction<number>) => {
            state.activeStep = action.payload
        },
        setSaved: (state, action: PayloadAction<boolean>) => {
            state.isSaved = action.payload
        },
    },
})

export const { setActiveStep, setSaved } = uiSlice.actions
export default uiSlice.reducer
