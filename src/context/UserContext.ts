import { createContext } from "react";

export interface IUser {
  uid: string;
  email: string;
  name: string;
  dateOfBirth: number;
}

export type UserContextType = {
  user: IUser | null;
  removeUser: () => void;
  setUser: (user: IUser) => void;
};

const UserContext = createContext<UserContextType | null>(null);
export default UserContext;
