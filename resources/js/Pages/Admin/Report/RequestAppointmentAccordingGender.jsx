import React from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const RequestAppointmentAccordingGender = (props) => {

    const {requestAppointments} = usePage().props;

    const {data, setData, get} = useForm({
        term: ''
    })

    function handleSearch(e) {
        e.preventDefault()
        get(route("admin.reports.requestAppointmentsAccordingGender"))
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">گزارش نوبت ها براساس جنسیت</h2>}
        >

            <Head title="Reports"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <form method="GET" onSubmit={handleSearch}>
                                    <input type={"text"} className={"rounded"} placeholder={"جست و جو کنید..."}
                                           value={data.term} onChange={(e) => {
                                        setData("term", e.target.value)
                                    }}/>
                                    <button type={"submit"}
                                            className={"rounded-lg px-6 py-2 focus:outline bg-yellow-300 mr-3 hover:bg-yellow-200 duration-300"}>جست
                                        و جو
                                    </button>
                                </form>
                            </div>
                            <table className="w-full text-right text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ردیف
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        عنوان
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        تعداد
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {requestAppointments.map(({id, name, count}) => (
                                    <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {count}
                                        </td>
                                    </tr>
                                ))}
                                {requestAppointments.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
                                            colSpan="4"
                                        >
                                            هیچ موردی یافت نشد.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default RequestAppointmentAccordingGender;
