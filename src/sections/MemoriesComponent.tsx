import MemoriesImagesComponent from "@/components/MemoriesImagesComponent";
import SubheadingComponent from "@/components/SubheadingComponent";


import LINE from "../images/logos_icons/red_line_full.svg";

const MemoriesComponent = () => {
  return (
    <section className="my-10 md:mx-28 mx-12">
      <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
        <SubheadingComponent
          text={"MAKING MEMORIES SINCE 2002"}
          img={LINE}
        />
      </div>
      <div className="md:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent
          img={"/images/memories/deckoto_sto_se_grizi_za_stranata.png"}
          text={"test"}
        />
        <MemoriesImagesComponent
          img={"/images/memories/deckoto_sto_se_grizi_za_stranata.png"}
          text={"test"}
        />
        <MemoriesImagesComponent
          img={"/images/memories/deckoto_sto_se_grizi_za_stranata.png"}
          text={"test"}
        />
      </div>

      <div className="md:flex justify-center items-center gap-20 p-3">
        <MemoriesImagesComponent
          img={"/images/memories/deckoto_sto_se_grizi_za_stranata.png"}
          text={"test"}
        />
        <MemoriesImagesComponent
          img={"/images/memories/deckoto_sto_se_grizi_za_stranata.png"}
          text={"test"}
        />
        <MemoriesImagesComponent
          img={"/images/memories/deckoto_sto_se_grizi_za_stranata.png"}
          text={"test"}
        />
      </div>
    </section>
  );
};
export default MemoriesComponent;
