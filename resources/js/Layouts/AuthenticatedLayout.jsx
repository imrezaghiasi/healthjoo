import {useState} from 'react';
import Sidebar from "@/Components/Sidebar";
import {Context} from "@/assets/context";
import Navbar from "@/Components/Navbar";
import 'flowbite-react'

export default function Authenticated({auth, header, children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    function dropdown() {
        document.querySelector('#submenu').classList.toggle('hidden');
        document.querySelector('#arrow').classList.toggle('rotate-180');
    }

    function openSidebar() {
        document.querySelector('.sidebar').classList.toggle('hidden');
        document.querySelector('.main').classList.toggle('mr-64')
    }
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Context.Provider
                value={{showingNavigationDropdown, setShowingNavigationDropdown, dropdown, openSidebar, auth}}>
                <Navbar/>
                <Sidebar/>
            </Context.Provider>
            <div className="main p-4 mt-10">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
