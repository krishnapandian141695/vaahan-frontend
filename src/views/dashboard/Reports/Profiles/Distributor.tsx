import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useGetDisbutersQuery } from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import { useUpdateDistributerMutation } from "../../../../Services/user";

const Distributor = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [reload, setReload] = React.useState(false);

  const [updateDistributor] = useUpdateDistributerMutation();
  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  React.useEffect(() => {
    distributerRefetch();
  }, [reload]);
  console.log(
    distributerData,
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
                let restult = await updateDistributor(tempdata);
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
                let restult = await updateDistributor(tempdata);
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
