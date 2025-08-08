import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "T-cell Receptor Analysis(Ongoing)",
      description:
        "Research project focusing on feature selection and classification methods for immune-related sequence analysis using Random Forests and Boruta algorithms.",
      techStack: [
        "R",
        "Bioinformatics",
        "Feature Selection",
        "Statistical Analysis",
      ],

      image:
        "https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
    {
      title: "Biomedical Imaging Analysis",
      description:
        "Developed an image diagnostic system for Covid-19 detection in chest CT scans using state-of-the-art machine learning algorithms with optimized parameters for enhanced efficiency.",
      techStack: [
        "Python",
        "ITK",
        "OpenCV",
        "Image Processing",
        "Machine Learning",
      ],
      githubLink:
        "https://github.com/nepalanurag/Biomedical-Imaging-Analysis/blob/main/FINAL_PRESENTATION.ipynb",
      liveLink:
        "https://biomedical-imaging-analysis-bqz3vxbwdygrrdzfzyugqb.streamlit.app/",
      image:
        "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
    {
      title: "Malaria Detection using CNN",
      description:
        "Developed a convolutional neural network for malaria detection achieving high accuracy in identifying infected blood cells. Co-authored and published research paper on groundbreaking medical diagnostic approaches.",
      techStack: ["Python", "Keras", "TensorFlow", "OpenCV", "Android"],
      githubLink:
        "https://github.com/nepalanurag/Detection-of-Malaria-Using-CNN",
      liveLink:
        "https://detection-of-malaria-using-cnn-7dawpqv9c6wowk4oeappeub.streamlit.app/",
      image:
        "https://images.unsplash.com/photo-1706643568612-9b13870c8d21?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
    {
      title: "ECG Classification System",
      description:
        "Implemented machine learning models to predict myocardial infractions based on ECG data using advanced algorithms and real-time data analysis capabilities.",
      techStack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
        "Signal Processing",
      ],
      githubLink: "https://github.com/nepalanurag/ECG-Classification",
      liveLink:
        "https://nepalanurag-ecg-classification-ecg-app-ewisvk.streamlit.app/",
      image:
        "https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="group hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden h-full">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight font-inter">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed font-work-sans">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          <Button
            variant="outline"
            className="flex-1 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-all duration-300 border-gray-300 dark:border-gray-600"
            onClick={() => window.open(project.githubLink, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
            onClick={() => window.open(project.liveLink, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-inter">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-work-sans">
            A collection of data science and machine learning projects that
            showcase my skills in analytics, modeling, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
