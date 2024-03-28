import InputWithButton from "@/components/InputWithButton/InputWithButton";
import ImageBox from "@/molecules/ImageBox";
import Container from "@/ui/container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <Container>
        <div className="px-[5%] py-[7%] md:space-y-[6%] relative  bg-customGray">
          <div className="md:space-y-[2%]">
            <h2 className="text-2xl font-bold text-center xl:text-5xl md:text-3xl ">
              Group X Classes
            </h2>
            <p className=" text-center w-3/5 mx-auto text-sm md:text-lg xl:text-2xl ">
              Explore an array of fitness classes at Pure Fitness Africa
              tailored to your goals and preferences. From invigorating group
              workouts to personalized training sessions, we have something for
              everyone.
            </p>
            <div className="grid md:grid-cols-12 gap-[2%] my-10 md:my-[2.5%] grid-rows-6 min-h-[370px]">
              <div className="bg-pry relative rounded-2xl col-start-1 col-span-2 row-start-1 row-span-6 ">
                <Image
                  src={"/images/tissue.png"}
                  width={228}
                  height={228}
                  alt="tissue"
                  className="absolute bottom-0"
                />
              </div>
              <ImageBox
                src="/images/women.png"
                className="col-start-3 rounded-2xl col-span-9 row-start-1 row-span-6"
              ></ImageBox>
              <div className="bg-pry relative rounded-2xl col-start-1 col-span-2 col-start-12 col-span-1 row-start-1 row-span-6">
                <Image
                  src={"/images/black-yellow.png"}
                  fill
                  alt="tissue"
                  className="rounded-2xl absolute object-cover object-center"
                />
              </div>
            </div>
          </div>
          <p className=" text-center w-3/5 mx-auto mt-[10%] text-sm md:text-lg xl:text-2xl ">
            Find your perfect fitness match at Pure Fitness Africa. Search our
            classes, trainers, and programs to customize your journey to
            wellness and vitality.
          </p>

          <InputWithButton />
        </div>
      </Container>
    </main>
  );
};

export default page;
