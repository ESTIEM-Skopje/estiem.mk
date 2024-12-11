"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import IMG from "../images/logos_icons/estiem_green_logo.png";

export default function HeaderComponent() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  <Image src={IMG} alt="Skopje Logo" width={100} height={1} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-estiem hover:bg-estiem hover:text-white rounded-lg p-2"
                >
                  Home
                </Link>

                <Link
                  href="/events"
                  className="text-estiem hover:bg-estiem hover:text-white rounded-lg p-2"
                >
                  Events
                </Link>

                <Link
                  href="/become-member"
                  className="text-estiem hover:bg-estiem hover:text-white rounded-lg p-2"
                >
                  Become a Member
                </Link>

                <Link
                  href="/contact"
                  className="text-estiem hover:bg-estiem hover:text-white rounded-lg p-2"
                >
                  Contact
                </Link>
                <div className="border-l-2 pl-4">
                  <button className="text-estiem hover:bg-estiem hover:text-white rounded-lg p-2">
                    Login
                  </button>
                  <Link
                    href="/register"
                    className="text-estiem hover:bg-estiem hover:text-white rounded-lg p-2 ml-4"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#1d5d41"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#1d5d41"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 text-center space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-estiem block hover:bg-estiem hover:text-white rounded-lg p-2"
              >
                Home
              </Link>

              <Link
                href="/events"
                className="text-estiem block hover:bg-estiem hover:text-white rounded-lg p-2"
              >
                Events
              </Link>

              <Link
                href="/become-member"
                className="text-estiem block hover:bg-estiem hover:text-white rounded-lg p-2"
              >
                Become a Member
              </Link>

              <Link
                href="/contact"
                className="text-estiem block hover:bg-estiem hover:text-white rounded-lg p-2"
              >
                Contact
              </Link>
              <>
                <Link
                  href="/login"
                  className="text-estiem block hover:bg-estiem hover:text-white rounded-lg p-2"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-estiem block hover:bg-estiem hover:text-white rounded-lg p-2"
                >
                  Register
                </Link>
              </>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
