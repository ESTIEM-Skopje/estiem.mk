"use client";
import MembersComponent from "../components/MembersComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

import IMG1 from "../images/board-members/ivan.jpg";
import IMG2 from "../images/board-members/pedja.jpg";
import IMG3 from "../images/board-members/petar.jpg";
import IMG4 from "../images/board-members/anastasija.jpg";
import IMG5 from "../images/board-members/mila.jpg";
import IMG6 from "../images/board-members/andrea.jpg";

import LINE from "../images/logos_icons/red_line_full.svg";
import { RevealList } from "next-reveal";

const BoardCompomemnt = () => {
  return (
    <RevealList interval={100} delay={500}>
      <div className="my-5">
        <SubheadingComponent text={"BOARD MEMBERS 2024/25"} img={LINE} />

        <RevealList interval={100} delay={500}>
          <div className="md:flex gap-20 justify-center">
            <MembersComponent
              img={IMG1}
              heading={"Ivan Bejatovic"}
              subheading={"President"}
            />
            <MembersComponent
              img={IMG4}
              heading={"Anastasija Ignjatovska"}
              subheading={"VP of IT"}
            />
            <MembersComponent
              img={IMG3}
              heading={"Petar Palevski"}
              subheading={"VP of Public Relations"}
            />
          </div>
          <div className="md:flex gap-20 justify-center">
            <MembersComponent
              img={IMG5}
              heading={"Mila Badarevska"}
              subheading={"VP of CR and Finances"}
            />
            <MembersComponent
              img={IMG2}
              heading={"Predrag Stankovikj"}
              subheading={"Local Responsible"}
            />

            <MembersComponent
              img={IMG6}
              heading={"Andrea Teofilova"}
              subheading={"VP of human resources"}
            />
          </div>
        </RevealList>
      </div>
    </RevealList>
  );
};
export default BoardCompomemnt;
