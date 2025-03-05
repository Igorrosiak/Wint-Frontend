import "./index.scss";
import Controller from "./controller";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/user";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <UserProvider>
      <Controller />
    </UserProvider>
  </AuthProvider>
);

reportWebVitals();
