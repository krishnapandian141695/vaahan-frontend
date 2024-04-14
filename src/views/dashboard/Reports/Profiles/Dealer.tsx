import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import {
  useUpdateDealerMutation,
  useUpdateUserNameMutation,
} from "../../../../Services/user";

const Dealer = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [reload, setReload] = React.useState(false);

  const [updateDealer] = useUpdateDealerMutation();

  let urlString: any = `distributor_name=${userInfo?.name}`;
  let urlStringSubDis: any = `sub_distributor_name=${userInfo?.name}`;
  let urlStringAdmin: any = `distributor_name=`;
  let finalQUery =
    userInfo?.role_id === "1"
      ? urlStringAdmin
      : userInfo?.role_id === "2"
      ? urlString
      : urlStringSubDis;

  console.log(userInfo, "userInfo423");
  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerUserQuery(finalQUery);

  React.useEffect(() => {
    dealerRefetch();
  }, [reload]);

  const scopedColumns = {
    Action: (item) => {
      console.log(item, "item4523452");
      return (
        <td>
          {item?.status === "Active" ? (
            <CButton
              variant="ghost"
              type="button"
              onClick={async () => {
                let tempdata = {
                  ...item,
                  status: "InActive",
                };
                let registerTemp: any = {
                  status: "InActive",
                  id: userInfo?.profileId,
                };
                let result = await useUpdateUserNameMutation(registerTemp);
                let restult = await updateDealer(tempdata);
                console.log(restult, "restult", result);
                if (restult) {
                  setReload((prev) => !prev);
                }
              }}
            >
              InActive
            </CButton>
          ) : (
            <CButton
              variant="ghost"
              type="button"
              onClick={async () => {
                let tempdata = {
                  ...item,
                  status: "Active",
                };
                let registerTemp: any = {
                  status: "Active",
                  id: userInfo?.profileId,
                };
                let result = await useUpdateUserNameMutation(registerTemp);
                let restult = await updateDealer(tempdata);
                console.log(restult, "restult", result);
                if (restult) {
                  setReload((prev) => !prev);
                }
              }}
            >
              Active
            </CButton>
          )}
        </td>
      );
    },
  };
  console.log(dealerData, "manifactDatamanifactDatamanifactData");

  const columns = [
    {
      key: "Action",
    },
    {
      key: "name",
    },
    {
      key: "phone_number",
    },
    {
      key: "email_id",
    },
    {
      key: "address",
    },
    {
      key: "distributor_name",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {dealerData && (
        <Table
          column={columns}
          data={dealerData?.["data"]?.data}
          TableName={"Dealer"}
          className="width-auto"
          scopedColumns={scopedColumns}
        />
      )}
    </CCard>
  );
};

export default Dealer;
