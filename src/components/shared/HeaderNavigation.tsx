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

const links = {
  about: "#about",
  skills: "#skills",
  education: "#education",
  certificates: "#certificates",
};

const menuLinkStyle = "h-11";

const HeaderNavigation = () => {
  return (
    <header className="py-auto sticky top-0 z-50 bg-background">
      <nav className="container mx-auto flex h-24 max-w-7xl items-center justify-between p-4">
        <a href="#home" className="flex items-center">
          <H3>PORTFOLIO</H3>
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="m-0 gap-5 space-x-0">
            <NavigationMenuItem>
              <NavigationMenuLink href={links.about} className={menuLinkStyle}>
                <Large>ABOUT</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.education}
                className={menuLinkStyle}
              >
                <Large>EDUCATION & CAREER</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={links.skills} className={menuLinkStyle}>
                <Large>SKILLS</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.certificates}
                className={menuLinkStyle}
              >
                <Large>CERTIFICATES</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
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
              <a href={links.about} className="font-medium">
                ABOUT
              </a>
              <a href={links.skills} className="font-medium">
                SKILLS
              </a>
              <a href={links.education} className="font-medium">
                EDUCATION & CAREER
              </a>
              <a href={links.certificates} className="font-medium">
                CERTIFICATES
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export { HeaderNavigation };
