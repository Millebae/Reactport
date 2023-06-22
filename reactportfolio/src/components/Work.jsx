import React from "react";
import WorkItem from "./Workitem";

const data = [
    {
        year: "2021",
        title: "CSM på Cervera AB, Stockholm",
        duration: "FEBRUARI 2021 — SEPTEMBER 2022",
        details: "Jag arbetade strategiskt på marknad inom e-handelsbranschen och hade en stödjande roll för att maximera framgången i varje skede av köpprocessen. Istället för att ha direkt kundkontakt fokuserade jag på att bygga lojalitet och stärka relationen med kunderna genom att tillhandahålla relevant produktinformation, adressera eventuella kundproblem och stödja säljteamet i att öka merförsäljning och förnyelser",
      },
      {
        year: "2018",
        title: "Marknadskoordinator, Popupworks AB, Stockholm",
        duration: "JANUARI 2018 — DECEMBER 2020",
        details: "Planerar och samordnar reklamkampanjer och marknadsföringsstrategier. Samlar in, bearbetar och analyserar data om marknader. Bedömer marknaden för nya varor och tjänster. Identifierar och utvecklar marknadsmöjligheter för nya och befintliga varor och tjänster.",
      },
];

const Work = () => {
    return ( 
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold mb-4 text-center text-[#001b5e]"> Work </h1>
            {data.map((item, idx) => (
             <WorkItem 
             key={idx}
             year={item.year}
             title={item.title}
             duration={item.duration}
             details={item.details}
             />
            ))}
        </div>
      
     );
}
 
export default Work ;