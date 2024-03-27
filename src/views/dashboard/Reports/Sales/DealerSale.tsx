import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDealerSaleQuery,
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const DealerSale = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let urlString: any = `dealerName=${userInfo?.name}`;
  let distributer: any = `distributer_name=${userInfo?.name}`;
  let subDistributer: any = `sub_distributer_name=${userInfo?.name}`;
  let urlStringAdmin: any = `dealerName=`;

  let finalQUery =
    userInfo?.role_id === "4"
      ? urlString
      : userInfo?.role_id === "3"
      ? subDistributer
      : userInfo?.role_id === "2"
      ? distributer
      : urlStringAdmin;

  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerSaleQuery(finalQUery);

  console.log(dealerData, "manifactDatamanifactDatamanifactData");

  const columns = [
    {
      key: "distributer_name",
      label : "Distributor Name"
    },
    {
      key: "sub_distributer_name",
      label : "Sub Distributor Name"
    },
    {
      key: "manufacturer_name",
      label : "Manufacturer Name"
    },
    {
      key: "dealerName",
    },
    {
      key: "red20mm",
    },
    {
      key: "red50mm",
    },
    {
      key: "white20mm",
    },
    {
      key: "white50mm",
    },
    {
      key: "yellow50mm",
    },
    {
      key: "redReflector80mm",
    },
    {
      key: "whiteReflector80mm",
    },
    {
      key: "yellowReflector80mm",
    },
    {
      key: "class3",
    },
    {
      key: "class4",
    },
    {
      key: "hologram",
    },
    {
      key: "invoiceNumber",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {dealerData && (
        <Table
          column={columns}
          data={dealerData?.["data"]?.data}
          TableName={"Dealer Sale"}
        />
      )}
    </CCard>
  );
};

export default DealerSale;
