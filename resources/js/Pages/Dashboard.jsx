import {Head, Link, usePage} from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import moment from "jalali-moment";
import React from "react";
export default function Dashboard(props) {

    const {requestAppointments} = usePage().props;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">داشبورد</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-slate-100 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-center text-blue-900">نوبت های ثبت شده توسط شما</h2>
                        <div
                            className="bg-slate-100 p-5 rounded-md mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {requestAppointments.data.map((requestAppointment) => (
                                <div key={requestAppointment.id}
                                     className="bg-white shadow-gray-300 shadow-xl rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:shadow-teal-500">
                                        <div
                                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={window.location.origin + '/app/' + requestAppointment.appointment.doctor.photo_path}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="p-3 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <div className="font-bold text-blue-950">
                                                        {requestAppointment.appointment.doctor.first_name + ' ' + requestAppointment.appointment.doctor.last_name}
                                                    </div>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{requestAppointment.appointment.doctor.specialization}</p>
                                            </div>
                                        </div>
                                    <div className="p-3">
                                            <h3 className="text-sm text-gray-700">
                                                <div className="font-bold text-blue-950">
                                                  تاریخ نوبت :{moment(requestAppointment.appointment.started_at, 'YYYY-M-D HH:mm:ss').locale('fa').format('YYYY/M/D')}
                                                </div>
                                                <div className="font-bold text-blue-950">
                                                    زمان نوبت :   {moment(requestAppointment.appointment.started_at, 'YYYY-M-D HH:mm:ss').locale('fa').format('HH:mm')}
                                                </div>
                                            </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {
                            requestAppointments.data.length == 0 && (
                                <div className={"bg-slate-100 px-6 py-4 text-gray-600 border-t dark:text-white text-center"}>نوبتی تا به حال برای شما ثبت نشده است</div>
                            )
                        }
                    </div>
                    <Pagination links={requestAppointments.links} class="mt-5 text-center"/>
                </div>
            </div>
        </Authenticated>
    );
}
