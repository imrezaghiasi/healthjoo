import React from 'react';
import {Head, Link, usePage} from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";

function Doctors({auth}) {

    const {doctors} = usePage().props

    return (
        <>
            <Head title="Doctors"/>
            <ClientLayout auth={auth}>
                <div className="bg-gray-100">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-fit lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">پزشک های بیمارستان</h2>
                        {doctors.length != 0 && (<div
                                className="bg-slate-100 p-5 rounded-md shadow shadow-slate-300 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {doctors.map((doctor) => (
                                    <div key={doctor.id}
                                         className="bg-white shadow-gray-300 shadow-xl rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:shadow-teal-500">
                                        <Link href={route("requestAppointments.appointments", doctor.id)}>
                                            <div
                                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                <img
                                                    src={window.location.origin + '/app/' + doctor.photo_path}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <div className="p-3 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <div className="font-bold text-blue-950">
                                                            {doctor.first_name + ' ' + doctor.last_name}
                                                        </div>
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500">{doctor.specialization}</p>
                                                </div>
                                                <button
                                                    className="rounded bg-sky-500 text-gray-200 px-2 hover:bg-teal-600 hover:duration-1000 rounded">رزرو
                                                    نوبت
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                        {
                            doctors.length == 0 && (
                                <div
                                    className={"bg-slate-100 px-6 py-4 text-gray-600 border-t dark:text-white text-center"}>در
                                    حال حاضر پزشکی وجود ندارد</div>
                            )
                        }
                    </div>
                </div>
            </ClientLayout>

        </>
    );
};

export default Doctors;
