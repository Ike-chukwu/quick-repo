import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";

interface Props {
  src: string;
  title: string;
  id: string;
  url: string;
  tag: string;
}

const BlogCard = ({ src, title, id, url, tag }: Props) => {
  return (
    <article>
      <div className="aspect-[116/82] isolate relative rounded-xl overflow-hidden">
        <Image
          alt={title}
          fill
          className="object-cover object-center w-full h-full"
          src={src}
        />

        <span
          className={cn(
            buttonVariants({
              variant: "secondary",
              size: "sm",
              className:
                "rounded-full absolute z-10 bottom-3 right-3 !bg-white text-sec px-4 text-sm",
            })
          )}
        >
          {tag}
        </span>
      </div>
      <p className="my-5 text-xl md:text-2xl">{title}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="space-x-1 text-lg start"
      >
        <span>Read More</span>

        <ArrowUpRight className="scale-75" />
      </a>
    </article>
  );
};

export default BlogCard;
