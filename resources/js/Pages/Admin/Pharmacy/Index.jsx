import React from 'react';
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {

    const {pharmacy} = usePage().props;

    const {data, setData, get} = useForm({
        term: ''
    })

    function destroy(e) {
        if (confirm("آیا از حذف این مورد مطمئن هستید؟")) {
            router.delete(route("admin.pharmacy.destroy", e.currentTarget.id));
        }
    }


    function restore(e) {
        if (confirm("آیا از برگرداندن این مورد مطمئن هستید؟")) {
            router.get(route("admin.pharmacy.restore", e.currentTarget.id));
        }
    }

    function handleSearch(e) {
        e.preventDefault()
        get(route("admin.pharmacy.index"))
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">انبار دارو</h2>}
        >

            <Head title="Pharmacy"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.pharmacy.create")}
                                >
                                    ایجاد انبار دارو
                                </Link>
                                <form method="GET" onSubmit={handleSearch}>
                                    <input type={"text"} className={"rounded"} placeholder={"جست و جوی انبار ..."}
                                           value={data.term} onChange={(e) => {
                                        setData("term", e.target.value)
                                    }}/>
                                    <button type={"submit"}
                                            className={"rounded-lg px-6 py-2 focus:outline bg-yellow-300 mr-3 hover:bg-yellow-200 duration-300"}>جست
                                        و جو
                                    </button>
                                </form>
                            </div>

                            <table className="w-full dark:bg-gray-800 table-auto text-xs">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">ردیف</th>
                                    <th className="px-4 py-2 w-20">نام دارو</th>
                                    <th className="px-4 py-2">تعداد</th>
                                    <th className="px-4 py-2">وضعیت</th>
                                    <th className="px-4 py-2">عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                {pharmacy.data.map(({id, medicine, quantity, in_stock, deleted_at}) => (
                                    <tr key={id} className="border text-center dark:border-gray-700 dark:text-gray-300">
                                        <td className="px-4 py-2">{id}</td>
                                        <td className="px-4 py-2">{medicine.title}</td>
                                        <td className="px-4 py-2">{quantity}</td>
                                        <td className="px-4 py-2">{
                                            in_stock === 1
                                                ?
                                                (<span
                                                        className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">موجود</span>
                                                ) :
                                                (
                                                    <span
                                                        className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">ناموجود</span>
                                                )
                                        }</td>
                                        <td className="px-4 py-2">
                                            <div className="flex flex-row justify-center gap-x-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 dark:bg-blue-700 rounded"
                                                    href={route("admin.pharmacy.edit", id)}
                                                >
                                                    ویرایش
                                                </Link>

                                                {quantity > 0 && (
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-red-300 dark:bg-red-500 rounded"
                                                        href={route("admin.pharmacy.reduce", id)}
                                                    >
                                                        کاهش موجودی
                                                    </Link>
                                                )}

                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-green-500 dark:bg-green-700 rounded"
                                                    href={route("admin.pharmacy.increase", id)}
                                                >
                                                    افزایش موجودی
                                                </Link>

                                                <button
                                                    onClick={deleted_at == null ? destroy : restore}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className={`${deleted_at == null ? 'bg-red-500 dark:bg-red-700' : 'bg-green-500 dark:bg-green-700'} mx-1 px-4 py-2 text-sm text-white rounded`}
                                                >
                                                    {deleted_at == null ? "حذف" : "برگرداندن"}
                                                </button>

                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-600 dark:bg-blue-800 rounded"
                                                    href={route("admin.pharmacy.get_operation", id)}
                                                >
                                                    گردش انبار
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {pharmacy.data.length === 0 && (
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
                            <Pagination links={pharmacy.links} class="mt-5"/>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
};

export default Index;
