import React, {useEffect, useState} from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import {DatePicker} from "zaman";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = ({auth, errors}) => {

    const {clinic,doctors} = usePage().props

    const {data, setData} = useForm({
        doctor_id: clinic.doctor_id || '',
        address: clinic.address || '',
        phone: clinic.phone || '',
        start_day: clinic.start_day || '',
        end_day: clinic.end_day || '',
        start_hours: clinic.start_hours || '',
        end_hours: clinic.end_hours || '',
        _method: 'PUT'
    })

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.clinics.update", clinic.id), data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ویرایش مطب</h2>}
        >

            <Head title="Clinic"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.clinics.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">نام پزشک<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center mt-5 w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.doctor_id}
                                            onChange={(e) => setData("doctor_id", e.target.value)}>
                                            <option value="">پزشک را انتخاب کنید</option>
                                            {doctors.map(doctor => (
                                                <option key={doctor.id}
                                                        value={doctor.id}>{doctor.first_name + ' ' + doctor.last_name}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.doctor_id}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label htmlFor={"address"} className="">آدرس</label>
                                        <input
                                            id="address"
                                            type="text"
                                            className="w-full mt-5 px-4 py-2 rounded dark:bg-gray-700 dark:border-gray-800"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="" htmlFor={"phone"}>تلفن</label>
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
                                        <label className="ml-5">روز شروع کار<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.start_day}
                                            onChange={(e) => setData("start_day", e.target.value)}>
                                            <option value="">روز شروع کار را انتخاب کنید ...</option>
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
                                        <label className="ml-5">روز پایانی کار<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.end_day}
                                            onChange={(e) => setData("end_day", e.target.value)}>
                                            <option value="">روز پایانی کار را انتخاب کنید ...</option>
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
                                        <label className="ml-5">ساعت شروع کار<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input type="time"
                                               step="900"
                                               className={"w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"}
                                               value={data.start_hours}
                                               onChange={(e) => setData('start_hours', e.target.value)}/>
                                        <span className="text-red-600">
                                            {errors.start_hours}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">ساعت پایانی کار<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input type="time"
                                               step="900"
                                               className={"w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"}
                                               value={data.end_hours}
                                               onChange={(e) => setData('end_hours', e.target.value)}/>
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
                                        ویرایش
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

export default Edit;
