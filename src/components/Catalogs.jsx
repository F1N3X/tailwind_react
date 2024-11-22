import React from "react";
import CreateCatalogButton from "./buttons/CreateCatalogButton";

const Catalogs = () => {
    return (
        <div className="catalogs flex gap-2.5">
            <h1 className="grow text-left text-2xl font-semibold">My catalogs</h1>
            <div>
                <CreateCatalogButton />
            </div>
        </div>
    );
    }

export default Catalogs;