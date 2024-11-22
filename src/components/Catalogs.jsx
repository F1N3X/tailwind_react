import React from "react";
import { Link } from "react-router-dom"; // Import de Link
import CreateCatalogButton from "./buttons/CreateCatalogButton";

const Catalogs = () => {
    return (
        <div className="catalogs flex gap-2.5 items-center">
            <h1 className="grow text-left text-2xl font-semibold">My catalogs</h1>
            <Link to="/christmas">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md h-auto bg-3 px-16 py-2 create-catalog-button text-sm">
                        Go to Christmas
                    </button>
            </Link>
            <div className="flex gap-2">
                <CreateCatalogButton />
            </div>
        </div>
    );
};

export default Catalogs;
