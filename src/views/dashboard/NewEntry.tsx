import {
  CCard,
  CCardHeader,
  CForm,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
  CCardTitle,
  CCardText,
  CBadge,
  CFormLabel,
  CFormTextarea,
} from "@coreui/react";
import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateDealerStockSaleMutation, useUpdateDealerStockSaleMutation, useGetRegistrationsSaleByIdQuery } from "../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useGetByDealerUserNameQuery } from "../../Services/user";
import {
  companies,
  formatDate,
  modalTypes,
  rtoList,
} from "../../../configData";

const NewEntry = ({
  heading,
  totalEachIitemValues,
  registerrationSaleData,
  id
}) => {

  const navigate = useNavigate();
  const [createDealerStock] = useCreateDealerStockSaleMutation();
  const [updateDealerStock] = useUpdateDealerStockSaleMutation();
  const { data: registrationData, isLoading: isRegistrationDataLoading } =
    useGetRegistrationsSaleByIdQuery(id, { skip: !id });
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  React.useEffect(() => {
    if (id && registrationData) {
      const dataToSet = registrationData?.["data"];
      if (dataToSet) {
        Object.keys(dataToSet).forEach((key) => {
          setValue(key, dataToSet[key]);
        });
      }
    }
  }, [id, registrationData, setValue]);
  // const currenUserInfo = useSelector((state: RootState) => state.loginState.loginDetails);

  // console.log(currenUserInfo, "currenUserInfo2543")

  const {
    data: byDealerUser,
    error: byDealerUserError,
    refetch: byDealerUserRefetch,
  } = useGetByDealerUserNameQuery(userInfo?.userId);

  const formData = watch();

  // React.useEffect(() => {
  //   const checkDisableStatus = () => {
  //     const valuesToCheck = [
  //       formData.red20mm,
  //       formData.white20mm,
  //       formData.red50mm,
  //       formData.white50mm,
  //       formData.yellow50mm,
  //       formData.redReflector80mm,
  //       formData.whiteReflector80mm,
  //       formData.yellowReflector80mm,
  //       formData.class3,
  //       formData.class4,
  //       formData.hologram,
  //     ];

  //     const anyValueIsZeroOrFalsy = valuesToCheck?.some(
  //       (value) => !value || Number(value) === 0
  //     );
  //     setIsSubmitDisabled(anyValueIsZeroOrFalsy);
  //   };
  //   checkDisableStatus();
  // }, [formData]);

  React.useEffect(() => {
    if (formData.vehiclemake && formData.vehiclemodel) {
      const selectedMakeData = modalTypes[formData.vehiclemake];
      if (selectedMakeData) {
        const selectedModelData = selectedMakeData[formData.vehiclemodel];
        if (selectedModelData) {
          setValue("red20mm", selectedModelData["RED 20MM"] || "0");
          setValue("white20mm", selectedModelData["White 20MM"] || "0");
          setValue("red50mm", selectedModelData["RED 50MM"] || "0");
          setValue("white50mm", selectedModelData["White 50MM"] || "0");
          setValue("yellow50mm", selectedModelData["Yellow 50MM"] || "0");
          setValue("class3", selectedModelData["C3"] || "0");
          setValue("class4", selectedModelData["C4"] || "0");
        }
      }
    }
  }, [formData.vehiclemake, formData.vehiclemodel, setValue]);

  const onSubmit = async (data: any) => {
    try {
      let tempCountCheck = Math.max(
        0,
        Number(totalEachIitemValues?.hologram) -
        Number(
          (id ? registrationData : registerrationSaleData)?.["data"]?.data
            ?.length
        )
      );
      if (tempCountCheck <= 0 || !totalEachIitemValues) {
        alert("Hologram stock not available");
        return;
      }

      let tempData = {
        ...data,
        dealername: userInfo?.userId,
        dealer_id: userInfo?.userId,
        distributor_id: byDealerUser?.["data"]?.data?.[0]?.distributor_id,
        manufacturer_name: byDealerUser?.["data"]?.data?.[0]?.manufacturer_name,
        distributer_name: byDealerUser?.["data"]?.data?.[0]?.distributer_name,
      };

      const formData = new FormData();
      for (const key in tempData) {
        formData.append(key, tempData[key]);
      }

      if (id) {
        await updateDealerStock({ id, ...tempData }); // Use tempData for update
        navigate("/Entries");
      } else {
        const result = await createDealerStock(formData);
        if (!result?.["data"]?.["response"]) {
          return;
        }
        navigate("/Entries");
      }
      navigate("/Entries");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isRegistrationDataLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CCard className="mb-4 pb-3 p-3 pt-0">
        {heading}
        <div className="d-flex justify-content-between py-3">
          <CBadge color="dark">Stock Available</CBadge>
          <CBadge color="info">New Sales</CBadge>
        </div>
        <div className="row">
          <>
            {[
              {
                color: "black",
                textColor: "black",
                title: "Red20mm",
                value: totalEachIitemValues?.red20mm
                  ? totalEachIitemValues?.red20mm
                  : 0,
                background: "#f800004a",
              },
              {
                color: "black",
                textColor: "black",
                title: "White20mm",
                value: totalEachIitemValues?.white20mm
                  ? totalEachIitemValues?.white20mm
                  : 0,
                background: "#91919129",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red50mm",
                value: totalEachIitemValues?.red50mm
                  ? totalEachIitemValues?.red50mm
                  : 0,
                background: "#f800004a",
              },
              {
                color: "black",
                textColor: "black",
                title: "white50mm",
                value: totalEachIitemValues?.white50mm
                  ? totalEachIitemValues?.white50mm
                  : 0,
                background: "#91919129",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow50mm",
                value: totalEachIitemValues?.yellow50mm
                  ? totalEachIitemValues?.yellow50mm
                  : 0,
                background: "#cddc3957",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red80mm",
                value: totalEachIitemValues?.redReflector80mm
                  ? totalEachIitemValues?.redReflector80mm
                  : 0,
                background: "#f800004a",
              },
              {
                color: "black",
                textColor: "black",
                title: "White80mm",
                value: totalEachIitemValues?.whiteReflector80mm
                  ? totalEachIitemValues?.whiteReflector80mm
                  : 0,
                background: "#91919129",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow80mm",
                value: totalEachIitemValues?.yellowReflector80mm
                  ? totalEachIitemValues?.yellowReflector80mm
                  : 0,
                background: "#cddc3957",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class3",
                value:
                  totalEachIitemValues?.class3 === "NaN"
                    ? 0
                    : totalEachIitemValues?.class3
                      ? totalEachIitemValues?.class3
                      : 0,
                background: "#3399ff63",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class4",
                value:
                  totalEachIitemValues?.class4 === "NaN"
                    ? 0
                    : totalEachIitemValues?.class4
                      ? totalEachIitemValues?.class4
                      : 0,
                background: "#3399ff63",
              },
              {
                color: "black",
                textColor: "black",
                title: "Hologram",
                value:
                  userInfo?.role_id === "4"
                    ? totalEachIitemValues
                      ? Math.max(
                        0,
                        Number(totalEachIitemValues?.hologram) -
                        Number(
                          registerrationSaleData?.["data"]?.data?.length
                        )
                      )
                      : 0
                    : totalEachIitemValues?.hologram,
                background: "#3399ff63",
              },
            ].map((item, index) => (
              <div className="col-sm-2">
                <CCard
                  textColor={item.textColor}
                  className={`mb-3 border-${item.color} countCard`}
                  style={{ maxWidth: "18rem", background: item.background }}
                  key={index}
                >
                  <CCardHeader>{item?.title}</CCardHeader>
                  <CCardBody>
                    <CCardText className="text-black">{item?.value}</CCardText>
                  </CCardBody>
                </CCard>
              </div>
            ))}
          </>
        </div>
      </CCard>
      <CForm onSubmit={handleSubmit(onSubmit)}>
        <CCard className="mb-4 pb-3 py-1">
          <CCardBody>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Vehicle Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="date"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Date"
                              {...field}
                              type="date"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.date?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="vehicleregno"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Vehicle Reg No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.vehicleregno?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="vehiclemanufacturingyear"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Vahicle Manufacturing Year"
                              {...field}
                              type="text"
                              placeholder="Year"
                            />
                          )}
                        />
                        {errors.vehiclemanufacturingyear?.type ===
                          "required" && (
                            <div className="text-danger">
                              {"Field is required"}
                            </div>
                          )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="chassisnum"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Chassis No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.chassisnum?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="engineno"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Engine No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.engineno?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="vehiclemake"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormSelect
                              aria-label="Default select"
                              className="border form-control"
                              label="Vechicle Make"
                              {...field}
                            >
                              <option>{"Select"}</option>

                              {companies &&
                                companies?.map((item) => {
                                  return (
                                    <option value={Object.keys(item)[0]}>
                                      {Object.keys(item)[0]}
                                    </option>
                                  );
                                })}
                            </CFormSelect>
                          )}
                        />
                        {errors.vehiclemake?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="vehiclemodel"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormSelect
                              aria-label="Default select"
                              className="border form-control"
                              label="Vechicle Model"
                              {...field}
                            >
                              <option value={''}>{'Select Model'}</option>
                              {modalTypes && formData?.vehiclemake &&
                                Object?.entries(
                                  modalTypes[formData.vehiclemake])?.map(
                                    (item: any, index) => {
                                      return <option value={item[0]}>{item[0]}</option>;
                                    }
                                  )}
                            </CFormSelect>
                          )}
                        />
                        {errors.vehiclemodel?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="ownername"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Owner Name"
                              {...field}
                              type="text"
                              placeholder=""
                            />
                          )}
                        />
                        {errors.ownername?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="address"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Address"
                              {...field}
                              type="text"
                              placeholder=""
                            />
                          )}
                        />
                        {errors.address?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="phoneo"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Phone No"
                              {...field}
                              type="text"
                              placeholder="+91"
                            />
                          )}
                        />
                        {errors.phoneo?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="rto"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormSelect
                              label="Select RTO"
                              aria-label="Default select"
                              className="border form-control"
                              {...field}
                            >
                              <option>Select</option>
                              {rtoList &&
                                Object.entries(rtoList)?.map((item) => {
                                  return (
                                    <option value={`${item[0] + "" + item[1]}`}>
                                      {item[0]}
                                    </option>
                                  );
                                })}
                            </CFormSelect>
                          )}
                        />
                        {errors.user_type && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="hologramnum"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Hologram Number"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.hologramnum?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      {(byDealerUser?.["data"]?.data?.[0]?.manufacturer_name ===
                        "KTV3M INDIA" || byDealerUser?.["data"]?.data?.[0]?.manufacturer_name === "reflex") && (
                          <div className="col-sm-6 mb-3">
                            <Controller
                              name="remarks"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <CFormInput
                                  className="border"
                                  label="Dealer Name"
                                  {...field}
                                  type="text"
                                  placeholder=""
                                />
                              )}
                            />
                            {errors.remarks?.type === "required" && (
                              <div className="text-danger">
                                {"Field is required"}
                              </div>
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Reflective Tape Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row mt-4">
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="red20mm"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="RED 20MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.red20mm && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="white20mm"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="WHITE 20MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.white20mm && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="red50mm"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="RED 50MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.red50mm && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="white50mm"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="WHITE 50MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.white50mm && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="yellow50mm"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="YELLOW 50MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.white50mm && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="red80circularreflector"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="RED 80MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.red80circularreflector && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="white80circularreflector"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="WHITE 80MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.white80circularreflector && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="yellow80circularreflector"
                          control={control}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="YLLOW 80MM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.yellow80circularreflector && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="class3"
                          control={control}
                          rules={{ pattern: /^[01]$/ }}
                          defaultValue="0"
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="CLASS 3"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.class3 && (
                          <div className="text-danger">
                            {"Please enter either 0 or 1"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
                        <Controller
                          name="class4"
                          control={control}
                          rules={{ pattern: /^[01]$/ }}
                          defaultValue="0"
                          disabled={!formData?.class3 ? false : true}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="CLASS 4"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.class4 && (
                          <div className="text-danger">
                            {"Please enter either 0 or 1"}
                          </div>
                        )}
                      </div>
                      {/* <div className="col-sm-6 mb-3">
                        <Controller
                          name="hologram"
                          control={control}
                          rules={{ required: "Field is required" }}
                          defaultValue=""
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="HOLOGRAM"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.hologram && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div> */}
                      {/* <div className="col-sm-6 mb-3">
                        <Controller
                          name="invoice_number"
                          control={control}
                          rules={{ required: "Field is required" }}
                          defaultValue=""
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="INVOICE NUMBER"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.invoice_number && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Image Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      {/* <div className="col-sm-3 mb-3">
                        <Controller
                          name="rcimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              className={"form-control form-control-md shadow"}
                              type={"file"}
                              onChange={(e) => {
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.rcimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div> */}
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="frontimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className={"form-control form-control-md shadow"}
                              type={"file"}
                              label={"Front Image"}
                              onChange={(e) => {
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.frontimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="backimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className={"form-control form-control-md shadow"}
                              label={"Back Image"}
                              type={"file"}
                              onChange={(e) => {
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.backimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="rightimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              label={"Right Image"}
                              className={"form-control form-control-md shadow"}
                              type={"file"}
                              onChange={(e) => {
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.rightimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="leftimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              label="Left Image"
                              type={"file"}
                              className={"form-control form-control-md shadow"}
                              onChange={(e) => {
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.leftimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      {(byDealerUser?.["data"]?.data?.[0]?.manufacturer_name === "KTV3M INDIA" || byDealerUser?.["data"]?.data?.[0]?.manufacturer_name === "reflex") && (
                        <div className="col-sm-3 mb-3">
                          <Controller
                            name="rcimage"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <CFormInput
                                label="RC Image"
                                type={"file"}
                                className={
                                  "form-control form-control-md shadow"
                                }
                                onChange={(e) => {
                                  field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                                }}
                              />
                            )}
                          />
                          {errors.rcimage?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCardBody>
          <div className="col-sm-12 text-center mb-3">
            <CButton variant="outline" type="submit" disabled={isSubmitDisabled}>
              Submit
            </CButton>
          </div>
        </CCard>
      </CForm>
    </>
  );
};

export default NewEntry;
