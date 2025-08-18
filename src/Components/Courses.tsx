import { BookOpen, Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Learn modern web development with React, Node.js, and more.",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    icon: BookOpen,
  },
  {
    title: "Government Certification Program",
    description:
      "Official certification course in partnership with Kerala Government.",
    duration: "6 weeks",
    level: "Intermediate",
    icon: Award,
  },
  {
    title: "Mobile App Development",
    description: "Build iOS and Android apps using React Native.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: Clock,
  },
  {
    title: "Data Science Fundamentals",
    description:
      "Introduction to data analysis, visualization, and machine learning.",
    duration: "8 weeks",
    level: "Beginner",
    icon: Users,
  },
];

const Courses = () => {
  return (
    <section className="pt-1 bg-transparent section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-light mb-4">
            Our Courses
          </h2>
          <p className="text-custom max-w-2xl mx-auto">
            Enhance your skills with our industry-focused courses and
            government-certified programs.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-primary-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-8 md:mb-0 md:w-[48%] lg:w-[48%]"
            >
              <div className="flex items-center mb-6">
                <course.icon className="w-12 h-12 text-secondary-light" />
                <h3 className="text-xl font-bold text-secondary-light ms-4">
                  {course.title}
                </h3>
              </div>
              <p className="text-secondary-light mb-2">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-custom">
                <span>Duration: {course.duration}</span>
                <span>Level: {course.level}</span>
              </div>
              <button className="btn btn-primary w-full mt-4">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
