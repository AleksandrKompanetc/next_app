import {NextApiRequest, NextApiResponse} from 'next'

let users = [
  {id: 1, name: 'Alice', email: 'alice@example.com'},
  {id: 2, name: 'Bob', email: 'bob@example.com'}
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(users)
      break

    case 'POST':
      const {name, email} = req.body
      if (!name || !email) {
        res.status(400).json({message: 'Name and email are required'})
        return
      }
    
      const newUser = {
        id: users.length + 1,
        name,
        email,
      }
      users.push(newUser)
      res.status(201).json(newUser)
      break

    case 'DELETE':
      const id = parseInt(req.query.id as string)
      if(!id) {
        res.status(400).json({message: 'User ID is required'})
        return
      }

      users = users.filter(user => user.id !== id)
  }
}