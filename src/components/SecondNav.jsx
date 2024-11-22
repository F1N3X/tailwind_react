import React from "react";
import { Link } from "react-router-dom"; // Import de Link
import AddProduct from "./buttons/AddProduct";
import { MoveLeft } from 'lucide-react';
import Actions from "./buttons/Actions";
import { Upload, Settings  } from 'lucide-react';


const SecondNav = () => {
    return (
        <div className="catalogs flex items-center">
            <Link to="/">
                    <div className="flex items-center justify-center gap-2.5">
                        <MoveLeft size={20} />
                        <p className="pr-4 border-solid border-christmasBg border-2 border-t-0 border-b-0 border-l-0 font-public_sans text-sm">Back</p>
                    </div>
            </Link>

            <h1 className="grow text-left text-2xl font-semibold pl-4">Chirstmas 2024</h1>
            <div className="flex gap-2">
                <AddProduct />
                <Actions title="Export" Icon={Upload} />
                <Actions title="Settings" Icon={Settings} />
            </div>
        </div>
    );
};

export default SecondNav;
