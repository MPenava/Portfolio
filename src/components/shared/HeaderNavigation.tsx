import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

import { Button } from "../ui/button";
import { H3, Large } from "../ui/typography";
import { LanguageSelect } from "./LanguageSelect";

const links = {
  about: "#about",
  skills: "#skills",
  education: "#education",
  certificates: "#certificates",
};

const menuLinkStyle = "h-11";

type THeaderNavigationProps = {
  about: string;
  education: string;
  skills: string;
  certificates: string;
};

const HeaderNavigation = ({
  about,
  education,
  skills,
  certificates,
}: THeaderNavigationProps) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash || "";
      const key = hash.startsWith("#") ? hash.slice(1) : hash;
      if (["about", "skills", "education", "certificates"].includes(key)) {
        setActive(key);
      } else {
        setActive(null);
      }
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const handleNavClick = (key: string) => {
    setActive(key);
  };

  const activeClass = "font-semibold text-primary"; // adjust classes to your theme if needed

  return (
    <header className="py-auto sticky top-0 z-50 bg-background">
      <nav className="container mx-auto flex h-24 max-w-7xl items-center justify-between p-4">
        <a href="#home" className="flex items-center">
          <H3>PORTFOLIO</H3>
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="m-0 gap-5 space-x-0">
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.about}
                className={`${menuLinkStyle} ${
                  active === "about" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("about")}
                aria-current={active === "about" ? "page" : undefined}
              >
                <Large>{about}</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.education}
                className={`${menuLinkStyle} ${
                  active === "education" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("education")}
                aria-current={active === "education" ? "page" : undefined}
              >
                <Large>{education}</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.skills}
                className={`${menuLinkStyle} ${
                  active === "skills" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("skills")}
                aria-current={active === "skills" ? "page" : undefined}
              >
                <Large>{skills}</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.certificates}
                className={`${menuLinkStyle} ${
                  active === "certificates" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("certificates")}
                aria-current={active === "certificates" ? "page" : undefined}
              >
                <Large>{certificates}</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <LanguageSelect />
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Menu">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-dvh overflow-auto">
            <div className="flex flex-col gap-6">
              <a
                href={links.about}
                className={`font-medium ${
                  active === "about" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("about")}
                aria-current={active === "about" ? "page" : undefined}
              >
                {about}
              </a>
              <a
                href={links.education}
                className={`font-medium ${
                  active === "education" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("education")}
                aria-current={active === "education" ? "page" : undefined}
              >
                {education}
              </a>
              <a
                href={links.skills}
                className={`font-medium ${
                  active === "skills" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("skills")}
                aria-current={active === "skills" ? "page" : undefined}
              >
                {skills}
              </a>
              <a
                href={links.certificates}
                className={`font-medium ${
                  active === "certificates" ? activeClass : ""
                }`}
                onClick={() => handleNavClick("certificates")}
                aria-current={active === "certificates" ? "page" : undefined}
              >
                {certificates}
              </a>
              <LanguageSelect />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export { HeaderNavigation };
