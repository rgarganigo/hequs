import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: string;
  email?: string;
  username?: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLogged: boolean;
  setIsLogged: (logged: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
