import React from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const AddTestItem = ({auth, errors}) => {

    const {id, tests} = usePage().props

    const {data, setData, post} = useForm({
        laboratory_test_id: id || '',
        results: []
    })


    function handleSubmit(e) {
        e.preventDefault();
        tests.map((test) => {
            if (document.getElementById(test.id).value != '') {
                data.results.push({
                    "test_id" : test.id,
                    "result" : parseFloat(document.getElementById(test.id).value)
                })
            }

        })
        post(route("admin.laboratory_tests.store_laboratory_test_results"));
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">نتیجه آزمایش</h2>}
        >

            <Head title="Laboratory Test Results"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.laboratory_tests.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">

                                    <label className="ml-5 mb-4 w-1/2">نام تست<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                    <label className="ml-5 mb-4 w-1/2">نتیجه<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                    <label className="ml-5 mb-4 w-1/2">واحد<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                    <label className="ml-5 mb-4 w-1/2">محدوده نرمال<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                </div>

                                {tests.map(test => (
                                    <>
                                        <div key={test.id} className="flex flex-row justify-center gap-5 mb-5">
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                    value={test.test_name}
                                                />
                                            </div>
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    id={test.id}
                                                    type="number"
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                />
                                            </div>
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                    value={test.unit}
                                                />
                                            </div>
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                    value={test.normal_range}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ))
                                }


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

export default AddTestItem;
