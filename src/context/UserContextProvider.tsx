import { ReactNode, useState } from "react";
import UserContext, { IUser } from "./UserContext";

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
