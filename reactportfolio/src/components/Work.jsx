import React from "react";
import WorkItem from "./Workitem";

const data = [
    {
        year: "2021",
        title: "CSM på Cervera AB, Stockholm",
        duration: "FEBRUARI 2021 — SEPTEMBER 2022",
        details: "Strategisk och stödjande för kunderna i varje skede av köpprocessen. Jag var fokuserad på att bygga lojalitet för att säkerställa långsiktig kundbehållning genom att presentera produktinformation, ta itu med kundproblem och hjälpa säljteamet med merförsäljningar och förnyelser",
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