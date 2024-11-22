import React from "react";
import { Ellipsis, CircleX, WandSparkles, LoaderCircle, Glasses, CircleCheck, Clock4  } from 'lucide-react';

const ProductCard = ({ name, lastUpdate, created, qualityScore, status }) => {
    // Déterminer la couleur du statut
    const getStatusInfo = (status) => {
        switch (status) {
            case "To improve":
                return ["bg-to_improve", <WandSparkles size={14} />, "text-to_improve"];
            case "To review":
                return ["bg-to_review", <Glasses size={14} />, "text-to_review"];
            case "In progress":
                return ["bg-in_progress", <div className="animate-spin"> <LoaderCircle size={14} /> </div>, "text-in_progress"];
            case "Done":
                return ["bg-done", <CircleCheck size={14} />, "text-done"];
            case "Pending":
                return ["bg-pending", <Clock4 size={14} />, "text-pending"];
            default:
                return ["bg-error", <CircleX size={14} />, "text-error"];
        }
    };


    const getQualityColor = (qualityScore) => {
        if (qualityScore >= 50) {
            return "bg-green-500";
        } else if (qualityScore >= 25) {
            return "bg-yellow-500";
        } else {
            return "bg-red-500";
        }
    };

    const [statusBg, statusIcon, statusTextColor] = getStatusInfo(status);

    return (
        <div className="border border-christmasBg p-4 rounded-lg mb-4 flex gap-2.5">
            <div className="flex">
                <input className="w-3.5" type="checkbox" />
            </div>


            <div className="w-12">
                <img src="https://s3-alpha-sig.figma.com/img/3a77/5703/9320001ffd4e306cea093cd5a22a3baf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gviZ8OuJzQkcn99bQ7ObwDxDPhzl6Z1qQ~r-UIb8Lu~0SEGedx7vVZAg3zwg8IX7k0pIjnJyhzCmk0Jurz9bXXnS6zB5heaodgv44vQA9rl3mXn5SG6EY3wRjL25c7irHuSKr6LWy28ZV51TG6~HWVO19aL7LWRL913UZS3XQhE0dq3qG7swJ2R9zAvBL1pLrfczAUqlmw9dW~uA6V6EyPCQHRxeznhLZ6uqE9iNndGE9x1MLGrSdqxl9X3cplgkSEU-mbcnGu09Xr6kQWksFZ8qiCOtBYcyKLmqb4CHhftMY4K3atqyCSVGhX65meENvGmaZddz3L0lSDecoQZuCg__" alt="trotinette" />
            </div>

            <div className="flex gap-6 flex-1">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="flex justify-start">
                        <h3 className="font-semibold text-lg">{name}</h3>
                    </div>

                    <div className="flex">
                        <p className="text-sm text-gray-500">Last updated {lastUpdate}</p>
                        <p className="text-sm text-gray-400">Create {created}</p>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-12 items-center justify-items-center">
                    <div className="w-full bg-gray-400 rounded-full h-2 relative items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-6 rounded-full"></div>

                        <div
                            className={`relative h-full rounded-full ${getQualityColor(qualityScore)}`}
                            style={{ width: `${qualityScore}%` }}
                        ></div>
                    </div>

                    <div className={`flex items-center justify-center gap-1.5 py-0.5 px-2.5 w-min text-xs rounded whitespace-nowrap ${statusBg} ${statusTextColor}`}>
                        {statusIcon}
                        {status}
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <Ellipsis size={16} />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;