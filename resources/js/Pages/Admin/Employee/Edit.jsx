import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage, router} from "@inertiajs/react";

function Create({auth, errors}) {

    const {employee, jobs} = usePage().props

    const {data, setData} = useForm({
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        gender: employee.gender || "",
        national_code: employee.national_code || '',
        phone: employee.phone || '',
        email: employee.email || '',
        photo: null,
        address: employee.address || '',
        salary: employee.salary || '',
        job_id: employee.job_id || '',
        _method: 'PUT'
    })

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.employees.update", employee.id), data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ویرایش کارمند</h2>}
        >

            <Head title="Employees"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-700 dark:bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.employees.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">نام</label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.first_name}
                                            onChange={(e) =>
                                                setData("first_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.first_name}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">نام خانوادگی</label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData("last_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.last_name}
                                        </span>
                                    </div>

                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">تصویر کارمند</label>
                                        <input
                                            type="file"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={(e) =>
                                                setData("photo", e.target.files[0])
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.photo}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">کد ملی</label>
                                        <input
                                            type="text"
                                            maxLength={10}
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.national_code}
                                            onChange={(e) =>
                                                setData("national_code", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.national_code}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">شغل کارمند</label>
                                        <select
                                            className="text-center w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.job_id} onChange={(e) => setData("job_id", e.target.value)}>
                                            <option value="">شغل را انتخاب کنید</option>
                                            {jobs.map(job => (
                                                <option key={job.id} value={job.id}>{job.name}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.job_id}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">جنسیت</label>
                                        <select className="text-center w-full px-4 py-2 dark:bg-gray-600"
                                                value={data.gender}
                                                onChange={(e) => setData("gender", e.target.value)}>
                                            <option value="">جنسیت را انتخاب کنید</option>
                                            <option value="1">مرد</option>
                                            <option value="2">زن</option>
                                        </select>
                                        <span className="text-red-600">
                                            {errors.gender}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="">ایمیل</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.email}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label className="ml-5">شماره همراه</label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.phone}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/2">
                                        <label className="">حقوق</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.salary}
                                            onChange={(e) =>
                                                setData("salary", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.salary}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label className="">آدرس</label>
                                        <textarea
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800 resize-y"
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }
                                            value={data.address}
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        ویرایش
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
