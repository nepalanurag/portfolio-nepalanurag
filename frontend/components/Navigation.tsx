import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

const projectGroups = [
  { name: "All Projects", id: "projects" },
  { name: "AI & Statistics", id: "projects-ai-statistics" },
  { name: "Medical Diagnostics", id: "projects-medical-diagnostics" },
  { name: "Research", id: "projects-research" },
];

export default function Navigation({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: NavigationProps) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const goTo = (id: string) => {
    scrollToSection(id);
    setProjectsOpen(false);
    setMobileProjectsOpen(false);
  };

  const linkClass = (isActive: boolean) =>
    `capitalize transition-colors duration-200 font-medium ${
      isActive
        ? "text-blue-600 dark:text-blue-400 font-semibold"
        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-bold text-xl text-gray-900 dark:text-white font-inter">
            Anurag Nepal
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => goTo("hero")}
              className={linkClass(activeSection === "hero")}
            >
              Home
            </button>

            {/* Projects dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button
                onClick={() => goTo("projects")}
                className={`${linkClass(
                  activeSection === "projects"
                )} flex items-center gap-1`}
              >
                Projects
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    projectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {projectsOpen && (
                <div className="absolute left-0 top-full pt-2 w-60">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                    {projectGroups.map((group) => (
                      <button
                        key={group.id}
                        onClick={() => goTo(group.id)}
                        className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-medium"
                      >
                        {group.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {["experience", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => goTo(section)}
                className={linkClass(activeSection === section)}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => goTo("hero")}
              className="block w-full text-left px-3 py-2 capitalize text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md font-medium"
            >
              Home
            </button>

            {/* Projects with expandable groups */}
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="flex w-full items-center justify-between px-3 py-2 capitalize text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md font-medium"
            >
              Projects
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobileProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-4 space-y-1">
                {projectGroups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => goTo(group.id)}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md font-medium"
                  >
                    {group.name}
                  </button>
                ))}
              </div>
            )}

            {["about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => goTo(section)}
                className="block w-full text-left px-3 py-2 capitalize text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md font-medium"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
