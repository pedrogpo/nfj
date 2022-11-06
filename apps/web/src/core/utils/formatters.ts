export const dateFormatter = new Intl.DateTimeFormat('en-US')

export const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
