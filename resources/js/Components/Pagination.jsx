import React from 'react';
import {Link} from "@inertiajs/react";

export default function Pagination({ links }) {

    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 dark:hover:text-gray-900 dark:text-gray-300";
        } else{
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white dark:hover:text-gray-900 focus:border-primary focus:text-primary dark:text-gray-400";
        }
    }

    if (links.length > 0){
            links[0].label = 'قبلی'
            links[links.length-1].label = 'بعدی'
    }

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => (
                        link.url === null ?
                            (<div
                                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                            >{link.label}</div>) :

                            (<Link
                                className={getClassName(link.active)}
                                href={ link.url }
                            >{link.label}</Link>)
                    ))}
                </div>
            </div>
        )
    );
}
