import React, { ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  className?: ComponentProps<"div">["className"];
}

const ImageBox = ({ src, className = "" }: Props) => {
  return (
    <div className={cn("relative rounded-xl overflow-hidden", className)}>
      <Image
        quality={100}
        priority
        alt=""
        src={src}
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default ImageBox;
