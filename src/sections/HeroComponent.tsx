"use client";

import { RevealList } from "next-reveal";

const HeroComponent = () => {
  return (
    <div
      className="w-full p-10"
      style={{
        backgroundImage: `linear-gradient(0deg, #1d5d41 0%, rgba(38, 38, 38, 0.1) 65%), url(https://assets.isu.pub/document-structure/221130133609-31c394e8d3ce8639fb635c22e437e4af/v1/93ee230123c1c0aa9aea9cdb3e8e91f0.jpeg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: "50rem",
      }}
    >
      <RevealList interval={100} delay={500}>
        <div className="container flex items-center justify-center h-full">
          <h3
            className="font-estiem lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase text-center flex items-center justify-center h-full"
            style={{ paddingTop: "25rem" }}
          >
            ESTIEM LG Skopje
          </h3>
        </div>
        <div className="container flex items-center justify-center h-full">
          <p className="font-estiem  uppercase text-center flex items-center justify-center h-full">
            Travel - Learn - Experience - Connect
          </p>
        </div>
      </RevealList>
    </div>
  );
};
export default HeroComponent;
