import React from "react";
import ChristmasNav from "./christmasNav/ChristmasNav";
import Menus from "./Menus";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const ChristmasContent = () => {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex w-full">
                <ChristmasNav name="All" number="2" />
                <ChristmasNav name="To improve" number="245" />
                <ChristmasNav name="Pending" number="23" />
                <ChristmasNav name="To review" number="1" />
                <ChristmasNav name="Done" number="2" />
                <div className="flex-1 border-b border-slate-400"></div>
            </div>
            <div>
                <Menus />
            </div>
            <div>
                <ProductCard name={"Trottinette électrique Xiaomi Mi Electric Scooter 3..."} lastUpdate={"18 hours ago"} created={"2 May 2024"} qualityScore={10} status={"To improve"}/>
                <ProductCard name={"Trottinette électrique Xiaomi Mi Electric Scooter 3..."} lastUpdate={"18 hours ago"} created={"2 May 2024"} qualityScore={90} status={"Error"}/>
                <ProductCard name={"Trottinette électrique Xiaomi Mi Electric Scooter 3..."} lastUpdate={"18 hours ago"} created={"2 May 2024"} qualityScore={45} status={"In progress"}/>
                <ProductCard name={"Trottinette électrique Xiaomi Mi Electric Scooter 3..."} lastUpdate={"18 hours ago"} created={"2 May 2024"} qualityScore={100} status={"Done"}/>
                <ProductCard name={"Trottinette électrique Xiaomi Mi Electric Scooter 3..."} lastUpdate={"18 hours ago"} created={"2 May 2024"} qualityScore={5} status={"To review"}/>
                <ProductCard name={"Trottinette électrique Xiaomi Mi Electric Scooter 3..."} lastUpdate={"18 hours ago"} created={"2 May 2024"} qualityScore={75} status={"Pending"}/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ChristmasContent;
