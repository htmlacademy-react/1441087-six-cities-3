type UserAuth = {
  email: string;
  token: string;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type { UserAuth, User };
