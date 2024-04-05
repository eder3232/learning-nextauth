import { AlertTriangle } from 'lucide-react'

interface FormErrorsProps {
  message?: string
}

export const FormError = ({ message }: FormErrorsProps) => {
  if (!message) return null

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <AlertTriangle size={16} />
      <span>{message}</span>
    </div>
  )
}
