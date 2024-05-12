import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { Suspense } from "react";
import { login } from "./Slices/loginSlice.js";
import Login from "./views/pages/login/Login.js";
import Dashboard from "./views/dashboard/Dashboard.js";
import "./scss/style.scss";
import DefaultLayout from "./layout/DefaultLayout.js";
import Page404 from "./views/pages/page404/Page404.js";
import Page500 from "./views/pages/page500/Page500.js";
import moment from "moment";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const dispatch = useDispatch();
  let token: any = localStorage.getItem("token");
  let name: any = localStorage.getItem("name");
  let role_id: any = localStorage.getItem("role_id");
  let userId: any = localStorage.getItem("userId");
  let username: any = localStorage.getItem("username");
  let profileId: any = localStorage.getItem("profileId");

  window.addEventListener("focus", async function (event) {
    var prevTime = sessionStorage.getItem("currentTime");
    let panelStatusSession = sessionStorage.getItem("panelStatus");
    if (prevTime !== null) {
      let now = moment();
      let currentTime = now.format("mm");
      let totalMin = parseInt(currentTime) - parseInt(prevTime);
      console.log(totalMin, "totalMintotalMin", currentTime, prevTime);
      if (totalMin > 15 || totalMin < 0) {
        if (panelStatusSession === null) {
          logOut();
        }
      }
    }
  });

  window.addEventListener("blur", function (event) {
    let now = moment();
    let currentTime = now.format("mm");
    sessionStorage.setItem("currentTime", currentTime);
  });

  React.useEffect(() => {
    if (token) {
      let userinfo: any = {
        token: token,
        name: name,
        role_id: role_id,
        userId: userId,
        username: username,
        profileId: profileId,
      };
      dispatch(login(userinfo));
    } else {
    }
  }, [token]);

  const logOut = () => {
    localStorage.removeItem("role_id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    dispatch(login(null));
  };

  return (
    <Suspense fallback={loading}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="*" index element={<DefaultLayout />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
