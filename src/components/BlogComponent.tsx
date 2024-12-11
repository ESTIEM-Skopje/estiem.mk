import Image from "next/image";

interface BlogProps {
  img: string;
  heading: string;
  text: string;
}

const BlogComponent = ({ img, heading, text }: BlogProps) => {
  return (
    <div className="p-5 m-4 shadow-md">
      <Image src={img} alt="Blog Post Image" />
      <h3 className="font-estiem text-xl text-estiem uppercase my-3">
        {heading}
      </h3>
      <p className="font-estiem text-black">{text}</p>
    </div>
  );
};
export default BlogComponent;
