import { CButton, CCard, CFormInput } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import {
  useChangePasswordMutation,
  useGetUsersQuery,
  useUpdateSubDistributerMutation,
  useUpdateUserNameMutation,
} from "../../../../Services/user";

const SubDistributor = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [reload, setReload] = React.useState(false);
  const [passwordInput, setPasswordInput] = React.useState({});

  const [updateSubDistributor] = useUpdateSubDistributerMutation();
  const [updateUser] = useUpdateUserNameMutation();
  const [changePassword] = useChangePasswordMutation();

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

                let userId = userList?.["data"]?.data?.filter((data) => data?.username === item?.user_name)
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
                let userId = userList?.["data"]?.data?.filter((data) => data?.username === item?.user_name)

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
    UpdatePassword: (item) => {
      return (
        <td>
          <CFormInput
            type="password"
            placeholder="New Password"
            value={passwordInput[item.user_name] || ""}
            onChange={(e) =>
              setPasswordInput({
                ...passwordInput,
                [item.user_name]: e.target.value,
              })
            }
            className="mb-2"
          />
          <CButton
            variant="outline"
            color="primary"
            onClick={async () => {
              const userId = userList?.["data"]?.data?.filter(
                (data) => data?.username === item?.user_name,
              )?.[0]?.id;
              const role_id = userList?.["data"]?.data?.filter(
                (data) => data?.username === item?.user_name,
              )?.[0]?.role_id;
              if (userId && passwordInput[item.user_name]) {
                let tempRegister = {
                  id: userId,
                  user_name: item.user_name,
                  confirmPassword: passwordInput[item.user_name],
                  password: passwordInput[item.user_name],
                  ...(role_id === 2
                    ? { distributor_user: "1" }
                    : role_id === 3
                      ? { sub_distributor_user: "1" }
                      : { dealer_user: "1" }),
                };
                try {
                  await changePassword(tempRegister);
                  alert("Password updated successfully!");
                } catch (error) {
                  console.log(error, "error");
                }
                setPasswordInput((prev) => {
                  const newState = { ...prev };
                  delete newState[item.user_name];
                  return newState;
                });
              } else {
                alert("Please enter a password.");
              }
            }}
          >
            Update
          </CButton>
        </td>
      );
    },
  };

  const columns = [
    {
      key: "Action",
    },
    {
      key: "UpdatePassword",
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

