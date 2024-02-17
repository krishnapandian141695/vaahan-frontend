import React, { useState, useRef , Fragment } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../sidebar/topbar/TopBar";
import "./newentry.css";
import axios from "axios";
import { tamilNaduRTOs } from "@/CommonData";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAddCertificateMutation } from "@/services/Certificate";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'

function NewEntry() {



  const [addCertificate] = useAddCertificateMutation();
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false)
 
 
 
  function closeModal() {
    setIsOpen(false)
    navigate("/certificate-list");
  }
 
 
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "data");
    const dataFrom = data ;
    console.log('datafrom data form',dataFrom)
    const formData = new FormData();  
    for (const key in data) {
      formData.append(key, data[key]);
      console.log(formData)
    }
    console.log('data from formData Faizal',formData)
    try {
      const result = await addCertificate(formData);
      console.log(result, "result252345234");
      if (!result?.["data"]?.["response"]) {
        alert("Certificate Title already exists");
      } else {
        setIsOpen(true)
         //navigate("/certificate-list");
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div className="font-sans flex h-full bg-gray-50 dark:bg-gray-900">
      <SideBar />
      <div className="w-full">
        <TopBar />
        <main className="h-full  overflow-y-auto">
         

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   🎉 Certificate Generated successfully 🎉
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     Your Certificate Has Been Created Successfully. Please
                      Download the Certificate From Certificate List Page
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              New Entry
            </h2>

            <a className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Welcome To Vahan Safety</span>
              </div>
              <span>View more </span>
            </a>

            <div className="bg-white">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-6">
                  <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-blac">Date</label>
                      <Controller
                        name="date"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="date"
                            placeholder="Select Date"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.date?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-blac">
                        Vehicle Reg No
                      </label>
                      <Controller
                        name="vehicleregno"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.vehicleregno?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-blac">
                        Vehicle Manufacturing Year
                      </label>
                      <Controller
                        name="vehiclemanufacturingyear"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.vehiclemanufacturingyear?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-blac">
                        Chassis No
                      </label>
                      <Controller
                        name="chassisnum"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.chassisnum?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-blac">
                      Engine No : <span className="text-meta-1">*</span>
                    </label>
                    <Controller
                      name="engineno"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Enter Value"
                          {...field}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      )}
                    />
                    {errors.engineno?.type === "required" && (
                      <p role="alert" className="error">
                        Field is required
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="mb-3 block text-blac">
                      Vechicle Make :
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <Controller
                        name="vehiclemake"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.vehiclemake?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-3 block text-blac">
                      Vechicle Model :
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <Controller
                        name="vehiclemodel"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.vehiclemodel?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-blac">Owner Name</label>
                    <Controller
                      name="ownername"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Enter Value"
                          {...field}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      )}
                    />
                    {errors.ownername?.type === "required" && (
                      <p role="alert" className="error">
                        Field is required
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="mb-2 block text-blac">Address :</label>
                    <Controller
                      name="address"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <textarea
                          rows={6}
                          placeholder="Enter your Address"
                          name="address"
                          {...field}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        ></textarea>
                      )}
                    />
                    {errors.ownername?.type === "required" && (
                      <p role="alert" className="error">
                        Field is required
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-blac">Phone No :</label>
                    <Controller
                      name="phoneo"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Enter Value"
                          {...field}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      )}
                    />
                    {errors.phoneo?.type === "required" && (
                      <p role="alert" className="error">
                        Field is required
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-blac">RTO:</label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <Controller
                        name="rto"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          >
                            <option value="">Select Your RTO</option>
                            {tamilNaduRTOs.map((rto) => (
                              <option value={rto.rtonum} key={rto.rtonum}>
                                {rto.rtonum} - {rto.rtoarea}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      {errors.rto?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}

                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-blac">
                      Hologram Number:
                    </label>
                    <Controller
                      name="hologramno"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Enter Value"
                          {...field}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      )}
                    />
                    {errors.hologramno?.type === "required" && (
                      <p role="alert" className="error">
                        Field is required
                      </p>
                    )}
                  </div>

                  <div>
                    <div>
                      <h3 className="text-black font-bold mt-8">
                        Old Certificate Details (Optional)
                      </h3>
                    </div>
                    <div>
                      <div className="mb-4 mt-4">
                        <label className="mb-2 block text-blac">
                          Old Certificate Number :
                        </label>
                        <Controller
                          name="oldcertificatenum"
                          control={control}
                          rules={{ required: false }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.oldcertificatenum?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-blac">RTO:</label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <Controller
                        name="rto"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          >
                            <option value="">Select Your RTO</option>
                            {tamilNaduRTOs.map((rto) => (
                              <option value={rto.rtonum} key={rto.rtonum}>
                                {rto.rtonum} - {rto.rtoarea}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      {errors.rto?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 w-full">
                    <div className="w-full ">
                      <label className="mb-2.5 block text-blac">Date</label>
                      <Controller
                        name="date"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.date?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="w-full mt-4">
                      <label className="mb-2 block text-blac">Remarks :</label>
                      <Controller
                        name="remarks"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter Value"
                            {...field}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      />
                      {errors.remarks?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-items-center items-center w-full">
                    <h3 className="text-black font-bold mt-8 text-center">
                      Reflective Tape Details
                    </h3>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          RED 20MM :
                        </label>
                        <Controller
                          name="red20mm"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.red20mm?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          White 20MM :
                        </label>
                        <Controller
                          name="white20mm"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.white20mm?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          RED 50MM :
                        </label>
                        <Controller
                          name="red50mm"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.red50mm?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="items-center w-80 gap-4 used-sticker-detail">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          White 50MM :
                        </label>
                        <Controller
                          name="white50mm"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.white50mm?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          Yellow 50MM :
                        </label>
                        <Controller
                          name="yellow50mm"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.yellow50mm?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          80MM RED Circular Reflector :
                        </label>
                        <Controller
                          name="yellow80circularreflector"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.yellow80circularreflector?.type ===
                          "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          80MM White Circular Reflector :
                        </label>
                        <Controller
                          name="white80circularreflector"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.white80circularreflector?.type ===
                          "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          80MM Yellow Circular Reflector :
                        </label>
                        <Controller
                          name="white80circularreflector"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.white80circularreflector?.type ===
                          "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          Class 3:
                        </label>
                        <Controller
                          name="class3"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.class3?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-blac inline-block">
                          Class 4 :
                        </label>
                        <Controller
                          name="class4"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              placeholder="Enter Value"
                              {...field}
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          )}
                        />
                        {errors.class4?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-items-center items-center w-full">
                    <h3 className="text-black font-bold mt-4 text-center">
                      Reflective Tape Details
                    </h3>
                  </div>
                  <div className="rounded-sm mt-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-col gap-5.5 p-6">
                      <div>
                        <label className="mb-3 block text-blac">
                          Front Image
                        </label>
                        <Controller
                          name="frontimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
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

                      <div className="mt-4">
                        <label className="mb-3 block text-blac">
                          Back Side Image
                        </label>
                        <Controller
                          name="backimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
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

                      <div className="mt-4">
                        <label className="mb-3 block text-blac">
                          Right Side Image
                        </label>
                        <Controller
                          name="rightimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
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

                      <div className="mt-4">
                        <label className="mb-3 block text-blac">
                          Left Side Image
                        </label>
                        <Controller
                          name="leftimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
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

                      <div className="mt-4">
                        <label className="mb-3 block text-blac">RC Image</label>
                        <Controller
                          name="rcimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
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
                      </div>
                    </div>
                  </div>

                  <button className="flex w-full bg-purple-600 text-white justify-center rounded bg-primary p-3 font-medium text-gray">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewEntry;
