export const truncate = (text?: string, maxLength = 30) => {
    if (!text) return ''

    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}

export const savingsPercentage = (price: number, compareAtPrice: number) =>
    Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
