import MemoriesImagesComponent from "@/components/MemoriesImagesComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

import LINE from "../images/logos_icons/red_line_full.svg";

const MemoriesComponent = () => {
  return (
    <section className="my-10 md:mx-28 mx-12">
      <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
        <SubheadingComponent text={"MAKING MEMORIES SINCE 2002"} img={LINE} />
      </div>
      <div className="md:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XoDijKDfiXKp5pGLX2q09XmXFiHUwWulsQ&s"
          }
          text={"test"}
        />
        <MemoriesImagesComponent
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XoDijKDfiXKp5pGLX2q09XmXFiHUwWulsQ&s"
          }
          text={"test"}
        />
        <MemoriesImagesComponent
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XoDijKDfiXKp5pGLX2q09XmXFiHUwWulsQ&s"
          }
          text={"test"}
        />
      </div>

      <div className="md:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XoDijKDfiXKp5pGLX2q09XmXFiHUwWulsQ&s"
          }
          text={"test"}
        />
        <MemoriesImagesComponent
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XoDijKDfiXKp5pGLX2q09XmXFiHUwWulsQ&s"
          }
          text={"test"}
        />
        <MemoriesImagesComponent
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XoDijKDfiXKp5pGLX2q09XmXFiHUwWulsQ&s"
          }
          text={"test"}
        />
      </div>
    </section>
  );
};
export default MemoriesComponent;
