import { BookOpen, Award, Clock, Users } from "lucide-react";

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
    <section className="pt-32 pb-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Our Courses
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Enhance your skills with our industry-focused courses and
          government-certified programs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <course.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
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
