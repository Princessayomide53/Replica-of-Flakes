import React from "react";
import Main from "./Main";
import Lassra from "../../../Assets/Lassra.png";
import Links from "../../../Assets/Links.png";
import Quickfill from "../../../Assets/Quickfill.png";
import Eppcheck from "../../../Assets/Eppcheck.png";
import inawo from "../../../Assets/inawo.png";
import Projects from "../../Routes/Contact/Projects";
import { useLocation } from "react-router-dom";
import Nova from "../../../Assets/Nova.png";

const dummy_Data = [
  {
    id: 1,
    img: inawo,
    design: "UI Design showcase",
    type: "web 2023",
    name: "inawo",
    text: "Inawo is a comprehensive wedding planning platform that enables couples to effortlessly manage their guest lists, connect with top-notch vendors, and plan their dream wedding with ease.",
    Link: "https://www.inawo.com/",
  },
  {
    id: 2,
    img: Eppcheck,
    design: "UI Design showcase",
    type: "web 2023",
    name: "eppCheck",
    text: "Eppcheck is a real-time data collection platform that connects users with individuals, known as `eppers,` who perform on-the-ground checks and inspections to collect data and information for businesses and individuals.",
    Link: "https://www.eppcheck.com/",
  },
  {
    id: 3,
    img: Lassra,
    design: "UI Design showcase",
    type: "web 2023",
    name: "Lassra",
    text: "Lassra Card Tracking is a user-friendly online platform designed to simplify the process of monitoring Lassra card delivery and relocation status for cardholders.",
  },
  {
    id: 4,
    img: Quickfill,
    design: "UI Design showcase",
    type: "mobile 2023",
    name: "Quickfill",
    text: "QuickFill aims to ease the stress of refilling gas and buying cylinders. Users can make their order on the app and have a vendor pick up and deliver. This system is efficient as it reduces time and stress of visiting the gas station.",
    Link: "https://www.behance.net/gallery/160412853/Quick-Fill-Case-Study",
  },
  {
    id: 5,
    img: Nova,
    design: "UI Design showcase",
    type: "web 2023",
    name: "Nova Branding",
    text: "Nova branding is a logo and brand design for a cutting-edge real estate website. The goal was to create a visual identity that would convey the brands commitment to innovation and excellence in the real estate industry.",
    Link: "https://www.eppcheck.com/",
  },
  {
    id: 6,
    img: Links,
    design: "UI Design showcase",
    type: "web 2023",
    name: "Linkshub",
    text: "Linkshub is an open source project that aims to provide designers and developers with access range of free resources and tools they can use to speed up their workflow.",
    Link: "https://www.behance.net/gallery/183761631/Linkshub-Responsive-Website",
  },
];
const Data = () => {
  const location = useLocation();
  return (
    <div className="overflow-hidden w-full">
      {location.pathname === "/" && <Main item={dummy_Data} />}

      {location.pathname === "/projects" && <Projects items={dummy_Data} />}
    </div>
  );
};

export default Data;
