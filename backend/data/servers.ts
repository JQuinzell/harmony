export interface Server {
  id: number
  title: string
  description: string
  image: string
}

export const servers: Server[] = [
  {
    id: 1,
    title: 'Minecraft',
    image:
      'https://cdn.discordapp.com/discovery-splashes/302094807046684672/579507dff86d89cd5decd8e016a54706.jpg?size=320',
    description: 'You can put blocks anywhere and everywhere. Go nuts.',
  },
  {
    id: 2,
    title: 'Among Us',
    image:
      'https://cdn.discordapp.com/discovery-splashes/688767594744119298/b18c65cc5739fb34408a0ecd6f169d5f.jpg?size=320',
    description:
      "You know you've always wanted to lie to your friends. And maybe stab them too.",
  },
  {
    id: 3,
    title: 'Leage of Legends',
    image:
      'https://cdn.discordapp.com/discovery-splashes/125440014904590336/b404a9072e0446094002df1280833beb.jpg?size=320',
    description: 'Pick a champion. Pick a lane. Hope that no one feeds.',
  },
]
