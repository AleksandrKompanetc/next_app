let users = [
  {id: 1, name: 'Alice', email: 'alice@example.com'},
  {id: 2, name: 'Bob', email: 'bob@example.com'}
];

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    return res.status(200).json(users)
  }

  if (req.method === 'POST') {
    const newUser = {id: Date.now(), ...req.body}
    users.push(newUser)
    return res.status(201).json(newUser)
  }
  res.status(405).end
}