import { motion } from "framer-motion";
import {
  Globe,
  Code,
  BookOpen,
  GraduationCap,
  Video,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web solutions built with modern technologies and best practices for optimal performance and user experience.",
  },
  {
    icon: Code,
    title: "Application Development",
    description:
      "Robust and scalable applications tailored to your business needs, from mobile apps to enterprise software.",
  },
  {
    icon: BookOpen,
    title: "Project Support",
    description:
      "Comprehensive support for college students with their academic projects, providing guidance and technical expertise.",
  },
  {
    icon: GraduationCap,
    title: "Government Certification",
    description:
      "Official certification courses in partnership with the Kerala Government, enhancing your career prospects.",
  },
  {
    icon: Video,
    title: "Tech Education",
    description:
      "Structured learning programs covering modern technologies and industry-relevant skills for students.",
  },
  {
    icon: Users,
    title: "Training Programs",
    description:
      "Intensive training sessions designed to build practical skills and prepare you for real-world challenges.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-transparent pt-1">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-light mb-4">
            Our Services
          </h2>
          <p className="text-custom max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your needs. From
            web development to educational programs, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-12 h-12 text-secondary-light mb-0 me-4" />
                <h3 className="text-xl font-bold text-secondary-light mb-0">
                  {service.title}
                </h3>
              </div>
              <p className="text-custom">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
