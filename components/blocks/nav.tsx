"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { headerData } from "@/_data/menuData";
import Logo from "@/components/custom/logo";
import HeaderLink from "@/_data/HeaderLink";
import MobileHeaderLink from "@/_data/MobileHeaderLink";

const IHeader: React.FC = () => {
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }

    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }

    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all font-fredoka ${
        sticky ? "shadow-lg bg-accent dark:bg-dark" : "shadow-none"
      }`}
    >
      <div className="md:bg-primary bg-white  py-2 dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex items-center justify-between px-4">
          <div className="lg:hidden block w-50  md:w-80">
            <Logo />
          </div>

          <nav className="hidden lg:flex grow items-center justify-start">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4 relative top-px">
            <Link
              href="#"
              className="hidden lg:block bg-accent border border-accent text-sm hover:bg-error/90 text-black px-4 py-3.5 leading-none rounded-lg font-medium"
              onClick={() => setIsSignInOpen(true)}
            >
              Enroll Now
            </Link>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            </button>
          </div>
        </div>

        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-primary z-40" />
        )}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50 px-10 overflow-auto`}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-start py-10">
                <button
                  onClick={() => setNavbarOpen(false)}
                  aria-label="Close mobile menu"
                  className="bg-white p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col items-start gap-4">
                {headerData.map((item, index) => (
                  <MobileHeaderLink
                    key={index}
                    item={item}
                    onClick={() => setNavbarOpen(false)}
                  />
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-1 my-16 text-white">
              <p className="text-base font-normal text-white/80">Contact</p>
              <Link
                href="#"
                className="text-base font-medium hover:text-primary"
              >
                hello@mmdkids.ca
              </Link>
              <Link
                href="#"
                className="text-base font-medium hover:text-primary"
              >
                +1 (587) 691-3889
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) sm:flex lg:justify-between justify-center py-5 hidden">
          <div className="lg:block hidden">
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="flex gap-3  py-2 pr-6 border-r dark:border-dark_border">
              <Image
                src="/icons/icon-mail.svg"
                alt="icon"
                width={32}
                height={32}
              />
              <div className="">
                <p className="text-sm font-normal text-neutral-500 dark:text-white/60 mb-0">
                  Email us at
                </p>
                <Link
                  href="#"
                  className="text-base font-semibold mb-0 hover:text-primary"
                >
                  hello@mmdkids.ca
                </Link>
              </div>
            </div>
            <div className="flex gap-3 py-2 pl-6">
              <Image
                src="/icons/icon-phone.svg"
                alt="icon"
                width={32}
                height={32}
              />
              <div className="">
                <p className="text-sm font-normal text-neutral-500 dark:text-white/60 mb-0">
                  Call us now
                </p>
                <Link
                  href="#"
                  className="text-base font-semibold mb-0 hover:text-primary"
                >
                  +1 (587) 691-3889
                </Link>
              </div>
            </div>
            <button
              onClick={() => ""}
              className="text-error text-sm font-regualar border border-primary py-3 px-6 rounded-md ml-8 hover:bg-primary hover:text-white hover:border-primary"
            >
              Parent Login
            </button>
          </div>
        </div>
      </div>


    </header>
  );
};

export default IHeader;
