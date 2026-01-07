import { Sparkles, Upload, CheckCircle2, Ruler } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function MeasurementFeature() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Details",
      description: "Share your child's height, weight, and age"
    },
    {
      icon: Sparkles,
      title: "AI Analysis",
      description: "Our AI recommends the perfect size"
    },
    {
      icon: CheckCircle2,
      title: "Get Perfect Fit",
      description: "Order with confidence - easy exchanges"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d4af37] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">NEW FEATURE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Size Recommender
            </h2>
            
            <p className="text-lg text-blue-100 mb-8">
              No more guesswork! Our advanced AI technology analyzes your child's measurements and recommends the perfect uniform size. Say goodbye to returns and hello to perfect fits every time.
            </p>
            
            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#d4af37] hover:bg-[#b8941f] text-[#1e3a8a] text-lg px-8 py-6"
            >
              Try Size Recommender
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Right Card */}
          <div>
            <Card className="bg-white/10 backdrop-blur-lg border-2 border-[#d4af37] p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <Ruler className="w-12 h-12 text-[#1e3a8a]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4">
                Get the Perfect Fit
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Accuracy Rate</span>
                    <span className="text-[#d4af37] font-bold">98.5%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-[#d4af37] h-2 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Happy Parents</span>
                    <span className="text-[#d4af37] font-bold">5,000+</span>
                  </div>
                  <div className="text-sm text-blue-100">
                    Trusted by families across Hubballi
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-blue-200">
                💡 Pro Tip: Take measurements in the morning for best accuracy
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
