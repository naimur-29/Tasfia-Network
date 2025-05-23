// src/components/Footer.tsx
import { Facebook, Mail as MailIcon } from "lucide-react"; // Using MailIcon for clarity

// images:
import btrc_logo from "../assets/images/btrc_logo.webp";

const footerLinks = {
  whoWeAre: [
    { label: "About Us", href: "#about-us-section" },
    { label: "Our Packages", href: "#packages-section" },
    { label: "Contact Us", href: "#contact-us-section" },
  ],
  socialPresence: [
    {
      label: "Visit Our Facebook Page",
      href: "https://www.facebook.com/profile.php?id=100075981401780",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      label: "tasfianetwork@gmail.com",
      href: "mailto:tasfianetwork@gmail.com",
      icon: <MailIcon className="h-5 w-5" />,
    },
  ],
};

export function Footer() {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    document
      .getElementById(sectionId.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer-section"
      className="bg-slate-800 dark:bg-slate-900 text-slate-300 dark:text-slate-400"
    >
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Who We Are */}
          <div className="md:col-span-4 lg:col-span-3">
            <h5 className="font-semibold text-slate-100 dark:text-white mb-4 uppercase text-sm tracking-wider">
              Go Back To
            </h5>
            <ul className="space-y-2">
              {footerLinks.whoWeAre.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) =>
                      link.href.startsWith("#") &&
                      handleScrollToSection(e, link.href)
                    }
                    className="text-xs hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Approved ISP */}
          <div className="md:col-span-4 lg:col-span-6 flex flex-col items-center text-center">
            <h5 className="font-semibold text-slate-100 dark:text-white mb-4 uppercase text-sm tracking-wider">
              Approved ISP
            </h5>
            <div className="bg-white p-2 rounded-md inline-block shadow-md mb-2">
              <img
                src={btrc_logo}
                alt="BTRC Approved ISP"
                className="h-20 w-auto md:h-24"
              />
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Tasfia Network
            </p>
          </div>

          {/* Column 3: Our Social Presence */}
          <div className="md:col-span-4 lg:col-span-3">
            <h5 className="font-semibold text-slate-100 dark:text-white mb-4 uppercase text-sm tracking-wider">
              Our Social Presence
            </h5>
            <ul className="space-y-2">
              {footerLinks.socialPresence.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center space-x-2 text-xs hover:text-indigo-400 transition-colors"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 dark:bg-black py-4">
        <div className="container mx-auto px-4 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} TasfiaNetwork. All Rights Reserved.
          Designed by{" "}
          <a
            className="text-indigo-400"
            href="https://github.com/naimur-29"
            target="_blank"
          >
            @naimur29
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
