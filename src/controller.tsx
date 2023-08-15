import moment from "moment";
import { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { useUserContext } from "./contexts/auth";

import Profile from "./pages/profile/profilePage";
import SignIn from "./pages/signIn/signInPage";
import SignUp from "./pages/signUp/signUpPage";

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
          <Route path={"/"} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SignIn />} />
          <Route path={"/sign-up"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Controller;
