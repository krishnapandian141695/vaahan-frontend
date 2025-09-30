import { CButton, CCard, CFormSelect } from "@coreui/react";
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
  useGetUsersQuery,
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
  const { data: subDistributerData } = useGetSubDistributerQuery();
  const {
    data: userList,
    error: userListError,
    refetch: userLIstRefetch,
  } = useGetUsersQuery();

  let urlString: any = `distributor_id=${userInfo?.userId}`;
  let urlStringSubDis: any = `sub_distributor_id=${userInfo?.userId}`;
  let urlStringAdmin: any = `distributor_name=`;
  let finalQUery =
    userInfo?.role_id === "1"
      ? urlStringAdmin
      : userInfo?.role_id === "2"
        ? urlString
        : urlStringSubDis;

  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerUserQuery(finalQUery);

  React.useEffect(() => {
    dealerRefetch();
    userLIstRefetch();
  }, [reload]);

  React.useEffect(() => {
    const updateUserAndDealer = async () => {
      if (
        selectType === "InActive"
      ) {
        let tempdata = {
          ...selectedUser,
          status: "InActive", // Corrected status to "Inactive"
        };
        let userId = userList?.["data"]?.data?.filter((data) => data?.username === selectedUser?.user_name)
        let registerTemp: any = {
          status: "InActive", // Corrected status to "Inactive"
          id: userId?.[0]?.id,
        };
        let result = await updateUser(registerTemp);
        let restult = await updateDealer(tempdata);
        if (restult && result) {
          setSelectedUser(null);
          setType(null);
          setReload((prev) => !prev);
        }
      } else if (
        selectType === "Active"
      ) {
        let tempdata = {
          ...selectedUser,
          status: "Active",
        };
        let userId = userList?.["data"]?.data?.filter((data) => data?.username === selectedUser?.user_name)
        let registerTemp: any = {
          status: "Active", // Corrected status to "Inactive"
          id: userId?.[0]?.id,
        };
        let result = await updateUser(registerTemp);
        let restult = await updateDealer(tempdata);
        if (restult && result) {
          setSelectedUser(null);
          setType(null);
          setReload((prev) => !prev);
        }
      } else if (selectType === "UpdateSubDistributor") {
        let tempdata = {
          ...selectedUser,
        };
        let restult = await updateDealer(tempdata);
        if (restult) {
          setSelectedUser(null);
          setType(null);
          setReload((prev) => !prev);
        }
      }
    };

    updateUserAndDealer();
  }, [selectedUser]);

  const scopedColumns = {
    Action: (item) => {
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
    SubDistributor_name: (item) => {
      return (
        <CFormSelect
          value={item.sub_distributor_id || ""}
          onChange={(e) => {
            setSelectedUser({ ...item, sub_distributor_id: e.target.value });
            setType("UpdateSubDistributor");
          }}
        >
          <option value="">Select Sub-Distributor</option>
          {subDistributerData?.["data"]?.data.map((sub) => (
            <option key={sub.user_name} value={sub.user_name}>
              {sub.name}
            </option>
          ))}
        </CFormSelect>
      );
    },
  };

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
      key: "SubDistributor_name",
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
