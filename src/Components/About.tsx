import { motion } from "framer-motion";
import { Target, Heart, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-transparent pt-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-secondary-light mb-6">
              About Zorrow Tech
            </h2>
            <p className="text-custom mb-8">
              At Zorrow Tech, we're passionate about transforming businesses
              through technology. Our team of experts combines innovation with
              practical solutions to help you stay ahead in the digital age.
              With a focus on quality and customer satisfaction, we deliver
              results that exceed expectations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-secondary-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-secondary-light mb-2">
                    Our Mission
                  </h3>
                  <p className="text-custom">
                    To empower businesses and individuals with cutting-edge
                    technology solutions that drive growth and success.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-secondary-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-secondary-light mb-2">
                    Our Values
                  </h3>
                  <p className="text-custom">
                    Innovation, integrity, and excellence are at the core of
                    everything we do, ensuring the highest quality service for
                    our clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-secondary-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-secondary-light mb-2">
                    Our Vision
                  </h3>
                  <p className="text-custom">
                    To be the leading technology solutions provider, recognized
                    for innovation, quality, and exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
