// src/components/AboutUsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
// Icons are no longer needed for the sidebar phrases, but keep them if used elsewhere in this component.

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
            {/* Replaced navigation list with descriptive phrases */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-md shadow space-y-3">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Our Unwavering Commitment to Quality Service.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Powered by a Dedicated & Professional Team.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Leveraging Years of Industry Experience and Expertise.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A Customer-Centric Approach in Everything We Do.
              </p>
            </div>
            <Card className="overflow-hidden shadow-lg p-0">
              <CardContent className="p-0">
                <img
                  src="https://images.pexels.com/photos/8640331/pexels-photo-8640331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                    <strong>Dhaka Network BD</strong> is a leading Internet
                    Service Provider and IT solution company in Bangladesh. It
                    has obtained ISP license from BTRC. Dhaka Network BD aims to
                    provide fastest Internet connectivity by using the most
                    advance and reliable equipment. Our careful activities will
                    help you make informed decisions and stay ahead of the
                    competition.
                  </p>
                  <p>
                    We have dedicated professional team to install and
                    maintenance. We gained in-depth knowledge for last 12 years.
                    Our full range of services for corporate offices includes
                    website design & development solutions, Antivirus solutions
                    and Networking solutions. We have a full range of Web
                    services that are designed to meet any or all of your needs.
                    We are committed to give you best support.
                  </p>
                  <p>
                    <strong>Dhaka Network BD</strong> has license from
                    Bangladesh Telecommunications Regulatory Commission (BTRC).
                    <strong>Dhaka Network BD</strong> can offer broadband
                    internet and dedicate Bandwidth over optical fiber and
                    utp-cable. Our Main Concern Customer satisfaction as well as
                    our customer service team is ready to serve you for 24/7/365
                    days for solving all of your Internet related problem.
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
