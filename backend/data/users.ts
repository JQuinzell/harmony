export interface User {
  name: string
  password: string
  servers: number[]
}

export const users: User[] = [
  { name: 'Someone', password: 'password', servers: [1] },
]
