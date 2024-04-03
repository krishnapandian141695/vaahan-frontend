import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  useGetRegistrationsSaleByIdQuery,
  useGetRegistrationsSaleByUserQuery,
} from "../../../../Services/sales";
import { CBadge, CButton } from "@coreui/react";
import mm3 from "../../../../assets/images/3mm.png";
import qrcode from "../../../../assets/images/qr.png";

const ViewEntries = () => {
  const sectionToPrintRef = useRef(null);
  const navigate = useNavigate();
  const [printed, setPrinted] = useState(false);
  const { id } = useParams();
  const { data, refetch } = useGetRegistrationsSaleByIdQuery(id);
  const [qrData, setQrData] = React.useState(window.location.href);
  let urlStringAdmin: any = `dealerName=`;
  // QR code data
  const {
    data: registerrationSaleData,
    error: registerationError,
    isLoading: registerrationLoding,
    refetch: registerrationRefetch,
  } = useGetRegistrationsSaleByUserQuery(urlStringAdmin);
  console.log(id, "queryParams43", registerrationSaleData?.["data"]?.total);

  // React.useEffect(() => {
  //   if (id) {
  //     //   refetch();
  //     // setTimeout(() => {
  //     //   downloadPDF().then(() => {
  //     //     navigate("/certificate-list");
  //     //   });
  //     // }, 2000);
  //   }
  // }, [id]);

  const onPrint = () => {
    function navigateAfterPrint() {
      // Navigate to another page after print
      // navigate("/Entries"); // Replace with the actual URL
    }

    function handleAfterPrint() {
      // This function will be called after the print operation is complete
      console.log("Print operation completed");

      // Navigate to another page if printing hasn't already occurred
      // if (!printed) {
      //   navigateAfterPrint();
      //   setPrinted(true); // Update the state to indicate that printing has occurred
      // }
    }

    // Attach the afterprint event listener
    if (window.matchMedia) {
      // For modern browsers
      window.matchMedia("print").addListener((mediaEvent) => {
        if (!mediaEvent.matches) {
          // The print operation has finished
          handleAfterPrint();
        }
      });
    } else {
      // For older browsers
      window.onafterprint = handleAfterPrint;
    }

    // Initiate the print operation if it hasn't occurred already
    if (!printed) {
      setTimeout(() => {
        const section = sectionToPrintRef.current;
        if (section) {
          // Clone the section element to avoid altering the original DOM
          const clonedSection = section.cloneNode(true);
          // Append the cloned section to the current document body
          document.body.appendChild(clonedSection);
          // Initiate printing
          window.print();
          // Remove the cloned section from the document after printing
          document.body.removeChild(clonedSection);
        }
      }, 1000);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (window.matchMedia) {
        window.matchMedia("print").removeListener(() => {});
      } else {
        window.onafterprint = null;
      }
    };
  };

  const downloadPDF = async () => {
    const element = document.getElementById("certificateContent");

    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
      logging: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const aspectRatio = canvas.width / canvas.height;
    const pdfWidth = 215;
    const pdfHeight = pdfWidth / aspectRatio;
    const padding = 10;
    const adjustedPdfWidth = pdfWidth - 2 * padding;
    const adjustedPdfHeight = pdfHeight - 2 * padding;

    const pdf = new jsPDF({
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(
      imgData,
      "PNG",
      padding,
      padding,
      adjustedPdfWidth,
      adjustedPdfHeight
    );

    // Create a temporary URL for the PDF blob
    const pdfBlob = pdf.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);

    // Open the PDF in a new tab for preview
    window.open(pdfURL, "_blank");

    // Optionally, you can also save the PDF
    // pdf.save("certificate.pdf");
  };

  return (
    <>
      <div
        id="certificateContent"
        className="p-2"
        style={{ background: "white" }}
        ref={sectionToPrintRef}
      >
        <>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "p {padding: 5px;}h5{margin:0px}.border {border: 1.5px solid black;} div#certificateContent { position: relative;   background: white; } #certificateContent:after {content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgb(255 255 255 / 72%), rgb(255 255 255 / 90%)), url(http://127.0.0.1:5173/src/assets/images/3mmjpg.jpg);  opacity: 0.1; background-size: 75px;}   ",
            }}
          />
          <div className="row">
            <div className="col-sm-3 d-flex align-items-center">
              <img src={qrcode} width={120} height={120} />
            </div>
            <div className="col-sm-6 text-center">
              <p className="m-0">
                <strong>3M INDIA LIMITED</strong>
              </p>
              <p className="m-0">
                <small>VECHICLE CONSPICUITY ONLINE MIS CERTIFICATE</small>
              </p>
              <small>
                COMPLIANCE TO AUTOMOTIVE INDUSTRY STANDARD - 089,090&037
              </small>
            </div>
            <div className="col-sm-3 d-flex justify-content-end align-items-center">
              <img src={mm3} width={160} height={120} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 d-flex align-items-end">
              <p className="d-flex  m-0">
                <small>TO :</small>
                <small>
                  The regional Transport Office <br /> {data?.["data"]?.rto}
                </small>
              </p>
            </div>
            <div className="col-sm-6 text-center d-flex justify-content-center mb-1 align-items-end">
              <p
                className="m-0"
                style={{
                  border: "1px dashed",
                  width: "inherit",
                  padding: "15px 10px 20px",
                  height: "fit-content",
                }}
              >
                Past Hologram here
              </p>
            </div>
            <div className="col-sm-3 d-flex align-items-center justify-content-end">
              <div>
                <p className="d-flex m-0 justify-content-end">
                  <small>Hologram No :</small>
                  <small>{data?.["data"]?.hologramnum}</small>
                </p>
                <p className="d-flex m-0 justify-content-end">
                  <small>Certificate NO : </small>
                  <small>
                    <b>{data?.["data"]?.certificateno}</b>
                  </small>
                </p>
                <p className="d-flex m-0 justify-content-end">
                  <small>Fitment Date : </small>
                  <small>
                    <b>{data?.["data"]?.date}</b>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="border mb-1">
            <div className="row">
              <div className="col-sm-12 p-0">
                <p className="m-0 py-2">
                  <h5>Vehicle Details</h5>
                </p>
              </div>
              <div className="col-sm-6 p-0 text-center">
                <p className="m-0 py-2 border-top">
                  <small>
                    Registration No : {data?.["data"]?.vehicleregno}
                  </small>
                </p>
                <p className="m-0 py-2 border-top">
                  Chassis No : {data?.["data"]?.chassisnum}
                </p>
                <p className="m-0 py-2 border-top">
                  <small> Vehicle Make: {data?.["data"]?.vehiclemake}</small>
                </p>
              </div>
              <div className="col-sm-6 p-0 text-center">
                <p className="m-0 py-2 border-top border-start">
                  <small>
                    Registration Year:{data?.["data"]?.vehiclemanufacturingyear}
                  </small>
                </p>
                <p className="m-0 py-2 border-top border-start">
                  <small>Engine No : {data?.["data"]?.engineno}</small>
                </p>
                <p className="m-0 py-2 border-top border-start">
                  <small>Vehicle Model : {data?.["data"]?.vehiclemodel}</small>
                </p>
              </div>
            </div>
          </div>
          <div className="border mb-1">
            <div className="row">
              <div className="col-sm-5 p-0">
                <p className="m-0 py-2 border-top">
                  <h5>Vehicle Owner Details</h5>
                </p>
                <p className="m-0 py-2 border-top" style={{ height: "70px" }}>
                  <small className="m-0">
                    Company Name/Owner Name : {data?.["data"]?.ownername}
                  </small>
                  <br />
                  <small className="m-0">
                    Contact Number : {data?.["data"]?.phoneo}
                  </small>
                  <br />
                </p>
              </div>
              <div className="col-sm-7 p-0 ">
                <p className="m-0 py-2 border-top border-start">
                  <h5>Manufacture & Distributor Details</h5>
                </p>
                <p
                  className="m-0 py-2 border-top border-start"
                  style={{ height: "70px" }}
                >
                  <small className="m-0">
                    Manufacturer Name : {data?.["data"]?.manufacturer_name}
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 p-0 d-flex">
                <p className="m-0 py-2 border-top w-100">
                  <small className="m-0">
                    Owner Address / Register Address : {data?.["data"]?.address}
                    ,
                  </small>
                </p>
              </div>
              <div className="col-sm-7 p-0 ">
                <div className="row">
                  <div className="col-sm-6 p-0">
                    <p className="m-0 py-2 border-top border-start">
                      <small className="m-0">
                        MFG Address: 3M India Limited Plot No-48-51,Electronic
                        City Hosur Road-560100 Bangalore / Karnataka, India
                      </small>
                    </p>
                  </div>
                  <div className="col-sm-6 p-0">
                    <p className="m-0 py-2 border-top border-start">
                      <small className="m-0">
                        MFG Address: 3M India Limited Plot No-48-51,Electronic
                        City Hosur Road-560100 Bangalore / Karnataka, India
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border mb-1">
            <div className="row">
              <div className="col-sm-4 p-0">
                <h6 className="m-0 p-2 border-top">
                  Conspicuity Tapes 20MM Fitment Details
                </h6>
              </div>
              <div className="col-sm-4 ps-0 pe-0">
                <h6 className="m-0 p-2 border-top border-start">
                  Rear Marking Plates Details
                </h6>
              </div>
              <div className="col-sm-4 p-0">
                <h6 className="m-0 p-2 border-top border-start">
                  Certificate Details
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 p-0 d-flex">
                <p className="m-0 py-2 border-top w-100">
                  <small className="m-0">20MM - RED : 0.00 Mtrs</small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">
                    Class 3 : Red Retro Reflective and Yellow Retro Reflective -
                    Alternative Strips
                  </small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">Type Approved Number: A94495</small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 p-0 d-flex">
                <p className="m-0 py-2 border-top w-100">
                  <small className="m-0">20MM WHITE : 0.00 Mtrs</small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">
                    Class 4 : Red Retro Reflective border and Yellow Retro
                    Reflective Centre
                  </small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">
                    COP Number : SHL/16/2018-2019/3000002951/COP/2711
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 p-0 d-flex">
                <p className="m-0 py-2 border-top w-100">
                  <small className="m-0">
                    Conspicuity Tapes 50MM Fitment Details
                  </small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">Previous Certificate Details</small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">
                    Test Report Number :SHL/16/2007-2008/2528/1584
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 p-0 d-flex">
                <p className="m-0 py-2 border-top w-100">
                  <small className="m-0">50MM-RED : 0.50 Mtrs</small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">
                    Old Certificate No. : {data?.["data"]?.oldcertificatenum}
                  </small>
                </p>
              </div>
              <div className="col-sm-4 ps-0 pe-0 d-flex">
                <p className="m-0 py-2 border-top border-start w-100">
                  <small className="m-0">
                    EC MARK:REAR MARK :SHL/16/2013/-2014/9149/2783 /17.12.2014
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 p-0 d-flex">
                <div className="row w-100">
                  <div className="col-sm-6 p-0 d-flex">
                    <p className="m-0 py-2 border-top w-100">
                      <small className="m-0">50MM-WHITE : 0.50 Mtrs</small>
                    </p>
                  </div>
                  <div className="col-sm-6 p-0 d-flex">
                    <p className="m-0 py-2 border-top border-start w-100">
                      <small className="m-0">Old Certificate date : NA</small>
                    </p>
                  </div>
                  <div className="col-sm-6 p-0 d-flex">
                    <p className="m-0 py-2 border-top w-100">
                      <small className="m-0">50MM-WHITE : 0.50 Mtrs</small>
                    </p>
                  </div>
                  <div className="col-sm-6 p-0 d-flex">
                    <p className="m-0 py-2 border-top border-start w-100">
                      <small className="m-0">
                        Old Certificate date :{" "}
                        {data?.["data"]?.oldcertificatedate}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ps-0 p-0 d-flex">
                <p className="m-0 py-2 border-top border-start  w-100">
                  <small className="m-0">
                    EC MARK:REAR MARK :SHL/16/2013/-2014/9149/2783 /17.12.2014
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="border mb-1">
            <div className="row">
              <div className="col-sm-6 p-0 d-flex">
                <p className="m-0 py-2">
                  <small className="m-0">
                    The Maximun Retail Price for the products specified in this
                    Certificate is Rs.300 only.
                  </small>
                </p>
              </div>
              <div className="col-sm-6 p-0 d-flex">
                <p className="m-0 py-2 border-start">
                  <small className="m-0">
                    20mm: Rs. 30/feet | 50mm: Rs.46/feet | C3: Rs.650/piece |
                    C4: Rs.750/piece
                  </small>
                </p>
              </div>
              <div className="col-sm-12 p-0 ">
                <p className="m-0 py-2 border-top">
                  <small className="m-0">Fitment Images</small>
                </p>
              </div>
              <div className="col-sm-3 p-0">
                <p className="m-0 py-2 border-top">
                  <img
                    src={data?.["data"]?.frontimage}
                    width={200}
                    height={150}
                  />
                </p>
              </div>
              <div className="col-sm-3 p-0">
                <p className="m-0 py-2 border-top border-start">
                  <img
                    src={data?.["data"]?.backimage}
                    width={200}
                    height={150}
                  />
                </p>
              </div>
              <div className="col-sm-3 p-0">
                <p className="m-0 py-2 border-top border-start">
                  <img
                    src={data?.["data"]?.leftimage}
                    width={200}
                    height={150}
                  />
                </p>
              </div>
              <div className="col-sm-3 p-0 ">
                <p className="m-0 py-2 border-top border-start">
                  <img src={data?.["data"]?.rcimage} width={200} height={150} />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9 p-0 d-flex">
                <div className="row w-100">
                  <div className="col-sm-12 p-0 d-flex">
                    <p className="m-0 py-2 border-top w-100">
                      <small className="m-0">
                        This is to certify that we have authorised Distributor /
                        Dealer for the sale AIS-089,090,&037 Compliant 3M Brand
                        Retro reflective Tapes Supplied by us as per CMVR
                        104-1989. The New Print no:{" "}
                        {registerrationSaleData?.["data"]?.total}
                      </small>
                    </p>
                  </div>
                  <div className="col-sm-12 p-0 d-flex">
                    <p className="m-0 py-2 border-top w-100">
                      <small className="m-0">
                        We hereby certify that we have supplied/installed
                        ICAT/ARAI Approved Retro Reflective Tapes as per CMRV
                        rule 104 specified under CMVR GSR 784 (E)
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 ps-0 p-0 d-flex">
                <p className="m-0 py-2 border-start border-top w-100 d-flex align-items-end">
                  <small className="m-0">
                    Authorized Distributor Seal & Signatur
                  </small>
                </p>
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-end border-top"
              style={{ height: "100px" }}
            >
              <div className="">
                <p className="m-0 border-top">Authorized Dealer Signature</p>
              </div>
              <div className="">
                <p className="m-0 border-top">Customer Signature</p>
              </div>
            </div>
          </div>
          <div className="bottompring text-center">
            <h4>
              [Note: HOLOGRAM MANDATORY WITHOUT HOLOGRAM CERTIFICATE NOT VALID]
            </h4>
          </div>
        </>
      </div>
      <div className="d-flex justify-content-center py-3">
        <div>
          <CButton
            color="success"
            type="button"
            variant="outline"
            onClick={() => downloadPDF()}
            className="me-3"
          >
            Print
          </CButton>
          <Link to={"/dashboard"}>
            <CButton color="dark" type="button" variant="outline">
              New Enttriy
            </CButton>
          </Link>
        </div>
        {/* <Link to={"/Entries"}>
          <CButton color="danger" type="button" variant="outline">
            Back
          </CButton>
        </Link> */}
      </div>
    </>
  );
};

export default ViewEntries;
