export interface Guestbook {
  id: string;
  createdAt: string;
  nickname: string;
  content: string;
  passwordHash?: string;
  emoji: string;
}
