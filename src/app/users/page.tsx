import {useEffect, useState} from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  
  return (
    
  )
}