"use client";
import React from "react";

import MissionComponent from "../components/MissionComponent";

import FLAG from "../images/logos_icons/flag_icon.svg";

import BULB from "../images/logos_icons/bulb.svg";
import { RevealList } from "next-reveal";

const MissionVisionComponent = () => {
  return (
    <div className="md:flex grid justify-center bg-estiem">
      <RevealList interval={100} delay={500}>
        <div className="md:flex grid justify-center">
          <MissionComponent
            img={FLAG}
            heading={"Our Mission"}
            text={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
          <MissionComponent
            img={BULB}
            heading={"Our Vision"}
            text={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
      </RevealList>
    </div>
  );
};
export default MissionVisionComponent;
