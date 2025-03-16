"use client";

import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

// icons
import { BsGithub } from "react-icons/bs";

interface Link {
  name: string;
  src: string;
  icon: IconType | string;
}

const LinkList: Link[] = [
  {
    name: "GitHub",
    src: "https://github.com/Ohjanghoon/",
    icon: BsGithub,
  },
  {
    name: "Portfolio",
    src: "https://dev-oh.web.app",
    icon: "/assets/logo/logo_dev-oh.ico",
  },
];

function Footer() {
  return (
    <footer className="root-footer relative z-10 col-span-4 mx-auto w-full max-w-screen-md px-5 py-10 lg:col-span-12 lg:px-15">
      <div className="footer-container flex flex-col justify-between gap-3 p-5 lg:flex-row lg:items-center">
        <div className="footer-content space-y-1">
          <div className="footer-logo flex items-center gap-2">
            <Image
              src="/assets/logo/logo_light.ico"
              alt="logo"
              width={32}
              height={32}
              unoptimized
              className="h-8 w-8 rounded-lg"
            />
            <h6>oh-note</h6>
          </div>
          <p className="footer-copyright text-text-muted text-sm">
            Copyright &copy; 2025 Janghoon Oh. All rights reserved.
          </p>
        </div>
        <div className="footer-social flex items-center gap-2">
          {LinkList.map((link) => (
            <SocialLink link={link} key={link.name} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ link }: { link: Link }) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={link.src} target="_blank">
            <div className="ring-muted inline-flex h-7 w-7 items-center justify-center rounded-full ring-1">
              {typeof link.icon !== "string" ? (
                <link.icon className="text-xl" />
              ) : (
                <Image
                  src={link.icon}
                  alt="dev-oh logo"
                  width={20}
                  height={20}
                  unoptimized
                  className="h-5 w-5 rounded-[50%]"
                />
              )}
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          className="bg-bg-dark text-text-light rounded-lg p-1 text-xs"
          side="bottom"
          align="start"
          sideOffset={6}
        >
          {link.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Footer;
