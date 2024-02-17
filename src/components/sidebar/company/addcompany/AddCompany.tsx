import React from "react";

import { useState } from "react";
import SideBar from "../../SideBar";
import TopBar from "../../topbar/TopBar";
import AddCategory from "../../../product-category/AddCategory";
import { Link } from "react-router-dom";

const AddCompany = () => {
  const district = [
    { district: "Ariyalur" },
    { district: "Chengalpattu" },
    { district: "Chennai" },
    { district: "Coimbatore" },
    { district: "Cuddalore" },
    { district: "Dharmapuri" },
    { district: "Dindigul" },
    { district: "Erode" },
    { district: "Kallakurichi" },
    { district: "Kanchipuram" },
    { district: "Kanyakumari" },
    { district: "Karur" },
    { district: "Krishnagiri" },
    { district: "Madurai" },
    { district: "Mayiladuthurai" },
    { district: "Nagapattinam" },
    { district: "Namakkal" },
    { district: "Nilgiris" },
    { district: "Perambalur" },
    { district: "Pudukkottai" },
    { district: "Ramanathapuram" },
    { district: "Ranipet" },
    { district: "Salem" },
    { district: "Sivaganga" },
    { district: "Tenkasi" },
    { district: "Thanjavur" },
    { district: "Theni" },
    { district: "Thoothukudi" },
    { district: "Tiruchirappalli" },
    { district: "Tirunelveli" },
    { district: "Tirupathur" },
    { district: "Tiruppur" },
    { district: "Tiruvallur" },
    { district: "Tiruvannamalai" },
    { district: "Tiruvarur" },
    { district: "Vellore" },
    { district: "Viluppuram" },
    { district: "Virudhunagar" },
  ];

  const state = [
    { state: "Andhra Pradesh" },
    { state: "Arunachal Pradesh" },
    { state: "Assam" },
    { state: "Bihar" },
    { state: "Chhattisgarh" },
    { state: "Goa" },
    { state: "Gujarat" },
    { state: "Haryana" },
    { state: "Himachal Pradesh" },
    { state: "Jharkhand" },
    { state: "Karnataka" },
    { state: "Kerala" },
    { state: "Madhya Pradesh" },
    { state: "Maharashtra" },
    { state: "Manipur" },
    { state: "Meghalaya" },
    { state: "Mizoram" },
    { state: "Nagaland" },
    { state: "Odisha" },
    { state: "Punjab" },
    { state: "Rajasthan" },
    { state: "Sikkim" },
    { state: "Tamil Nadu" },
    { state: "Telangana" },
    { state: "Tripura" },
    { state: "Uttar Pradesh" },
    { state: "Uttarakhand" },
    { state: "West Bengal" },
    { state: "Andaman and Nicobar Islands" },
    { state: "Chandigarh" },
    { state: "Dadra and Nagar Haveli and Daman and Diu" },
    { state: "Delhi" },
    { state: "Lakshadweep" },
    { state: "Puducherry" },
  ];

  return (
    <div className="font-sans flex h-full bg-gray-50 dark:bg-gray-900">
      <SideBar />
      <div className="w-full">
        <TopBar />
        <main className="h-full  overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Company
            </h2>

            <div className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Welcome To Vahan Safety</span>
              </div>

              <Link to="/company">
                {" "}
                <button className="bg-white p-2 rounded-md text-purple-600">
                  Company List
                </button>
              </Link>
            </div>

            <div></div>

            <div className="w-full bg-white ">
              <div className=" rounded-sm border p-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    <div className="">
                      <h6>Add Your Company Details</h6>
                    </div>
                  </h3>
                </div>
                <form action="#">
                  <div className="p-6.5">
                    <div className="mb-4 mt-4">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Company Name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Company Name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Registration Number (if applicable)
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Company Registration Number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Business Address
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your  Business Address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="mb-2.5 block text-black dark:text-white">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your  Business Address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="mb-3 block text-black dark:text-white">
                        District
                      </label>
                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                            />
                          </svg>
                        </span>

                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                          {district.map((district) => (
                            <option
                              className="text-black-500"
                              value={district.district}
                            >
                              {district.district}
                            </option>
                          ))}
                        </select>

                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="mb-3 block text-black dark:text-white">
                        State
                      </label>
                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                            />
                          </svg>
                        </span>

                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                          {state.map((name) => (
                            <option
                              className="text-black-500"
                              value={name.state}
                            >
                              {name.state}
                            </option>
                          ))}
                        </select>

                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block text-black dark:text-white">
                        About Your Company
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Enter Breifly About Your Company"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>
                    </div>

                    <div className="mb-4">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Phone No :
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Phone No"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Website
                      </label>
                      <input
                        type="text"
                        placeholder="Website URL"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="flex justify-items-center items-center w-full">
                      <h3 className="text-black font-bold mt-4 text-center"></h3>
                    </div>
                    <div className="rounded-sm mt-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="flex flex-col gap-5 p-6">
                        <div>
                          <label className="mb-3 block text-black dark:text-white">
                            Company Logo
                          </label>
                          <input
                            type="file"
                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <button className="flex w-full justify-center bg-purple-600 text-white mt-6 rounded bg-primary p-3 font-medium text-gray">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddCompany;
