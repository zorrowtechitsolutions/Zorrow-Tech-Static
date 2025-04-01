import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Innovative Tech Solutions for the Future
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Empowering businesses with cutting-edge technology solutions and
              expert IT services. Your success is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              alt="Tech Innovation"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
