import { Button } from './ui/button';
import { ArrowRight, Upload } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="inline-block px-4 py-2 bg-[#d4af37] text-[#1e3a8a] rounded-full">
              Trusted by 50+ Schools in Hubballi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium School Uniforms in Hubballi
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Quality fabrics, perfect fit, and school-approved designs. Making parents' lives easier since 1995.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#d4af37] hover:bg-[#b8941f] text-[#1e3a8a] text-lg px-8 py-6"
              >
                Shop by School
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-[#1e3a8a] text-lg px-8 py-6"
              >
                <Upload className="mr-2 w-5 h-5" />
                Submit Measurements
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-[#d4af37]/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#d4af37]">
              <ImageWithFallback 
                src={imageUrl} 
                alt="Students in school uniforms"
                className="w-full h-[500px] object-cover"
                query="students school uniform"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d4af37]/10 to-transparent pointer-events-none"></div>
    </section>
  );
}
