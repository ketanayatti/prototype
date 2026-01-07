import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SchoolFinder } from './components/SchoolFinder';
import { ProductCategories } from './components/ProductCategories';
import { MeasurementFeature } from './components/MeasurementFeature';
import { TrustSignals } from './components/TrustSignals';
import { PremiumShowcase } from './components/PremiumShowcase';
import { InteractiveStats } from './components/InteractiveStats';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  const schoolUniformCategories = [
    {
      id: '1',
      title: 'Boys Uniforms',
      description: 'Complete uniform sets for boys - shirts, pants, ties & more',
      imageUrl: 'https://images.unsplash.com/photo-1623670783885-5ff6505a7186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3klMjBzY2hvb2wlMjB1bmlmb3JtfGVufDF8fHx8MTc2Nzc5MDc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'boy school uniform',
      color: 'bg-blue-600'
    },
    {
      id: '2',
      title: 'Girls Uniforms',
      description: 'Comfortable and elegant uniforms for girls - tunics, skirts & more',
      imageUrl: 'https://images.unsplash.com/photo-1575454723382-16899c8ae4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwc2Nob29sJTIwdW5pZm9ybXxlbnwxfHx8fDE3Njc3OTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'girl school uniform',
      color: 'bg-pink-600'
    },
    {
      id: '3',
      title: 'Sports Uniforms',
      description: 'Athletic wear for all school sports and physical education',
      imageUrl: 'https://images.unsplash.com/photo-1590261202105-ee950ab6e54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMHVuaWZvcm18ZW58MXx8fHwxNzY3NzkwNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'school children uniform',
      color: 'bg-green-600'
    },
    {
      id: '4',
      title: 'Accessories',
      description: 'Belts, socks, ties, shoes & all uniform accessories',
      imageUrl: 'https://images.unsplash.com/photo-1609943180864-aad30e57ce60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY3NzkwNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'textile fabric clothing',
      color: 'bg-gray-700'
    }
  ];

  const menCollection = [
    {
      id: 'm1',
      name: 'Premium Suiting Collection',
      category: 'Men',
      description: 'Finest quality suiting fabrics for formal wear and business attire',
      imageUrl: 'https://images.unsplash.com/photo-1767000295378-3aa6dece5a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWVuJTIwZm9ybWFsJTIwd2VhcnxlbnwxfHx8fDE3Njc3OTEyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'premium men formal wear',
      fabric: 'Wool Blend',
      colors: ['#1e3a8a', '#374151', '#6b7280'],
      features: ['Premium wool blend', 'Wrinkle-resistant', 'Perfect for formal occasions', 'Custom tailoring available']
    },
    {
      id: 'm2',
      name: 'Classic Shirting Fabric',
      category: 'Men',
      description: 'Premium cotton and linen shirting materials for everyday elegance',
      imageUrl: 'https://images.unsplash.com/photo-1620511450270-47162b983078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBmYWJyaWMlMjBzdWl0aW5nfGVufDF8fHx8MTc2Nzc5MDc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'formal fabric suiting',
      fabric: 'Premium Cotton',
      colors: ['#ffffff', '#93c5fd', '#fbbf24'],
      features: ['100% cotton', 'Breathable fabric', 'Easy to maintain', 'Variety of patterns']
    },
    {
      id: 'm3',
      name: 'Executive Collection',
      category: 'Men',
      description: 'Luxurious fabrics designed for the modern executive',
      imageUrl: 'https://images.unsplash.com/photo-1718184021018-d2158af6b321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3Njc3MTg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'premium textile fabric',
      fabric: 'Italian Wool',
      colors: ['#1e293b', '#475569', '#64748b'],
      features: ['Imported Italian fabric', 'Superior drape', 'Long-lasting quality', 'Professional finish']
    },
    {
      id: 'm4',
      name: 'Casual Linen Range',
      category: 'Men',
      description: 'Lightweight linen fabrics perfect for casual and semi-formal wear',
      imageUrl: 'https://images.unsplash.com/photo-1744502671648-7cd2358a193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzaWxrfGVufDF8fHx8MTc2Nzc5MTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'luxury fabric silk',
      fabric: 'Pure Linen',
      colors: ['#fef3c7', '#e0e7ff', '#f3f4f6'],
      features: ['Pure linen', 'Breathable and comfortable', 'Perfect for Indian climate', 'Natural texture']
    }
  ];

  const womenCollection = [
    {
      id: 'w1',
      name: 'Ethnic Fabric Collection',
      category: 'Women',
      description: 'Beautiful ethnic fabrics for traditional Indian wear',
      imageUrl: 'https://images.unsplash.com/photo-1766043071333-5d82991da1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGV0aG5pYyUyMHdlYXIlMjBpbmRpYXxlbnwxfHx8fDE3Njc3OTEyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'women ethnic wear india',
      fabric: 'Silk Blend',
      colors: ['#dc2626', '#d4af37', '#059669'],
      features: ['Premium silk blend', 'Vibrant colors', 'Perfect for sarees and salwars', 'Traditional weave']
    },
    {
      id: 'w2',
      name: 'Designer Suiting',
      category: 'Women',
      description: 'Contemporary suiting fabrics for modern professional women',
      imageUrl: 'https://images.unsplash.com/photo-1718184021018-d2158af6b321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3Njc3MTg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'premium textile fabric',
      fabric: 'Poly-Viscose',
      colors: ['#1e3a8a', '#831843', '#374151'],
      features: ['Wrinkle-free', 'Professional finish', 'Easy care', 'Contemporary designs']
    },
    {
      id: 'w3',
      name: 'Cotton Collection',
      category: 'Women',
      description: 'Soft cotton fabrics for everyday comfort and style',
      imageUrl: 'https://images.unsplash.com/photo-1620511450270-47162b983078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBmYWJyaWMlMjBzdWl0aW5nfGVufDF8fHx8MTc2Nzc5MDc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'formal fabric suiting',
      fabric: '100% Cotton',
      colors: ['#fbbf24', '#a78bfa', '#34d399'],
      features: ['Pure cotton', 'Breathable', 'Skin-friendly', 'Various prints available']
    },
    {
      id: 'w4',
      name: 'Luxury Silk Range',
      category: 'Women',
      description: 'Exquisite silk fabrics for special occasions',
      imageUrl: 'https://images.unsplash.com/photo-1744502671648-7cd2358a193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzaWxrfGVufDF8fHx8MTc2Nzc5MTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'luxury fabric silk',
      fabric: 'Pure Silk',
      colors: ['#be185d', '#d97706', '#0891b2'],
      features: ['Pure silk', 'Luxurious feel', 'Rich colors', 'Special occasion wear']
    }
  ];

  const kidsCollection = [
    {
      id: 'k1',
      name: 'Kids Casual Wear',
      category: 'Kids',
      description: 'Comfortable and durable fabrics for children\'s everyday clothing',
      imageUrl: 'https://images.unsplash.com/photo-1732272984617-6aa76052a40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZmFzaGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc2Nzc4NDU3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'kids fashion children',
      fabric: 'Cotton Blend',
      colors: ['#ef4444', '#3b82f6', '#fbbf24'],
      features: ['Soft on skin', 'Durable', 'Easy to wash', 'Vibrant colors']
    },
    {
      id: 'k2',
      name: 'School Uniform Fabric',
      category: 'Kids',
      description: 'High-quality uniform fabrics that last the entire school year',
      imageUrl: 'https://images.unsplash.com/photo-1590261202105-ee950ab6e54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMHVuaWZvcm18ZW58MXx8fHwxNzY3NzkwNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'school children uniform',
      fabric: 'Poly-Cotton',
      colors: ['#1e3a8a', '#ffffff', '#6b7280'],
      features: ['School approved', 'Stain resistant', 'Long-lasting', 'Comfortable fit']
    },
    {
      id: 'k3',
      name: 'Party Wear Collection',
      category: 'Kids',
      description: 'Elegant fabrics for kids\' special occasions and celebrations',
      imageUrl: 'https://images.unsplash.com/photo-1744502671648-7cd2358a193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzaWxrfGVufDF8fHx8MTc2Nzc5MTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'luxury fabric silk',
      fabric: 'Silk Cotton',
      colors: ['#be123c', '#d97706', '#0284c7'],
      features: ['Festive designs', 'Comfortable', 'Premium quality', 'Special occasions']
    },
    {
      id: 'k4',
      name: 'Sports & Active Wear',
      category: 'Kids',
      description: 'Performance fabrics for active kids and sports activities',
      imageUrl: 'https://images.unsplash.com/photo-1623670783885-5ff6505a7186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3klMjBzY2hvb2wlMjB1bmlmb3JtfGVufDF8fHx8MTc2Nzc5MDc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'boy school uniform',
      fabric: 'Athletic Fabric',
      colors: ['#059669', '#1e40af', '#dc2626'],
      features: ['Moisture-wicking', 'Stretchable', 'Durable', 'Quick-dry']
    }
  ];

  const fabricCollection = [
    {
      id: 'f1',
      name: 'Premium Wool Suiting',
      category: 'Fabric',
      description: 'Imported wool fabrics for luxury suits and formal wear',
      imageUrl: 'https://images.unsplash.com/photo-1767000295378-3aa6dece5a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWVuJTIwZm9ybWFsJTIwd2VhcnxlbnwxfHx8fDE3Njc3OTEyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'premium men formal wear',
      fabric: 'Pure Wool',
      colors: ['#0f172a', '#475569', '#94a3b8'],
      features: ['Imported quality', 'Luxurious feel', 'Perfect drape', 'Year-round comfort']
    },
    {
      id: 'f2',
      name: 'Silk Blend Collection',
      category: 'Fabric',
      description: 'Versatile silk blends for traditional and modern designs',
      imageUrl: 'https://images.unsplash.com/photo-1744502671648-7cd2358a193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzaWxrfGVufDF8fHx8MTc2Nzc5MTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'luxury fabric silk',
      fabric: 'Silk Blend',
      colors: ['#be185d', '#d4af37', '#059669'],
      features: ['Lustrous finish', 'Versatile usage', 'Rich texture', 'Special occasions']
    },
    {
      id: 'f3',
      name: 'Cotton Shirting',
      category: 'Fabric',
      description: 'Premium cotton fabrics perfect for formal and casual shirts',
      imageUrl: 'https://images.unsplash.com/photo-1620511450270-47162b983078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBmYWJyaWMlMjBzdWl0aW5nfGVufDF8fHx8MTc2Nzc5MDc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'formal fabric suiting',
      fabric: '100% Cotton',
      colors: ['#ffffff', '#dbeafe', '#fef3c7'],
      features: ['Pure cotton', 'Breathable', 'Wrinkle-resistant', 'Multiple patterns']
    },
    {
      id: 'f4',
      name: 'Linen Premium Range',
      category: 'Fabric',
      description: 'Natural linen fabrics for elegant and comfortable clothing',
      imageUrl: 'https://images.unsplash.com/photo-1718184021018-d2158af6b321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3Njc3MTg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageQuery: 'premium textile fabric',
      fabric: 'Pure Linen',
      colors: ['#f5f5f4', '#e7e5e4', '#d6d3d1'],
      features: ['Natural fiber', 'Cool and comfortable', 'Sustainable', 'Premium quality']
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero imageUrl="https://images.unsplash.com/photo-1692269726060-9c604e06f63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNjaG9vbCUyMHVuaWZvcm0lMjBpbmRpYXxlbnwxfHx8fDE3Njc3OTA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
        <TrustSignals />
        <SchoolFinder />
        <ProductCategories categories={schoolUniformCategories} />
        <MeasurementFeature />
        <InteractiveStats />
        
        {/* Men's Collection */}
        <PremiumShowcase 
          title="Men's Collection"
          subtitle="Premium fabrics and suitings crafted for the modern gentleman"
          products={menCollection}
          bgColor="bg-white"
        />
        
        {/* Women's Collection */}
        <PremiumShowcase 
          title="Women's Collection"
          subtitle="Elegant fabrics for every occasion - from traditional to contemporary"
          products={womenCollection}
          bgColor="bg-gray-50"
        />
        
        {/* Kids Collection */}
        <PremiumShowcase 
          title="Kids Collection"
          subtitle="Comfortable and durable fabrics designed especially for children"
          products={kidsCollection}
          bgColor="bg-white"
        />
        
        {/* Premium Fabric Collection */}
        <PremiumShowcase 
          title="Premium Fabric Collection"
          subtitle="Handpicked fabrics from around the world for discerning customers"
          products={fabricCollection}
          bgColor="bg-gray-50"
        />
        
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
