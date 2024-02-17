import React from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../sidebar/topbar/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
import { configData } from "@/config";
import axios from "axios";
import QRCode from "react-qr-code";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import QRCodeScanner from "./QRCodeScanner";

function CertificateList() {
  const navigate = useNavigate();
  const [itemList, setItemList] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [qrData, setQrData] = React.useState(null); // QR code data
  console.log(itemList, "itemList45234");
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${configData.targetUrl}/registrations`,
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            app: "MTIzNDV8Vmdud2Vi",
            mode: "no-cors",
          },
        }
      );
      setItemList(response?.data?.data?.data);
      console.log("Response:", response?.data?.data?.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const downloadPDF = (id) => {
    setId(id);
    setTimeout(() => {
      const element = document.getElementById("qrCode");

      html2canvas(element, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "certificate.png";
        link.click();
        setId(null);
      });
    }, 3000);
  };

  const handleNavigate = (id) => {
    const newTab = window.open("", "_blank");
    newTab.location.href = `/Qrcode?id=${id}`;
  };

  return (
    <div className="font-sans flex h-full bg-gray-50 dark:bg-gray-900">
      <SideBar />
      <div className="w-full">
        <TopBar />
        <main className="h-full  overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Certificate List
            </h2>

            <a className=" items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div className="">
                <div className=" justify-center flex-1 lg:mr-32">
                  <div className="relative w-full max-w-xl mr-6 text-purple-500">
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
              </div>
            </a>

            <div className="bg-white mb-6">
              <div className="p-6 ">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3 text-left">Entry ID</th>
                      <th className="px-4 py-3 text-left ">Vehicle No</th>
                      <th className="px-4 py-3 text-left">Entry Date</th>
                      <th className="px-4 py-3">Owner Name</th>
                      <th className="px-4 py-3 text-left"> View </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {itemList?.map((result) => (
                      <tr
                        className="text-gray-700 dark:text-gray-400"
                        key={result.id}
                      >
                        <td className="px-4 py-3 text-sm">{result?.id}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">
                                {result?.vehicleregno}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-sm">{result?.date}</td>
                        <td className="px-4 py-3 text-xs">
                          {result?.ownername}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            className="border-purple-600 border-2 text-purple-600 p-1 text-sm rounded-md px-2 "
                            onClick={() => {
                              handleNavigate(result.id);
                              setId(result.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faDownload} /> Download Pdf
                          </button>
                          {id === result.id && (
                            <div
                              className="my-2"
                              id="qrCode"
                              style={{
                                width: "fit-content",
                              }}
                            >
                              {qrData && <QRCode value={qrData} size={100} />}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* <div>
        {id && (
          <QRCodeScanner
            rqCode={qrData && <QRCode value={qrData} size={100} />}
            id={id}
          />
        )}
      </div> */}
    </div>
  );
}

export default CertificateList;
