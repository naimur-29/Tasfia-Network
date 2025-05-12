// src/components/Footer.tsx
import {
  Facebook,
  Twitter,
  Youtube,
  Mail as MailIcon,
  Linkedin,
  Instagram,
} from "lucide-react"; // Using MailIcon for clarity

const footerLinks = {
  whoWeAre: [
    { label: "About", href: "#about-us-section" },
    { label: "Career", href: "#" },
    { label: "News & Events", href: "#" },
    { label: "Photos & Videos", href: "#" },
    { label: "Contact Us", href: "#contact-us-section" },
    { label: "Corporate Service", href: "#" },
  ],
  socialPresence: [
    { label: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
    { label: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
    { label: "Youtube", href: "#", icon: <Youtube className="h-5 w-5" /> },
    {
      label: "Gmail",
      href: "mailto:info@dhakanetworkbd.com",
      icon: <MailIcon className="h-5 w-5" />,
    },
    { label: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> }, // Added
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
              Who We Are
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
                src="https://via.placeholder.com/150x150/FFFFFF/000000?text=BTRC+Logo" // Placeholder BTRC logo
                alt="BTRC Approved ISP"
                className="h-20 w-auto md:h-24"
              />
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Dhaka Network BD
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
