"use client";
import React from "react";
import Image from "next/image";
import {
  FaDiscord,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

import IMG from "../images/logos_icons/estiem_white_logo.png";
import SocialMediaComponent from "./SocialMediaComponent";

const FooterComponent = () => {
  return (
    <div className="md:flex xl:gap-80 gap-20 justify-center bg-estiem p-4">
      <nav className="flex md:justify-between items-center justify-center">
        <div className="grid grid-cols-4 justify-center items-center ">
          <SocialMediaComponent
            mediaLink={"https://www.instagram.com/estiemlgskopje/"}
            icon={FaInstagram}
            text={"Instagram"}
            size={"4rem"}
          />
          <SocialMediaComponent
            mediaLink={"https://www.facebook.com/estiemlgskopje/?locale=mk_MK"}
            icon={FaFacebookSquare}
            text={"Facebook"}
            size={"4rem"}
          />
          <SocialMediaComponent
            mediaLink={""}
            icon={FaTwitter}
            text={"Twitter"}
            size={"4rem"}
          />
          <SocialMediaComponent
            mediaLink={""}
            icon={FaDiscord}
            text={"Discord"}
            size={"4rem"}
          />
        </div>
      </nav>
      <article className="grid justify-items-center text-center m-3 my-5">
        <Image
          src={IMG}
          alt="Feature Image"
          width={250}
          height={100}
          className=" m-2"
        />
        <div>
          <h6 className="text-center text-white">
            <strong>E</strong>uropean <strong>ST</strong>udents of{" "}
            <strong>I</strong>ndustrial&apos; <br /> <strong>E</strong>
            ngineering and
            <strong> M</strong>anagement
          </h6>
        </div>
      </article>
      <article className="md:grid justify-items-center text-center flex justify-center m-3 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.0235928292741!2d21.40773311679956!3d42.00449849514596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541442dbaef18d%3A0x103c249a8286e34d!2sFaculty%20of%20Mechanical%20Engineering!5e0!3m2!1sen!2smk!4v1733580122803!5m2!1sen!2smk"
          width="500"
          height="310"
          loading="lazy"
        />
      </article>
    </div>
  );
};
export default FooterComponent;
