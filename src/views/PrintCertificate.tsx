import React from "react";

const PrintCertificate = () => {
  return (
    <div>
      <div
        id="Certificate"
        className="container-fluid"
        style={{ marginTop: 30, width: 800 }}
      >
        <link href="../Content/bootstrap-theme.css" rel="stylesheet" />
        <link href="../Content/bootstrap-theme.min.css" rel="stylesheet" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            .table {\n                width: 100%;\n            }\n\n                .table tbody tr td {\n                    padding: 3px !important;\n                    padding-bottom: 4px;\n                    font-size: 12px;\n                    font-family: 'Arial, Helvetica, sans-serif';\n                    color: black;\n                    padding-left: 10px;\n                    border: solid .1pt grey;\n                    vertical-align: top;\n                }\n\n                .table tbody tr {\n                    padding: 5px !important;\n                    padding-bottom: 5px;\n                    font-size: 14px;\n                    color: black;\n                    padding-left: 10px;\n                }\n        ",
          }}
        />
        <div className="container-fluid" style={{ margin: "auto", padding: 0 }}>
          <div
            className="row"
            style={{ margin: "auto", padding: 0, color: "black", height: 120 }}
          >
            <div>
              <img
                src="../images/3mwm.jpg"
                style={{
                  position: "absolute",
                  width: 800,
                  height: 1050,
                  zIndex: -1,
                  opacity: ".3",
                }}
              />
            </div>
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
                      <img
                        src="../TapeQRCode/TN10Y4694.png"
                        style={{ height: 110 }}
                      />
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
                        src="../images/3M_logo.png"
                        style={{ height: 100, marginTop: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div style={{ width: "99%", margin: "auto", fontSize: 12 }}>
            <span style={{ margin: 0, paddingLeft: 5, float: "right" }}>
              Hologram No.: 20882
            </span>
            <br />
            <span style={{ margin: 0, paddingLeft: 5, float: "left" }}>
              TO:
            </span>
            <span style={{ paddingLeft: 5, float: "left", width: 400 }}>
              The Regional Transport Office
              <br />
              TN09 TN09-CHENNAI WEST
            </span>
            <span style={{ float: "right", textAlign: "right" }}>
              Certificate NO :<b> 3MRRT0864826 </b>
              <br />
              Fitment Date : 20-07-2022{" "}
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
                      TN10Y4694
                    </span>
                  </td>
                  <td>
                    Registration Year:<b>2010</b>
                  </td>
                </tr>
                {/*  <tr>
              <td><span style="font-family:Times New Roman;font-weight:bold;">UIN : </span> 
              <span id="rtolbl" style="font-family:Times New Roman;font-weight:bold;"></span></td>
              <td><span style="font-family:Times New Roman;">Date : </span>
              <span id="datelbl1" style="font-family:Times New Roman;"></span></td>
            <td><span style="font-family:Times New Roman;">Validity: </span>
              <span id="expdate" style="font-family:Times New Roman;"></span></td>
            <td><span style="font-family:Times New Roman;">SLD Make : </span>
              <span id="speedmklbl" style="font-family:Times New Roman;"></span></td>
            
          </tr>*/}
                <tr>
                  <td>
                    <span>Chassis No : </span>
                    <span id="chissnolbl" style={{ fontWeight: "bold" }}>
                      55365
                    </span>
                  </td>
                  <td>
                    <span>Engine NO : </span>
                    <span id="englbl" style={{ fontWeight: "bold" }}>
                      59040
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Vehicle Make: </span>
                    <span id="vhlmakelbl">Tvs</span>
                  </td>
                  <td>
                    <span>Vehicle Model : </span>
                    <span id="modellbl">TVS Auto</span>
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
                    <span id="ownerlbl">SANKAR</span>
                    <br />
                    <span>Contact Number : </span>
                    <span id="phonelbl">9444480217</span>
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
                      <p style={{ padding: 0, margin: 0 }}>CHENNAI,</p>
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
                      <p style={{ padding: 0, margin: 0 }}>
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
                    <p>
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
                    <span id="redlbl20mm">1.10 Mtrs</span>
                  </td>
                  <td>
                    Class 3 : Red Retro Reflective and Yellow Retro Reflective -
                    Alternative Strips
                  </td>
                  <td></td>
                  <td>Type Approved Number: A94495</td>
                </tr>
                <tr>
                  <td>
                    <span>20MM WHITE :</span>
                    <span id="White20lbl">1.40 Mtrs</span>
                  </td>
                  <td>
                    Class 4 : Red Retro Reflective border and Yellow Retro
                    Reflective Centre{" "}
                  </td>
                  <td></td>
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
                    <span id="red50mmlbl">0.00 Mtrs</span>
                  </td>
                  <td colSpan={2}>Old Certificate No. : NA </td>
                  <td>
                    EC MARK:REAR MARK :SHL/16/2013/-2014/9149/2783 /17.12.2014
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>50MM-WHITE : </span>
                    <span id="white50mmlbl">0.00 Mtrs</span>
                  </td>
                  <td colSpan={2}>Old Certificate date : NA</td>
                  <td rowSpan={2}>
                    Certified By : The Automotive Research Association of India
                    (ARAI)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>50MM-YELLOW : </span>
                    <span id="yellow50mmlbl">0.00 Mtrs</span>
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
                    The Maximun Retail Price for the products specified in this
                    Certificate is Rs.250 only.
                    <br />
                  </td>
                  <td colSpan={2}>
                    20mm: Rs. 30/feet | 50mm: Rs.46/feet | C3: Rs.650/piece |
                    C4: Rs.750/piece
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
                      src="../frontimage/frontTN 10 Y 4694fb8c2f77-0251-4d48-ab07-862dd0717670.jpeg"
                      style={{ width: 150 }}
                    />
                  </td>
                  <td style={{ margin: 0, width: "25%" }}>
                    <img
                      src="../backimage/backTN 10 Y 4694fb8c2f77-0251-4d48-ab07-862dd0717670.jpeg"
                      style={{ width: 150 }}
                    />
                  </td>
                  <td style={{ margin: 0, width: "25%" }}>
                    <img
                      src="../leftimage/leftTN 10 Y 4694fb8c2f77-0251-4d48-ab07-862dd0717670.jpeg"
                      style={{ width: 150 }}
                    />
                  </td>
                  <td style={{ margin: 0, width: "25%" }}>
                    <img
                      src="../rightimage/rightTN 10 Y 4694fb8c2f77-0251-4d48-ab07-862dd0717670.jpeg"
                      style={{ width: 150 }}
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
                      104-1989. The New Print no: 030420241732255{" "}
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
                      ICAT/ARAI Approved Retro Reflective Tapes as per CMRV rule
                      104 specified under CMVR GSR 784 (E)
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
    </div>
  );
};

export default PrintCertificate;
