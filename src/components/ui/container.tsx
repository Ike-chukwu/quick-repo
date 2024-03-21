import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

const Container = ({ className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "max-w-screen-2xl mx-auto px-4 xl:px-10 3xl:px-0  ",
        className
      )}
      {...props}
    />
  );
};

export default Container;
