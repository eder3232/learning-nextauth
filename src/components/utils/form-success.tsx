import { BadgeCheck } from 'lucide-react'

interface FormErrorsProps {
  message?: string
}

export const FormSuccess = ({ message }: FormErrorsProps) => {
  if (!message) return null

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <BadgeCheck size={16} />
      <span>{message}</span>
    </div>
  )
}
