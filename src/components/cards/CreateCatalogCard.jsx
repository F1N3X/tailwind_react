import React from "react";
import CreateCatalogButton from "../buttons/CreateCatalogButton";

const CreateCatalogCard = () => {
    return (
        <div className="text-xs card p-2.5 border-2 border-6 rounded-lg font-inter sm:w-[321px] w-full h-[170px] flex flex-col text-left items-start justify-start">
            <h1 className="py-1 px-2 mb-2">Create catalog</h1>
            <p className="flex-1 text-1 py-1 px-2">Create new catalog to add products and generate content.</p>
            <CreateCatalogButton />
        </div>
    );
}

export default CreateCatalogCard;
