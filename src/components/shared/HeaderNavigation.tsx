import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Calendar, MenuIcon } from "lucide-react";

const links = {
  home: "#home",
  about: "#about",
  skills: "#skills",
  education: "#education",
  certificates: "#certificates",
};

const menuLinkStyle =
  "relative h-9 px-4 py-2 before:absolute before:bottom-0 before:left-1/4 before:h-0.5 before:w-1/2 before:scale-x-0 before:bg-primary before:transition-transform hover:before:scale-x-100";

const HeaderNavigation = () => {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between p-4">
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href={links.home} className={menuLinkStyle}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={links.about} className={menuLinkStyle}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.education}
                className={menuLinkStyle}
              >
                Education & Career
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={links.skills} className={menuLinkStyle}>
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.certificates}
                className={menuLinkStyle}
              >
                Certificates
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button>
          <Calendar />
          Book a Meeting
        </Button>
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
