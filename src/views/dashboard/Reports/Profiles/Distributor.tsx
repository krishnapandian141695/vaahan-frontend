import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useGetDisbutersQuery } from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import { useGetUsersQuery, useUpdateDistributerMutation, useUpdateUserNameMutation } from "../../../../Services/user";

const Distributor = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [reload, setReload] = React.useState(false);

  const [updateDistributor] = useUpdateDistributerMutation();
  const [updateUser] = useUpdateUserNameMutation();

  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  const {
    data: userList,
    error: userListError,
    refetch: userLIstRefetch,
  } = useGetUsersQuery();

  console.log(
    userList?.["data"]?.data, "userList09879"
  );


  React.useEffect(() => {
    distributerRefetch();
    userLIstRefetch()
  }, [reload]);

  const scopedColumns = {
    Action: (item) => {
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
                let userId = userList?.["data"]?.data?.filter((data) => data?.mobile === item?.phone_number)
                let registerTemp: any = {
                  status: "InActive",
                  id: userId?.[0]?.id,
                };
                let result = await updateUser(registerTemp);
                let restult = await updateDistributor(tempdata);
                if (restult && result) {
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
                let userId = userList?.["data"]?.data?.filter((data) => data?.mobile === item?.phone_number)
                let registerTemp: any = {
                  status: "Active",
                  id: userId?.[0]?.id,
                };
                let result = await updateUser(registerTemp);
                let restult = await updateDistributor(tempdata);
                if (restult && result) {
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
      key: "user_name",
    },
    {
      key: "manufacturer_name",
    },
    {
      key: "status",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {distributerData && (
        <Table
          column={columns}
          data={distributerData?.["data"]?.data}
          TableName={"Distributer"}
          className="width-auto"
          scopedColumns={scopedColumns}
        />
      )}
    </CCard>
  );
};

export default Distributor;
