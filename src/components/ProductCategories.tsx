import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageQuery: string;
  color: string;
}

interface ProductCategoriesProps {
  categories: ProductCategory[];
}

export function ProductCategories({ categories }: ProductCategoriesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our complete collection of school uniforms and fabrics
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-[#d4af37] overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  query={category.imageQuery}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 ${category.color} text-white px-3 py-1 rounded-full text-sm`}>
                  New
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-[#1e3a8a] hover:text-[#d4af37] p-0 h-auto group/btn"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
