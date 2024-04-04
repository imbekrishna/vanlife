import { ReactNode, createContext, useState } from "react";

export interface IUser {
  uid: string;
  email: string | null;
}

export type UserContextType = {
  user: IUser | null;
  removeUser: () => void;
  setUser: (user: IUser) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const localData = localStorage.getItem("vanLifeUser");
  const [user, setUser] = useState<IUser | null>(
    localData ? JSON.parse(localData) : null
  );

  const removeUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
}
