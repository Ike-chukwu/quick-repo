import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

const Check = ({ className = "", ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <path d="M12.0001 22C10.6167 22 9.31673 21.7375 8.10006 21.2125C6.88339 20.6875 5.82506 19.975 4.92506 19.075C4.02506 18.175 3.31256 17.1167 2.78756 15.9C2.26256 14.6833 2.00006 13.3833 2.00006 12C2.00006 10.6167 2.26256 9.31667 2.78756 8.1C3.31256 6.88333 4.02506 5.825 4.92506 4.925C5.82506 4.025 6.88339 3.3125 8.10006 2.7875C9.31673 2.2625 10.6167 2 12.0001 2C13.0834 2 14.1084 2.15833 15.0751 2.475C16.0417 2.79167 16.9334 3.23333 17.7501 3.8L16.3001 5.275C15.6667 4.875 14.9917 4.5625 14.2751 4.3375C13.5584 4.1125 12.8001 4 12.0001 4C9.78339 4 7.89589 4.77917 6.33756 6.3375C4.77923 7.89583 4.00006 9.78333 4.00006 12C4.00006 14.2167 4.77923 16.1042 6.33756 17.6625C7.89589 19.2208 9.78339 20 12.0001 20C14.2167 20 16.1042 19.2208 17.6626 17.6625C19.2209 16.1042 20.0001 14.2167 20.0001 12C20.0001 11.7 19.9834 11.4 19.9501 11.1C19.9167 10.8 19.8667 10.5083 19.8001 10.225L21.4251 8.6C21.6084 9.13333 21.7501 9.68333 21.8501 10.25C21.9501 10.8167 22.0001 11.4 22.0001 12C22.0001 13.3833 21.7376 14.6833 21.2126 15.9C20.6876 17.1167 19.9751 18.175 19.0751 19.075C18.1751 19.975 17.1167 20.6875 15.9001 21.2125C14.6834 21.7375 13.3834 22 12.0001 22ZM10.6001 16.6L6.35006 12.35L7.75006 10.95L10.6001 13.8L20.6001 3.775L22.0001 5.175L10.6001 16.6Z" />
    </svg>
  );
};

export default Check;
