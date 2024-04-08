import {
  CCard,
  CCardHeader,
  CForm,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
} from "@coreui/react";
import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useChangePasswordMutation } from "../../Services/user";
import { useNavigate } from "react-router-dom";
import { login } from "../../Slices/loginSlice";
import { useGetDisbutersQuery } from "../../Services/sales";

const ChangePassword = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  console.log(userInfo, "userInfo34523");
  const [ChangePassword] = useChangePasswordMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      user_name: userInfo?.username,
      password: null,
      confirmPassword: null,
    },
  });
  const formData = watch();
  const dispatch = useDispatch();

  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  const onSubmit = async () => {
    let tempRegister = {
      ...formData,
      ...(userInfo?.role_id === "2"
        ? { distributor_user: "1" }
        : userInfo?.role_id === "3"
        ? { sub_distributor_user: "1" }
        : { dealer_user: "1" }),
    };
    console.log(tempRegister, "tempRegister342");
    try {
      await ChangePassword(tempRegister);
      alert("Password updated please login again");
      logOut();
    } catch (error) {
      console.log(error, "error");
    }
  };

  const logOut = () => {
    localStorage.removeItem("role_id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    dispatch(login(null));
  };

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CCard className="mb-4 pb-3 py-1">
        <CCardHeader className="py-3">
          <h3>Change Password</h3>
        </CCardHeader>
        <CCardBody>
          <div className="row">
            {userInfo?.role_id === "1" && (
              <div className="col-sm-6 mb-3">
                <Controller
                  name="user_name"
                  control={control}
                  rules={{ required: "Type is required" }}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormSelect
                      aria-label="Default select"
                      className="border form-control"
                      {...field}
                    >
                      <option>Select</option>
                      {distributerData?.["data"]?.data &&
                        distributerData?.["data"]?.data?.map((item) => (
                          <option value={item?.name}>{item?.name}</option>
                        ))}
                    </CFormSelect>
                  )}
                />
                {errors.user_name && (
                  <div className="text-danger">{"Field is required"}</div>
                )}
              </div>
            )}
            {userInfo?.role_id !== "1" && (
              <div className="col-sm-6 mb-3">
                <Controller
                  name="user_name"
                  control={control}
                  rules={{ required: "User Name is required" }}
                  render={({ field }) => (
                    <CFormInput
                      disabled={true}
                      className="border"
                      {...field}
                      type="text"
                      placeholder="User Name"
                    />
                  )}
                />
                {errors.user_name && (
                  <div className="text-danger">{"Field is required"}</div>
                )}
              </div>
            )}
            <div className="col-sm-6 mb-3">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password Name is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  validate: (value) =>
                    value === formData?.password || "Passwords do not match",
                }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="password"
                    placeholder="Confirm Password"
                  />
                )}
              />
              {errors.confirmPassword && (
                <div className="text-danger">{"Passwords do not match"}</div>
              )}
            </div>
          </div>
        </CCardBody>
        <div className="col-sm-12 text-center">
          <CButton variant="outline" type="submit">
            Submit
          </CButton>
        </div>
      </CCard>
    </CForm>
  );
};

export default ChangePassword;
