import React from "react";
import { PlusSquare } from 'lucide-react';
import '../../App.css';

const CreateCatalogButton = () => {
    return (
        <button className="flex items-center w-full justify-center gap-2 text-white rounded-md h-auto bg-3 px-16 py-2 create-catalog-button text-sm">
            <PlusSquare size={16}/>
            <p>Create Catalog</p>
        </button>
    );
}

export default CreateCatalogButton;