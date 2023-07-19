import {Head, Link, usePage} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const ShowResults = (props) => {

    const {result, laboratory_test} = usePage().props;

    console.log(laboratory_test)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">نتیجه آزمایش</h2>}
        >

            <Head title="Results"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-3 bg-white dark:bg-gray-800 dark:shadow-xl">
                            <div className="flex mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.laboratory_tests.index")}
                                >
                                    برگشت
                                </Link>
                                <label className="mr-5 px-4 py-2 border-2">{laboratory_test.first_name + ' ' + laboratory_test.last_name}</label>
                            </div>
                            <table className="w-full dark:bg-gray-800 table-auto" style={{direction: "ltr"}}>
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">#</th>
                                    <th className="px-4 py-2 w-20">Test</th>
                                    <th className="px-4 py-2">Result</th>
                                    <th className="px-4 py-2">Unit</th>
                                    <th className="px-4 py-2">Reference Range</th>
                                </tr>
                                </thead>
                                <tbody>
                                {result.map(({id, test, result}, index) => (
                                    <tr key={id} className="border text-center dark:border-gray-700 dark:text-gray-300">
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">{test.test_name}</td>
                                        <td className="px-4 py-2">{result}</td>
                                        <td className="px-4 py-2">{test.unit}</td>
                                        <td className="px-4 py-2">{test.normal_range}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default ShowResults;
