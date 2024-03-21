import Image from "next/image";
import Link from "next/link";
import React from "react";
import InstaLogo from "@/icons/InstaLogo";
import FbLogo from "@/icons/FbLogo";
import LinkedIn from "@/icons/LinkedIn";
import TwitterLogo from "@/icons/TwitterLogo";
import { Separator } from "@/ui/separator";
import Container from "@/ui/container";

const Footer = () => {
  return (
    <footer className="px-4 xl:px-10 py-14 ">
      <Container>
        <div className="xl:flex xl:justify-between">
          <div className="pb-4">
            <Link href="/" className="w-[204px] h-[60px] relative block">
              <Image
                fill
                quality={100}
                priority
                alt="logo"
                src="/images/logo.png"
              />
              {/* <Logo /> */}
            </Link>
            <section className="xl:max-w-[425px] mt-5 space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-sec"> Lekki Phase 1 Center </p>
                <p className="font-normal text-sec">
                  Adekola Balogun Street, Perchstone & Graeys Cl, Lekki Phase I,
                  Lagos
                </p>
              </div>
              <div className="space-y-2">
                <p className="mt-4 font-bold text-sec">Ikota Center</p>
                <p className="font-normal text-sec">
                  Ashley's Place, Plot 1 Dreamworld-Africana Way, Olugborogan
                  Town Rd, Lekki Penninsula II
                </p>
              </div>
              <div className="hidden space-x-2 xl:flex">
                <InstaLogo />
                <FbLogo />
                <LinkedIn />
                <TwitterLogo />
              </div>
            </section>
          </div>
          <div className="flex xl:space-x-[100px] mt-5 xl:mt-0 justify-around">
            <div>
              <p className="font-bold text-sec">Company</p>
              <div className="flex flex-col mt-4 ">
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Stories
                </Link>
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Our Projects
                </Link>
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold text-sec">Get Started</p>
              <div className="flex flex-col mt-4 ">
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Live Events
                </Link>
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Contact us
                </Link>
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Become a partner
                </Link>
                <Link
                  href="#"
                  className="py-1 text-base font-normal rounded-md text-sec hover:text-gray-300"
                >
                  Who we are
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="xl:flex xl:justify-between">
          <div className="xl:flex hidden space-x-[100px]">
            <p>Cookies</p>
            <p>Privacy Policy</p>
          </div>

          <p>© 2024 All rights reserved Purefitness Ltd.</p>
        </div>
        <div className="flex mt-4 space-x-2 xl:hidden">
          <InstaLogo />
          <FbLogo />
          <LinkedIn />
          <TwitterLogo />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
