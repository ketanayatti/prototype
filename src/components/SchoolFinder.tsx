import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const schools = [
  { name: "Delhi Public School", initials: "DPS" },
  { name: "Kendriya Vidyalaya", initials: "KV" },
  { name: "St. Anne's School", initials: "SAS" },
  { name: "SDM School", initials: "SDM" },
  { name: "BVB School", initials: "BVB" },
  { name: "Vidyaniketan School", initials: "VNS" },
  { name: "Cambridge School", initials: "CS" },
  { name: "Mount Carmel", initials: "MC" },
];

export function SchoolFinder() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Find Your School's Uniform
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Search for your school to view approved uniform lists and place orders instantly
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Type your school name..." 
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-300 focus:border-[#1e3a8a]"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] hover:bg-[#2563eb]">
              Search
            </Button>
          </div>
        </div>
        
        {/* School Logos Grid */}
        <div className="mb-8">
          <h3 className="text-center text-gray-700 mb-6">Popular Schools in Hubballi:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {schools.map((school) => (
              <button
                key={school.name}
                className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1e3a8a] group-hover:bg-[#d4af37] rounded-full flex items-center justify-center mb-2 transition-colors">
                  <span className="text-white group-hover:text-[#1e3a8a] font-bold text-lg">
                    {school.initials}
                  </span>
                </div>
                <span className="text-xs text-gray-600 text-center">{school.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500">
          Can't find your school? <a href="#" className="text-[#1e3a8a] hover:underline">Contact us</a> to add it.
        </p>
      </div>
    </section>
  );
}
