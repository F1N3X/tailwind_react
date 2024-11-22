import React from "react";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="grid grid-cols-2 items-center">
            <div></div>
            <div className="flex justify-start gap-3">
                <select className="rounded-md border-christmasBg border-2 text-sm py-2 px-3 flex-1">
                    <option value="100">100 per page</option>
                    <option value="50">50 per page</option>
                    <option value="25">25 per page</option>
                </select>

                <div className="flex justify-center items-center gap-2.5">
                    <p className="text-sm font-semibold">Page 1 sur 4</p>
                    <ChevronsLeft className="text-1" size={20} />
                    <ChevronLeft className="text-1" size={20} />
                    <ChevronRight size={20} />
                    <ChevronsRight size={20} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;