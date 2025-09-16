import { parseISO, format, isValid } from 'date-fns'

export default function DateYear({ dateString }: { 
  dateString?: string | Date 
}) {
  if (!dateString) return null;
  
  let date: Date;
  
  if (typeof dateString === 'string') {
    // Handle ISO strings with timezone
    date = parseISO(dateString);
    
    // If parseISO fails, try creating a Date directly
    if (!isValid(date)) {
      date = new Date(dateString);
    }
  } else {
    date = dateString;
  }
  
  // Check if date is valid before formatting
  if (!isValid(date)) {
    console.error('Invalid date:', dateString);
    return null;
  }
  
  const dateStr = typeof dateString === 'string' ? dateString : dateString.toISOString();
  
  return <time dateTime={dateStr}>{format(date, 'yyyy')}</time>
}
