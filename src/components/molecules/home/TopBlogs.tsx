"use client";

import Container from "@/ui/container";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import { ArrowUpRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

const data = [1, 2, 3].map((id) => ({
  id: `${id}`,
  title: "Our Inside Stories: News, Media features and updates",
  src: "/images/blog.jpg",
  url: "https://www.instagram.com/purefitnessafrica/?hl=en",
  tag: "Update",
}));

const TopBlogs = () => {
  return (
    <section className=" my-[20%] md:my-[10%] 3xl:my-28">
      <Container>
        <div className="flex-col space-y-4 md:btwn md:flex-row center md:space-y-0 ">
          <h2 className="text-2xl font-bold text-center xl:text-5xl md:text-3xl md:text-start">
            Our Inside Stories:
            <br /> News, Media features and updates
          </h2>

          <Link
            href="/"
            className={cn(
              buttonVariants({
                size: "lg",
                className: `rounded-full space-x-2`,
              })
            )}
          >
            <span>See all Blog</span>
            <ArrowUpRight className="scale-75" />
          </Link>
        </div>

        <div className="my-[4vw] grid gap-[2vw] md:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <BlogCard {...d} key={d.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopBlogs;
