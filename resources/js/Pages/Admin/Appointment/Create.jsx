import React, {useState} from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import {DatePicker} from "zaman";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = ({auth, errors}) => {

    const {doctors,flash} = usePage().props

    const {data, setData, post} = useForm({
        doctor_id: '',
        date_started_at: '',
        time_started_at: '',
    })

    const changeDatePicker = (e) => {
        const date = new Date(e.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        setData("date_started_at", dateString)
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.appointments.store"));
    }


    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ایجاد نوبت</h2>}
        >

            <Head title="Doctors"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div className={`${flash.success ? 'bg-green-500' : 'bg-red-500'} w-full text-white text-center p-2 mb-2`}>{flash.success ? flash.success : flash.failed}</div>
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.appointments.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">نام پزشک<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.doctor_id}
                                            onChange={(e) => setData("doctor_id", e.target.value)}>
                                            <option value="">نام پزشک را انتخاب کنید</option>
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

                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">تاریخ شروع نوبت<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <DatePicker
                                            round="x3"
                                            locale="fa"
                                            direction="rtl"
                                            weekends={[6]}
                                            inputClass="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={changeDatePicker}
                                        />
                                        <span className="text-red-600">
                                            {errors.date_started_at}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">زمان شروع نوبت<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input type="time"
                                               className={"w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"}
                                               value={data.time_started_at}
                                               onChange={(e) => setData('time_started_at', e.target.value)}/>
                                        <span className="text-red-600">
                                            {errors.time_started_at}
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
