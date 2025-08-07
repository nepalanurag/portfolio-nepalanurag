import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_URL } from "../config";

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const handleResumeDownload = () => {
    window.open(RESUME_URL, "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-20">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight font-inter">
            Turning Raw Data into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Real Impact
            </span>{" "}
            — One Dataset at a Time
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-work-sans">
            Hi, I'm Anurag Nepal — Data Science Grad Student | Analytics-Driven
            Problem Solver | ML Enthusiast
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-12 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
