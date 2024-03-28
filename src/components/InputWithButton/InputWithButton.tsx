import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import React from "react";

const InputWithButton = () => {
  return (
    <div>
      <Input type="email" placeholder="Email" />
      <Button className="p-2 rounded-3xl bg-pry "></Button>
    </div>
  );
};

export default InputWithButton;
