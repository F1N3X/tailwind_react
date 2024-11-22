import React from "react";
import { Search } from 'lucide-react';
import Filters from "./buttons/Filters";
import { Filter, ListFilter } from 'lucide-react';

const Menus = () => {
    return (
        <div className="grid grid-cols-2 px-3 py-4">
            <div className="flex items-center justify-start">
                <input type="checkbox" />
            </div>
            <div className="flex tetext-slate-400 gap-2.5">
                <div className="flex w-max flex-1 items-center justify-start gap-2 py-2 px-3 bg-white rounded-md border-gray border-2">
                    <Search size={16} />
                    <input className="text-base focus:outline-none" type="text" placeholder="Search product" />
                </div>
                <div>
                    <Filters Icon={Filter} />
                </div>
                <div>
                    <Filters Icon={ListFilter} />
                </div>
            </div>
        </div>
    );  
}

export default Menus;