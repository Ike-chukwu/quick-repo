import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import React from "react";
import { Search } from "lucide-react";

interface Props {
  inputClassName: string;
  btnClassName: string;
}

const InputWithButton = ({ inputClassName, btnClassName }: Props) => {
  return (
    <div className="w-[500px] rounded-full bg-white px-[1rem] relative flex h-[3rem] mx-auto ">
      <Input
        type="email"
        placeholder="Search Pure Fitness"
        className="w-full h-full border-none bg-transparent outline-none "
      />
      <Button className=" rounded-full text-center p-3  bg-pry absolute right-[1rem] top-[50%] translate-y-[-50%]  ">
        <Search size={18} />
      </Button>
    </div>
  );
};

export default InputWithButton;
