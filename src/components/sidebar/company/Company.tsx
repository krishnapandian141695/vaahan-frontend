import React, { useState } from "react";
import SideBar from "../SideBar";
import TopBar from "../topbar/TopBar";
import { Link } from "react-router-dom";
import AddCategory from "../../product-category/AddCategory";

const Company = () => {
  const [ShowModel, setShowModel] = useState(false);

  const closemodel = () => {
    return setShowModel(false);
  };

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

            <a className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
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
              <Link to="/add-company">
                {" "}
                <button className="bg-white p-2 rounded-md text-purple-600">
                  Add Company
                </button>
              </Link>
            </a>

            <div></div>

            <div className="w-full bg-white ">
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">Total Products</th>
                        <th className="px-4 py-3">Verified</th>
                        <th className="px-4 py-3">Joinded Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">3M</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/21/2024</td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Avery</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/15/2024</td>
                      </tr>

                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">3M</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/21/2024</td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Avery</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/15/2024</td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">3M</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/21/2024</td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Avery</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/15/2024</td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">3M</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/21/2024</td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className=" w-full h-full rounded-full"
                                src="data:image/png;base64,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"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Avery</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Company
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Verified
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">1/15/2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Company;
