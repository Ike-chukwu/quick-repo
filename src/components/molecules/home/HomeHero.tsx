import Container from "@/ui/container";
import React, { ComponentProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import ImageBox from "@/molecules/ImageBox";

const images = [
  {
    src: "/images/first.png",
    className: "col-span-1  col-start-1  col-start row-span-6 row-start-1",
  },
  {
    src: "/images/second.png",
    className: "col-span-1 row-span-6 row-start-1  col-start-2  row-span-8",
  },
  {
    src: "/images/third.png",
    className: "col-span-1  col-start-1 row-span-1 row-span-6 row-start-7",
  },
  {
    src: "/images/fourth.png",
    className: "col-span-1  col-start-2 row-span-1 row-span-4 row-start-9",
  },
];

const HomeHero = () => {
  return (
    <Container className="">
      <div className=" grid grid-cols-12 gap-[2%] text-sec">
        <section className="col-span-12 md:col-span-6 bg-pry p-[5%] rounded-xl col-start-1  ">
          <h1 className="text-2xl md:text-3xl mt-[25%] xl:text-5xl font-bold !leading-snug ">
            Join The Most Exciting
            <br /> Fitness Community <br />
            In Africa
          </h1>

          <p className="text-xl font-normal my-6 mr-[15%] ">
            We’re on a mission to help people live healthier lives by making
            fitness accessible, exciting and affordable
          </p>

          <Link
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "secondary",
                className:
                  "text-sm md:text-lg xl:text-2xl rounded-full mb-8 !h-unset py-[3%]",
              })
            )}
            href="/"
          >
            Join us Today
          </Link>
        </section>

        <aside className="grid grid-cols-2 col-span-12 col-start-1 gap-3 md:col-start-7 md:col-span-6 grid-rows-12 min-h-[360px] ">
          {images.map((im) => (
            <ImageBox key={im.src} src={im.src} className={im.className} />
          ))}
        </aside>
      </div>
    </Container>
  );
};

export default HomeHero;
