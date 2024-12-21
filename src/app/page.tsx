import FooterComponent from "@/components/FooterComponent";
import BoardCompomemnt from "@/sections/BoardCompoment";
import MemoriesComponent from "@/sections/MemoriesComponent";
import MissionVisionComponent from "@/sections/MissionVIsionComponent";
import HeroComponent from "@/sections/HeroComponent";
import { EmblaCarousel } from "@/sections/EmblaCarousel";
import WhyJoinUsComponent from "@/sections/whyJoinUsComponent";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <MissionVisionComponent />
      <WhyJoinUsComponent />
      <MemoriesComponent />
      <BoardCompomemnt />
      <EmblaCarousel />
      <FooterComponent />
    </div>
  );
}
