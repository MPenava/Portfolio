import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Calendar, MenuIcon } from "lucide-react";
import { H1, H2, H3, H4, Large } from "../ui/typography";

const links = {
  home: "#home",
  about: "#about",
  skills: "#skills",
  education: "#education",
  certificates: "#certificates",
};

const menuLinkStyle = "relative px-4 py-2";

const HeaderNavigation = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <a href="#home" className="flex items-center space-x-2">
          <H3>PORTFOLIO</H3>
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href={links.home} className={menuLinkStyle}>
                <Large>HOME</Large>
              </NavigationMenuLink>
            </NavigationMenuItem>
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
              <a href={links.home} className="font-medium">
                Home
              </a>
              <a href={links.about} className="font-medium">
                About
              </a>
              <a href={links.skills} className="font-medium">
                Skills
              </a>
              <a href={links.education} className="font-medium">
                Education & Career
              </a>
              <a href={links.certificates} className="font-medium">
                Certificates
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export { HeaderNavigation };
