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
} from "@coreui/react";
import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import {
  useCreateDistributerMutation,
  useCreateSubDistributerMutation,
  useGetByDealerUserNameQuery,
  useGetByDistributerUserNameQuery,
  useGetBySubDistributerUserNameQuery,
} from "../../Services/user";
import NewEntry from "./NewEntry";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import {
  useCreateDealerStockMutation,
  useCreateDistributerSaleMutation,
  useCreateSubDistributerSaleMutation,
  useGetDealerSaleQuery,
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetDisbutersSaleQuery,
  useGetManufacturerQuery,
  useGetRegistrationsSaleByUserQuery,
  useGetSubDistributerQuery,
  useGetSubDistributerSaleQuery,
} from "../../Services/sales";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../configData";
import { currenUserInfo } from "../../Slices/loginSlice";
const Dashboard = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [createDistributerSale] = useCreateDistributerSaleMutation();
  const [createSubDistributerSale] = useCreateSubDistributerSaleMutation();
  const [createDealerStock] = useCreateDealerStockMutation();
  const [roleList, setRoleList] = React.useState(null);

  const [totalEachIitemValues, setTotalEachItemValues] = React.useState(null);
  const dispatch = useDispatch();

  console.log(roleList, "roleList", userInfo);

  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  let urlSubDistributorString: any = `distributor_id=${userInfo?.userId}`;
  const {
    data: subDistributerData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerQuery(urlSubDistributorString);

  let urlDealerStringSubDis: any = `sub_distributor_id=${userInfo?.userId}`;
  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerUserQuery(urlDealerStringSubDis);

  const {
    data: byDistributerUser,
    error: byDistributerUserError,
    refetch: byDistributerUserRefetch,
  } = useGetByDistributerUserNameQuery(userInfo?.username);

  const {
    data: bySubDistributerUser,
    error: bySUbDistributerUserError,
    refetch: bySubDistributerUserRefetch,
  } = useGetBySubDistributerUserNameQuery(userInfo?.username);

  const {
    data: byDealerUser,
    error: byDealerUserError,
    refetch: byDealerUserRefetch,
  } = useGetByDealerUserNameQuery(userInfo?.userId);

  console.log("byDealerUser3452345", userInfo?.userId);

  const {
    data: manifactData,
    error: manifactError,
    isLoading: manifactLoading,
    refetch,
  } = useGetManufacturerQuery();

  let saleDistributorStockQuery: any = `dealerName=${userInfo?.userId}`;
  const {
    data: distributerSaleData,
    error: distributerSaleDataError,
    isLoading: distributerSaleDataLoading,
    refetch: distributerSaleDataRefetch,
  } = useGetDisbutersSaleQuery(saleDistributorStockQuery);

  console.log(distributerSaleData, "distributerSaleData");

  let salesubDistributorStockQuery: any =
    userInfo?.role_id === "2"
      ? `distributer_id=${userInfo?.userId}`
      : `dealerName=${userInfo?.userId}`;
  const {
    data: subDistributerSaleData,
    error: subDistributerSaleDataError,
    isLoading: subDistributerSaleDataLoading,
    refetch: subDistributerSaleDataRefetch,
  } = useGetSubDistributerSaleQuery(salesubDistributorStockQuery);

  console.log(
    subDistributerSaleData,
    "subDistributerSaleData",
    salesubDistributorStockQuery
  );

  let urlDealerStockStringSubDis: any =
    userInfo?.role_id === "3"
      ? `subdistributer_id=${userInfo?.userId}`
      : `dealerName=${userInfo?.userId}`;
  const {
    data: dealerStockData,
    error: dealerStockError,
    isLoading: dealerStockLoading,
    refetch: dealerStockRefetch,
  } = useGetDealerSaleQuery(urlDealerStockStringSubDis);

  console.log(
    dealerStockData,
    "subDistributerSaleData",
    urlDealerStockStringSubDis
  );

  let urlEntriesStockStringSubDis: any = `dealername=${userInfo?.userId}`;
  const {
    data: registerrationSaleData,
    error: registerationError,
    isLoading: registerrationLoding,
    refetch: registerrationRefetch,
  } = useGetRegistrationsSaleByUserQuery(urlEntriesStockStringSubDis);

  console.log(
    registerrationSaleData?.["data"]?.data?.length,
    "registerrationSaleData4254"
  );

  React.useEffect(() => {
    distributerSaleDataRefetch();
    subDistributerSaleDataRefetch();
    distributerRefetch();
    subDistributerRefetcg();
    dealerRefetch();
    byDistributerUserRefetch();
    bySubDistributerUserRefetch();
    byDealerUserRefetch();
    refetch();
    dealerStockRefetch();
    registerrationRefetch();
  }, [userInfo]);

  React.useEffect(() => {
    if (
      distributerData ||
      subDistributerData ||
      dealerData ||
      bySubDistributerUser ||
      byDealerUser ||
      byDistributerUser
    ) {
      if (userInfo?.role_id === "1") {
        setRoleList(distributerData?.["data"]?.data);
        dispatch(currenUserInfo(byDistributerUser?.["data"]?.data));
      } else if (userInfo?.role_id === "2") {
        setRoleList(subDistributerData?.["data"]?.data);
        dispatch(currenUserInfo(bySubDistributerUser?.["data"]?.data));
      } else if (userInfo?.role_id === "3") {
        setRoleList(dealerData?.["data"]?.data);
        dispatch(currenUserInfo(byDealerUser?.["data"]?.data));
      }
    }
  }, [
    userInfo,
    distributerData,
    subDistributerData,
    dealerData,
    bySubDistributerUser,
    byDealerUser,
    byDistributerUser,
  ]);

  const fieldsToCalculate = [
    "red20mm",
    "red50mm",
    "white20mm",
    "white50mm",
    "yellow50mm",
    "redReflector80mm",
    "whiteReflector80mm",
    "yellowReflector80mm",
    "class3",
    "class4",
    "hologram",
  ];

  React.useEffect(() => {
    let calculateData1 =
      userInfo?.role_id === "2"
        ? distributerSaleData?.["data"]?.data
        : userInfo?.role_id === "3"
        ? subDistributerSaleData?.["data"]?.data
        : userInfo?.role_id === "4"
        ? dealerStockData?.["data"]?.data
        : null;
    let calculateDate2 =
      userInfo?.role_id === "2"
        ? subDistributerSaleData?.["data"]?.data
        : userInfo?.role_id === "3"
        ? dealerStockData?.["data"]?.data
        : userInfo?.role_id === "4"
        ? registerrationSaleData?.["data"]?.data
        : null;

    console.log(calculateData1, "calculateData123453", calculateDate2);

    if (calculateData1?.length > 0) {
      const calculatedTotalForData = {};
      const calculatedTotalForData2 = {};
      const finalTotal = {};

      // Calculate total for each field for data1 array
      fieldsToCalculate.forEach((fieldName) => {
        calculatedTotalForData[fieldName] = calculateTotalForDistributor(
          calculateData1,
          userInfo?.userId,
          fieldName
        );
      });

      // If data2 is not empty, calculate totals for data2 array
      if (calculateDate2?.length > 0) {
        fieldsToCalculate.forEach((fieldName) => {
          calculatedTotalForData2[fieldName] = calculateTotalForDistributor(
            calculateDate2,
            userInfo?.userId,
            fieldName
          );
        });

        // Subtract totals from data2 array from totals of data1 array
        fieldsToCalculate.forEach((fieldName) => {
          const difference =
            Number(calculatedTotalForData[fieldName]) -
            Number(calculatedTotalForData2[fieldName]);
          // Round the result to 2 decimal places and pad with zero if necessary
          finalTotal[fieldName] = difference.toFixed(2);
        });
        console.log(
          calculatedTotalForData,
          "calculatedTotalForData2",
          calculatedTotalForData2
        );
      } else {
        // If data2 is empty, final total is the same as calculated total for data1
        Object.assign(finalTotal, calculatedTotalForData);
      }

      console.log(finalTotal, "finalTotal56345");
      // Update state with calculated totals
      setTotalEachItemValues(finalTotal);
    }
  }, [
    distributerSaleData,
    subDistributerSaleData,
    dealerStockData,
    registerrationSaleData,
    userInfo,
  ]);

  const calculateTotalForDistributor = (data, dealerName, fieldName) => {
    let total: any = 0;
    data?.forEach((item) => {
      console.log(item, "item", dealerName);
      if (
        item?.dealername === dealerName ||
        item?.dealer_id === dealerName ||
        item?.dealerName === dealerName ||
        item?.subdistributer_id === dealerName ||
        item?.distributer_id === dealerName
      ) {
        // Parse the field value to ensure it's a number
        const fieldValue = item[fieldName] || "0"; // Use default '0' if value is null
        total = (parseFloat(total) + parseFloat(fieldValue)).toFixed(2);
        console.log(`Adding ${fieldValue} for ${fieldName}`);
      }
    });
    return total;
  };

  const onSubmit = async (data) => {
    console.log(data, "data32452345");
    let tempResult;
    try {
      if (userInfo?.role_id === "1") {
        let tempObjec = {
          ...formData,
          distributer_name: formData?.dealerName,
        };
        tempResult = await createDistributerSale(tempObjec);
      } else if (userInfo?.role_id === "2") {
        let tempObjec = {
          ...formData,
          distributer_name: userInfo?.name,
          distributer_id: userInfo?.userId,
          sub_distributer_name: formData?.dealerName,
          subdistributer_id: formData?.dealerName,
        };
        tempResult = await createSubDistributerSale(tempObjec);
      } else if (userInfo?.role_id === "3") {
        let tempObjec = {
          ...formData,
          distributer_name:
            bySubDistributerUser?.["data"]?.data?.[0]?.distributor_name,
          manufacturer_name:
            bySubDistributerUser?.["data"]?.data?.[0]?.manufacturer_name,
          sub_distributer_name: userInfo?.name,
          subdistributer_id: userInfo?.userId,
          dealer_name: formData?.dealerName,
          distributer_id: formData?.dealerName,
        };
        tempResult = await createDealerStock(tempObjec);
      }
      console.log(tempResult, "tempResult52345");
      if (tempResult?.["data"]?.code === 201) {
        location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const getTotalQuantity = (data) => {
    let totalQuantity = 0;
    // Iterate over each object in the data array
    data?.forEach((item) => {
      // Parse quantity as integer and add to total
      const quantity = parseInt(item.quantity);
      if (!isNaN(quantity)) {
        totalQuantity += quantity;
      }
    });
    return totalQuantity;
  };

  return userInfo?.role_id === "4" ? (
    <NewEntry
      registerrationSaleData={registerrationSaleData}
      heading={
        <CCardHeader className="py-3 detailHeader">
          <div className="d-flex justify-content-between">
            {userInfo?.role_id !== "4" && (
              <div className="w-25">
                <Controller
                  name="dealerName"
                  control={control}
                  rules={{ required: "Type is required" }}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormSelect
                      aria-label="Default select"
                      className="border form-control h-100"
                      {...field}
                    >
                      <option value="">{"Select"}</option>
                      {roleList &&
                        roleList?.map((item) => (
                          <option value={item?.name}>{item?.name}</option>
                        ))}
                    </CFormSelect>
                  )}
                />
                {errors.dealerName && (
                  <div className="text-danger">{"Field is required"}</div>
                )}
              </div>
            )}

            <h6 className="text-center m-0">
              {userInfo?.role_id === "1" ? (
                <>
                  <b>Total Manufacturer</b> <br />
                  <p className="m-0 p-2 bg-white mt-2">
                    {manifactData?.["data"]?.data?.length}
                  </p>
                </>
              ) : (
                <>
                  <b>Manufacturer</b> <br />
                  <p className="m-0 p-2 bg-white mt-2">
                    {userInfo?.role_id === "2"
                      ? byDistributerUser?.["data"]?.data?.[0]
                          ?.manufacturer_name
                      : userInfo?.role_id === "3"
                      ? bySubDistributerUser?.["data"]?.data?.[0]
                          ?.manufacturer_name
                      : byDealerUser?.["data"]?.data?.[0]?.manufacturer_name}
                  </p>
                </>
              )}
            </h6>
            <h6 className="text-center m-0">
              {userInfo?.role_id === "1" && (
                <>
                  <b>Total Quanity</b> <br />
                  <p className="m-0 p-2 bg-white mt-2">
                    {getTotalQuantity(manifactData?.["data"]?.data)}
                  </p>
                </>
              )}
            </h6>
            {(userInfo?.role_id === "3" || userInfo?.role_id === "4") && (
              <h6 className="text-center m-0">
                <b>Distributor </b>
                <p className="m-0 p-2 bg-white mt-2">
                  {userInfo?.role_id === "3"
                    ? bySubDistributerUser?.["data"]?.data?.[0]
                        ?.distributer_name
                    : byDealerUser?.["data"]?.data?.[0]?.distributor_name}
                </p>
              </h6>
            )}

            {/* {userInfo?.role_id === "4" && (
              <h6 className="text-center">
                <b>Sub Distributor</b> <br />{" "}
                <p className="m-0 p-2 bg-white mt-2">
                  {byDealerUser?.["data"]?.data?.[0]?.sub_distributer_name}
                </p>
              </h6>
            )} */}
            {userInfo?.role_id !== "1" && (
              <div>
                <h6>
                  <b>Phone :</b>{" "}
                  {userInfo?.role_id === "2"
                    ? byDistributerUser?.["data"]?.data?.[0]?.phone_number
                    : userInfo?.role_id === "3"
                    ? bySubDistributerUser?.["data"]?.data?.[0]?.phone_number
                    : byDealerUser?.["data"]?.data?.[0]?.phone_number}
                </h6>
                <h6>
                  <b>Date :</b> {formatDate(new Date())}
                </h6>
              </div>
            )}
          </div>
        </CCardHeader>
      }
      totalEachIitemValues={totalEachIitemValues}
    />
  ) : (
    <>
      <CCard className="mb-4 pb-3 p-3 pt-0">
        <CCardHeader className="py-3 detailHeader">
          <div className="d-flex justify-content-between">
            <div className="w-25">
              {userInfo?.role_id === "1" ? (
                <b>Select Distributor</b>
              ) : userInfo?.role_id === "2" ? (
                <b>Select Sub Distributor</b>
              ) : userInfo?.role_id === "3" ? (
                <b>Select Dealer</b>
              ) : null}
              <Controller
                name="dealerName"
                control={control}
                rules={{ required: "Type is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormSelect
                    aria-label="Default select"
                    className="border form-control"
                    {...field}
                  >
                    {roleList?.length > 0 &&
                      [{ id: 0, name: "select" }, ...roleList]?.map((item) => {
                        return (
                          <option value={item?.phone_number}>
                            {item?.name}
                          </option>
                        );
                      })}
                  </CFormSelect>
                )}
              />
              {errors.dealerName && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <h6 className="text-center m-0">
              {userInfo?.role_id === "1" ? (
                <>
                  <b>Total Manufacturer</b> <br />
                  <p className="m-0 p-2 bg-white mt-2">
                    {manifactData?.["data"]?.data?.length}
                  </p>
                </>
              ) : (
                <>
                  <b>Manufacturer</b> <br />
                  <p className="m-0 p-2 bg-white mt-2">
                    {userInfo?.role_id === "2"
                      ? byDistributerUser?.["data"]?.data?.[0]
                          ?.manufacturer_name
                      : userInfo?.role_id === "3"
                      ? bySubDistributerUser?.["data"]?.data?.[0]
                          ?.manufacturer_name
                      : byDealerUser?.["data"]?.data?.[0]?.manufacturer_name}
                  </p>
                </>
              )}
            </h6>
            <h6 className="text-center m-0">
              {userInfo?.role_id === "1" && (
                <>
                  <b>Total Quanity</b> <br />
                  <p className="m-0 p-2 bg-white mt-2">
                    {getTotalQuantity(manifactData?.["data"]?.data) -
                      getTotalQuantity(distributerSaleData?.["data"]?.data)}
                  </p>
                </>
              )}
            </h6>
            {(userInfo?.role_id === "3" || userInfo?.role_id === "4") && (
              <h6 className="text-center m-0">
                <b>Distributor </b>
                <br />{" "}
                <p className="m-0 p-2 bg-white mt-2">
                  {userInfo?.role_id === "3"
                    ? bySubDistributerUser?.["data"]?.data?.[0]
                        ?.distributor_name
                    : byDealerUser?.["data"]?.data?.[0]?.distributor_name}
                </p>
              </h6>
            )}

            {userInfo?.role_id === "4" && (
              <h6 className="text-center">
                <b>Sub Distributor</b> <br />{" "}
                {byDealerUser?.["data"]?.data?.[0]?.sub_distributer_name}
              </h6>
            )}
            {userInfo?.role_id !== "1" && (
              <div>
                <h6>
                  <b>Phone :</b>{" "}
                  {userInfo?.role_id === "2"
                    ? byDistributerUser?.["data"]?.data?.[0]?.phone_number
                    : userInfo?.role_id === "3"
                    ? bySubDistributerUser?.["data"]?.data?.[0]?.phone_number
                    : byDealerUser?.["data"]?.data?.[0]?.phone_number}
                </h6>
                <h6>
                  <b>Date :</b> {formatDate(new Date())}
                </h6>
              </div>
            )}
          </div>
        </CCardHeader>
        {userInfo?.role_id !== "1" && (
          <>
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
                    value: totalEachIitemValues?.red20mm,
                    background: "#f800004a",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "White20mm",
                    value: totalEachIitemValues?.white20mm,
                    background: "#91919129",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Red50mm",
                    value: totalEachIitemValues?.red50mm,
                    background: "#f800004a",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "white50mm",
                    value: totalEachIitemValues?.white50mm,
                    background: "#91919129",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Yellow50mm",
                    value: totalEachIitemValues?.yellow50mm,
                    background: "#cddc3957",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Red80mm",
                    value: totalEachIitemValues?.redReflector80mm,
                    background: "#f800004a",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "White80mm",
                    value: totalEachIitemValues?.whiteReflector80mm,
                    background: "#91919129",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Yellow80mm",
                    value: totalEachIitemValues?.yellowReflector80mm,
                    background: "#cddc3957",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Class3",
                    value:
                      totalEachIitemValues?.class3 === "NaN"
                        ? 0
                        : totalEachIitemValues?.class3,
                    background: "#3399ff63",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Class4",
                    value:
                      totalEachIitemValues?.class4 === "NaN"
                        ? 0
                        : totalEachIitemValues?.class4,
                    background: "#3399ff63",
                  },
                  {
                    color: "black",
                    textColor: "black",
                    title: "Hologram",
                    value: totalEachIitemValues?.hologram,
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
                        <CCardText className="text-black">
                          {item?.value}
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                ))}
              </>
            </div>
          </>
        )}
      </CCard>

      <CForm onSubmit={handleSubmit(onSubmit)}>
        <CCard className="mb-4 pb-3 py-1">
          <CCardBody>
            <div className="row">
              <div className="col-sm-12">
                <div className="row mt-4">
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="red20mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>

                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="white20mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="red50mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="white50mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="yellow50mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>

                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="redReflector80mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                    {errors.redRefelctor80mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="whiteReflector80mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                    {errors.mmWhiteReflector80 && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="yellowReflector80mm"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                    {errors.yellowRefelctor80mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>

                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="class3"
                      control={control}
                      rules={{ required: "Field is required" }}
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="class4"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue="0"
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
                    {errors.white50mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="hologram"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue="0"
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
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Controller
                      name="invoiceNumber"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="INVOICE NUMBER"
                          {...field}
                          type="text"
                          placeholder=""
                        />
                      )}
                    />
                    {errors.invoiceNumber && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                </div>
                <div className="col-sm-12 text-center">
                  <CButton variant="outline" type="submit">
                    Submit
                  </CButton>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CForm>
      <CCard className="mb-4 pb-3 p-3 pt-0">
        <div className="d-flex justify-content-between py-3">
          <CBadge color="dark">Stock</CBadge>
          <CBadge color="info">Dealer</CBadge>
        </div>
        <div className="row">
          <>
            {[
              {
                color: "black",
                textColor: "black",
                title: "Red20mm",
                value: formData?.red20mm,
                background: "#f800004a",
              },
              {
                color: "black",
                textColor: "black",
                title: "White20mm",
                value: formData?.white20mm,
                background: "#91919129",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red50mm",
                value: formData?.red50mm,
                background: "#f800004a",
              },
              {
                color: "black",
                textColor: "black",
                title: "white50mm",
                value: formData?.red20mm,
                background: "#91919129",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow50mm",
                value: formData?.white50mm,
                background: "#cddc3957",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red80mm",
                value: formData?.redReflector80mm,
                background: "#f800004a",
              },
              {
                color: "black",
                textColor: "black",
                title: "White80mm",
                value: formData?.whiteReflector80mm,
                background: "#91919129",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow80mm",
                value: formData?.yellowReflector80mm,
                background: "#cddc3957",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class3",
                value: formData?.class3,
                background: "#3399ff63",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class4",
                value: formData?.class4,
                background: "#3399ff63",
              },
              {
                color: "black",
                textColor: "black",
                title: "Hologram",
                value: formData?.hologram,
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
    </>
  );
};

export default Dashboard;
