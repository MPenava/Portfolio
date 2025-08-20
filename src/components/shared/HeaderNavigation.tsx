import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Calendar, MenuIcon } from "lucide-react";

const links = {
  home: "#home",
  about: "#about",
  skills: "#skills",
  education: "#education",
  certificates: "#certificates",
};

const HeaderNavigation = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/75 shadow-md backdrop-blur-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between p-4">
        <a
          href={links.home}
          className="flex items-center gap-2 text-xl font-bold"
        >
          PORTFOLIO
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.home}
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.about}
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.education}
                className={navigationMenuTriggerStyle()}
              >
                Education & Career
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.skills}
                className={navigationMenuTriggerStyle()}
              >
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={links.certificates}
                className={navigationMenuTriggerStyle()}
              >
                Certificates
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button>
                <Calendar />
                Book a Meeting
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Menu">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-dvh overflow-auto">
            <SheetHeader>
              <SheetTitle>
                <a href={links.home} className="flex items-center gap-2 pb-8">
                  Portfolio
                </a>
              </SheetTitle>
            </SheetHeader>
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
