import { parseISO, format } from 'date-fns'

export default function DateMonthYear({ dateString }: {
  dateString: string
}) {
  if (!dateString) return null; // or return a fallback value
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'MMMM yyyy')}</time>
}
