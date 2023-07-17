import React, {useEffect, useState} from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import {DatePicker} from "zaman";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = ({auth, errors}) => {

    const {hospitalization,patients, rooms, doctors,beds} = usePage().props

    let filteredBeds = beds.filter(bed => bed.room_id == hospitalization.room_id)
    const [bedsFiltered, setBedsFiltered] = useState(filteredBeds);

    const {data, setData} = useForm({
        patient_id: hospitalization.patient_id || '',
        room_id: hospitalization.room_id || "",
        doctor_id: hospitalization.doctor_id || '',
        bed_id: hospitalization.bed_id || '',
        disease: hospitalization.disease || '',
        date_started_at: hospitalization.date_started_at || '',
        time_started_at: hospitalization.time_started_at || '',
        _method: 'PUT'
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
        router.post(route("admin.hospitalizations.update", hospitalization.id), data);
    }

    function handleBeds(e) {
        data.bed_id = '';
        setData("room_id", e.target.value)
        setBedsFiltered(beds.filter(bed => bed.room_id == e.target.value));
        if (e.target.value === '')
            setBedsFiltered(beds)
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
                                    <div className="mb-4 w-1/2">
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
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">نام پزشک<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.doctor_id}
                                            onChange={(e) => setData("doctor_id", e.target.value)}>
                                            <option value="">پزشک را انتخاب کنید</option>
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
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">اتاق<span className="text-red-600 mr-2">*</span></label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.room_id}
                                            onChange={handleBeds}>
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
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">تخت<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <select id="bed"
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.bed_id}
                                            onChange={(e) => setData("bed_id", e.target.value)}>
                                            <option value="">تخت را انتخاب کنید</option>
                                            {bedsFiltered.map(bed => (
                                                <option key={bed.id}
                                                        value={bed.id}>{bed.bed_number}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.bed_id}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">تاریخ شروع بستری<span className="text-red-600 mr-2">*</span></label>
                                        <DatePicker
                                            round="x3"
                                            locale="fa"
                                            direction="rtl"
                                            weekends={[6]}
                                            defaultValue={data.date_started_at}
                                            inputClass="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={changeDatePicker}
                                        />
                                        <span className="text-red-600">
                                            {errors.date_started_at}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">زمان شروع بستری<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input type="time" className={"w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"} value={data.time_started_at} onChange={(e) => setData('time_started_at',e.target.value)}/>
                                        <span className="text-red-600">
                                            {errors.time_started_at}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
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
