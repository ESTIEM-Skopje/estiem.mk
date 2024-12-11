import Image from "next/image";
import { StaticImageData } from "next/image";

interface FeatureProps {
  img: string | StaticImageData;
  heading: string;
  subheading: string;
}
const MembersComponent = ({ img, heading, subheading }: FeatureProps) => {
  return (
    <article className="grid justify-items-center text-center md:my-12 md:mx-10 zoom">
      <Image
        src={img}
        alt="Feature Image"
        height={250}
        width={250}
        style={{ borderRadius: "50%", border: "5px solid #1d5d41" }}
        className="mt-8 mb-8 rounded-full "
      />
      <div>
        <h3 className="text-2xl text-estiem font-bold">{heading}</h3>
        <h6 className="text-black text-xl">{subheading}</h6>
      </div>
    </article>
  );
};
export default MembersComponent;
