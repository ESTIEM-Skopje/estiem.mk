import MembersComponent from "../components/MembersComponent";
import SubheadingComponent from "@/components/SubheadingComponent";

const BoardCompomemnt = () => {
  return (
    <div className="my-5">
      <SubheadingComponent
        text={"BOARD MEMBERS 2024/25"}
        img={"/images/logos_icons/red_line_full.svg"}
      />

      <div className="md:flex gap-20 justify-center">
        <MembersComponent
          img={"/images/board-members/deckoto_sto_se_grizi_za_stranata.png"}
          heading={"lorem ipsum"}
          subheading={"Chairperson"}
        />
        <MembersComponent
          img={"/images/board-members/deckoto_sto_se_grizi_za_stranata.png"}
          heading={"lorem ipsum"}
          subheading={"Contact Person"}
        />
        <MembersComponent
          img={"/images/board-members/deckoto_sto_se_grizi_za_stranata.png"}
          heading={"lorem ipsum"}
          subheading={"PR Coordinator"}
        />
      </div>
      <div className="md:flex gap-20 justify-center">
        <MembersComponent
          img={"/images/board-members/deckoto_sto_se_grizi_za_stranata.png"}
          heading={"lorem ipsum"}
          subheading={"HR Coordinator"}
        />
        <MembersComponent
          img={"/images/board-members/deckoto_sto_se_grizi_za_stranata.png"}
          heading={"lorem ipsum"}
          subheading={"FR Coordinator"}
        />
      </div>
    </div>
  );
};
export default BoardCompomemnt;
