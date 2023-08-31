import React from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Details = (props) => {

    const {details_order} = usePage().props;

    console.log(details_order)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">جزییات سفارش</h2>}
        >

            <Head title="Order"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.orders.index")}
                                >
                                    برگشت
                                </Link>
                            </div>
                            <table className="w-full dark:bg-gray-800 table-auto text-xs">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2">نام دارو</th>
                                    <th className="px-4 py-2">تعداد</th>
                                    <th className="px-4 py-2">قیمت واحد</th>
                                    <th className="px-4 py-2">قیمت کل</th>
                                </tr>
                                </thead>
                                <tbody>
                                {details_order.data.map(({id, medicine, count }) => (
                                    <tr key={id} className='border text-center dark:border-gray-700 dark:text-gray-300'>
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{medicine.title}</td>
                                        <td className="px-4 py-2">{count}</td>
                                        <td className="px-4 py-2">{medicine.price}</td>
                                        <td className="px-4 py-2">{medicine.price * count}</td>
                                    </tr>
                                ))}

                                {details_order.data.length === 0 && (
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
                            <Pagination links={details_order.links} class="mt-5"/>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default Details;
