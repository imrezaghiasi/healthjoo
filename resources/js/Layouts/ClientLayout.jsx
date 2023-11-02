import React from 'react';
import {Link} from "@inertiajs/react";

const ClientLayout = ({auth, children}) => {
    return (
        <>
            <div className="antialiased bg-white font-sans text-gray-900 dark:bg-dots-lighter dark:bg-gray-900">
                <main className="w-full">
                    <header className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
                        <div className="md:flex justify-between items-center py-2 border-b text-sm py-3">

                            <ul className="flex text-gray-700">
                                <li>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="w-6 h-6 fill-current dark:text-white text-black" viewBox="0 0 24 24">
                                            <path
                                                d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"/>
                                        </svg>

                                        <span className="ml-2">کرمان، بیمارستان سلامت، </span>
                                    </div>
                                </li>
                                <li className="ml-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="w-6 h-6 fill-current dark:text-white text-black" viewBox="0 0 24 24">
                                            <path
                                                d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"/>
                                        </svg>

                                        <span className="ml-2">3433222250+</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap items-center justify-between py-6">
                            <div className="w-1/2 md:w-auto">
                                <Link href={route("welcome")} className="text-gray-700 font-bold text-2xl">
                                    بیمارستان سلامت
                                </Link>
                            </div>

                            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                                <svg className="fill-current text-gray-700"
                                     xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <title>menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </label>

                            <input className="hidden" type="checkbox" id="menu-toggle"/>

                            <div className="hidden md:block w-full md:w-auto" id="menu">
                                <nav
                                    className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                                    <ul className="md:flex items-center md:text-gray-700">
                                        <li><a
                                            className="md:ml-4 py-2 inline-block md:hidden lg:block font-semibold hover:text-gray-500"
                                            href="#">درباره ما</a></li>
                                        <li className="md:ml-4"><a
                                            className="py-2 inline-block md:px-2 font-semibold hover:text-gray-500"
                                            href="#">درمان ها</a></li>
                                        <li className="md:ml-4"><a
                                            className="py-2 inline-block md:px-2 font-semibold hover:text-gray-500"
                                            href="#">گواهینامه ها</a></li>
                                        <li className="md:ml-4 md:hidden lg:block"><a
                                            className="py-2 inline-block md:px-2 font-semibold hover:text-gray-500"
                                            href="#">بلاگ</a></li>
                                        <li className="md:ml-4"><a
                                            className="py-2 inline-block md:px-2 font-semibold hover:text-gray-500"
                                            href="#">ارتباط با ما</a></li>
                                        <li className="md:ml-6 mt-3 md:mt-0">
                                            <Link
                                                className="inline-block font-semibold px-4 py-2 md:text-gray-200 bg-teal-600 rounded duration-1000 hover:bg-teal-500"
                                                href={route("requestAppointments.doctors", 'all')}>رزرو نوبت</Link>
                                        </li>
                                        {auth.user ? (
                                            <Link
                                                href={route('dashboard')}
                                                className="md:ml-6 mt-3 md:mt-0 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                                            >
                                                پروفایل
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route('login')}
                                                    className="md:ml-6 mt-3 md:mt-0 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                                                >
                                                    ورود
                                                </Link>

                                                <Link
                                                    href={route('register')}
                                                    className="md:ml-6 mt-3 md:mt-0 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                                                >
                                                    ثبت نام
                                                </Link>
                                            </>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                    {children}
                    <footer
                        className="bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                                <h3 className="font-bold text-2xl">بیمارستان سلامت</h3>
                                <p className="text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی</p>

                                <form className="flex items-center mt-6">
                                    <div className="w-full">
                                        <label
                                            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name">
                                            اخبار ما را دنبال کنید
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="email" placeholder="ایمیل خود را وارد کنید"/>

                                            <button type="submit"
                                                    className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 left-0 my-2 ml-2">Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                                <h5 className="uppercase tracking-wider font-semibold text-gray-500">درمان ها</h5>
                                <ul className="mt-4">
                                    <li className="mt-2"><a href="#" title=""
                                                            className="opacity-75 hover:opacity-100">عمومی</a>
                                    </li>
                                    <li className="mt-2"><a href="#" title=""
                                                            className="opacity-75 hover:opacity-100">داخلی</a>
                                    </li>
                                    <li className="mt-2"><a href="#" title=""
                                                            className="opacity-75 hover:opacity-100">اطفال</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
                                <h5 className="uppercase tracking-wider font-semibold text-gray-500">اطلاعات تماس</h5>
                                <ul className="mt-4">
                                    <li>
                                        <a href="#" title=""
                                           className="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       className="fill-current">
                    <path
                        d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"/>
                  </svg>
                </span>
                                            <span className="ml-3">
                  کرمان، بیمارستان افضلی پور
                </span>
                                        </a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="#" title=""
                                           className="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       className="fill-current">
                    <path
                        d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"/>
                    <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"/></svg>
                </span>
                                            <span className="ml-3">
                  شنبه تا پنج شنبه : ۰۹:۰۰ تا ۱۹:۰۰<br/>
                </span>
                                        </a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="#" title=""
                                           className="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       className="fill-current">
                    <path
                        d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"/>
                  </svg>
                </span>
                                            <span className="ml-3">
                  3433222250+
                </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                                <p className="text-sm text-gray-400 mt-12">© 2018 Reza <br
                                    className="hidden lg:block"/>تمامی حقوق محفوظ است.
                                </p>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </>
    );
};

export default ClientLayout;
