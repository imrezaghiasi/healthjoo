import React, {useContext} from 'react';
import {Context} from "@/assets/context";
import {Link} from "@inertiajs/react";

const Sidebar = () => {

    const {openSidebar,dropdown} = useContext(Context)

    return (
        <div>
            <div className="sidebar fixed top-10 bottom-0 shadow-gray-700 shadow-2xl hidden right-0 p-2 w-[250px] overflow-y-auto
            text-center bg-gray-200 text-xl dark:bg-gray-800">

                <div className="text-gray-100 text-xl">
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

                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] mr-4  dark:text-gray-200">داشبورد</span>
                </div>

                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-workspace"></i>
                    <Link href={route('admin.employees.index')} className="text-[15px] mr-4 dark:text-gray-200">کارمندان</Link>
                </div>

                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-person-workspace"></i>
                    <Link href={route('admin.jobs.index')} className="text-[15px] mr-4 dark:text-gray-200">شغل ها</Link>
                </div>

                <hr className="my-2 text-gray-600"/>

                <div onClick={dropdown}
                     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-chat-right-text-fill"></i>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] mr-4 dark:text-gray-200">مدیریت داروخانه</span>
                        <span className="text-sm rotate-180" id="arrow">
                            <i className="bi bi-chevron-down"></i>
                        </span>
                    </div>
                </div>

                <div className="text-right text-sm font-thin mt-2 w-4/5 mx-auto dark:text-gray-200" id="submenu">
                    <h1 className="cursor-pointer p-2 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-md mt-1">داروسازان</h1>
                    <h1 className="cursor-pointer p-2 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-md mt-1">دارو ها</h1>
                </div>

                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 dark:hover:bg-green-600 dark:text-white">
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span className="text-[15px] mr-4 dark:text-gray-200">خروج</span>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
