import React from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Swal from "sweetalert2";
import {DatePicker} from "zaman";

const CumulativeAppointment = ({auth, errors}) => {

    const {clinic, flash} = usePage().props
    const {data, setData, post} = useForm({
        minute_steps: 0,
        end_date: ''
    })

    const changeDatePicker = (e) => {
        const date = new Date(e.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        setData("end_date", dateString)
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.appointments.storeCumulativeAppointment", clinic), {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'موفقیت آمیز!',
                    text: 'ثبت با موفقیت انجام شد',
                });
            },
        });
    }


    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ایجاد نوبت</h2>}
        >

            <Head title="Appointments"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div
                                className={`${flash.success ? 'bg-green-500' : 'bg-red-500'} w-full text-white text-center p-2 mb-2`}>{flash.success ? flash.success : flash.failed}</div>
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.appointments.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label htmlFor={"address"} className="">روزهای کاری</label>
                                        <h2 className={"mt-3"}>{clinic.start_day + ' - ' + clinic.end_day}</h2>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label htmlFor={"address"} className="">ساعت های کاری</label>
                                        <h2 className={"mt-3"}>{clinic.start_hours + ' - ' + clinic.end_hours}</h2>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">هر دقیقه ثبت نوبت<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <input type="number"
                                               step={"5"}
                                               max={'60'}
                                               min={"0"}
                                               className={"w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"}
                                               value={data.minute_steps}
                                               onChange={(e) => setData('minute_steps', e.target.value)}/>
                                        <span className="text-red-600">
                                            {errors.minute_steps}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">تاریخ پایان نوبت ها<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <DatePicker
                                            round="x3"
                                            locale="fa"
                                            direction="rtl"
                                            weekends={[6]}
                                            inputClass="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={changeDatePicker}
                                        />
                                        <span className="text-red-600">
                                            {errors.end_date}
                                        </span>
                                    </div>
                                </div>
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

export default CumulativeAppointment;
