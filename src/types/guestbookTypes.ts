export interface Guestbook {
  id: number;
  createAt: number;
  nickname: string;
  content: string;
  passwordHash: string;
  imoji: string;
}
