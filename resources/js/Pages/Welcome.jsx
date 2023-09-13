import {Link, Head} from '@inertiajs/react';

import headerImage from '../../img/cover-bg.jpg'
import sectionImage_1 from '../../img/oral-surgery.svg'
import sectionImage_2 from '../../img/painless-dentistry.svg'
import sectionImage_3 from '../../img/periodontics.svg'
import sectionImage_4 from '../../img/teeth-whitening.svg'
import Guest from "@/Layouts/GuestLayout";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    return (
        <>
            <Head title="Welcome"/>
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
                                            className="md:ml-4 py-2 inline-block md:text-white md:hidden lg:block font-semibold hover:text-gray-300"
                                            href="#">درباره ما</a></li>
                                        <li className="md:ml-4"><a
                                            className="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-gray-300"
                                            href="#">درمان ها</a></li>
                                        <li className="md:ml-4"><a
                                            className="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-gray-300"
                                            href="#">گواهینامه ها</a></li>
                                        <li className="md:ml-4 md:hidden lg:block"><a
                                            className="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-gray-300"
                                            href="#">بلاگ</a></li>
                                        <li className="md:ml-4"><a
                                            className="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-gray-300"
                                            href="#">ارتباط با ما</a></li>
                                        <li className="md:ml-6 mt-3 md:mt-0">
                                            <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded duration-300 hover:bg-slate-100 hover:text-gray-600"
                                               href="book-appointment.html">رزرو نوبت</a>
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
                    <div className="bg-gray-100">
                        <section className="cover bg-gradient-to-r from-[#0575E6] to-[#78ffd6] relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
                            <div className="h-full w-full absolute top-0 left-0 z-0">
                                <img src={headerImage} alt="" className="w-full h-full object-cover opacity-20"/>
                            </div>

                            <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                                <div>
                                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">ما ضامن
                                        سلامتی شما هستیم</h1>
                                    <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-10">به بیمارستان افضلی
                                        پور خوش آمدید. </p>
                                    <a href="#"
                                       className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">رزرو
                                        نوبت</a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section
                        className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32 bg-gradient-to-r from-[#6DD5FA] to-[#FFFFFF]">
                        <div className="flex flex-col lg:flex-row lg:-mx-8">
                            <div className="w-full lg:w-1/2 lg:px-8">
                                <h2 className="text-3xl leading-tight font-bold mt-4">لورم ایپسوم متن ساختگی با تولید
                                    سادگی</h2>
                                <p className="text-lg mt-4 font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                    صنعت چاپ</p>
                                <p className="mt-2 leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                                    فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                                    ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد .</p>
                            </div>

                            <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                                <div className="md:flex">
                                    <div>
                                        <div
                                            className="w-16 h-16 bg-blue-600 rounded-full shadow-gray-500 shadow-xl hover:translate-y-1 hover:scale-105 hover:duration-1000"></div>
                                    </div>
                                    <div className="md:mr-8 mt-4 md:mt-0">
                                        <h4 className="text-xl font-bold leading-tight">لورم ایپسوم متن ساختگی با تولید
                                            سادگی نامفهوم از صنعت چاپ</h4>
                                        <p className="mt-2 leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                                            در ستون و سطرآنچنان که لازم است، و</p>
                                    </div>
                                </div>

                                <div className="md:flex mt-8">
                                    <div>
                                        <div
                                            className="w-16 h-16 bg-blue-600 rounded-full shadow-gray-500 shadow-xl hover:translate-y-1 hover:scale-100 hover:duration-1000"></div>
                                    </div>
                                    <div className="md:mr-8 mt-4 md:mt-0">
                                        <h4 className="text-xl font-bold leading-tight">لورم ایپسوم متن ساختگی با تولید
                                            سادگی نامفهوم از صنعت چاپ</h4>
                                        <p className="mt-2 leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                                            در ستون و سطرآنچنان که لازم است، و</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                            <div className="md:w-1/2 md:px-4 lg:w-1/4 ">
                                <div
                                    className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-3000">
                                    <img src={sectionImage_4} alt="" className="h-20 mx-auto"/>

                                    <h4 className="text-xl font-bold mt-4">دندان پزشکی</h4>
                                    <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                    <a href="#"
                                       className="block mt-4 border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:bg-gray-200">رزرو
                                        نوبت</a>
                                </div>
                            </div>

                            <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                                <div
                                    className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-1000">
                                    <img src={sectionImage_1} alt="" className="h-20 mx-auto"/>

                                    <h4 className="text-xl font-bold mt-4">قلب و عروق</h4>
                                    <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                    <a href="#"
                                       className="block mt-4  border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:bg-gray-200">رزرو
                                        نوبت</a>
                                </div>
                            </div>

                            <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                                <div
                                    className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-1000">
                                    <img src={sectionImage_2} alt="" className="h-20 mx-auto"/>

                                    <h4 className="text-xl font-bold mt-4">داخلی</h4>
                                    <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                    <a href="#"
                                       className="block mt-4  border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:bg-gray-200">رزرو
                                        نوبت</a>
                                </div>
                            </div>

                            <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                                <div
                                    className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-1000">
                                    <img src={sectionImage_3} alt="" className="h-20 mx-auto"/>

                                    <h4 className="text-xl font-bold mt-4">مغز واعصاب</h4>
                                    <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                    <a href="#"
                                       className="block mt-4 border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:bg-gray-200">رزرو
                                        نوبت</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
                        <div className="md:flex md:items-center md:justify-center">
                            <h2 className="text-xl font-bold text-white">برای رزرو نوبت کلیک کنید | تماس با ما : 3433222250+
                            </h2>
                            <a href="#"
                               className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:mr-8 mt-4 md:mt-0 hover:scale-105 hover:duration-1000 hover:bg-gray-200">رزرو
                                نوبت</a>
                        </div>
                    </section>
                    <footer
                        className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                                <h3 className="font-bold text-2xl">بیمارستان افضلی پور</h3>
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
                                    <li className="mt-2"><a href="#" title="" className="opacity-75 hover:opacity-100">عمومی</a>
                                    </li>
                                    <li className="mt-2"><a href="#" title="" className="opacity-75 hover:opacity-100">داخلی</a>
                                    </li>
                                    <li className="mt-2"><a href="#" title="" className="opacity-75 hover:opacity-100">اطفال</a>
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
}
