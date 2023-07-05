import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage, router} from "@inertiajs/react";
import {useEffect, useState} from "react";
import {DatePicker} from "zaman";

function Edit({auth, errors}) {

    const {patient} = usePage().props

    const {data, setData} = useForm({
        id : patient.id || "",
        first_name: patient.first_name || "",
        last_name: patient.last_name || "",
        gender: patient.gender || "",
        national_code: patient.national_code || '',
        mobile: patient.mobile || '',
        blood_group: patient.blood_group || '',
        photo: null,
        address: patient.address || '',
        date_of_birth: patient.date_of_birth || '',
        userRemoveImage: null,
        _method: 'PUT'
    })


    const changeDatePicker = (e) => {
        const date = new Date(e.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        setData("date_of_birth",dateString)
    }

    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        if (patient.photo_path) {
            setImgUrl(window.location.origin + '/app/' + patient.photo_path);
        }
    }, [])


    const onChangeImageUpload = (e) => {
        const file = e.target.files[0];
        setData("photo", file);
        if (file) {
            setImgUrl(URL.createObjectURL(e.target.files[0]))
        } else
            setImgUrl('');
    }

    const removeImage = () => {
        setData("photo", null)
        setData("userRemoveImage", true)
        setImgUrl(null)
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.patients.update", patient.id), data);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">ویرایش بیمار</h2>}
        >

            <Head title="Patients"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-700 dark:bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.patients.index")}
                                >
                                    برگشت
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-row justify-center gap-5 mb-5">
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">نام<span className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.first_name}
                                            onChange={(e) =>
                                                setData("first_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.first_name}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">نام خانوادگی<span className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData("last_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.last_name}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">کد ملی<span
                                            className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            maxLength={10}
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.national_code}
                                            onChange={(e) =>
                                                setData("national_code", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.national_code}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">تاریخ تولد<span
                                            className="text-red-600 mr-2">*</span>
                                        </label>
                                        <DatePicker
                                            round="x3"
                                            locale="fa"
                                            direction="rtl"
                                            weekends={[6]}
                                            defaultValue={data.date_of_birth}
                                            inputClass="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            onChange={changeDatePicker}
                                        />
                                        <span className="text-red-600">
                                            {errors.date_of_birth}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="ml-5">شماره همراه<span className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full rounded shadow-sm dark:shadow-gray-900 px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.mobile}
                                            onChange={(e) =>
                                                setData("mobile", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.mobile}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">جنسیت</label>
                                        <select className="text-center w-full px-4 py-2 dark:bg-gray-600"
                                                value={data.gender}
                                                onChange={(e) => setData("gender", e.target.value)}>
                                            <option value="">جنسیت را انتخاب کنید<span
                                                className="text-red-600 mr-2">*</span></option>
                                            <option value="1">مرد</option>
                                            <option value="2">زن</option>
                                        </select>
                                        <span className="text-red-600">
                                            {errors.gender}
                                        </span>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label className="">گروه خونی<span className="text-red-600 mr-2">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.blood_group}
                                            onChange={(e) =>
                                                setData("blood_group", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.blood_group}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start gap-5">
                                    <div className="mb-4 w-1/3">
                                        <label className="">آدرس<span className="text-red-600 mr-2">*</span></label>
                                        <textarea
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800 resize-none"
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }
                                            value={data.address}
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start gap-5">
                                    <div className="mb-4 w-1/4">
                                        <label className="ml-5">تصویر کارمند</label>
                                        <div className="relative">
                                            <div
                                                className="relative flex justify-center w-44 h-56 border-gray-500 border-2 p-2 rounded bg-gray-50 dark:bg-gray-700">
                                                <div className="p-1 flex flex-col justify-center ">
                                                    {imgUrl &&
                                                        <img src={imgUrl} className="rounded transition duration-1000"/>
                                                    }
                                                    {!imgUrl &&
                                                        <h6 className="text-center text-sm">برای آپلود تصویر کلیک
                                                            کنید</h6>
                                                    }
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                name="photo"
                                                id="photo"
                                                className="cursor-pointer absolute inset-0 opacity-0 w-44 bg-gray-100 rounded shadow-sm dark:shadow-gray-900 dark:bg-gray-700 dark:border-gray-800"
                                                onChange={onChangeImageUpload}
                                            />
                                        </div>
                                        {imgUrl &&
                                            <i onClick={removeImage}
                                               className="bi bi-x-lg text-red-700 cursor-pointer"></i>
                                        }
                                        <span className="text-red-600">
                                               {errors.photo}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        ویرایش
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    )
}

export default Edit;
