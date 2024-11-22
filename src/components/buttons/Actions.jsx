import React from "react";


const Actions = ({ title, Icon }) => {
    return (
        <div className="flex items-center w-full justify-center gap-2 text-black rounded-md h-auto px-16 py-2 create-catalog-button text-sm border-2 border-black">
            <Icon size={16} />
            <p>{title}</p>
        </div>
    );

}

export default Actions;