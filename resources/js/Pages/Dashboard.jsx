import {Head, Link, router, usePage} from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import moment from "jalali-moment";
import React from "react";
import Swal from "sweetalert2";

export default function Dashboard(props) {

    const {requestAppointments} = usePage().props;

    function handleCancel(e) {
        Swal.fire({
            title: 'آیا از لغو نوبت خود مطمئن هستید؟',
            text: "این عمل قابل برگشت نیست !",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'لغو',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله . مطمئنم!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.put(route("requestAppointment.cancelRequestAppointment", e.target.id), {
                    onSuccess: () => {
                        Swal.fire({
                                title: 'لغو شد!',
                                text: 'با موفقیت لغو شد!',
                                icon: 'success'
                            }
                        )
                    }
                });
            }
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">داشبورد</h2>}
        >
            <Head title="Dashboard"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-slate-100 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-center text-blue-900 dark:text-blue-500 mt-5">نوبت
                            های ثبت شده توسط شما</h2>
                        <div
                            className="bg-slate-100 dark:bg-slate-900 m-5 p-5 rounded-md mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {requestAppointments.data.map((requestAppointment) => (
                                <div key={requestAppointment.id}
                                     className="bg-white dark:bg-gray-800 p-5 shadow-xl rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:shadow-teal-500">
                                    <div
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md dark:bg-gray-900 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={window.location.origin + '/app/' + requestAppointment.appointment.clinic.doctor.photo_path}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="p-3 flex justify-between">
                                        <div>
                                            <h3 className="text-sm">
                                                <div className="font-bold text-blue-950 dark:text-gray-200">
                                                    {requestAppointment.appointment.clinic.doctor.first_name + ' ' + requestAppointment.appointment.clinic.doctor.last_name}
                                                </div>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">{requestAppointment.appointment.clinic.doctor.specialization}</p>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm">
                                            <div className="font-bold text-blue-950 dark:text-slate-400 mb-2">
                                                بیماری :{requestAppointment.disease.name}
                                            </div>
                                            <div className="font-bold text-blue-950 dark:text-gray-200">
                                                تاریخ نوبت
                                                :{moment(requestAppointment.appointment.started_at, 'YYYY-M-D HH:mm:ss').locale('fa').format('YYYY/M/D')}
                                            </div>
                                            <div className="font-bold text-blue-950 dark:text-gray-200">
                                                زمان نوبت
                                                : {moment(requestAppointment.appointment.started_at, 'YYYY-M-D HH:mm:ss').locale('fa').format('HH:mm')}
                                            </div>
                                        </h3>
                                        {!requestAppointment.is_canceled && !requestAppointment.is_referred ? (<button
                                            onClick={handleCancel}
                                            id={requestAppointment.id}
                                            tabIndex="-1"
                                            type="button"
                                            className={'mt-3 bg-red-500 dark:bg-red-700 mx-1 px-4 py-2 text-sm text-white rounded'}
                                        >
                                            لغو نوبت
                                        </button>) : ( !requestAppointment.is_referred ?
                                             <h4 className={"mt-3 text-red-600"}>لغو شده</h4> : (<h4 className={"mt-3 text-green-600"}>مراجعه شده</h4>)
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {
                            requestAppointments.data.length == 0 && (
                                <div
                                    className={"bg-slate-100 px-6 py-4 text-gray-600 border-t dark:text-white text-center"}>نوبتی
                                    تا به حال برای شما ثبت نشده است</div>
                            )
                        }
                    </div>
                    <Pagination links={requestAppointments.links} class="mt-5 text-center"/>
                </div>
            </div>
        </Authenticated>
    );
}
