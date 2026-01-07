import { Award, ShieldCheck, RefreshCw, Truck, Clock, Star } from 'lucide-react';

export function TrustSignals() {
  const signals = [
    {
      icon: Award,
      title: "Quality Fabric",
      description: "100% certified materials that last longer"
    },
    {
      icon: ShieldCheck,
      title: "School Approved",
      description: "Official partner with 50+ schools"
    },
    {
      icon: RefreshCw,
      title: "Easy Exchanges",
      description: "Hassle-free returns within 15 days"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery in Hubballi"
    },
    {
      icon: Clock,
      title: "28 Years Experience",
      description: "Serving families since 1995"
    },
    {
      icon: Star,
      title: "5 Star Reviews",
      description: "Rated excellent by 2000+ parents"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Why Parents Trust Us
          </h2>
          <p className="text-gray-600 text-lg">
            Your child's comfort and quality is our priority
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-[#1e3a8a] hover:text-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#d4af37] group-hover:bg-white rounded-full flex items-center justify-center mb-4 transition-colors">
                <signal.icon className="w-8 h-8 text-[#1e3a8a]" />
              </div>
              <h3 className="font-bold mb-2 text-[#1e3a8a] group-hover:text-white">
                {signal.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-blue-100">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
