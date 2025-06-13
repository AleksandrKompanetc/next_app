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
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className='w-full p-2 border rounded'
          required 
        />
        <input 
          type="text"
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='w-full p-2 border rounded'
          required 
        />
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>
          Save
        </button>
      </form>
    </div>
  )
}