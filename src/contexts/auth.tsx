import React, {
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "../types/user";

interface PropsWithReactNode {
  children?: React.ReactNode;
}

interface UserContextData {
  loggedStatus?: boolean;
  user?: User;
  setLoggedStatus: React.Dispatch<SetStateAction<boolean>>;
  setUser: React.Dispatch<SetStateAction<User | undefined>>;
}

export const UserContext = createContext({} as UserContextData);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider: FC<PropsWithChildren<PropsWithReactNode>> = ({
  children,
}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")!));
  const status = localStorage.getItem("loggedStatusVariable");
  const [loggedStatus, setLoggedStatus] = useState<boolean>(!!status);

  return (
    <UserContext.Provider
      value={{
        loggedStatus,
        setLoggedStatus,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
