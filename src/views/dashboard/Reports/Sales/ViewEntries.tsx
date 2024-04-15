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
import mm3 from "../../../../assets/images/3M_logo.png";
import qrcode from "../../../../assets/images/qr.png";
import backgroundImg from "../../../../assets/images/background.jpg";
import tick from "../../../../assets/images/tick.png";

const ViewEntries = () => {
  const sectionToPrintRef = useRef(null);
  const navigate = useNavigate();
  const [printed, setPrinted] = useState(false);
  const { id } = useParams();
  const { data, refetch } = useGetRegistrationsSaleByIdQuery(id);
  const [qrData, setQrData] = React.useState(window.location.href);
  console.log(qrData , "qrData345234")
  let urlStringAdmin: any = `dealerName=`;
  // QR code data
  const {
    data: registerrationSaleData,
    error: registerationError,
    isLoading: registerrationLoding,
    refetch: registerrationRefetch,
  } = useGetRegistrationsSaleByUserQuery(urlStringAdmin);
  console.log(id, "queryParams43", data?.["data"]);

  React.useEffect(() => {
    refetch();
  }, []);

  const onPrint = () => {
    var divContents = document.getElementById("Certificate").innerHTML;
    var printWindow = window.open("", "", "height=1000,width=800");
    printWindow.document.write(
      "<html><head> <style>.table tbody tr td { font-size:14px;color:black;padding-left:10px;padding:0px; }</style><title>Customer Copy</title>"
    );
    printWindow.document.write(
      '</head><body style="padding:0;margin-top:20;">'
    );
    printWindow.document.write(divContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    function show() {
      if (printWindow.document.readyState === "complete") {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      } else {
        setTimeout(show, 100);
      }
    }
    show();
  };

  return (
    <>
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n        @page {\n   size: 7in 9.25in;\n   margin: 27mm 16mm 27mm 16mm;\n}\n        .tr {\n            font-family:'Arial, Helvetica, sans-serif'\n        }\n    ",
          }}
        />
        <div
          id="Certificate"
          className="container-fluid"
          style={{ marginTop: 30, width: 800, background: "white" }}
        >
          <link href="../Content/bootstrap-theme.css" rel="stylesheet" />
          <link href="../Content/bootstrap-theme.min.css" rel="stylesheet" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n            .table {\n                width: 100%;\n            }\n\n                .table tbody tr td {\n                    padding: 3px !important;\n                    padding-bottom: 4px;\n                    font-size: 12px;\n                    font-family: 'Arial, Helvetica, sans-serif';\n                    color: black;\n                    padding-left: 10px;\n                    border: solid .1pt grey;\n                    vertical-align: top;\n                }\n\n                .table tbody tr {\n                    padding: 5px !important;\n                    padding-bottom: 5px;\n                    font-size: 14px;\n                    color: black;\n                    padding-left: 10px;\n                }\n        ",
            }}
          />
          <div
            className="container-fluid"
            style={{ margin: "auto", padding: 0 }}
          >
            <div
              className="row"
              style={{
                margin: "auto",
                padding: 0,
                color: "black",
                height: 120,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={backgroundImg}
                  style={{
                    position: "absolute",
                    width: 800,
                    height: 1050,
                    zIndex: -1,
                    opacity: ".3",
                    left: "-18px",
                  }}
                />
              </div>
              {/* <div style={{zIndex : 9}}> */}
              <div
                style={{
                  position: "absolute",
                  height: 35,
                  width: 200,
                  marginLeft: 300,
                  marginTop: 120,
                  border: "dashed 1px grey",
                  textAlign: "center",
                  color: "GrayText",
                  paddingTop: 5,
                }}
              >
                Paste Hologram here
              </div>
              <div
                className="container-fluid"
                style={{ margin: "auto", padding: 0 }}
              >
                <div
                  className="row"
                  style={{ margin: "auto", padding: 0, color: "black" }}
                >
                  <div
                    className="container-fluid"
                    style={{ margin: "auto", padding: 0 }}
                  >
                    <div style={{ width: 800, margin: "auto" }}>
                      <div style={{ float: "left", marginLeft: 0 }}>
                        <QRCode  style={{ height: 110, width : 110 }} value={`${qrData}?enptg&a0sdfasd35446yhdasd0asdasdfw356wyhsfgnhe45ytgf3q45wgsdflcnv98asd=70s9dfbn08qasdfasdasd8709fapsodhfasp9d345&asjdofansdf=9a7s6d709ofiasdsafda453rtgasr35trfsadfasdsdasdfad0f9aubsdb0fasdofiasfdssfyasdf7`} />
                        {/* <img src={qrcode} style={{ height: 110 }} /> */}
                      </div>
                      <div style={{ float: "left", marginLeft: 60 }}>
                        <center>
                          {" "}
                          <h3
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontWeight: "bold",
                              fontSize: 22,
                              paddingTop: 0,
                              paddingBottom: 0,
                              marginBottom: 0,
                            }}
                          >
                            3M INDIA LIMITED
                          </h3>
                          <p
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontWeight: "bold",
                              fontSize: 12,
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            VECHICLE CONSPICUITY ONLINE MIS CERTIFICATE
                          </p>
                          <p
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontWeight: "bold",
                              alignContent: "center",
                              fontSize: 12,
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            COMPLIANCE TO AUTOMOTIVE INDUSTRY STANDARD
                            -089,090&amp;037
                            <br />
                          </p>
                        </center>
                      </div>
                      <div style={{ float: "right", paddingRight: 0 }}>
                        <img
                          src={mm3}
                          style={{
                            height: 100,
                            marginTop: 0,
                            marginRight: "17px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="row">
            <div style={{ width: "99%", margin: "auto", fontSize: 12 }}>
              <span style={{ margin: 0, paddingLeft: 5, float: "right" }}>
                Hologram No.: {data?.["data"]?.hologramnum}
              </span>
              <br />
              <span style={{ margin: 0, paddingLeft: 5, float: "left" }}>
                TO:
              </span>
              <span style={{ paddingLeft: 5, float: "left", width: 400 }}>
                The Regional Transport Office
                <br />
                {data?.["data"]?.rto}
              </span>
              <span style={{ float: "right", textAlign: "right" }}>
                Certificate NO :<b> {data?.["data"]?.certificateno} </b>
                <br />
                Fitment Date : {data?.["data"]?.date}{" "}
              </span>
              <table
                className="table table-bordered"
                style={{
                  borderCollapse: "collapse",
                  float: "left",
                  border: "solid 2px black",
                  marginBottom: 2,
                  width: "100%",
                  fontFamily: "Calibri",
                  textAlign: "center",
                }}
              >
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "left", fontSize: 18 }}>
                      <b>Vehicle Details</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Registration No : </span>
                      <span id="vhlnolbl" style={{ fontWeight: "bold" }}>
                        {data?.["data"]?.vehicleregno}
                      </span>
                    </td>
                    <td>
                      Registration Year:
                      <b>{data?.["data"]?.vehiclemanufacturingyear}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Chassis No : </span>
                      <span id="chissnolbl" style={{ fontWeight: "bold" }}>
                        {data?.["data"]?.chassisnum}
                      </span>
                    </td>
                    <td>
                      <span>Engine NO : </span>
                      <span id="englbl" style={{ fontWeight: "bold" }}>
                        {data?.["data"]?.engineno}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Vehicle Make: </span>
                      <span id="vhlmakelbl">{data?.["data"]?.vehiclemake}</span>
                    </td>
                    <td>
                      <span>Vehicle Model : </span>
                      <span id="modellbl">{data?.["data"]?.vehiclemodel}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="col-sm-12 table table-bordered"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderCollapse: "collapse",
                  border: "solid 2px black",
                  marginBottom: 2,
                  fontFamily: "Calibri",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ fontSize: 18, width: "50%" }}>
                      <b>Vehicle Owner Details</b>
                    </td>
                    <td colSpan={2} style={{ fontSize: 18 }}>
                      <b>Manufacture &amp; Distributor Details</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Company Name/Owner Name : </span>
                      <span id="ownerlbl">{data?.["data"]?.ownername}</span>
                      <br />
                      <span>Contact Number : </span>
                      <span id="phonelbl">{data?.["data"]?.phoneo}</span>
                    </td>
                    <td colSpan={2}>
                      <span>Manufacturer Name : </span>
                      <span id="Label1">3M INDIA LIMITED</span>
                      <br />
                      <span>
                        <span id="distname" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        Owner Address / Register Address :
                      </span>
                      <div
                        style={{
                          minHeight: 70,
                          maxHeight: 150,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <p style={{ padding: 0, margin: 0 }}>
                          {data?.["data"]?.address}
                        </p>
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        }}
                      >
                        MFG Address:
                      </span>
                      <div
                        style={{
                          minHeight: 70,
                          maxHeight: 150,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <p style={{ padding: "0px", margin: "0px" }}>
                          3M India Limited
                          <br />
                          Plot No-48-51,Electronic City
                          <br />
                          Hosur Road-560100
                          <br />
                          Bangalore
                          <br />/ Karnataka, India.
                        </p>
                      </div>
                    </td>
                    <td>
                      <p style={{ margin: "0px" }}>
                        <b>Distributor Address:</b>
                      </p>
                      <div
                        style={{
                          minHeight: 70,
                          maxHeight: 150,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <p style={{ padding: 0, margin: 0 }}>
                          No 4B, Soundarya Apartments,
                          <br />
                          Melayanambakkam,
                          <br />
                          Chennai-600095,
                          <br />
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="col-sm-12 table table-bordered"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderCollapse: "collapse",
                  marginBottom: 2,
                  verticalAlign: "central",
                  fontSize: 12,
                  border: "solid 2px black",
                }}
              >
                <tbody>
                  <tr style={{ fontSize: 14, fontWeight: "bold" }}>
                    <td style={{ fontSize: 14, minWidth: "30%" }}>
                      Conspicuity Tapes 20MM Fitment Details
                    </td>
                    <td colSpan={2} style={{ width: 20, fontSize: 14 }}>
                      Rear Marking Plates Details
                    </td>
                    <td style={{ fontSize: 14 }}>Certificate Details</td>
                  </tr>
                  <tr>
                    <td>
                      <span>20MM - RED : </span>
                      <span id="redlbl20mm">
                        {data?.["data"]?.red20mm
                          ? data?.["data"]?.red20mm
                          : "0.00 Mtrs"}
                      </span>
                    </td>
                    <td>
                      Class 3 : Red Retro Reflective and Yellow Retro Reflective
                      - Alternative Strips
                    </td>

                    <td>
                      {data?.["data"]?.class3 === "1" && (
                        <img
                          style={{ width: "25px", marginTop: "7px" }}
                          src={tick}
                        />
                      )}
                    </td>

                    <td>Type Approved Number: A94495</td>
                  </tr>
                  <tr>
                    <td>
                      <span>20MM WHITE :</span>
                      <span id="White20lbl">
                        {data?.["data"]?.white20mm
                          ? data?.["data"]?.white20mm
                          : "0.00 Mtrs"}
                      </span>
                    </td>
                    <td>
                      Class 4 : Red Retro Reflective border and Yellow Retro
                      Reflective Centre{" "}
                    </td>

                    <td>
                      {data?.["data"]?.class4 === "1" && (
                        <img
                          style={{ width: "25px", marginTop: "7px" }}
                          src={tick}
                        />
                      )}
                    </td>
                    <td>
                      COP Number :<br />
                      SHL/16/2018-2019/3000002951/COP/2711
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", fontSize: 14 }}>
                      Conspicuity Tapes 50MM Fitment Details
                    </td>
                    <td
                      colSpan={2}
                      style={{ width: 20, fontSize: 14, fontWeight: "bold" }}
                    >
                      Previous Certificate Details
                    </td>
                    <td>Test Report Number :SHL/16/2007-2008/2528/1584</td>
                  </tr>
                  <tr>
                    <td>
                      <span>50MM-RED : </span>
                      <span id="red50mmlbl">
                        {data?.["data"]?.red50mm
                          ? data?.["data"]?.red50mm
                          : "0.00 Mtrs"}
                      </span>
                    </td>
                    <td colSpan={2}>Old Certificate No. : NA </td>
                    <td>
                      EC MARK:REAR MARK :SHL/16/2013/-2014/9149/2783 /17.12.2014
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>50MM-WHITE : </span>
                      <span id="white50mmlbl">
                        {data?.["data"]?.white50mm
                          ? data?.["data"]?.white50mm
                          : "0.00 Mtrs"}
                      </span>
                    </td>
                    <td colSpan={2}>Old Certificate date : NA</td>
                    <td rowSpan={2}>
                      Certified By : The Automotive Research Association of
                      India (ARAI)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>50MM-YELLOW : </span>
                      <span id="yellow50mmlbl">
                        {data?.["data"]?.yellow50mm
                          ? data?.["data"]?.yellow50mm
                          : "0.00 Mtrs"}
                      </span>
                    </td>
                    <td colSpan={2}> Old Certificate RTO :NA</td>
                  </tr>
                </tbody>
              </table>
              <table
                className="col-sm-12 table table-bordered"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderCollapse: "collapse",
                  border: "solid 2px black",
                  marginBottom: 2,
                }}
              >
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      {" "}
                      The Maximun Retail Price for the products specified in
                      this Certificate is Rs.
                      {(Number(data?.["data"]?.red20mm) +
                        Number(data?.["data"]?.white20mm) +
                        Number(data?.["data"]?.yellow50mm) +
                        Number(data?.["data"]?.white50mm) +
                        Number(data?.["data"]?.red50mm)) *
                        100 +
                        (data?.["data"]?.class3
                          ? 1100
                          : data?.["data"]?.class4
                          ? 1350
                          : null)}
                      only.
                      <br />
                    </td>
                    <td colSpan={2}>
                      20mm: Rs. 100/Mtr | 50mm: Rs.150/tr | C3: Rs.1100/piece |
                      C4: Rs.1350/piece
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <b>Fitment Images</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Front</td>
                    <td>Back</td>
                    <td>Side-1</td>
                    <td>Side-2</td>
                  </tr>
                  <tr>
                    <td style={{ margin: 0, width: "25%" }}>
                      <img
                        src={data?.["data"]?.frontimage}
                        style={{ width: 150, height: 150 }}
                      />
                    </td>
                    <td style={{ margin: 0, width: "25%" }}>
                      <img
                        src={data?.["data"]?.backimage}
                        style={{ width: 150, height: 150 }}
                      />
                    </td>
                    <td style={{ margin: 0, width: "25%" }}>
                      <img
                        src={data?.["data"]?.leftimage}
                        style={{ width: 150, height: 150 }}
                      />
                    </td>
                    <td style={{ margin: 0, width: "25%" }}>
                      <img
                        src={data?.["data"]?.rightimage}
                        style={{ width: 150, height: 150 }}
                      />
                    </td>
                  </tr>
                  <tr style={{ paddingBottom: 0 }}>
                    <td colSpan={3}>
                      <p
                        style={{
                          verticalAlign: "bottom",
                          fontFamily: '"Times New Roman"',
                          fontSize: 10,
                          margin: 0,
                        }}
                      >
                        This is to certify that we have authorised Distributor /
                        Dealer for the sale AIS-089,090,&amp;037 Compliant 3M
                        Brand Retro reflective Tapes Supplied by us as per CMVR
                        104-1989. The New Print no:{" "}
                        {registerrationSaleData?.["data"]?.total}
                      </p>
                    </td>
                    <td
                      rowSpan={2}
                      style={{
                        paddingBottom: 0,
                        width: 300,
                        verticalAlign: "bottom",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          verticalAlign: "bottom",
                          paddingBottom: 0,
                          fontSize: 10,
                          marginBottom: 0,
                          fontWeight: "bold",
                        }}
                      >
                        <br />
                        <br />
                        Authorized Distributor Seal &amp; Signature
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <p
                        style={{
                          verticalAlign: "bottom",
                          marginBottom: 0,
                          fontSize: 10,
                        }}
                      >
                        We hereby certify that we have supplied/installed
                        ICAT/ARAI Approved Retro Reflective Tapes as per CMRV
                        rule 104 specified under CMVR GSR 784 (E)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <div style={{ paddingTop: 50 }}>
                        <div
                          style={{
                            float: "left",
                            fontSize: 12,
                            fontWeight: "bold",
                            borderTop: "solid 1px black",
                          }}
                        >
                          Authorized Dealer Signature
                        </div>
                        <div
                          style={{
                            float: "right",
                            marginRight: 50,
                            fontSize: 12,
                            fontWeight: "bold",
                            borderTop: "solid 1px black",
                          }}
                        >
                          Customer Signature
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
              margin: "auto",
              width: "99%",
            }}
          >
            [Note: HOLOGRAM MANDATORY WITHOUT HOLOGRAM CERTIFICATE NOT VALID]
          </div>
        </div>
        <div style={{ margin: "auto" }}>
          <table
            style={{
              marginBottom: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
              padding: 10,
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: 10 }}>
                  <CButton
                    name="Print"
                    type="button"
                    className="btn btn-success"
                    onClick={() => onPrint()}
                  >
                    PRINT COPY
                  </CButton>
                </td>
                <td style={{ padding: 10 }}>
                  <Link to="/dashboard">
                    <CButton className="btn btn-primary">New Entry</CButton>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ width: 700, margin: "auto" }}>
            <p
              style={{
                color: "red",
                margin: "auto",
                paddingLeft: 50,
                paddingBottom: 100,
              }}
            >
              Note : While Saving Customer Copy as PDF please select paper size
              as A4. For More details{" "}
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default ViewEntries;
