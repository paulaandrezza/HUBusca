// contexts/UserContext.tsx
import { IUser } from '@/services/interfaces/User';
import { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextType {
  userInfo: IUser | null | undefined;
  setUserInfo: (userInfo: IUser | null | undefined) => void;
}

const UserContext = createContext<UserContextType>({
  userInfo: null,
  setUserInfo: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<IUser | null | undefined>(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
