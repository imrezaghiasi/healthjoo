import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage, router} from "@inertiajs/react";

const Edit = ({auth,errors}) => {

    const {test} = usePage().props;
    const {data, setData,put} = useForm({
        test_name: test.test_name || '',
        unit: test.unit || '',
        normal_range: test.normal_range || '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        put(route('admin.tests.update',test.id));
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ویرایش تست</h2>}
        >

            <Head title="Tests"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.tests.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="">نام تست</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.test_name}
                                            onChange={(e) =>{
                                                setData('test_name',e.target.value)
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.test_name}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">واحد</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.unit}
                                            onChange={(e) =>{
                                                setData('unit',e.target.value)
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.unit}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">محدوده نرمال</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.normal_range}
                                            onChange={(e) =>{
                                                setData('normal_range',e.target.value)
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.normal_range}
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
