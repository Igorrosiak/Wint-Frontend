import React, {
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import getToken from "../services/auth/refreshToken";
import Swal from "sweetalert2";

interface PropsWithReactNode {
  children?: React.ReactNode;
}

interface AuthContextData {
  loggedStatus?: boolean;
  setLoggedStatus: React.Dispatch<SetStateAction<boolean>>;
  accessToken?: string;
  setAccessToken: React.Dispatch<SetStateAction<string | undefined>>;
  refreshToken: null | string;
  setRefreshToken: React.Dispatch<SetStateAction<null | string>>;
}

export const AuthContext = createContext({} as AuthContextData);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<PropsWithChildren<PropsWithReactNode>> = ({
  children,
}) => {
  const status = localStorage.getItem("loggedStatusVariable");
  const [loggedStatus, setLoggedStatus] = useState<boolean>(!!status);
  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<null | string>(
    localStorage.getItem("refreshToken")
  );

  async function getAccessToken() {
    if (!accessToken && refreshToken) {
      const accessToken = await getToken(refreshToken);
      setAccessToken(accessToken);
    } else if (!accessToken && !refreshToken && loggedStatus) {
      setLoggedStatus(false);
      localStorage.clear();
      Swal.fire(
        "Token Expirou",
        "Seu token foi expirado, será necessário fazer login novamente.",
        "warning"
      );
      setTimeout(() => window.location.assign("/"), 3000);
    }
  }

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedStatus,
        setLoggedStatus,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
