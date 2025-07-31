import { parseISO, format } from 'date-fns'

export default function DateYear({ dateString }: { 
  dateString?: string 
}) {
  if (!dateString) return null; // or return a fallback value
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy')}</time>
}
