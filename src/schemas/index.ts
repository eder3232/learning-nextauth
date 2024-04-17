import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
  // confirmPassword: z
  //   .string()
  //   .min(6, {
  //     message: 'Password must be at least 6 characters',
  //   })
  //   .refine((data) => data === data.password, {
  //     message: 'Passwords do not match',
  //   }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
})
