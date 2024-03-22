"use client";

import Trophy from "@/icons/Trophy";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import Container from "@/ui/container";
import Link from "next/link";
import React from "react";

const Dot = () => <div className="w-4 rounded-full aspect-square bg-pry dot" />;

interface IProps {
  text: string;
}

const Item = ({ text }: IProps) => {
  return (
    <div className="btwn !inline-flex bg-white p-2 space-x-2 rounded-full ">
      <Dot />
      <p className="text-[10px] lg:text-sm">{text}</p>
    </div>
  );
};

const AClass = () => {
  return (
    <>
      <article className="relative border rounded-md box isolate bg-pry-100 border-sec p-[5%] ">
        <Trophy className="absolute h-4/5 right-[10%] -z-10 " />

        <div className="z-10">
          <header className="btwn">
            <h3 className="text-4xl font-medium lg:font-bold lg:text-5xl ">
              Max Andrenaline
            </h3>
            <Item text="Open" />
          </header>

          <section className="py-2 mt-3 space-y-1">
            <div className="space-x-1">
              <Item text="Ikechukwu" />
              <Item text="Lekki" />
              <Item text="50 slot" />
            </div>

            <div className="space-x-1">
              <Item text="Every Monday" />
              <Item text="7am - 8am" />
            </div>
          </section>

          <Link
            href="/"
            className={cn(
              buttonVariants({
                size: "lg",
                className:
                  "space-x-2 w-full rounded-full my-2 [&_.dot]:!bg-white ",
              })
            )}
          >
            <Dot />
            <p>Book Class</p>
          </Link>
        </div>
      </article>
      <style jsx>{`
        .box {
          filter: drop-shadow(4px 0px #ffca22) drop-shadow(2px 0px #241d05);
        }
      `}</style>
    </>
  );
};

const GroupedClasses = () => {
  return (
    <Container className="space-y-[10%] md:space-y-[2%] my-[20%] md:my-[10%] 3xl:my-28 ">
      <h2 className="text-2xl font-bold text-center xl:text-5xl md:text-3xl ">
        Group X Classes
      </h2>

      <p className="w-4/5 mx-auto text-center md:w-1/3">
        We Have A Variety Of Fitness Options For You To Choose From, Ultimately
        Helping You Live A Healthier Lifestyle.
      </p>

      {/* DATA WILL COME FROM API? */}
      <div className="grid  md:grid-cols-2 gap-[2vw]">
        <AClass />
        <AClass />
        <AClass />
        <AClass />
      </div>

      <div className="center">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "lg",
              className: "space-x-2  rounded-full my-2 ",
            })
          )}
        >
          See all Classes
        </Link>
      </div>
    </Container>
  );
};

export default GroupedClasses;
