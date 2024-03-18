import { Archive, Ban, Check, ListChecks, SearchX } from 'lucide-react';
import React from 'react';

const navbar = () => {
    return (
        <div className="flex justify-center">
            <ul className="flex md:flex-row justify-center items-center md:h-20 md:space-x-10">
                <li className="flex items-center">
                    <a href="#" className="flex items-center"> <ListChecks />Tasks</a>
                </li>
                <li className="flex items-center">
                    <a href="#" className="flex items-center"> <ListChecks /> Department Tasks</a>
                </li>
                <li className="flex items-center">
                    <a href="#" className="flex items-center"> <Ban /> Blocked</a>
                </li>
                <li className="flex items-center">
                    <a href="#" className="flex items-center"> <SearchX /> To Be Tested</a>
                </li>
                <li className="flex items-center">
                    <a href="#" className="flex items-center"> <Check /> Done</a>
                </li>
                <li className="flex items-center">
                    <a href="#" className="flex items-center"> <Archive /> Archives</a>
                </li>
            </ul>
        </div >

    )
}

export default navbar

