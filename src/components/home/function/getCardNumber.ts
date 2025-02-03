export const getCardNumber = (data: any) => {
  if (typeof window == "undefined") {
    return []
  }

  const width = window.innerWidth - 192
  const height = window.innerHeight
  const cardRow = 350
  const cardCol = 360
  const cardsPerRow = Math.floor(width / cardRow)
  const cardsPerCol = Math.floor(height / cardCol)
  const cardsPage = cardsPerRow * cardsPerCol

  const result = []
  for (let i = 0; i < data.length; i += cardsPage) {
    result.push(data.slice(i, i + cardsPage))
  }
  return result
}
