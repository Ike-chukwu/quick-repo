"use client";

import useNumFormatter from "@/hooks/useNumFormater";
import Check from "@/icons/Check";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import Container from "@/ui/container";
import { Separator } from "@/ui/separator";
import React from "react";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";

interface CardProps {
  recommended?: boolean;
  id: string;
  name: string;
  features: string[];
  price: number;
}

const Card = ({ id, recommended, name, features = [], price }: CardProps) => {
  const { format } = useNumFormatter();

  return (
    <>
      <article
        className={cn(`box rounded-md p-[4%] border relative`, {
          ["bg-pry"]: recommended,
          ["bg-accent"]: !recommended,
        })}
      >
        <h4 className="my-4 text-xl font-bold text-center uppercase">{name}</h4>

        <h5 className="text-center">
          <span className="text-4xl font-bold">
            {format({ number: price })}/
          </span>
          month
        </h5>

        <div className="w-10/12 mx-auto">
          <Separator className="my-4" />

          <div className="space-y-2 mb-28 ">
            {features.map((f) => (
              <p
                key={f}
                className="grid items-start grid-cols-[30px_minmax(0,1fr)]"
              >
                <Check className={cn({ ["fill-pry"]: !recommended })} />
                <span>{f}</span>
              </p>
            ))}
          </div>

          <Link
            href="/"
            className={cn(
              buttonVariants({
                size: "lg",
                className: `space-x-2 rounded-full my-2 absolute  w-3/4 left-1/2 bottom-8 -translate-x-1/2  ${
                  recommended ? "!bg-white" : ""
                } `,
              })
            )}
          >
            <p>Get Started</p>
            <ArrowRight />
          </Link>
        </div>
      </article>
      <style jsx>{`
        .box {
          filter: drop-shadow(3px 0px ${recommended ? "#241d05" : "#ffca22"})
            drop-shadow(2px 0px #241d05);
        }
      `}</style>
    </>
  );
};

const PRICES = [
  {
    id: "1",
    name: "Integrated Treble Plan",
    price: 50000,
    features: [
      `Anytime access + Personal Trainer`,
      `3 Personal Trainer sessions weekly`,
      `Unlimited gym pass`,
      `ZERO sign-up fee`,
      `Access to all gyms`,
      `FREE Group X classes`,
      `Cancel at any time`,
      `Freeze once a quarter`,
    ],
  },
  {
    id: "2",
    name: "Life Plan",
    price: 19000,
    recommended: true,
    features: [
      `Anytime access`,
      `Unlimited gym pass`,
      `ZERO sign-up fee`,
      `Access to all gyms`,
      `FREE Group X classes`,
      `Cancel at any time`,
      `Freeze once a quarter`,
    ],
  },
  {
    id: "3",
    name: "Pilot Plan",
    price: 6000,
    features: [
      `Once a week access for a month`,
      `ZERO sign-up fee`,
      `Access to all gyms`,
      `FREE Group X classes`,
      `Cancel at any time`,
      `Freeze once a quarter`,
    ],
  },
];

const Pricings = () => {
  return (
    <>
      <section className="p-2 wrap bg-gradient-to-b from-accent to-accent min-h-[400px]">
        <Container className="py-[10vw] md:py-[5vw]">
          <div className="btwn flex-col md:flex-row space-x-0 space-y-[10%] md:space-y-0 md:space-x-[7%] mx-[4%]">
            <h2 className="text-2xl font-bold text-center xl:text-5xl md:text-3xl md:text-start ">
              We have the best plan and pricing for your lifestyle
            </h2>

            <p className="w-4/5 text-center md:text-start md:w-auto">
              We Have A Variety Of Fitness Options For You To Choose From,
              Ultimately Helping You Live A Healthier Lifestyle.
            </p>
          </div>

          <div className="my-[4vw] grid gap-[2vw] md:grid-cols-2 lg:grid-cols-3">
            {PRICES.map((p) => (
              <Card {...p} key={p.id} />
            ))}
          </div>

          <div className="my-2 center">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: `rounded-full`,
                })
              )}
            >
              See all Pricing
            </Link>
          </div>
        </Container>
      </section>
      <style jsx>{`
        @media screen and (min-width: 768px) {
          section.wrap {
            background: linear-gradient(
              to bottom,
              #fffbef 0%,
              #fffbef 50%,
              transparent 50%,
              transparent 100%
            );
          }
        }
      `}</style>
    </>
  );
};

export default Pricings;
