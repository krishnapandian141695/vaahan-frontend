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
  useGetUserByIdQuery,
  useUpdateDealerMutation,
  useUpdateUserNameMutation,
} from "../../../../Services/user";

const Dealer = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [reload, setReload] = React.useState(false);
  const [updateDealer] = useUpdateDealerMutation();
  const [updateUser] = useUpdateUserNameMutation();
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [selectType, setType] = React.useState(null);
  const {
    data: byRegisterUser,
    error: byRegisterUserError,
    refetch: byRegisterUserRefetch,
  } = useGetUserByIdQuery(selectedUser?.user_name);

  console.log(
    byRegisterUser?.["data"]?.data?.[0]?.id,
    "byRegisterUser",
    selectedUser
  );

  let urlString: any = `distributor_id=${userInfo?.userId}`;
  let urlStringSubDis: any = `sub_distributor_id=${userInfo?.userId}`;
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

  React.useEffect(() => {
    const updateUserAndDealer = async () => {
      if (
        selectType === "InActive" &&
        byRegisterUser &&
        byRegisterUser?.["data"]?.data?.length > 0
      ) {
        let tempdata = {
          ...selectedUser,
          status: "InActive", // Corrected status to "Inactive"
        };
        let registerTemp: any = {
          status: "InActive", // Corrected status to "Inactive"
          id: byRegisterUser?.["data"]?.data?.[0]?.id,
        };
        let result = await updateUser(registerTemp);
        let restult = await updateDealer(tempdata);
        console.log(restult, "restult", result);
        if (restult) {
          setSelectedUser(null);
          setType(null);
          setReload((prev) => !prev);
        }
      } else if (
        selectType === "Active" &&
        byRegisterUser &&
        byRegisterUser?.["data"]?.data?.length > 0
      ) {
        let tempdata = {
          ...selectedUser,
          status: "Active",
        };
        let registerTemp: any = {
          status: "Active",
          id: byRegisterUser?.["data"]?.data?.[0]?.id,
        };
        let result = await updateUser(registerTemp);
        let restult = await updateDealer(tempdata);
        console.log(restult, "restult", result);
        if (restult) {
          setSelectedUser(null);
          setType(null);
          setReload((prev) => !prev);
        }
      }
    };

    updateUserAndDealer();
  }, [byRegisterUser]);

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
                setType("InActive");
                setSelectedUser(item);
              }}
            >
              InActive
            </CButton>
          ) : (
            <CButton
              variant="ghost"
              type="button"
              onClick={async () => {
                setSelectedUser(item);
                setType("Active");
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
    {
      key: "status",
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
