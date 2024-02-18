import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { configData } from "../../config";
import { setUserCredentials } from "@/slice/UserSlice";
import { RootState } from "@/store/Store";

const Login = () => {
  const dispatch = useDispatch();
  const globaccessToken = useSelector((state: RootState) => state.user);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [UserDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  console.log(configData, "configData34523");

  let name;
  let value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("before function:", UserDetails);

  const username = UserDetails.username;
  const password = UserDetails.password;

  const authentication = async (e) => {
    e.preventDefault();
    console.log("Function is executing...", username, password);

    console.log(username, password);
    try {
      const response = await fetch(`${configData?.targetUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          app: "MTIzNDV8Vmdud2Vi",
          mode: "no-cors",
        },
      });

      console.log("Response received:", response);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const successMessage = data.success;
      const accessToken = data.data.access_token;

      console.log("Success Message:");

      dispatch(setUserCredentials({ accessToken: accessToken }));

      console.log("Access Token from redux:", globaccessToken);
      if (successMessage) {
        navigate("/certificate-list");
      } else {
        alert("Please check username and password");
      }
      console.log("Data received:", data);
    } catch (err) {
      alert("Please check username and password");

      console.error("Error occurred:", err.message);
    }
  };

  return (
    <form onSubmit={authentication}>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                src={"./src/assets/carimage.jpg"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Email
                  </span>
                  <input
                    className="block w-full mt-4 bg-gray-100 p-3 rounded text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="Jane Doe"
                    name="username"
                    value={UserDetails.username}
                    onChange={handleChange}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Password
                  </span>
                  <input
                    className="block w-full mt-4 bg-gray-100 p-3 rounded text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="password"
                    name="password"
                    value={UserDetails.password}
                    onChange={handleChange}
                  />
                </label>

                <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  Log in
                </button>

                <hr className="my-8" />

                <p className="mt-4">
                  <a
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    href="# "
                  >
                    Forgot your password?
                  </a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;
