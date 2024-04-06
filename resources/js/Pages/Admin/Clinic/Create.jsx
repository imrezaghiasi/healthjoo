import { React, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Swal from "sweetalert2";

const Create = ({ auth, errors }) => {
    const { doctors, flash } = usePage().props;
    const { data, setData, post } = useForm({
        doctor_id: "",
        address: "",
        phone: "",
        start_day: "",
        end_day: "",
        start_hours: "",
        end_hours: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.clinics.store"), {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "موفقیت آمیز!",
                    text: "ثبت با موفقیت انجام شد",
                });
            },
        });
    }

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleClick = (e, itemId) => {
        const spanInput = document.getElementById("input_span");
        spanInput.innerText = e.target.innerText; // Update the text with e.target.innerText
        setData("doctor_id", itemId);
        setIsOpen(!isOpen);
    };

    // Array of items for the dropdown
    const dropdownItems = doctors;

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    ایجاد مطب
                </h2>
            }
        >
            <Head title="Clinics" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div
                                className={`${flash.success ? "bg-green-500" : "bg-red-500"} w-full text-white text-center p-2 mb-2`}
                            >
                                {flash.success ? flash.success : flash.failed}
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.clinics.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="dark:text-gray-300"
                            >
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">
                                            نام پزشک
                                            <span className="text-red-600 mr-2">
                                                *
                                            </span>
                                        </label>
                                        {/*<select*/}
                                        {/*    className="text-center mt-5 w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"*/}
                                        {/*    value={data.doctor_id}*/}
                                        {/*    onChange={(e) => setData("doctor_id", e.target.value)}>*/}
                                        {/*    <option value="">پزشک را انتخاب کنید</option>*/}
                                        {/*    {doctors.map(doctor => (*/}
                                        {/*        <option key={doctor.id}*/}
                                        {/*                value={doctor.id}>{doctor.first_name + ' ' + doctor.last_name}</option>*/}
                                        {/*    ))*/}
                                        {/*    }*/}
                                        {/*</select>*/}
                                        {/*<span className="text-red-600">*/}
                                        {/*    {errors.doctor_id}*/}
                                        {/*</span>*/}
                                        <div className="relative group">
                                            <button
                                                onClick={toggleDropdown}
                                                className="inline-flex mt-6 justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                                            >
                                                <span
                                                    className="mr-2"
                                                    id="input_span"
                                                >
                                                    اینجا را باز کنید ...
                                                </span>
                                                <svg
                                                    xmlns="https://www.w3.org/2000/svg"
                                                    className="w-5 h-5 mr-2 -ml-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                className={`${
                                                    isOpen ? "" : "hidden"
                                                } absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
                                            >
                                                {/* Search input */}
                                                <input
                                                    onChange={handleInputChange}
                                                    value={searchTerm}
                                                    className="block w-full px-4 py-2 border rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-800 focus:outline-none"
                                                    type="text"
                                                    placeholder="Search items"
                                                    autoComplete="off"
                                                />
                                                {/* Dropdown content goes here */}
                                                {dropdownItems
                                                    .filter(
                                                        (item) =>
                                                            item.first_name
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchTerm.toLowerCase(),
                                                                ) ||
                                                            item.last_name
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchTerm.toLowerCase(),
                                                                ),
                                                    )
                                                    .map((item, index) => (
                                                        <a
                                                            key={index}
                                                            href="#"
                                                            onClick={(e) =>
                                                                handleClick(
                                                                    e,
                                                                    item.id,
                                                                )
                                                            }
                                                            className="block px-4 py-2  hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 active:bg-blue-100 cursor-pointer rounded-md"
                                                        >
                                                            {item.first_name}{" "}
                                                            {item.last_name}
                                                        </a>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label htmlFor={"address"} className="">
                                            آدرس
                                        </label>
                                        <input
                                            id="address"
                                            type="text"
                                            className="w-full mt-5 px-4 py-2 rounded dark:bg-gray-700 dark:border-gray-800"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="" htmlFor={"phone"}>
                                            تلفن
                                        </label>
                                        <input
                                            type="text"
                                            id={"phone"}
                                            className="w-full mt-5 px-4 py-2 rounded dark:bg-gray-700 dark:border-gray-800"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.phone}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">
                                            روز شروع کار
                                            <span className="text-red-600 mr-2">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.start_day}
                                            onChange={(e) =>
                                                setData(
                                                    "start_day",
                                                    e.target.value,
                                                )
                                            }
                                        >
                                            <option value="">
                                                روز شروع کار را انتخاب کنید ...
                                            </option>
                                            <option value="1">شنبه</option>
                                            <option value="2">یکشنبه</option>
                                            <option value="3">دوشنبه</option>
                                            <option value="4">سه شنبه</option>
                                            <option value="5">چهارشنبه</option>
                                            <option value="6">پنجشنبه</option>
                                            <option value="7">جمعه</option>
                                        </select>
                                        <span className="text-red-600">
                                            {errors.start_day}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">
                                            روز پایانی کار
                                            <span className="text-red-600 mr-2">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.end_day}
                                            onChange={(e) =>
                                                setData(
                                                    "end_day",
                                                    e.target.value,
                                                )
                                            }
                                        >
                                            <option value="">
                                                روز پایانی کار را انتخاب کنید
                                                ...
                                            </option>
                                            <option value="1">شنبه</option>
                                            <option value="2">یکشنبه</option>
                                            <option value="3">دوشنبه</option>
                                            <option value="4">سه شنبه</option>
                                            <option value="5">چهارشنبه</option>
                                            <option value="6">پنجشنبه</option>
                                            <option value="7">جمعه</option>
                                        </select>
                                        <span className="text-red-600">
                                            {errors.end_day}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">
                                            ساعت شروع کار
                                            <span className="text-red-600 mr-2">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="time"
                                            step="900"
                                            className={
                                                "w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            }
                                            value={data.start_hours}
                                            onChange={(e) =>
                                                setData(
                                                    "start_hours",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.start_hours}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">
                                            ساعت پایانی کار
                                            <span className="text-red-600 mr-2">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="time"
                                            step="900"
                                            className={
                                                "w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            }
                                            value={data.end_hours}
                                            onChange={(e) =>
                                                setData(
                                                    "end_hours",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.end_hours}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        ایجاد
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
