import React from "react";
import ChristmasNav from "./christmasNav/ChristmasNav";

const ChristmasContent = () => {
    return (
        <div className="flex w-full ">
            <ChristmasNav name="All" number="2" />
            <ChristmasNav name="To improve" number="245" />
            <ChristmasNav name="Pending" number="23" />
            <ChristmasNav name="To review" number="1" />
            <ChristmasNav name="Done" number="2" />
            <div className="flex-1 border-b border-slate-400"></div>
        </div>
    );  
}

export default ChristmasContent;