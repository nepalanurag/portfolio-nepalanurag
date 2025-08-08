import { BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-inter">
            Academic Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-work-sans">
            Academic experience and background in data science and research
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experience Card */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 w-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">
                    Graduate Research Assistant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-work-sans">
                    San Francisco State University
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Feb 2025 – Present
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 font-work-sans">
                <li>
                  • Conducted research on T-cell receptor (TCR) gene data,
                  focusing on feature selection and classification methods for
                  immune-related sequence analysis
                </li>
                <li>
                  • Reviewed and synthesized findings from academic literature
                  on Random Forests, Boruta, and variable importance testing
                </li>
                <li>
                  • Implemented algorithms from peer-reviewed papers, ensuring
                  precision and reliability in results
                </li>
                <li>
                  • Translated statistical methodologies from research papers
                  into functional R code for reproducibility and application to
                  biological datasets
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "R Programming",
                  "Bioinformatics",
                  "Feature Selection",
                  "Research Writing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Academic Journey Card */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 w-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">
                    Academic Journey
                  </h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const steps = [
                  {
                    title: "Master's in Statistical Data Science",
                    subtitle: "San Francisco State University (2024-2026)",
                    details:
                      "GPA: 4.0/4.0 | General Officer at Data Science Society",
                  },
                  {
                    title: "Bachelor's in Computer Science & Engineering",
                    subtitle:
                      "Nitte Meenakshi Institute of Technology, Bengaluru",
                    details: "GPA: 9.34/10.0 | Ranked among Top 5 Graduates",
                  },
                  {
                    title: "High School Diploma",
                    subtitle: "Prasadi Academy",
                    details:
                      "Percentage: 85.5/100.0 | Ranked among Top 10 Graduates",
                  },
                  {
                    title: "Secondary School",
                    subtitle: "Saraswati Siksha Griha Higher Secondary School",
                    details: "Percentage: 90/100.0 | Top Ranking in District",
                  },
                ];
                return (
                  <div className="relative flex flex-col items-start pl-8">
                    {/* Timeline with dots and steps (no vertical line) */}
                    {steps.map((step, idx) => (
                      <div
                        key={step.title}
                        className={`flex items-start relative z-10${
                          idx !== steps.length - 1 ? " mb-10" : ""
                        }`}
                      >
                        {/* Dot */}
                        <div
                          className="relative flex-shrink-0"
                          style={{ width: "1.5rem" }}
                        >
                          <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 mt-2 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-800 shadow"></div>
                        </div>
                        {/* Step content */}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg font-inter">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 font-work-sans">
                            {step.subtitle}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
