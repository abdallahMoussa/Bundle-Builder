import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bundleReducer from './slices/bundleSlice'
import uiReducer from './slices/uiSlice'

const loadPersistedState = () => {
    if (typeof window === 'undefined') {
        return undefined
    }

    try {
        const savedState = window.localStorage.getItem('bundle-builder-state')
        return savedState ? JSON.parse(savedState) : undefined
    } catch {
        return undefined
    }
}

const rootReducer = combineReducers({
    bundle: bundleReducer,
    ui: uiReducer,
})

const persistedState = loadPersistedState()

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
})

store.subscribe(() => {
    window.localStorage.setItem('bundle-builder-state', JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
