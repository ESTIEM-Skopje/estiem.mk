"use client";
import MemoriesImagesComponent from "@/components/MemoriesImagesComponent";
import SubheadingComponent from "@/components/SubheadingComponent";
import LINE from "../images/logos_icons/red_line_full.svg";

import IMG1 from "../images/memories/memory1.jpg";
import IMG2 from "../images/memories/memory2.jpg";
import IMG3 from "../images/memories/memory3.jpg";
import IMG4 from "../images/memories/memory4.jpg";
import IMG5 from "../images/memories/memory5.jpg";
import IMG6 from "../images/memories/memory6.jpg";
import { RevealList } from "next-reveal";

const MemoriesComponent = () => {
  return (
    <RevealList interval={100} delay={500}>
      <section className="my-10 md:mx-28 mx-12">
        <RevealList interval={100} delay={500}>
          <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <SubheadingComponent
              text={"MAKING MEMORIES SINCE 2002"}
              img={LINE}
            />
          </div>
          <div className="md:flex justify-center items-center gap-20 p-3">
            <MemoriesImagesComponent img={IMG1} text={"Memory images"} />
            <MemoriesImagesComponent img={IMG2} text={"Memory images"} />
            <MemoriesImagesComponent img={IMG3} text={"Memory images"} />
          </div>

          <div className="md:flex justify-center items-center gap-20 p-3">
            <MemoriesImagesComponent img={IMG4} text={"Memory images"} />
            <MemoriesImagesComponent img={IMG5} text={"Memory images"} />
            <MemoriesImagesComponent img={IMG6} text={"Memory images"} />
          </div>
        </RevealList>
      </section>
    </RevealList>
  );
};
export default MemoriesComponent;
