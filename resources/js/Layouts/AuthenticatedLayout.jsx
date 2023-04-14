import {useState} from 'react';
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import {Context} from "@/context";

export default function Authenticated({user, children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    function dropdown() {
        document.querySelector('#submenu').classList.toggle('hidden');
        document.querySelector('#arrow').classList.toggle('rotate-180');
    }

    function openSidebar() {
        document.querySelector('.sidebar').classList.toggle('hidden');
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Context.Provider value={{showingNavigationDropdown,setShowingNavigationDropdown,dropdown,openSidebar,user}}>
                <Navbar />
                <Sidebar/>
            </Context.Provider>
            <div className="p-4 mt-10">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    );
}
