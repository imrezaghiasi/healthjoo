import React from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import {DatePicker} from "zaman";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = ({auth, errors}) => {

    const {hospitalization,patients, rooms, doctors} = usePage().props

    const {data, setData} = useForm({
        patient_id: hospitalization.patient_id || '',
        room_id: hospitalization.room_id || "",
        doctor_id: hospitalization.doctor_id || '',
        disease: hospitalization.disease || '',
        date_of_hospitalization: hospitalization.date_of_hospitalization || '',
        start_time: hospitalization.start_time || '',
        end_time: hospitalization.end_time || '',
        _method: 'PUT'
    })

    const changeDatePicker = (e) => {
        const date = new Date(e.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        setData("date_of_hospitalization", dateString)
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.hospitalizations.update", hospitalization.id), data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ویرایش بستری</h2>}
        >

            <Head title="Hospitalizations"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.hospitalizations.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">نام بیمار<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.patient_id}
                                            onChange={(e) => setData("patient_id", e.target.value)}>
                                            <option value="">نام بیمار را انتخاب کنید</option>
                                            {patients.map(patient => (
                                                <option key={patient.id}
                                                        value={patient.id}>{patient.first_name + ' ' + patient.last_name}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.patient_id}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">اتاق<span className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.room_id}
                                            onChange={(e) => setData("room_id", e.target.value)}>
                                            <option value="">اتاق را انتخاب کنید</option>
                                            {rooms.map(room => (
                                                <option key={room.id}
                                                        value={room.id}>{room.room_type + ' - ' + room.room_number}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.room_id}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">نام پزشک<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.doctor_id}
                                            onChange={(e) => setData("doctor_id", e.target.value)}>
                                            <option value="">اتاق را انتخاب کنید</option>
                                            {doctors.map(doctor => (
                                                <option key={doctor.id}
                                                        value={doctor.id}>{doctor.first_name + ' - ' + doctor.last_name}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.doctor_id}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">تاریخ بستری<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <DatePicker
                                            round="x3"
                                            locale="fa"
                                            direction="rtl"
                                            weekends={[6]}
                                            defaultValue={data.date_of_hospitalization}
                                            inputClass="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={changeDatePicker}
                                        />
                                        <span className="text-red-600">
                                            {errors.date_of_hospitalization}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">شروع بستری<span className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="time"
                                            value={data.start_time}
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={(e) =>
                                                setData("start_time", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.start_time}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/4">
                                        <label className="">پایان بستری</label>
                                        <input
                                            type="time"
                                            value={data.end_time}
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={(e) =>
                                                setData("end_time", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.end_time}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/4">
                                        <label className="">بیماری</label>
                                        <input
                                            type="text"
                                            value={data.disease}
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={(e) =>
                                                setData("disease", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.disease}
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
