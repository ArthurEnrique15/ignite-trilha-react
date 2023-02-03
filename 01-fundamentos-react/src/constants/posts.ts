import { PostInfo } from "../types/post";

export const posts: PostInfo[] = [
  {
    id: 1,
    author: {
      name: 'Arthur Enrique',
      avatar: 'https://github.com/ArthurEnrique15.png',
      role: 'Fullstack Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-23 16:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Adam Henrique',
      avatar: 'https://github.com/AdamHenrique67.png',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-23 16:00:00'),
  },
  {
    id: 3,
    author: {
      name: 'Ian Langkammer',
      avatar: 'https://github.com/ianlgnk.png',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-23 16:00:00'),
  }
]