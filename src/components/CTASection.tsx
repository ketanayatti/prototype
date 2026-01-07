import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Visit our store in Hubballi or get in touch with our team for personalized assistance with your uniform needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-[#1e3a8a] text-lg px-8 py-6 group"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] text-lg px-8 py-6 backdrop-blur-sm group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#d4af37] mb-2">Same Day</div>
                <div className="text-sm text-blue-100">Delivery in Hubballi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#d4af37] mb-2">15 Days</div>
                <div className="text-sm text-blue-100">Easy Exchange Policy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#d4af37] mb-2">24/7</div>
                <div className="text-sm text-blue-100">Customer Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
