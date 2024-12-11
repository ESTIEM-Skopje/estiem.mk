import BlogSkeletonComponent from "@/components/BlogSkeletonComponent";
import Link from "next/link";

const member = () => {
  return (
    <div>
      <div>
        <h3 className="my-[1.72rem] font-estiem text-center text-estiem lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          Become an ESTIEM member now!
        </h3>

        <div className="lg:flex gap-20 justify-center my-[4rem]">
          <div className=" max-md:hidden lg:visible">
            <BlogSkeletonComponent />
          </div>
          <div className=" max-md:hidden lg:visible">
            <BlogSkeletonComponent />
          </div>
          <div className=" max-md:hidden lg:visible">
            <BlogSkeletonComponent />
          </div>
          <div className="md:visible">
            <BlogSkeletonComponent />
          </div>
        </div>

        <div className="justify-center text-center">
          <Link href={"/"} className="link-blog text-white p-1">
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
};
export default member;
