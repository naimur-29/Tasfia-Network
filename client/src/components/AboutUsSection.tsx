// src/components/AboutUsSection.tsx
import { Card, CardContent } from "./ui/card";
// Icons are no longer needed for the sidebar phrases, but keep them if used elsewhere in this component.

// images
import bg1 from "../assets/images/hero_bg_1.jpg";

export function AboutUsSection() {
  return (
    <section
      id="about-us-section"
      className="py-12 md:py-20 bg-slate-100 dark:bg-slate-900 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Title, Descriptive Phrases, Image */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-indigo-600 text-white p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold">WHO WE ARE</h3>
            </div>
            <Card className="overflow-hidden shadow-lg p-0">
              <CardContent className="p-0">
                <img
                  src={bg1}
                  alt="Network Infrastructure"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Main Content (remains the same as previous version) */}
          <div className="md:col-span-8 space-y-6">
            <Card className="bg-white dark:bg-slate-800 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
                  We are the leading internet service provider & Software
                  Solutions company in Bangladesh.
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    <em>
                      <strong>Tasfia Network</strong>
                    </em>{" "}
                    stands as a <em>premier</em> Internet Service Provider and
                    IT solutions company in Gazipur, Bangladesh. Officially{" "}
                    <strong>
                      licensed by the Bangladesh Telecommunications Regulatory
                      Commission (BTRC)
                    </strong>
                    , we are committed to providing top-tier services. Our core
                    objective is to deliver unparalleled internet speeds through
                    the deployment of <strong>advanced</strong> and highly
                    reliable equipment. We believe our{" "}
                    <em>meticulous approach</em> helps you make strategic
                    decisions and gain a <strong>competitive edge</strong>.
                  </p>
                  <p>
                    Our team of dedicated professionals ensures{" "}
                    <em>seamless installation</em> and expert maintenance. For
                    corporate entities, our comprehensive suite of IT solutions
                    includes website design and development, robust antivirus
                    solutions, and sophisticated networking services. Beyond
                    this, we offer a <strong>full array of web services</strong>{" "}
                    designed to meet diverse requirements. We are devoted to{" "}
                    <strong>exceptional customer support</strong>, with a team
                    ready to assist you{" "}
                    <em>24 hours a day, 7 days a week, 365 days a year</em>,
                    addressing all your internet concerns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
