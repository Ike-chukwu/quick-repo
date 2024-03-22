import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

const ArrowRight = ({ className = "", ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-[25px] h-6", className)}
      {...props}
    >
      <path d="M14.9504 18L13.5504 16.55L17.1004 13H4.95044V11H17.1004L13.5504 7.45L14.9504 6L20.9504 12L14.9504 18Z" />
    </svg>
  );
};

export default ArrowRight;
