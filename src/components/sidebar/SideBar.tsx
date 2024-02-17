import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

import {
  faList,
  faSquarePlus,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import NewEntry from "../newentry/NewEntry";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { configData } from "@/config";

function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const globaccessToken = useSelector(
    (state: RootState) => state.user.accessToken
  );

  const Logout = async () => {
    // navigate("/");
    try {
      const response = await fetch(`${configData?.targetUrl}/logout`, {
        method: "POST",
        body: JSON.stringify({
          access_token: globaccessToken,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          app: "MTIzNDV8Vmdud2Vi",
          mode: "no-cors",
        },
      });
      console.log("Response received:", response);
      if (response?.statusText === "Unauthorized") {
        navigate("/");
      }
    } catch (err) {
      console.error("Error occurred:", err.message);
    }
    console.log("l;aksjdflkasjdlfkajsldfkjaslkdj", location);
  };
  const routes = [
    // {
    //   name: "DashBoard",
    //   path: "/home",
    //   icon: <FontAwesomeIcon icon={faChartLine} />,
    // },
    {
      name: "Certificate List",
      path: "/certificate-list",
      icon: <FontAwesomeIcon icon={faList} />,
    },
  ];

  return (
    <>
      <aside
        className="z-20 hidden  w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
        style={{ height: "100vh" }}
      >
        <div className="py-4  text-gray-500 dark:text-gray-400">
          <div className="ml-6 mt-8 mb-12 text-lg font-bold text-gray-800 dark:text-gray-200">
            Vahan Safety
          </div>

          {routes.map((menuitem) => (
            <ul className="mt-6">
              {location.pathname === menuitem.path ? (
                <Link to={menuitem.path}>
                  <li key={menuitem.name} className="relative px-6 py-3">
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                    <a className="inline-flex items-center w-full text-lg font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                      <span className="w-5 h-5"> {menuitem.icon} </span>

                      <span className="ml-4">{menuitem.name}</span>
                    </a>
                  </li>
                </Link>
              ) : (
                <li className="relative px-6 py-3">
                  <Link to={menuitem.path}>
                    {" "}
                    <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                      <span className="w-5 h-5 text-lg">{menuitem.icon}</span>
                      <span className="ml-4 text-lg">{menuitem.name}</span>
                    </a>
                  </Link>
                </li>
              )}

              <div className="px-6 my-6">
                <Link to="/new-entry">
                  <button className="flex items-center justify-between w-full px-4 py-2 text-md font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    New Entry
                    <span className="ml-2" aria-hidden="true">
                      <FontAwesomeIcon icon={faSquarePlus} />
                    </span>
                  </button>
                </Link>
              </div>
              <li className="relative px-6 py-3" onClick={() => Logout()}>
                {" "}
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <span className="w-5 h-5 text-lg">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                  </span>
                  <span className="ml-4 text-lg">Log Out</span>
                </a>
              </li>
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
}

export default SideBar;
