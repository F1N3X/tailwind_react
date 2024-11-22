import React from "react";
import { PlusSquare } from 'lucide-react';
import '../../App.css';

const AddProduct = () => {
    return (
        <button className="flex items-center justify-center gap-2 text-addProduct rounded-md h-auto bg-addProductBg px-16 py-2 create-catalog-button text-sm whitespace-nowrap">
            <PlusSquare size={16}/>
            <p>Add product</p>
        </button>
    );
}

export default AddProduct;