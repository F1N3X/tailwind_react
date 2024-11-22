import React from "react";

const ChristmasNav = ({ name, number }) => {
    return (
        <div className="flex gap-2.5 py-3 px-6 w-min group border-b border-slate-400 hover:border-addProduct">
            <p className="text-sm text-slate-400 whitespace-nowrap group-hover:text-addProduct">{name}</p>
            <p className="py-1 px-1.5 rounded-full bg-slate-400 group-hover:bg-addProduct text-white text-mini leading-mini">
                {number}
            </p>
        </div>
    );  
}

export default ChristmasNav;