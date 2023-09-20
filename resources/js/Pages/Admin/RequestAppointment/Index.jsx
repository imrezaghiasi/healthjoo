import React, {useState} from 'react';
import {Head, Link, router, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {

    const {requestAppointments} = usePage().props;

    function destroy(e) {
        if (confirm("آیا از حذف این مورد مطمئن هستید؟")) {
            router.delete(route("admin.requestAppointments.destroy", e.currentTarget.id));
        }
    }

    console.log(requestAppointments);

    function restore(e) {
        if (confirm("آیا از برگرداندن این مورد مطمئن هستید؟")) {
            router.get(route("admin.requestAppointments.restore", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">نوبت های رزرو شده</h2>}
        >

            <Head title="Doctors"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <table className="w-full dark:bg-gray-800 table-auto text-xs">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2 w-20">نام بیمار</th>
                                    <th className="px-4 py-2 w-20">نام پزشک</th>
                                    <th className="px-4 py-2">شروع نوبت</th>
                                    <th className="px-4 py-2">بیماری</th>
                                    <th className="px-4 py-2">عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                {requestAppointments.data.map(({
                                                                   id,
                                                                   user,
                                                                   appointment,
                                                                   disease,
                                                                   deleted_at
                                                               }) => (
                                    <tr key={id} className="text-center border dark:border-gray-700 dark:text-gray-300">
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2">{appointment.doctor.first_name + ' ' + appointment.doctor.last_name}</td>
                                        <td className="px-4 py-2">{appointment.started_at}</td>
                                        <td className="px-4 py-2">{disease}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex flex-row justify-center">
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

                                {requestAppointments.data.length === 0 && (
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
                            <Pagination links={requestAppointments.links} class="mt-5"/>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default Index;
