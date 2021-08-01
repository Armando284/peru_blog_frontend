export interface Campaign {
  _id?: string;
  authorID: string;
  title: string;
  body: string; //esto debe ser un string;
  createdAt?: Date;
  updatedAt?: Date;
  destroyedAt?: Date;
}
