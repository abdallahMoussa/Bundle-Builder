import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UIState } from '../../types'
import { getInitialLang } from '../../utils/helpers'

export type Lang = 'en' | 'ar'

const initialState: UIState = {
    activeStep: 0,
    isSaved: false,
    lang: getInitialLang(),
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
        setLang: (state, action: PayloadAction<Lang>) => {
            state.lang = action.payload
        },
    },
})

export const {
    setActiveStep,
    setSaved,
    setLang,
} = uiSlice.actions

export default uiSlice.reducer