import { User } from './user';

type Review = {
  id: string;
  date: Date;
  user: User;
  comment: string;
  rating: number;
};

export type { Review };
