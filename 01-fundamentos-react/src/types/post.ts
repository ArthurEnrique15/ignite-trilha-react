export type PostInfo = {
  id: number;
  author: {
    name: string,
    avatar: string,
    role: string,
  },
  content: Array<{
    type: 'paragraph' | 'link',
    content: string,
  }>,
  publishedAt: Date,
}