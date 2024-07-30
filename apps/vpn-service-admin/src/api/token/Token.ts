export type Token = {
  createdAt: Date;
  id: string;
  isValid: boolean | null;
  token: string | null;
  updatedAt: Date;
};
