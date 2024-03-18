import { BarChart2, BringToFront, CodeXml, LayoutGrid, User, Building2, Briefcase } from 'lucide-react';
import React from 'react';


const SideNav = () => {

    return (
        <div className="flex flex-col mt-2 py-2 bg-neutral-800 p-2 h-screen w-48">
            <li className="flex flex-row p-3"> <User />  Own </li>
            <li className="flex flex-row p-3"> <Briefcase /> Design </li>
            <li className="flex flex-row p-3"> <BringToFront /> FrontEnd </li>
            <li className="flex flex-row p-3"> <Building2 /> BackEnd </li>
            <li className="flex flex-row p-3"> <LayoutGrid /> All </li>
            <li className="flex flex-row p-3"> <CodeXml /> Code to Dogo </li>
            <li className="flex flex-row p-3"> <BarChart2 /> Startiscs </li>

        </div>
    );
}

export default SideNav;