export interface User {
  id: number
  name: string
  password: string
  servers: number[]
}

export const users: User[] = [
  { id: 1, name: 'Someone', password: 'password', servers: [1] },
]
