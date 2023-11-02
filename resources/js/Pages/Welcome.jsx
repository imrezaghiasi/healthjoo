import {Link, Head} from '@inertiajs/react';

import headerImage from '../../img/header-background.png'
import sectionImage_1 from '../../img/oral-surgery.svg'
import sectionImage_2 from '../../img/painless-dentistry.svg'
import sectionImage_3 from '../../img/periodontics.svg'
import sectionImage_4 from '../../img/teeth-whitening.svg'
import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    return (
        <>
            <Head title="Welcome"/>
            <ClientLayout
                auth={auth}
            >
                <div className="bg-gray-100">
                    <section className="cover relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
                        <div className="h-full w-full absolute top-0 left-0 z-0">
                            <img src={headerImage} alt="" className="w-full h-full object-cover"/>
                        </div>

                        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                            <div>
                                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">ما
                                    ضامن
                                    سلامتی شما هستیم</h1>
                                <p className="text-white md:text-2xl leading-snug mt-10">به بیمارستان سلامت خوش آمدید. </p>
                                <a href={route("requestAppointments.doctors", 'all')}
                                   className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">رزرو
                                    نوبت</a>
                            </div>
                        </div>
                    </section>
                </div>
                <section
                    className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32 bg-gradient-to-b from-[#ffffff] to-[#b6fbff]">
                    <div className="flex flex-col lg:flex-row lg:-mx-8">
                        <div className="w-full lg:w-1/2 lg:px-8">
                            <h2 className="text-3xl leading-tight font-bold">لورم ایپسوم متن ساختگی با تولید
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
                                        <span>
                                            <svg className="mb-3 fill-teal-600 hover:fill-teal-400 hover:cursor-pointer duration-1000 hover:scale-95"  version="1.1" id="Capa_1"
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
                                        </span>
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
                                        <span>
                                            <svg className="mb-3 fill-teal-600 hover:fill-teal-400 hover:cursor-pointer duration-1000 hover:scale-95"  version="1.1" id="Capa_1"
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
                                        </span>
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
                                <a href={route("requestAppointments.doctors", 'dentists')}
                                   className="block mt-4 border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:duration-1000 hover:bg-gray-200">رزرو
                                    نوبت</a>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                            <div
                                className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-1000">
                                <img src={sectionImage_1} alt="" className="h-20 mx-auto"/>

                                <h4 className="text-xl font-bold mt-4">قلب و عروق</h4>
                                <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                <a href={route("requestAppointments.doctors", 'cardiologist')}
                                   className="block mt-4 border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:duration-1000 hover:bg-gray-200">رزرو
                                    نوبت</a>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div
                                className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-1000">
                                <img src={sectionImage_2} alt="" className="h-20 mx-auto"/>

                                <h4 className="text-xl font-bold mt-4">داخلی</h4>
                                <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                <a href={route("requestAppointments.doctors", 'internist')}
                                   className="block mt-4  border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:duration-1000 hover:bg-gray-200">رزرو
                                    نوبت</a>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div
                                className="bg-white rounded-lg border border-gray-300 p-8 shadow-gray-500 shadow-md hover:translate-y-1 hover:scale-100 hover:duration-1000">
                                <img src={sectionImage_3} alt="" className="h-20 mx-auto"/>

                                <h4 className="text-xl font-bold mt-4">مغز واعصاب</h4>
                                <p className="mt-1">لورم ایپسوم متن ساختگی</p>
                                <a href={route("requestAppointments.doctors", 'neurologist')}
                                   className="block mt-4 border-1 px-4 py-2 border-gray-300 border-2 rounded-md hover:translate-y-1 hover:scale-100 hover:duration-1000 hover:bg-gray-200">رزرو
                                    نوبت</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
                    <div className="md:flex md:items-center md:justify-center">
                        <h2 className="text-xl font-bold dark:text-white">برای رزرو نوبت کلیک کنید | تماس با ما :
                            3433222250+
                        </h2>
                        <a href={route("requestAppointments.doctors", 'all')}
                           className="px-8 py-4 bg-teal-300 text-gray-700 rounded inline-block font-semibold md:mr-8 mt-4 md:mt-0 hover:scale-105 hover:duration-1000 hover:bg-teal-200">رزرو
                            نوبت</a>
                    </div>
                </section>
            </ClientLayout>
        </>
    );
}
