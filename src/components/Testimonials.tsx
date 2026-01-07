import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent, DPS Hubballi',
      image: '👩‍💼',
      rating: 5,
      text: 'The AI Size Recommender is a game-changer! Got the perfect fit for my son on the first try. The quality of uniforms is exceptional.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent, Kendriya Vidyalaya',
      image: '👨‍💼',
      rating: 5,
      text: 'Been buying from Shree Mahaveer for 3 years now. The fabric quality and durability is unmatched. Great customer service too!',
    },
    {
      name: 'Anita Desai',
      role: 'Parent, Cambridge School',
      image: '👩',
      rating: 5,
      text: "Love the convenience of shopping by school. Found everything we needed in one place. The premium fabric collection is impressive!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] uppercase tracking-wider text-sm font-semibold">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mt-3 mb-4">
            What Parents Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families who trust us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 transition-all duration-300 h-full ${
                hoveredIndex === index ? 'border-[#d4af37] shadow-2xl' : 'border-gray-200 shadow-lg'
              }`}>
                {/* Quote Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                  hoveredIndex === index ? 'bg-[#d4af37]' : 'bg-[#1e3a8a]'
                }`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-[#1e3a8a]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
