export interface Campaign {
  _id?: string;
  authorID: string;
  title: string;
  body: []; //esto debe ser un string;
  createdAt?: Date;
  updatedAt?: Date;
  destroyedAt?: Date;
}
