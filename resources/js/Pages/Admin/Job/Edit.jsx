import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage, router} from "@inertiajs/react";
import Swal from 'sweetalert2'

const Edit = ({auth, errors}) => {

    const {job} = usePage().props;
    const {data, setData, put} = useForm({
        id: job.id || '',
        name: job.name || '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        Swal.fire({
            title: 'آیا از اعمال تغییرات مطمئن هستید؟',
            showDenyButton: true,
            showCancelButton: true,
            cancelButtonText: 'لغو',
            confirmButtonText: 'ویرایش',
            denyButtonText: `لفو ویرایش`,
        }).then((result) => {
            if (result.isConfirmed) {
                put(route('admin.jobs.update', job.id), {
                    onSuccess: () => {
                        Swal.fire('تغییرات اعمال شد', '', 'success')
                    }
                });
            } else if (result.isDenied) {
                router.get(route('admin.jobs.index'), {}, {
                    onSuccess: () => {
                        Swal.fire('تغییری ایجاد نشد', '', 'info')
                    }
                })
            }
        })
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ویرایش شغل</h2>}
        >

            <Head title="Jobs"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm w-1/2">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.jobs.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">عنوان شغل</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.name}
                                            onChange={(e) => {
                                                setData('name', e.target.value)
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.name}
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

export default Edit
