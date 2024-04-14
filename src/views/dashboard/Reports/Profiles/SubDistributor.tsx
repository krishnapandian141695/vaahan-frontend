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

  React.useEffect(() => {
    subDistributerRefetcg();
  }, [reload]);

  console.log(
    subDistributerData,
    urlString,
    "manifactDatamanifactDatamanifactData",
    userInfo
  );

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
                let result = await updateUser(registerTemp);
                let restult = await updateSubDistributor(tempdata);
                console.log(restult, "restult");
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
                let result = await updateUser(registerTemp);
                let restult = await updateSubDistributor(tempdata);
                console.log(restult, "restult");
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
