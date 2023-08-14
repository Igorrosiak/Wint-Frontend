import moment from "moment";
import { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useUserContext } from "./contexts/auth";

import { ProfilePage } from "./pages/profile/profilePage";
import { SignInPage } from "./pages/signIn/signInPage";
import { SignUpPage } from "./pages/signUp/signUpPage";

function Controller() {
  const { loggedStatus, setLoggedStatus } = useUserContext();

  useEffect(() => {
    const date = localStorage.getItem("loginDate");
    if (date === null) {
      localStorage.clear();
      sessionStorage.clear();
      setLoggedStatus(false);
    }

    const dateDiff = moment().diff(date, "hours");
    if (dateDiff >= 2) {
      localStorage.clear();
      sessionStorage.clear();
      setLoggedStatus(false);
    }
  });

  if (loggedStatus) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SignInPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Controller;
