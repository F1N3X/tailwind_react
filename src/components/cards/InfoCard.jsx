import React from "react";
import { Ellipsis } from 'lucide-react';

const InfoCard = ({ title, labels, date, numberProducts }) => {
    return (
        <div className="p-2.5 bg-4 phone:w-full card flex flex-col gap-3 text-left border-2 border-6 rounded-lg font-inter w-full flex flex-col text-left items-start justify-start">
            <div className="flex w-full h-full items-center gap-2 flex-1">
                <h1 className="text-lg flex-1 font-semibold">{title}</h1>
                <Ellipsis size={16}/>

            </div>
            <div className="flex flex-col gap-3 text-xs">
                <div className="flex flex-wrap gap-2">
                    {labels.map((label, index) => (
                        <p className="border-2 border-7 rounded-lg bg-4 text-xs py-1 px-2.5 gap-2" key={index}>{label}</p>
                    ))}
                </div>
                <div>
                    <div className="flex gap-1 text-1 py-1">
                        <p>Created on</p>
                        <p>{date}</p>
                    </div>
                    <p className="py-1">{numberProducts} products</p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;