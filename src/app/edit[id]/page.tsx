import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function EditUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then(res => res.json)
        .then(data => {
          setName(data.name)
          setEmail(data.email)
        })
    }
  }, [id])

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({name, email})
    });
    router.push('/users')
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-xl font-semibold mb-4'>Edit User</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        
      </form>
    </div>
  )
}