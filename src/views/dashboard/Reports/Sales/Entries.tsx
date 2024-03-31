import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import { useGetRegistrationsSaleByUserQuery } from "../../../../Services/sales";
import { Link } from "react-router-dom";

const Entries = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let dealerName: any = `dealer_name=${userInfo?.name}`;
  let distributer: any = `distributer_name=${userInfo?.name}`;
  let subDistributer: any = `sub_distributer_name=${userInfo?.name}`;
  let urlStringAdmin: any = `dealerName=`;
  let finalQUery =
    userInfo?.role_id === "2"
      ? distributer
      : userInfo?.role_id === "3"
      ? subDistributer
      : userInfo?.role_id === "4"
      ? dealerName
      : urlStringAdmin;

  const {
    data: registerrationSaleData,
    error: registerationError,
    isLoading: registerrationLoding,
    refetch: registerrationRefetch,
  } = useGetRegistrationsSaleByUserQuery(urlStringAdmin);

  console.log(registerrationSaleData, "registerrationSaleData45234");

  const columns = [
    { key: "Action" },
    { key: "certificateno", label: "Certificate No" },
    { key: "vehicleregno", label: "Vehical No" },
    { key: "date", label: "Entrie Date" },
    { key: "ownername", label: "Owner Name" },
    { key: "address" },
    { key: "phoneo", label: "Phone Number" },
    { key: "rto" },
    { key: "invoice_number" },
  ];

  const scopedColumns = {
    Action: (item) => {
      console.log(item, "item4523452");
      return (
        <td>
          <Link to={`/ViewEntries/${item?.id}`}>
            <CButton variant="ghost" type="button">
              View
            </CButton>
          </Link>
        </td>
      );
    },
    certificateno: (item) => {
      console.log(item, "item4523452");
      return (
        <td>
          <Link to={`/ViewEntries/${item?.id}`}>{item?.certificateno}</Link>
        </td>
      );
    },
  };

  return (
    <CCard className="mb-4 pb-3 p-3">
      {registerrationSaleData && (
        <Table
          column={columns}
          data={registerrationSaleData?.["data"]?.data}
          scopedColumns={scopedColumns}
          TableName={"Entries"}
          className="w-100"
        />
      )}
    </CCard>
  );
};

export default Entries;
