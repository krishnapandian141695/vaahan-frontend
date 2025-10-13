import { CButton, CCard, CFormInput, CFormSelect } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
    useGetRtoUserQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import {
    useGetUserByIdQuery,
    useGetUsersQuery,
    useUpdateUserNameMutation,
    useUpdateRtoMutation,
    useChangePasswordMutation,
} from "../../../../Services/user";

const Rto = () => {
    const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
    const [reload, setReload] = React.useState(false);
    const [updateUser] = useUpdateUserNameMutation();
    const [updateRto] = useUpdateRtoMutation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [selectType, setType] = React.useState(null);

  const [passwordInput, setPasswordInput] = React.useState({});
  const [changePassword] = useChangePasswordMutation();
    const { data: rtoData, refetch } = useGetRtoUserQuery();
    const {
        data: userList,
        error: userListError,
        refetch: userLIstRefetch,
    } = useGetUsersQuery();

    React.useEffect(() => {
        refetch();
        userLIstRefetch();
    }, [reload]);

    React.useEffect(() => {
        const updateUserAndRto = async () => {
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
                let restult = await updateRto(tempdata);
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
                let restult = await updateRto(tempdata);
                if (restult && result) {
                    setSelectedUser(null);
                    setType(null);
                    setReload((prev) => !prev);
                }
            }
        };
        updateUserAndRto();
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
            key: "name",
        },
        {
            key: "status",
        },
    ];
    return (
        <CCard className="mb-4 pb-3 p-3">
            {rtoData && (
                <Table
                    column={columns}
                    data={rtoData?.["data"]?.data}
                    TableName={"Rto"}
                    className="width-auto"
                    scopedColumns={scopedColumns}
                />
            )}
        </CCard>
    );
};

export default Rto;
