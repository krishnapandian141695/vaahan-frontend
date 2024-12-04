import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import {
  useGetUsersQuery,
  useUpdateSubDistributerMutation,
  useUpdateUserNameMutation,
} from "../../../../Services/user";

const SubDistributor = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [reload, setReload] = React.useState(false);

  const [updateSubDistributor] = useUpdateSubDistributerMutation();
  const [updateUser] = useUpdateUserNameMutation();


  console.log(userInfo, "userInfo4352354");

  let urlString: any = `distributor_id=${userInfo?.userId}`;
  let urlStringAdmin: any = `distributor_name=`;
  let finalQUery = userInfo?.role_id === "2" ? urlString : urlStringAdmin;
  const {
    data: subDistributerData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerQuery(finalQUery);

  const {
    data: userList,
    error: userListError,
    refetch: userLIstRefetch,
  } = useGetUsersQuery();

  React.useEffect(() => {
    subDistributerRefetcg();
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
                let restult = await updateSubDistributor(tempdata);
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
                let restult = await updateSubDistributor(tempdata);
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
      key: "manufacturer_name",
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
      {subDistributerData && (
        <Table
          TableName={"Sub Distributor"}
          column={columns}
          data={subDistributerData?.["data"]?.data}
          className="width-auto"
          scopedColumns={scopedColumns}
        />
      )}
    </CCard>
  );
};

export default SubDistributor;
