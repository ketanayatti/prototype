import { Eye, Heart, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  imageQuery: string;
  fabric: string;
  colors: string[];
  features: string[];
}

interface PremiumShowcaseProps {
  title: string;
  subtitle: string;
  products: Product[];
  bgColor?: string;
}

export function PremiumShowcase({ title, subtitle, products, bgColor = 'bg-gray-50' }: PremiumShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className={`py-20 ${bgColor} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#d4af37] uppercase tracking-wider text-sm font-semibold">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    query={product.imageQuery}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-[#d4af37] text-[#1e3a8a] py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-semibold">View Details</span>
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm hover:bg-[#d4af37] text-[#1e3a8a] p-2 rounded-lg transition-colors duration-300">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#1e3a8a] text-white border-0">
                      {product.category}
                    </Badge>
                  </div>
                  
                  {/* Premium Tag */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#d4af37] text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-bold">
                      PREMIUM
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Color Options */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">Colors:</span>
                    <div className="flex gap-1">
                      {product.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      {product.fabric}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#1e3a8a]">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-base">
                  Premium {selectedProduct.category} Collection
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover"
                    query={selectedProduct.imageQuery}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] mb-2">Description</h4>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] mb-2">Fabric Type</h4>
                    <Badge className="bg-[#d4af37] text-[#1e3a8a]">{selectedProduct.fabric}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] mb-2">Available Colors</h4>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full border-2 border-gray-200 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 italic">
                      This is a display prototype. Contact us for availability and pricing.
                    </p>
                    <Button className="w-full mt-3 bg-[#1e3a8a] hover:bg-[#2563eb]">
                      Contact for Details
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
