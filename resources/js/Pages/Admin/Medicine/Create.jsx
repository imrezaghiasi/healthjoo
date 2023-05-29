import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm} from "@inertiajs/react";

function Create({auth,errors}) {

    const {data,setData,post} = useForm({
        title : "",
        price : "",
        code : "",
    })

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.medicines.store"));
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
                                        <label className="">عنوان دارو</label>
                                        <input
                                            type="text"
                                            className="w-full mt-5 px-4 py-2 rounded dark:bg-gray-700 dark:border-gray-800"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">قیمت</label>
                                        <input
                                            type="text"
                                            className="w-full mt-5 px-4 py-2 rounded dark:bg-gray-700 dark:border-gray-800"
                                            value={data.price}
                                            onChange={(e) =>
                                                setData("price", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.price}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">کد</label>
                                        <input
                                            type="text"
                                            className="w-full mt-5 px-4 py-2 rounded dark:bg-gray-700 dark:border-gray-800"
                                            value={data.code}
                                            onChange={(e) =>
                                                setData("code", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.code}
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
    )
}

export default Create;
