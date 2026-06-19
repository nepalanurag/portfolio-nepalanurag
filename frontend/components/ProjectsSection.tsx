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
      title: "Can an LLM Replace Human Annotators?",
      description:
        "I had Gemini classify 248 biomedical abstracts and scored it like a real reliability study: 96.0% accuracy (95% CI 92.7 to 97.8), Cohen's kappa 0.946, well-calibrated confidence, at $0.21 per 1,000 annotations. The honest verdict: reliable for coarse triage, not for final labels.",
      techStack: [
        "Python",
        "Gemini API",
        "scikit-learn",
        "Statistics",
        "Plotly",
      ],
      githubLink: "https://github.com/nepalanurag/llm-annotator-reliability",
      liveLink: "https://anurag-ai-lab.vercel.app/llm-annotator-reliability",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
    {
      title: "RAG Evaluation Lab",
      description:
        "I ran RAG evaluation like a real experiment: a 2x2x2 factorial design (chunk size x top-k x query rewriting) over a PubMed corpus with 40 test questions, analyzed with ANOVA and effect sizes. The honest result was a null: no factor reached significance, retrieval sat near ceiling in all conditions, and query rewriting slightly hurt recall.",
      techStack: [
        "Python",
        "Gemini API",
        "TF-IDF",
        "Experimental Design",
        "ANOVA",
      ],
      githubLink: "https://github.com/nepalanurag/rag-eval-lab",
      liveLink: "https://anurag-ai-lab.vercel.app/rag-eval-lab",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
    {
      title: "Synthetic Data Tradeoffs",
      description:
        "I compared a from-scratch Gaussian copula against LLM row synthesis on the breast cancer dataset across fidelity, utility, and privacy. The copula nearly matched training on real data (random forest AUC 0.982 vs 0.985) while the LLM rows lost more signal; membership-inference attacks stayed near chance for both.",
      techStack: [
        "Python",
        "scikit-learn",
        "Gemini API",
        "Privacy",
        "Plotly",
      ],
      githubLink: "https://github.com/nepalanurag/synthetic-data-tradeoffs",
      liveLink: "https://anurag-ai-lab.vercel.app/synthetic-data-tradeoffs",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },
    {
      title: "Double Machine Learning for a Causal Effect",
      description:
        "Estimating the causal effect of 401(k) eligibility on household wealth with naive OLS, OLS with controls, propensity-score matching, and double machine learning with cross-fitting, each with honest 95% confidence intervals. DML landed closest to the true $8,000 effect; naive OLS overestimated it nearly eightfold.",
      techStack: [
        "Python",
        "scikit-learn",
        "Causal Inference",
        "Econometrics",
      ],
      githubLink: "https://github.com/nepalanurag/causal-double-ml",
      liveLink: "https://anurag-ai-lab.vercel.app/causal-double-ml",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
    },

    {
      title: "Integrative Feature Selection for Multi-Modal Data via Permutation-Assisted Group Lasso",
      description:
        "Thesis project focusing on feature selection for immune-related sequence analysis using Permutation Assisted Group Lasso.",
      techStack: [
        "R",
        "Bioinformatics",
        "Feature Selection",
        "Statistical Analysis",
      ],
      githubLink: "",
      liveLink: "",
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
        {/* Show 'Ongoing Research' button for T-cell Receptor Analysis, else show normal buttons */}
        {project.title === "Integrative Feature Selection for Multi-Modal Data via Permutation-Assisted Group Lasso" ? (
          <div className="flex gap-3 mt-auto">
            <Button
              disabled
              className="flex-1 bg-yellow-500 text-white cursor-not-allowed opacity-80"
            >
              Preparing a paper for publication
            </Button>
          </div>
        ) : (
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
        )}
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
