import { useNavigate } from "react-router-dom";
import "../../../scss/login.scss";
import { Controller, useForm } from "react-hook-form";
import { CAlert, CFormInput } from "@coreui/react";
import { useLoginUsersMutation } from "../../../Services/user";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Slices/loginSlice";
import { RootState } from "../../../Store";
import React from "react";
const Login = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [loginApi] = useLoginUsersMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userInfo?.role_id === 7) {
      navigate("/Entries");
    }
    else if (userInfo) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [userInfo]);

  const onSubmit = async (data) => {
    try {
      const result = await loginApi(data);
      if (result?.["data"]?.success) {
        if (result?.["data"]?.data?.user?.status === "Active") {
          localStorage.setItem("token", result?.["data"]?.data?.access_token);
          localStorage.setItem("name", result?.["data"]?.data?.user?.name);
          localStorage.setItem("rto", result?.["data"]?.data?.user?.email_verified_at);
          localStorage.setItem(
            "role_id",
            result?.["data"]?.data?.user?.role_id
          );
          localStorage.setItem("userId", result?.["data"]?.data?.user?.mobile);
          localStorage.setItem(
            "username",
            result?.["data"]?.data?.user?.username
          );
          localStorage.setItem("profileId", result?.["data"]?.data?.user?.id);
          let userinfo: any = {
            token: result?.["data"]?.data?.access_token,
            name: result?.["data"]?.data?.user?.name,
            userId: result?.["data"]?.data?.user?.id,
            role_id: result?.["data"]?.data?.user?.role_id,
            username: result?.["data"]?.data?.user?.username,
            rto: result?.["data"]?.data?.user?.email_verified_at,
            profileId: result?.["data"]?.data?.user?.id,
          };

          dispatch(login(userinfo));
        } else {
          alert("Please check your username and password");
        }
      } else {
        alert(result?.["error"]?.["data"]?.data?.error);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="mainLogin">
      <div className="wrapperlogin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ color: "black" }}>Login</h1>
          <div className="input-box">
            <Controller
              name="username"
              control={control}
              rules={{ required: "User name is required" }}
              defaultValue=""
              render={({ field }) => (
                <CFormInput
                  className="border"
                  {...field}
                  type="text"
                  placeholder="Name"
                />
              )}
            />
            {errors.email && (
              <div className="text-danger">{"Field is required"}</div>
            )}
          </div>
          <div className="input-box">
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              defaultValue=""
              render={({ field }) => (
                <CFormInput
                  className="border"
                  {...field}
                  placeholder="Password"

                  type="password"
                />
              )}
            />
            {errors.password && (
              <div className="text-danger">{"Field is required"}</div>
            )}
            <i className="bx bxs-lock-alt" />
          </div>
          {/* <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#"> Forgot Password?</a>
          </div> */}
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">About Us</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
