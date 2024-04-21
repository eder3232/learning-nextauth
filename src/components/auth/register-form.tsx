'use client'

import { useState, useTransition } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { RegisterSchema } from '../../schemas/index'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FormError } from '../utils/form-error'
import { FormSuccess } from '../utils/form-success'
import CardWrapper from './card-wrapper'
import { register } from '@/actions/register'

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')
    // console.log(values)
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <CardWrapper
      headerLabel={'Create an account'}
      backButtonLabel={'Already have an account?'}
      backButtonHref={'/auth/login'}
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default RegisterForm
