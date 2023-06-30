import React, {useContext} from 'react';
import {Context} from "@/assets/context";
import {Link, router} from "@inertiajs/react";

const Sidebar = () => {

    const {openSidebar,dropdown} = useContext(Context)

    const handleLogout = (e) => {
        e.preventDefault()
        router.post(route('logout'))
    }

    return (
        <div>
            <div className="sidebar fixed top-10 bottom-0 shadow-sm hidden right-0 p-2 w-[250px] overflow-y-auto
            text-center bg-gradient-to-b from-gray-100 to-gray-200 text-xl dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">

                <div className="text-gray-100 text-xl mt-5">
                    <div className="p-2.5 mt-1 flex items-center">
                        <i className="bi bi-app-indicator px-2 py-1 text-black bg-blue-400 dark:bg-green-600 rounded-md"></i>
                        <h1 className="text-black dark:text-gray-200 text-[15px] mr-3">سیستم مدیریت بیمارستانی</h1>
                        <i className="bi bi-x lg:hidden bg-gray-500 hover:bg-gray-400 cursor-pointer dark:hover:bg-gray-600 rounded-lg transition duration-500"
                           onClick={openSidebar}></i>
                    </div>

                    <hr className="my-2 text-gray-600"/>

                </div>
                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-300 dark:bg-gray-700 dark:text-white">
                    <i className="bi bi-search text-sm"></i>
                    <input type="text" placeholder="جست و جو"
                           className=" text-[15px] mr-4 w-full border-gray-700 border-dashed rounded-md bg-transparent focus:outline-none"/>
                </div>

                <Link
                    href={route('dashboard')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-workspace ml-4"></i>
                    <p>داشبورد</p>
                </Link>

                <Link
                    href={route('admin.patients.index')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-heart-pulse-fill ml-4"></i>
                    <p>بیماران</p>
                </Link>
                <Link
                    href={route('admin.doctors.index')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-check ml-4"></i>
                    <p>پزشکان</p>
                </Link>
                <Link
                    href={route('admin.employees.index')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-workspace ml-4"></i>
                    <p>کارمندان</p>
                </Link>

                <Link
                    href={route('admin.departments.index')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-workspace ml-4"></i>
                    <p>بخش ها</p>
                </Link>

                <Link
                    href={route('admin.jobs.index')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-fill-gear ml-4"></i>
                    <p>شغل ها</p>
                </Link>

                <Link
                    href={route('admin.medicines.index')}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-journal-medical ml-4"></i>
                    <p>داروها</p>
                </Link>

                <hr className="my-2 text-gray-600"/>

                <div onClick={dropdown}
                     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-file-medical"></i>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] mr-4 dark:text-gray-200">مدیریت داروخانه</span>
                        <span className="text-sm rotate-180" id="arrow">
                            <i className="bi bi-chevron-down"></i>
                        </span>
                    </div>
                </div>

                <div className="text-right text-sm font-thin mt-2 w-4/5 mx-auto dark:text-gray-200" id="submenu">
                    <Link
                        href={route('admin.jobs.index')}
                        className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                        <i className="bi bi-person-check ml-4"></i>
                        <p>داروسازان</p>
                    </Link>
                    <Link
                        href={route('admin.jobs.index')}
                        className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                        <i className="bi bi-journal-medical ml-4"></i>
                        <p>داروها</p>
                    </Link>
                </div>

                <form onSubmit={handleLogout}
                    className="text-[15px] dark:text-gray-200 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-box-arrow-in-right ml-4"></i>
                    <button type={'submit'}>خروج</button>
                </form>

            </div>
        </div>
    );
};

export default Sidebar;
