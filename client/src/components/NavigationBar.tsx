import * as React from "react";
// Removed Link and NavLink from react-router-dom as we are doing same-page scrolling.
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink, // Not strictly needed for simple <a> tags
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Home,
  Info,
  Package,
  Server,
  Mail,
  Wifi,
  Menu,
  Paperclip,
} from "lucide-react";

// images
import logo from "../assets/images/logo.webp";

interface NavLinkItem {
  label: string;
  icon: React.ReactElement;
  link: string;
  subLinks?: SubNavLinkItem[];
}
interface SubNavLinkItem {
  title: string;
  description: string;
  link: string;
}

const navLinksData: NavLinkItem[] = [
  {
    label: "Home",
    icon: <Home className="h-4 w-4 mr-2" />,
    link: "#hero-section",
  },
  {
    label: "About Us",
    icon: <Info className="h-4 w-4 mr-2" />,
    link: "#about-us-section",
  },
  {
    label: "Packages",
    icon: <Package className="h-4 w-4 mr-2" />,
    link: "#packages-section",
  },
  {
    label: "Contact Us",
    icon: <Mail className="h-4 w-4 mr-2" />,
    link: "#contact-us-section",
  },
  {
    label: "FTP-Servers",
    icon: <Server className="h-4 w-4 mr-2" />,
    link: "/",
    subLinks: [
      {
        title: "Coming soon...",
        description: "",
        link: "/",
      },
      // {
      //   title: "Movie Server",
      //   description: "Vast library of movies.",
      //   link: "https://moviemazic.xyz",
      // },
    ],
  },
  {
    label: "BTRC Tarif",
    icon: <Paperclip className="h-4 w-4 mr-2" />,
    link: "#btrc-tarif-section",
  },
];

const DesktopSubMenuItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href?.substring(1);
    if (sectionId) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    // Optionally close parent dropdown if needed, though NavigationMenu handles this
  };
  return (
    <li>
      <a
        ref={ref}
        href={href}
        onClick={handleScroll}
        className={
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground " +
          className
        }
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
DesktopSubMenuItem.displayName = "DesktopSubMenuItem";

export function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleScrollAndCloseMobile = (
    sectionId: string,
    event?: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event?.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50 h-16 sm:h-20 flex items-center">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between w-full">
        <a
          href="#hero-section"
          onClick={(e) => handleScrollAndCloseMobile("hero-section", e)}
          className="flex items-center bg-white p-1.5 sm:p-2 rounded shadow shrink-0"
        >
          <img
            src={logo}
            alt="TarfiaNetwork Logo" // Add descriptive alt text
            className="h-6 w-6 sm:h-8 sm:w-8 mr-1 sm:mr-2" // Kept sizing and margin, removed text-color
          />
          <div>
            <h1 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight">
              <span className="text-orange-500">Tasfia </span>Network
            </h1>
            <p className="text-[9px] sm:text-[10px] text-slate-600 tracking-tight uppercase">
              Quality & Commitment
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinksData.map((link) =>
                link.subLinks ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className="bg-indigo-700 hover:bg-indigo-600 data-[state=open]:bg-indigo-600 text-white text-xs xl:text-sm px-2 py-1.5 xl:px-3 xl:py-2">
                      {React.cloneElement(link.icon, {})}
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {link.subLinks.map((subLink) => (
                          <DesktopSubMenuItem
                            key={subLink.link}
                            title={subLink.title}
                            href={`${subLink.link}`}
                          >
                            {subLink.description}
                          </DesktopSubMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.link}>
                    <a
                      href={`${link.link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(link.link.slice(1))
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`${navigationMenuTriggerStyle()} bg-indigo-700 hover:bg-indigo-600 text-white text-xs xl:text-sm flex items-center px-2 py-1.5 xl:px-3 xl:py-2`}
                    >
                      {React.cloneElement(link.icon, {})}
                      {link.label}
                    </a>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-indigo-600 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-indigo-700 text-white p-0 flex flex-col [&>[data-radix-dialog-primitive-close]]:text-white [&>[data-radix-dialog-primitive-close]]:opacity-100 [&>[data-radix-dialog-primitive-close]:hover]:text-indigo-200 [&>[data-radix-dialog-primitive-close]:focus]:ring-indigo-400 [&>[data-radix-dialog-primitive-close]]:top-5 [&>[data-radix-dialog-primitive-close]]:right-5"
            >
              <SheetHeader className="p-4 border-b border-indigo-600">
                <SheetTitle className="text-white text-lg flex items-center">
                  <a
                    href="#hero-section"
                    onClick={(e) =>
                      handleScrollAndCloseMobile("hero-section", e)
                    }
                    className="flex items-center"
                  >
                    <Wifi className="h-6 w-6 mr-2" /> DhakaNetworkBD
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex-grow overflow-y-auto p-4 space-y-1">
                {navLinksData.map((link) =>
                  link.subLinks ? (
                    <Accordion
                      key={link.label}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger className="hover:no-underline hover:bg-indigo-600 px-3 py-2.5 rounded-md text-sm w-full justify-between">
                          <span className="flex items-center">
                            {React.cloneElement(link.icon, {})}
                            {link.label}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-[calc(1.25rem_+_0.75rem)] pr-2 pt-1 pb-1">
                          <div className="flex flex-col space-y-0.5">
                            {link.subLinks.map((subLink) => (
                              <SheetClose asChild key={subLink.link}>
                                <a
                                  href={`${subLink.link}`}
                                  onClick={(e) =>
                                    handleScrollAndCloseMobile(
                                      subLink.link.slice(1),
                                      e,
                                    )
                                  }
                                  className={`block w-full text-left px-3 py-1.5 rounded-md text-xs hover:bg-indigo-600`}
                                >
                                  {subLink.title}
                                </a>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SheetClose asChild key={link.link}>
                      <a
                        href={`${link.link}`}
                        onClick={(e) =>
                          handleScrollAndCloseMobile(link.link.slice(1), e)
                        }
                        className={`flex items-center px-3 py-2.5 rounded-md text-sm hover:bg-indigo-600`}
                      >
                        {React.cloneElement(link.icon, {})}
                        {link.label}
                      </a>
                    </SheetClose>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
