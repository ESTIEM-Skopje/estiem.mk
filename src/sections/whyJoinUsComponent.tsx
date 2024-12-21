"use client";
import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

import Img1 from "@/images/logos_icons/red_line_full.svg";
import Img2 from "@/images/logos_icons/estiem_green_logo.png";
import Img3 from "@/images/logos_icons/estiem_green_logo.png";
import Img4 from "@/images/logos_icons/estiem_green_logo.png";
import Img5 from "@/images/background.jpg";
import { RevealList } from "next-reveal";

const whyJoinUsComponent = () => {
  return (
    <RevealList interval={100} delay={500}>
      <div className="lg:flex grid justify-center gap-20">
        <div className="m-2 justify-items-center">
          <SubheadingComponent text="Why Join Us?" img={Img1} />
          <JoinUsComponent
            img={Img2}
            heading={"Lorem Ipsum!"}
            text={"Lorem Ipsum!"}
          />
          <JoinUsComponent
            img={Img3}
            heading={"Lorem Ipsum!"}
            text={"Lorem Ipsum!"}
          />
          <JoinUsComponent
            img={Img4}
            heading={"Lorem Ipsum!"}
            text={"Lorem Ipsum!"}
          />
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-center order-1 md:order-2">
          <Image
            src={Img5}
            alt="Feature Image"
            width={600}
            height={600}
            style={{ border: "5px solid #1b5c04", borderRadius: "5%" }}
            className="zoom"
          />
        </div>
      </div>
    </RevealList>
  );
};
export default whyJoinUsComponent;
