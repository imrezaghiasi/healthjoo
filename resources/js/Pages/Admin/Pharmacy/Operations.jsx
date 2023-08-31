import React from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {

    const {operations} = usePage().props;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">انبار دارو</h2>}
        >

            <Head title="Pharmacy"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.pharmacy.index")}
                                >
                                    برگشت
                                </Link>
                            </div>
                            <table className="w-full dark:bg-gray-800 table-auto text-xs">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2">تعداد</th>
                                    <th className="px-4 py-2">توضیحات</th>
                                    <th className="px-4 py-2">تاریخ</th>
                                </tr>
                                </thead>
                                <tbody>
                                {operations.data.map(({id, count, description , operation,created_at}) => (
                                    <tr key={id} className={`${operation == 1 ? 'bg-green-200' : 'bg-red-200'} border text-center dark:border-gray-700 dark:text-gray-300`}>
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{count}</td>
                                        <td className="px-4 py-2">{description}</td>
                                        <td className="px-4 py-2">{created_at}</td>
                                    </tr>
                                ))}

                                {operations.data.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t dark:text-white text-center"
                                            colSpan="11"
                                        >
                                            هیچ موردی یافت نشد.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <Pagination links={operations.links} class="mt-5"/>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default Index;
