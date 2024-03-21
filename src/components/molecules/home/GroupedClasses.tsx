"use client";

import Trophy from "@/icons/Trophy";
import Container from "@/ui/container";
import React from "react";

const Dot = () => <div className="w-5 rounded-full aspect-square bg-pry" />;

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
        <Trophy className="absolute top-2 right-[5%] h-3/4 -z-10  " />

        <div className="z-10">
          <header className="btwn">
            <h3 className="text-4xl font-medium lg:font-bold lg:text-5xl ">
              Max Andrenaline
            </h3>
            <Item text="Open" />
          </header>
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
    <Container className="space-y-[10%] md:space-y-[2%] my-[20%] md:my-[10%]">
      <h2 className="text-2xl font-bold text-center xl:text-5xl md:text-3xl ">
        Group X Classes
      </h2>

      <p className="w-4/5 mx-auto text-center md:w-1/3">
        We Have A Variety Of Fitness Options For You To Choose From, Ultimately
        Helping You Live A Healthier Lifestyle.
      </p>

      {/* WILL COME FROM API? */}
      <div className="grid  md:grid-cols-2 gap-[2vw]">
        <AClass />
        <AClass />
        <AClass />
        <AClass />
      </div>
    </Container>
  );
};

export default GroupedClasses;
