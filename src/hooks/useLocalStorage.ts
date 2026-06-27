import { useCallback } from 'react'

export const useLocalStorage = () => {
    const saveValue = useCallback(<T,>(key: string, value: T) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(`Failed to save "${key}" to localStorage`, error)
        }
    }, [])

    const getValue = useCallback(<T,>(key: string, defaultValue?: T): T | undefined => {
        try {
            const item = localStorage.getItem(key)

            if (!item) {
                return defaultValue
            }

            return JSON.parse(item) as T
        } catch (error) {
            console.error(`Failed to read "${key}" from localStorage`, error)
            return defaultValue
        }
    }, [])

    const removeValue = useCallback((key: string) => {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error(`Failed to remove "${key}" from localStorage`, error)
        }
    }, [])

    return {
        saveValue,
        getValue,
        removeValue,
    }
}