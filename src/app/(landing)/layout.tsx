import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/NavBar";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="xl:pt-[150px] pt-[85px]">
      <Navbar />
      {children}

      <Footer />
    </div>
  );
};

export default LandingLayout;
