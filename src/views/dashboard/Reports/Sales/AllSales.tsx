import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDealerSaleQuery,
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetDisbutersSaleQuery,
  useGetRegistrationsSaleByUserQuery,
  useGetSubDistributerQuery,
  useGetSubDistributerSaleQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import { formatDateTime } from "../../../../../configData";

const AllSales = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [registerrationSaleData, setRegisterrationSaleData] =
    React.useState(null);

  let saleDistributorStockQuery: any = `dealerName=${userInfo?.userId}`;
  const {
    data: distributerSaleData,
    error: distributerSaleDataError,
    isLoading: distributerSaleDataLoading,
    refetch: distributerSaleDataRefetch,
  } = useGetDisbutersSaleQuery(saleDistributorStockQuery);

  let salesubDistributorStockQuery: any = `dealerName=${userInfo?.userId}`;
  const {
    data: subDistributerSaleData,
    error: subDistributerSaleDataError,
    isLoading: subDistributerSaleDataLoading,
    refetch: subDistributerSaleDataRefetch,
  } = useGetSubDistributerSaleQuery(salesubDistributorStockQuery);

  let urlDealerStockStringSubDis: any = `dealerName=${userInfo?.userId}`;
  const {
    data: dealerStockData,
    error: dealerStockError,
    isLoading: dealerStockLoading,
    refetch: dealerStockRefetch,
  } = useGetDealerSaleQuery(urlDealerStockStringSubDis);

  React.useEffect(() => {
    distributerSaleDataRefetch();
    subDistributerSaleDataRefetch();
    dealerStockRefetch();
    if (userInfo?.role_id === "2") {
      setRegisterrationSaleData(distributerSaleData);
    } else if (userInfo?.role_id === "3") {
      setRegisterrationSaleData(subDistributerSaleData);
    } else if (userInfo?.role_id === "4") {
      setRegisterrationSaleData(dealerStockData);
    }
  }, [dealerStockData, subDistributerSaleData, distributerSaleData]);

  const scopedColumns = {
    created_at: (item) => {
      console.log(item, "item4523452");
      return <td>{formatDateTime(item?.created_at)}</td>;
    },
  };

  const columns = [
    {
      key: "created_at",
      label: "Date",
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
      {registerrationSaleData && (
        <Table
          column={columns}
          scopedColumns={scopedColumns}
          data={registerrationSaleData?.["data"]?.data}
          TableName={"All Sale"}
          // className={"w-100"}
        />
      )}
    </CCard>
  );
};

export default AllSales;
