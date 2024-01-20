import React from "react";
import Main from "./Main";
import Lassra from "../../../Assets/Lassra.png";
import Links from "../../../Assets/Links.png";
import Quickfill from "../../../Assets/Quickfill.png";
import Eppcheck from "../../../Assets/Eppcheck.png";

const dummy_Data = [
  {
    id: 1,
    img: Eppcheck,
    design: "UI Design showcase",
    type: "web 2023",
    name: "eppCheck",
    text: "Eppcheck is a real-time data collection platform that connects users with individuals, known as `eppers,` who perform on-the-ground checks and inspections to collect data and information for businesses and individuals.",
  },
  {
    id: 2,
    img: Lassra,
    design: "UI Design showcase",
    type: "web 2023",
    name: "Lassra",
    text: "Lassra card tracking website is a user-friendly platform that enables Lassra card holders to convienietly monitor the status of their delivery.",
  },
  {
    id: 3,
    img: Quickfill,
    design: "UI Design showcase",
    type: "mobile 2023",
    name: "Quickfill",
    text: "QuickFill aims to ease the stress of refilling gas and buying cylinders. Users can make their order on the app and have a vendor pick up and deliver. This system is efficient as it reduces time and stress of visiting the gas station.",
  },
  {
    id: 4,
    img: Links,
    design: "UI Design showcase",
    type: "web 2023",
    name: "Linkshub",
    text: "Linkshub is an open source project that aims to provide designers and developers with access range of free resources and tools they can use to speed up their workflow.",
  },
];
const Data = () => {
  return (
    <div className="overflow-hidden w-full">
      <Main item={dummy_Data} />
    </div>
  );
};

export default Data;
