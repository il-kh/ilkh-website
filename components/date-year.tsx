import { parseISO, format } from 'date-fns'

export default function DateYear({ dateString }: { 
  dateString?: string | Date 
}) {
  if (!dateString) return null;
  
  // Convert to string if it's a Date object, or handle both types
  const dateStr = typeof dateString === 'string' ? dateString : dateString.toISOString();
  const date = parseISO(dateStr);
  
  return <time dateTime={dateStr}>{format(date, 'yyyy')}</time>
}
