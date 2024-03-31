import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useGetManufacturerQuery } from "../../../../Services/sales";
import { Link } from "react-router-dom";
import { useUpdateManufacturerMutation } from "../../../../Services/user";

const Manufacturer = () => {
  const [reload, setReload] = React.useState(false);
  const {
    data: manifactData,
    error: manifactError,
    isLoading: manifactLoading,
    refetch,
  } = useGetManufacturerQuery();

  const [updateManufac] = useUpdateManufacturerMutation();

  React.useEffect(() => {
    refetch();
  }, [reload]);

  console.log(manifactData, "manifactDatamanifactDatamanifactData");

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
                let restult = await updateManufac(tempdata);
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
                let restult = await updateManufac(tempdata);
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
      key: "manufacturer_name",
    },
    {
      key: "quantity",
    },
    {
      key: "product_name",
    },
    {
      key: "quantity_price",
    },
    {
      key: "status",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {manifactData && (
        <Table
          column={columns}
          data={manifactData?.["data"]?.data}
          TableName={"Manufacturers"}
          className="width-auto"
          scopedColumns={scopedColumns}
        />
      )}
    </CCard>
  );
};

export default Manufacturer;
