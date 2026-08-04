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
  const groups = [
    {
      name: "AI & Statistics",
      projects: [
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
          liveLink: "https://anurag-nepal-portfolio.vercel.app/ai-lab/llm-annotator-reliability",
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
          liveLink: "https://anurag-nepal-portfolio.vercel.app/ai-lab/rag-eval-lab",
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
          liveLink: "https://anurag-nepal-portfolio.vercel.app/ai-lab/synthetic-data-tradeoffs",
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
          liveLink: "https://anurag-nepal-portfolio.vercel.app/ai-lab/causal-double-ml",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      name: "Medical Diagnostics",
      projects: [
        {
          title: "Malaria Cell Classifier",
          description:
            "I compared two CNNs on the NIH malaria cell-image set and kept the better one: 93.2% accuracy (95% CI 92.9 to 93.5), AUC 0.958. The demo runs the model in your browser with test-time augmentation, so every prediction comes with a confidence interval.",
          techStack: [
            "Python",
            "TensorFlow",
            "ONNX",
            "Statistics",
            "Bootstrap CI",
          ],
          githubLink: "https://github.com/nepalanurag/malaria-cnn-web",
          liveLink: "https://malaria-cnn-web.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
        {
          title: "COVID CT Infection Map",
          description:
            "I rebuilt this CT project as an interpretable segmentation pipeline and fixed a real bug: the original divided by the wrong denominator and reported infection over 100%. The demo shows per-slice infection maps with Wilson 95% intervals on a real COVID-positive scan.",
          techStack: [
            "Python",
            "pydicom",
            "NumPy",
            "Image Segmentation",
            "Wilson CI",
          ],
          githubLink: "https://github.com/nepalanurag/covid-ct-web",
          liveLink: "https://covid-ct-web.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
        {
          title: "ECG Arrhythmia Classifier",
          description:
            "I evaluated an ECG arrhythmia network honestly: 98.8% accuracy on the shipped split, but 87.0% under grouped cross-validation by patient record, which shows how patient leakage inflates results. The demo classifies a heartbeat in your browser with temperature-scaled confidence.",
          techStack: [
            "Python",
            "TensorFlow",
            "ONNX",
            "Time-Series CV",
            "Calibration",
          ],
          githubLink: "https://github.com/nepalanurag/ecg-classification-web",
          liveLink: "https://ecg-classification-web.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      name: "Research",
      projects: [
        {
          title: "Thesis Results: Multi-Modal Feature Selection",
          description:
            "My thesis work on permutation-assisted group lasso for multi-modal feature selection, with the TCGA-BRCA stability study: the adopted method reached Jaccard 0.680 and AUC 0.948, beating standard group lasso on stability. The site walks through the methods and results with interactive plots. Manuscript in preparation.",
          techStack: [
            "R",
            "Plotly",
            "TCGA",
            "Feature Selection",
            "Stability Analysis",
          ],
          githubLink: "https://github.com/nepalanurag/thesis-findings",
          liveLink: "https://anurag-thesis.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
      ],
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

        {groups.map((group) => (
          <div key={group.name} className="mb-16 last:mb-0">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-inter">
              {group.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {group.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
