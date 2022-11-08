import { formatDistanceToNow } from 'date-fns'

export const dateFormatter = new Intl.DateTimeFormat('en-US')

export const formatterDistanceFromNow = (date: Date) => {
  return formatDistanceToNow(date, {
    addSuffix: true,
  })
}

export const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
