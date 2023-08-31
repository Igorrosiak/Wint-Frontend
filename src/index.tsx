import "./index.scss";
import Controller from "./controller";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contexts/auth";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <Controller />
  </UserProvider>
);

reportWebVitals();
