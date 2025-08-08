import { GraduationCap, Code, Award, BookOpen } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Visualization",
    "Statistical Analysis",
    "Deep Learning",
    "R Programming",
    "Data Mining",
  ];

  const certifications = [
    {
      name: "Data Analyst (Datacamp)",
      url: "https://www.datacamp.com/certificate/DA0027370792817",
    },
    {
      name: "Intermediate SQL (Datacamp)",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/67af4ba2247647e6dce98a3beb3a55e1488333cb?raw=1",
    },
    {
      name: "Python (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/certificate/TVP32M8CMFYJ",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/me.png"
                alt="Anurag Nepal"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-60"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-inter leading-tight">
                About Me
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-work-sans">
                <p>
                  I'm a passionate data scientist currently pursuing my Master's
                  in Statistical Data Science at San Francisco State University.
                  My expertise lies in transforming complex datasets into
                  actionable insights using machine learning, statistical
                  analysis, and data visualization.
                </p>

                <p>
                  With a strong foundation in Python, SQL, and machine learning
                  algorithms, I specialize in building predictive models and
                  creating data-driven solutions for real-world problems. My
                  research focuses on biomedical applications, particularly in
                  T-cell receptor analysis and medical imaging.
                </p>

                <p>
                  When I'm not analyzing data, you can find me at the movies,
                  diving into a good book, or experimenting in the kitchen.
                </p>
              </div>
            </div>

            {/* Education & Research */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Current Education
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    M.S. Statistical Data Science
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    San Francisco State University
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    GPA: 4.0/4.0
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Current Research Focus
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    T-cell Receptor Analysis
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Feature Selection & Classification
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-200"
                  >
                    {cert.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
