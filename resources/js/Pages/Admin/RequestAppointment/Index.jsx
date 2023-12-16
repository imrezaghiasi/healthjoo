import React, {useState} from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Swal from "sweetalert2";

const Index = (props) => {

    const {requestAppointments} = usePage().props;

    const {data,setData,get} = useForm({
        term:'',
        count:requestAppointments.data.length
    })

    function handleSearch(e) {
        e.preventDefault()
        get(route("admin.requestAppointments.index"))
    }

    function destroy(e) {
        if (confirm("آیا از حذف این مورد مطمئن هستید؟")) {
            router.delete(route("admin.requestAppointments.destroy", e.currentTarget.id));
        }
    }

    function restore(e) {
        if (confirm("آیا از برگرداندن این مورد مطمئن هستید؟")) {
            router.get(route("admin.requestAppointments.restore", e.currentTarget.id));
        }
    }

    function handleConfirm(e) {
        Swal.fire({
            title: 'آیا از تایید مراجعه این نوبت مطمئن هستید؟',
            text: "این عمل قابل برگشت نیست !",
            icon: 'success',
            showCancelButton: true,
            cancelButtonText: 'لغو',
            confirmButtonColor: '#0b7917',
            cancelButtonColor: '#ff0101',
            confirmButtonText: 'بله . مطمئنم!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.put(route("requestAppointment.confirmRequestAppointment", e.target.id), {
                    onSuccess: () => {
                        Swal.fire({
                                title: 'تایید شد!',
                                text: 'با موفقیت تایید شد!',
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
            header={<h2 className="font-semibold text-xl leading-tight">نوبت های رزرو شده</h2>}
        >

            <Head title="Doctors"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <form method="GET" onSubmit={handleSearch}>
                                    <input type={"text"} maxLength={10} className={"rounded"} placeholder={"جست و جوی کد ملی بیمار..."} value={data.term} onChange={(e)=>{
                                        setData("term",e.target.value)
                                    }}/>
                                    <button type={"submit"}
                                            className={"rounded-lg px-6 py-2 focus:outline bg-yellow-300 mr-3 hover:bg-yellow-200 duration-300"}>جست
                                        و جو
                                    </button>
                                </form>
                                <div className={"dark:text-gray-100"}>
                                    <h1>تعداد نتایج جست و جو : {data.count}</h1>
                                </div>
                            </div>
                            <table className="w-full dark:bg-gray-800 table-auto text-xs">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2 w-20">نام بیمار</th>
                                    <th className="px-4 py-2 w-20">کد ملی بیمار</th>
                                    <th className="px-4 py-2 w-20">نام پزشک</th>
                                    <th className="px-4 py-2">شروع نوبت</th>
                                    <th className="px-4 py-2">نام بیماری</th>
                                    <th className="px-4 py-2">وضعیت</th>
                                    <th className="px-4 py-2">عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                {requestAppointments.data.map(({
                                                                   id,
                                                                   patient,
                                                                   appointment,
                                                                   disease,
                                                                   is_referred,
                                                                   is_canceled,
                                                                   deleted_at
                                                               }) => (
                                    <tr key={id} className="text-center border dark:border-gray-700 dark:text-gray-300">
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{patient.first_name + ' ' + patient.last_name}</td>
                                        <td className="px-4 py-2">{patient.national_code}</td>
                                        <td className="px-4 py-2">{appointment.clinic.doctor.first_name + ' ' + appointment.clinic.doctor.last_name}</td>
                                        <td className="px-4 py-2">{new Date(appointment.date_started_at).toLocaleDateString('fa-IR')  }</td>
                                        <td className="px-4 py-2">{disease.name}</td>
                                        <td className="px-4 py-2">{is_referred ?
                                            ( <span className={"bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"}>مراجعه شده</span>
                                        ) : (
                                                <span className={"bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"}>مراجعه نشده</span>
                                            )}
                                            {is_canceled ? (
                                                    <span className={"bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"}>کنسل شده</span>
                                                ): ""}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex flex-row justify-center items-center">
                                                <button
                                                    onClick={deleted_at == null ? destroy : restore}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className={`${deleted_at == null ? 'bg-red-500 dark:bg-red-700' : 'bg-green-500 dark:bg-green-700'} mx-1 px-4 py-2 text-sm text-white rounded`}
                                                >
                                                    {deleted_at == null ? "حذف" : "برگرداندن"}
                                                </button>
                                                {!is_referred && !is_canceled && (<button
                                                    onClick={handleConfirm}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className={'bg-green-500 dark:bg-green-700 mx-1 px-4 py-2 text-sm text-white rounded'}
                                                >
                                                    تایید مراجعه
                                                </button>)}
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
