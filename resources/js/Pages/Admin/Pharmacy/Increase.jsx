import React from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = ({auth, errors}) => {

    const {pharmacy} = usePage().props

    const {data, setData, post} = useForm({
        pharmacy_id: pharmacy.id || '',
        count: '',
        description: '',
        _method: 'PUT'
    })

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.pharmacy.store_increase",data.pharmacy_id),data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">افزایش موجودی</h2>}
        >

            <Head title="Increase"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.pharmacy.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">تعداد دارو<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.count}
                                            onChange={(e) =>
                                                setData("count", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.count}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">توضیحات<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.description}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        افزایش
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
