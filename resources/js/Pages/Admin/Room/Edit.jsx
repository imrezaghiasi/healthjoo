import React from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = ({auth, errors}) => {

    const {room, departments} = usePage().props

    const {data, setData} = useForm({
        id: room.id || '',
        room_type: room.room_type || "",
        room_number: room.room_number || "",
        available: room.available,
        department_id: room.department_id || "",
        _method: 'PUT'
    })

    console.log(data.available)

    function handleRadio(e) {
        setData("available", e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.rooms.update", room.id), data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ایجاد اتاق</h2>}
        >

            <Head title="Rooms"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.rooms.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">نوع اتاق<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.room_type}
                                            onChange={(e) =>
                                                setData("room_type", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.room_type}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">شماره اتاق<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.room_number}
                                            onChange={(e) =>
                                                setData("room_number", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.room_number}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">وضعیت<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>

                                        <div className="flex justify-center gap-5 mb-5">
                                            <div
                                                className="w-1/2 flex items-center p-1 border border-gray-200 rounded dark:border-gray-700">
                                                <input checked={data.available == 1} id="bordered-radio-2"
                                                       type="radio"
                                                       value={1}
                                                       name="available" onChange={handleRadio}

                                                       className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="bordered-radio-2"
                                                       className="w-full py-4 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    خالی
                                                </label>
                                            </div>
                                            <div
                                                className="w-1/2 flex items-center p-1 border border-gray-200 rounded dark:border-gray-700">
                                                <input checked={data.available == 0} id="bordered-radio-1"
                                                       type="radio"
                                                       value={0} name="available" onChange={handleRadio}
                                                       className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="bordered-radio-1"
                                                       className="w-full py-4 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    پر
                                                </label>
                                            </div>
                                        </div>

                                        <span className="text-red-600">
                                                   {errors.available}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">بخش<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.department_id}
                                            onChange={(e) => setData("department_id", e.target.value)}>
                                            <option value="">شغل را انتخاب کنید</option>
                                            {departments.map(department => (
                                                <option key={department.id}
                                                        value={department.id}>{department.name}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                                   {errors.department_id}
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

export default Edit;
