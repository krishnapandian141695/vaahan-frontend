import React, { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { configData } from "@/config";
import { Link, useLocation, useNavigate } from "react-router-dom";

function TopBar() {

  const [modalVisble , setModalVisble] = useState(false)
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



  return (
    <>
      <div className="flex flex-col flex-1">
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <button
              className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu"
            >
              <svg
                className="w-6 m-2 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="flex justify-center flex-1 lg:mr-32">
              <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full p-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="Search for projects"
                  aria-label="Search"
                />
              </div>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              <li className="flex">
                <button
                  className="rounded-md focus:outline-none focus:shadow-outline-purple"
                  aria-label="Toggle color mode"
                >
                  
                </button>
              </li>

              <li className="relative">
                
                <div>
                <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-purple-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>Admin</span>
              <ChevronDownIcon
                className={`${open ? 'text-purple-300' : 'text-purple-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-purple-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-44 max-w-sm -translate-x-1/2 transform  sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid  bg-white cursor-no-drop ">

                      <div className="w-full hover:bg-gray-100 px-6 py-3 flex text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
<span className="text-md"> Profile<br>
</br><span className="text-sm text-gray-300">(Coming Soon)</span></span>
                      </div>


                  </div>
                   <button className="relative grid  bg-white w-full" onClick={Logout}>
                  <div >

                      <div className="w-full hover:bg-gray-100 px-6 py-3 flex ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

<span> Log Out</span>
                      </div>


                  </div>
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
                </div>
              </li>

              <li className="relative">
                
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default TopBar;
