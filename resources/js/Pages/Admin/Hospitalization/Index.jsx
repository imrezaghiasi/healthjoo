import React, {useState} from 'react';
import {Head, Link, router, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {

    const {hospitalizations} = usePage().props;

    function destroy(e) {
        if (confirm("آیا از حذف این مورد مطمئن هستید؟")) {
            router.delete(route("admin.hospitalizations.destroy", e.currentTarget.id));
        }
    }


    function restore(e) {
        if (confirm("آیا از برگرداندن این مورد مطمئن هستید؟")) {
            router.get(route("admin.hospitalizations.restore", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">بستری ها</h2>}
        >

            <Head title="Hospitalizations"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.hospitalizations.create")}
                                >
                                    ایجاد بستری
                                </Link>
                            </div>

                            <table className="w-full dark:bg-gray-800 table-auto text-xs">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2 w-20">نام بیمار</th>
                                    <th className="px-4 py-2">اتاق</th>
                                    <th className="px-4 py-2">تخت</th>
                                    <th className="px-4 py-2">نام پزشک</th>
                                    <th className="px-4 py-2">کد ملی بیمار</th>
                                    <th className="px-4 py-2">بیماری</th>
                                    <th className="px-4 py-2">شروع بستری</th>
                                    <th className="px-4 py-2">پایان بستری</th>
                                    <th className="px-4 py-2">عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                {hospitalizations.data.map(({
                                                                id,
                                                                patient,
                                                                room,
                                                                doctor,
                                                                bed,
                                                                disease,
                                                                started_at,
                                                                finished_at,
                                                                deleted_at
                                                            }) => (
                                    <tr key={id} className="text-center border dark:border-gray-700 dark:text-gray-300">
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{patient.first_name + ' ' + patient.last_name}</td>
                                        <td className="px-4 py-2">{room.room_type + ' - ' + room.room_number}</td>
                                        <td className="px-4 py-2">{bed.bed_number}</td>
                                        <td className="px-4 py-2">{doctor.first_name + ' ' + doctor.last_name}</td>
                                        <td className="px-4 py-2">{patient.national_code}</td>
                                        <td className="px-4 py-2">{disease}</td>
                                        <td className="px-4 py-2">{started_at}</td>
                                        <td className="px-4 py-2">{finished_at}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex flex-row justify-center">

                                                {finished_at != null || (
                                                    <>
                                                        {/*<Link*/}
                                                        {/*    tabIndex="1"*/}
                                                        {/*    className="px-4 py-2 text-sm text-white bg-blue-500 dark:bg-blue-700 rounded"*/}
                                                        {/*    href={route("admin.hospitalizations.edit", id)}*/}
                                                        {/*>*/}
                                                        {/*    ویرایش*/}
                                                        {/*</Link>*/}

                                                        <Link
                                                            tabIndex="1"
                                                            href={route("admin.hospitalizations.edit_finished_at", id)}
                                                            className="px-4 py-2 text-sm text-white bg-yellow-500 dark:bg-yellow-600 rounded"
                                                        >
                                                            پایان بستری
                                                        </Link>
                                                    </>
                                                )
                                                }


                                                <button
                                                    onClick={deleted_at == null ? destroy : restore}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className={`${deleted_at == null ? 'bg-red-500 dark:bg-red-700' : 'bg-green-500 dark:bg-green-700'} mx-1 px-4 py-2 text-sm text-white rounded`}
                                                >
                                                    {deleted_at == null ? "حذف" : "برگرداندن"}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {hospitalizations.data.length === 0 && (
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
                            <Pagination links={hospitalizations.links} class="mt-5"/>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default Index;
