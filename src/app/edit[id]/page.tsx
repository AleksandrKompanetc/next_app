import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function EditUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()
  const {id} = router.query
}