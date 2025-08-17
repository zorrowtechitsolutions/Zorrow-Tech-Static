import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-secondary-light mb-6">
              INNOVATIVE TECH SOLUTIONS FOR FUTURE
            </h1>
            <p className="text-lg text-custom mb-8">
              Empowering businesses with cutting-edge technology solutions and
              expert IT services. Your success is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary bg-primary-light text-secondary-light flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Tech Innovation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
