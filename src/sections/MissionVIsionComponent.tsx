import React from "react";

import MissionComponent from "../components/MissionComponent";

const MissionVisionComponent = () => {
  return (
    <div className="md:flex grid justify-center bg-estiem">
      <MissionComponent
        img={"/images/logos_icons/flag_icon.svg"}
        heading={"Our Mission"}
        text={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <MissionComponent
        img={"/images/logos_icons/bulb.svg"}
        heading={"Our Vision"}
        text={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </div>
  );
};
export default MissionVisionComponent;
