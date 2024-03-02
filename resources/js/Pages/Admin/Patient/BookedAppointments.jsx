import React from 'react';
import {Head, Link, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const BookedAppointments = (props) => {

    const {bookedAppointments} = usePage().props;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">نوبت های رزرو شده</h2>}
        >

            <Head title="Booked Appointments"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.patients.index")}
                                >
                                    برگشت
                                </Link>
                            </div>
                            <table className="w-full dark:bg-gray-800 table-auto text-xs text-center">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2">نام بیمار</th>
                                    <th className="px-4 py-2">نام پزشک</th>
                                    <th className="px-4 py-2">نام بیماری</th>
                                    <th className="px-4 py-2">تاریخ رزرو</th>
                                </tr>
                                </thead>
                                <tbody>
                                {bookedAppointments.data.map(({id, patient, appointment , disease}) => (
                                    <tr key={id} className={"dark:text-white"}>
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{patient.first_name + ' ' + patient.last_name}</td>
                                        <td className="px-4 py-2">{appointment.clinic.doctor.first_name + ' ' + appointment.clinic.doctor.last_name}</td>
                                        <td className="px-4 py-2">{disease.name}</td>
                                        <td className="px-4 py-2">{new Date(appointment.date_started_at).toLocaleDateString('fa-IR') + ' - ' + appointment.time_started_at}</td>
                                    </tr>
                                ))}

                                {bookedAppointments.data.length === 0 && (
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
                            <Pagination links={bookedAppointments.links} class="mt-5"/>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default BookedAppointments;
