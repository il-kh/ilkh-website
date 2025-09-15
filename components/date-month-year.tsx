import { parseISO, format } from 'date-fns'

export default function DateMonthYear({ dateString }: {
  dateString?: string | Date 
}) {
  if (!dateString) return null;
  
  // Convert to string if it's a Date object, or handle both types
  const dateStr = typeof dateString === 'string' ? dateString : dateString.toISOString();
  const date = parseISO(dateStr);

  return <time dateTime={dateStr}>{format(date, 'MMMM yyyy')}</time>
}
