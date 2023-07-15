import React from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import {DatePicker} from "zaman";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const EditFinishedAt = ({auth, errors}) => {

    const {hospitalization} = usePage().props

    const {data, setData} = useForm({
        id: hospitalization.id || '',
        date_finished_at: '',
        time_finished_at: '',
        _method: 'PUT'
    })

    const changeDatePicker = (e) => {
        const date = new Date(e.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        setData("date_finished_at", dateString)
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.hospitalizations.update_finished_at", data.id), data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">پایان بستری</h2>}
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
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">تاریخ شروع بستری<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <DatePicker
                                            round="x3"
                                            locale="fa"
                                            direction="rtl"
                                            weekends={[6]}
                                            inputClass="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={changeDatePicker}
                                        />
                                        <span className="text-red-600">
                                            {errors.date_finished_at}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">زمان شروع بستری<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input type="time"
                                               className={"w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"}
                                               onChange={(e) => setData('time_finished_at', e.target.value)}/>
                                        <span className="text-red-600">
                                            {errors.time_finished_at}
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

export default EditFinishedAt;
