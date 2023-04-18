import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Dashboard(props) {

    console.log(props)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">داشبورد</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-center p-6 text-gray-900 dark:text-gray-100">شما وارد شده اید !</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
