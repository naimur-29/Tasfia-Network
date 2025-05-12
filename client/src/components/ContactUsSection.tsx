// src/components/ContactUsSection.tsx
import { Card, CardContent } from "@/components/ui/card"; // Removed CardHeader, CardTitle if not used
import { Phone, Clock, MapPin } from "lucide-react";

const contactDetails = [
  {
    category: "Call For Support & New Connection",
    items: [
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01613-036370",
        href: "tel:01613036370",
      },
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01613-036371",
        href: "tel:01613036371",
      },
    ],
  },
  {
    category: "Call For Cable Team",
    items: [
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01613-036377",
        href: "tel:01613036377",
      },
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01613-036378",
        href: "tel:01613036378",
      },
    ],
  },
  {
    category: "Call For Billing",
    items: [
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01613-036369",
        href: "tel:01613036369",
      },
    ],
  },
  {
    category: "Call For Networking & Software Solution",
    items: [
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01718-929640",
        href: "tel:01718929640",
      },
    ],
  },
  {
    category: "Call For Management",
    highlight: true,
    items: [
      { name: "MD. Mohiuddin", title: "Managing Director" },
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01942-914714",
        href: "tel:01942914714",
      },
      {
        icon: (
          <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        ),
        text: "01613-036373",
        href: "tel:01613036373",
      },
    ],
  },
];

// Placeholder Google Maps Embed URL (General Dhaka Area)
// To get your specific location:
// 1. Go to Google Maps (maps.google.com).
// 2. Search for your exact address or drop a pin.
// 3. Click the "Share" button.
// 4. Go to the "Embed a map" tab.
// 5. Copy the HTML iframe code provided.
// 6. Replace the `src` attribute of the iframe below with the `src` you copied.
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38300003888!2d90.2791943542249!3d23.780573260373774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1701092190839!5m2!1sen!2sbd";

export function ContactUsSection() {
  return (
    <section
      id="contact-us-section"
      className="py-12 md:py-20 bg-white dark:bg-slate-950 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Contact Info (remains the same as previous version) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-indigo-500 pb-3">
              Contact Us
            </h2>
            {contactDetails.map((group) => (
              <div
                key={group.category}
                className={
                  group.highlight
                    ? "bg-yellow-300 dark:bg-yellow-500 p-4 rounded-md shadow-md"
                    : ""
                }
              >
                <h3
                  className={`text-lg font-semibold mb-3 ${group.highlight ? "text-slate-800" : "text-indigo-700 dark:text-indigo-400"}`}
                >
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center space-x-3 text-sm ${group.highlight ? "text-slate-700" : "text-slate-600 dark:text-slate-300"}`}
                    >
                      {item.icon && item.icon}
                      {item.name && (
                        <span className="font-medium">{item.name}</span>
                      )}
                      {item.title && (
                        <span className="text-xs">({item.title})</span>
                      )}
                      {item.text && (
                        <a href={item.href} className="hover:underline">
                          {item.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
                Customer Care Open
              </h3>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 text-sm">
                <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span>9:00 am to 8:00 pm</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
                Our Office
              </h3>
              <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-sm">
                <MapPin className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0" />
                <span>
                  House#75, Road#Shah Makhdum Avenue, Sector#12, Uttara,
                  Dhaka-1230
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Location Map */}
          <div className="md:col-span-6 lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-indigo-500 pb-3 mb-8">
              Our Location
            </h2>
            <Card className="shadow-lg overflow-hidden rounded-md">
              <CardContent className="p-0 aspect-video md:aspect-[4/3] lg:aspect-[16/9]">
                {" "}
                {/* Maintain aspect ratio */}
                <iframe
                  src={mapEmbedSrc}
                  width="100%"
                  height="100%" // Takes height from parent's aspect ratio
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Office Location on Google Maps"
                ></iframe>
              </CardContent>
            </Card>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center md:text-left">
              Note: This is a general map. Please use the address for precise
              location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
