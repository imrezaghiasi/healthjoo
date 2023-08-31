import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage} from "@inertiajs/react";
import React from "react";

function Create({auth, errors}) {

    const {patients, medicines} = usePage().props;

    const {data, setData, post} = useForm({
        patient_id: "",
        selected_medicines: []
    })

    function handleSubmit(e) {
        e.preventDefault();
        medicines.map((medicine) => {
            if (document.getElementById(medicine.id).value != '') {
                data.selected_medicines.push({
                    "medicine_id": medicine.id,
                    "count": parseFloat(document.getElementById(medicine.id).value),
                    "price": medicine.price
                })
            }

        })

        post(route("admin.orders.store"));
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ایجاد دارو</h2>}
        >

            <Head title="Medicine"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.medicines.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">نام بیمار<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.patient_id}
                                            onChange={(e) => setData("patient_id", e.target.value)}>
                                            <option value="">نام بیمار را انتخاب کنید</option>
                                            {patients.map(patient => (
                                                <option key={patient.id}
                                                        value={patient.id}>{patient.first_name + ' ' + patient.last_name + ' ' + patient.national_code}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.patient_id}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <label className="ml-5 mb-4 w-1/2">نام دارو<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                    <label className="ml-5 mb-4 w-1/2">تعداد<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                    <label className="ml-5 mb-4 w-1/2">تعداد موجود<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                    <label className="ml-5 mb-4 w-1/2">قیمت<span
                                        className="text-red-600 mr-2">*</span>
                                    </label>
                                </div>

                                {medicines.map(medicine => (
                                    <>
                                        <div key={medicine.id} className="flex flex-row justify-center gap-5 mb-5">
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                    value={medicine.title}
                                                />
                                            </div>
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    id={medicine.id}
                                                    type="text"
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                />
                                            </div>
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                    value={medicine.price}
                                                />
                                            </div>
                                            <div className="mb-4 w-1/2">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                                    value={medicine.price}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ))
                                }
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
    )
}

export default Create;
