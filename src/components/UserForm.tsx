import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { User } from '../types'
import { submitUser } from '../services/api'

export const UserForm = () => {
  const { register, handleSubmit, formState: { errors} } = useForm<User>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: User) => {
    try {
      await submitUser(data)
      setSubmitted(true)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow'>
      <h2 className='text-2xl font-bold mb-4'>User Form</h2>
    </div>
  )
}