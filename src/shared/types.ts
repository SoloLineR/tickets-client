export type Ticket = {
  id: number;
  title: string;
  description: string;
  amount: number;
  price: number;
  img: string;
};

export type UserInfo = {
  id: number;
  roleid: number;
  email: string;
  money: number;
};

export type IUserData = Omit<UserInfo, "money">;

export type BrouthTicketsInfo = Pick<UserInfo, "id"> &
  Pick<Ticket, "img" | "title" | "price"> & { activated_id: number };
