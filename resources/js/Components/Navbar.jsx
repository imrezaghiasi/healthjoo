import React, {useContext, useEffect} from 'react';
import {Link} from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {Context} from "@/assets/context";

const Navbar = () => {
    const {openSidebar, auth, showingNavigationDropdown, setShowingNavigationDropdown} = useContext(Context);

    return (
        <div>
            <nav
                className="fixed h-16 top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex flex-row justify-between">
                        <div className="">
                            <span className="text-black dark:text-white text-3xl cursor-pointer"
                                  onClick={openSidebar}><i
                                className="bi bi-filter-left px-2 hover:bg-blue-600 bg-blue-500 dark:bg-gray-900 rounded-md transition duration-500"></i>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Link href={route('welcome')} className="flex ml-2 md:mr-24">
                                <svg className="mb-3" fill="#08781e" version="1.1" id="Capa_1"
                                     xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" width="42px" height="42px"
                                     viewBox="0 0 441.344 441.343" xmlSpace="preserve">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                       strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <g>
                                                <path
                                                    d="M342.095,233.385l-12.276-9.411l-18.024-67.001l-18.024,67.001l-12.276,9.411h-45.572l-27.77,103.228l-24.555-0.002 l-48.291-179.623l-18.02,66.986l-12.278,9.411H19.18c53.671,115.429,201.491,190.279,201.491,190.279 s147.82-74.853,201.491-190.279H342.095z"></path>
                                                <path
                                                    d="M95.261,207.958l27.77-103.228l24.555,0.002l48.291,179.624l18.02-66.985l12.278-9.411h45.571l27.77-103.228h24.556 l27.771,103.228h80.318c5.846-18.177,9.184-37.21,9.184-56.989c0-73.615-57.008-133.29-127.328-133.29 c-36.879,0-70.09,16.419-93.344,42.648c-23.252-26.229-56.465-42.648-93.344-42.648C57.008,17.679,0,77.354,0,150.969 c0,19.779,3.338,38.813,9.184,56.989L95.261,207.958L95.261,207.958z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="flex items-center ml-10">
                            <div className="flex items-center ml-3 mb-5">
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="ml-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="mr-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link href={route('profile.edit')}>پروفایل</Dropdown.Link>
                                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                                    خروج از حساب
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-mr-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                    >
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                             viewBox="0 0 24 24">
                                            <path
                                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>

                    <div
                        className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-700">
                        <div className="px-4">
                            <div
                                className="font-medium text-base text-gray-800 dark:text-gray-200">{auth.user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>پروفایل</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                خروج از حساب
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
