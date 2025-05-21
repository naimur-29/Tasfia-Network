import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { packagesData, PackageItemData } from "@/data/packagesData"; // Import data

export function PackagesSection() {
  return (
    <section
      id="packages-section"
      className="py-12 md:py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-slate-800 dark:text-slate-100">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {packagesData.map((pkg: PackageItemData) => (
            <Card
              key={pkg.id}
              className={`${pkg.bgColor} ${pkg.textColor} shadow-xl flex flex-col overflow-hidden rounded-lg border-none`}
            >
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-lg sm:text-xl font-semibold tracking-tight uppercase">
                  {pkg.name}
                </CardTitle>
              </CardHeader>
              <div
                className={`mx-6 border-t ${pkg.borderColor} opacity-60`}
              ></div>
              <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                <p className="text-2xl sm:text-3xl font-bold my-4">
                  {pkg.price}
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm mb-6 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {/* You can add a "Choose Plan" button here if needed */}
                {/* <Button 
                  variant="outline" 
                  className={`mt-auto ${pkg.textColor} ${pkg.borderColor} hover:bg-white/20 focus:ring-white/50`}
                >
                  Choose Plan
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
