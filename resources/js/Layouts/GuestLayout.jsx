import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({auth, children }) {
    return (
        <div className="antialiased bg-white font-sans text-gray-900 dark:bg-dots-lighter dark:bg-gray-900">
            <main className="w-full">
                <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
                    <div className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3">

                        <ul className="flex text-white">
                            <li>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                        <path
                                            d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"/>
                                    </svg>

                                    <span className="ml-2">کرمان، بیمارستان افضلی پور، </span>
                                </div>
                            </li>
                            <li className="ml-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
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
                            <a href="index.html" className="text-white font-bold text-2xl">
                                بیمارستان افضلی پور
                            </a>
                        </div>

                        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                            <svg className="fill-current text-white"
                                 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </label>

                        <input className="hidden" type="checkbox" id="menu-toggle"/>

                        <div className="hidden md:block w-full md:w-auto" id="menu">
                            <nav
                                className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                                <ul className="md:flex items-center">
                                    <li><a
                                        className="md:ml-4 py-2 inline-block md:text-white md:hidden lg:block font-semibold"
                                        href="#">درباره ما</a></li>
                                    <li className="md:ml-4"><a
                                        className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                        href="#">درمان ها</a></li>
                                    <li className="md:ml-4"><a
                                        className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                        href="#">گواهینامه ها</a></li>
                                    <li className="md:ml-4 md:hidden lg:block"><a
                                        className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                        href="#">بلاگ</a></li>
                                    <li className="md:ml-4"><a
                                        className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                        href="#">ارتباط با ما</a></li>
                                    <li className="md:ml-6 mt-3 md:mt-0">
                                        <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                                           href="book-appointment.html">رزرو نوبت</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
