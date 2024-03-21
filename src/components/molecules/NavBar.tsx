"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Hamburger from "../icons/Hamburger";

const Navbar: React.FC = () => {
  const isOpen = useRef(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const onClick = () => {
    isOpen.current = !isOpen.current;
  };

  useEffect(() => {
    const onResize = () => {
      if (btnRef.current && isOpen.current) {
        btnRef.current.click();
      }
    };

    addEventListener("resize", onResize);

    () => {
      removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className="">
      <div className="hidden px-4 py-10 mx-auto fixed w-full top-0 left-0 z-[1000] xl:block">
        <div className="flex items-center justify-between">
          <div className="flex">
            <Link href="/" className="w-[204px] h-[60px] relative block">
              <Image
                fill
                quality={100}
                priority
                alt="logo"
                src="/images/logo.png"
              />
              {/* <Logo /> */}
            </Link>
          </div>
          <div className="hidden xl:flex 2xl:items-center xl:justify-between">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
              >
                Group X Classes
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
              >
                Prices
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
              >
                Membership Portal
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
              >
                About us
              </Link>
            </div>
          </div>
          <div className="flex space-x-3 ">
            <Button className="p-8 text-lg font-normal bg-white border rounded-3xl text-sec border-sec">
              Sign in
            </Button>
            <Button className="p-8 text-lg font-normal text-white rounded-3xl bg-sec ">
              Create Account
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="btwn fixed top-0 left-0 w-full z-[1000] px-2 py-5 xl:hidden">
        <Link href="/" className="w-[119px] h-[35px] relative block">
          <Image
            fill
            quality={100}
            priority
            alt="logo"
            src="/images/logo.png"
          />
          {/* <Logo /> */}
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button onClick={onClick} ref={btnRef} variant="ghost">
              <Hamburger />
            </Button>
          </SheetTrigger>
          <SheetContent className="!z-[1000] !w-full">
            <div className="">
              <div className="space-y-4 pt-9">
                <ul>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
                    >
                      Group X Classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
                    >
                      Prices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
                    >
                      Membership Portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-base font-normal rounded-md text-sec hover:text-gray-300"
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4 space-y-3 text-center">
                <Button className="block w-2/3 p-4 mx-auto text-lg font-normal bg-white border h-unset rounded-3xl text-sec border-sec">
                  Sign in
                </Button>

                <Button className="block w-2/3 p-4 mx-auto text-lg font-normal text-white h-unset rounded-3xl bg-sec ">
                  Create Account
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
