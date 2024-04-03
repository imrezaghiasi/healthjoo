import React, {useState} from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";
import {DatePicker} from "zaman";

function Appointment({auth, errors}) {

    const {doctor, appointments,diseases, similarDoctors,flash} = usePage().props

    const [filteredAppointments, setFilteredAppointments] = useState(appointments.filter((item) => item.date_started_at == new Date().toJSON().slice(0, 10)))

    const {data, setData, post} = useForm({
        user_id: auth.user.id,
        patient_id: auth.user.patient[0].id,
        date_started_at: new Date().toJSON().slice(0, 10),
        time_started_at: "",
        disease_id: ""
    })


    function handleRadio(e) {
        setData("time_started_at", e.target.value)
    }

    const changeDatePicker = (e) => {
        const date = new Date(e.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        setFilteredAppointments(appointments.filter((item) => item.date_started_at == dateString))
        setData("date_started_at", dateString)
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.requestAppointments.store"));
    }

    var typeFlash;
    if (flash.success)
        typeFlash = <div className="bg-green-500 w-full text-white text-center p-2">{flash.success}</div>
    if (flash.failed)
        typeFlash = <div className="bg-red-500 w-full text-white text-center p-2">{flash.failed}</div>

    return (
        <>
            <Head title="Doctors"/>
            <ClientLayout auth={auth}>
                {typeFlash}
                <div className="container mx-auto my-10 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-44 w-44 rounded-full mx-auto"
                                         src={window.location.origin + '/app/' + doctor.photo_path}
                                         alt=""/>
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-4">{doctor.first_name + ' ' + doctor.last_name}</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">{doctor.specialization}</h3>
                                <div
                                    className="inline-block mt-5 bg-green-500 py-1 px-2 rounded text-white text-sm">دردسترس
                                </div>
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-3 hover:shadow">
                                <div
                                    className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span className="text-green-500">
                            <svg className="h-5 ml-2 fill-current" xmlns="https://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </span>
                                    <span>پزشکان مشابه</span>
                                </div>
                                <div className="grid grid-cols-3">
                                    {similarDoctors.map((doctor) => (
                                        <div className="text-center my-2">
                                            <img className="h-16 w-16 rounded-full mx-auto"
                                                 src={window.location.origin + '/app/' + doctor.photo_path}
                                                 alt=""/>
                                            <Link
                                                href={route("appointments", doctor.id)}>{doctor.first_name + ' ' + doctor.last_name}</Link>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </span>
                                    <span className="tracking-wide">درباره پزشک</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">نام</div>
                                            <div className="px-4 py-2">{doctor.first_name}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">نام خانوادگی</div>
                                            <div className="px-4 py-2">{doctor.last_name}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">جنسیت</div>
                                            <div className="px-4 py-2">{doctor.gender == 1 ? 'مرد' : 'زن'}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">شماره مطب</div>
                                            <div className="px-4 py-2">{doctor.mobile}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">آدرس</div>
                                            <div className="px-4 py-2">{doctor.address}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">ایمیل</div>
                                            <div className="px-4 py-2">
                                                <a className="text-blue-800"
                                                   href="mailto:jane@example.com">{doctor.email}</a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">تاریخ تولد</div>
                                            <div className="px-4 py-2">{doctor.date_of_birth}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 shadow-sm rounded-sm">

                                <form onSubmit={handleSubmit}>
                                    <div className="flex justify-around">
                                        <div className="w-1/3">
                                            <label className="ml-5">نام بیماری<span
                                                className="text-red-600 mr-2">*</span></label>
                                            <select
                                                className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                value={data.disease_id}
                                                onChange={(e) => setData("disease_id", e.target.value)}>
                                                <option value="">بیماری را انتخاب کنید</option>
                                                {diseases.map(disease => (
                                                    <option key={disease.id}
                                                            value={disease.id}>{disease.name}</option>
                                                ))
                                                }
                                            </select>
                                            <span className="text-red-600">
                                            {errors.disease_id}
                                        </span>
                                        </div>
                                        <div className="w-1/3 mr-3">
                                            <p className="mb-2 text-xl font-bold text-blue-900">انتخاب تاریخ</p>
                                            <DatePicker
                                                round="x3"
                                                locale="fa"
                                                direction="rtl"
                                                weekends={[6]}
                                                defaultValue={Date.now()}
                                                inputClass="w-full rounded shadow-sm bg-blue-50 dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-500"
                                                onChange={changeDatePicker}
                                            />
                                            <span className="text-red-600">
                                                {errors.date_started_at}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-1/3 mt-5">
                                            <p className="mb-2 text-xl font-bold text-blue-900">انتخاب زمان</p>
                                            <div className="flex gap-5">
                                                {filteredAppointments.map((appointment) => (
                                                    <div key={appointment.id}
                                                         className="w-1/2 px-4 py-2 border border-gray-300 rounded dark:border-gray-700">
                                                        <input id={`border_radio-${appointment.id}`}
                                                               type="radio"
                                                               name="time_started_at"
                                                               value={appointment.time_started_at}
                                                               onChange={handleRadio}
                                                               className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                        <label htmlFor={`border_radio-${appointment.id}`}
                                                               className="w-full mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            {appointment.time_started_at}
                                                        </label>

                                                    </div>
                                                ))}
                                            </div>
                                            {filteredAppointments.length == 0 && (
                                                <div className={"bg-slate-100 px-6 py-4 text-gray-600 border-t dark:text-white text-right"}>نوبتی برای این تاریخ ثبت نشده است</div>
                                            )}
                                        </div>
                                        <div className="flex items-end w-1/3 text-red-600 mr-2">
                                            <p>{errors.time_started_at}</p>
                                        </div>
                                    </div>
                                    <button type={"submit"} className={"border border-teal-800 px-4 py-2 bg-teal-700 text-white hover:bg-teal-500 duration-1000 rounded mt-2"}>رزرو نوبت</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </ClientLayout>

        </>
    );
}

export default Appointment;
