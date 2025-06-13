import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function EditUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    if (id) {
      fetch(`api/users/${id}`)
        .then(res => res.json)
        .then(data => {
          setName(data.name)
          setEmail(data.email)
        })
    }
  }, [id])
}