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
        {
          title: "Honest Confidence Sets for LLM Answers",
          description:
            "I had a small open language model answer 416 MMLU questions and wrapped its outputs in split conformal prediction sets with a mathematical coverage guarantee. On 208 held-out questions the sets covered the truth 96.2% of the time at 90% nominal, with a mean set size under 3 of 4 options. The model's raw probabilities, thresholded naively, covered only 50.5%.",
          techStack: [
            "Python",
            "Conformal Prediction",
            "LLM",
            "Statistics",
            "MMLU",
          ],
          githubLink: "https://github.com/nepalanurag/conformal-llm",
          liveLink: "https://conformal-llm.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
        {
          title: "Stroke Prediction",
          description:
            "I compared eight models on 5,110 patient records across four preprocessing scenarios, then asked what the bake-off missed: the plain logistic regression won on both AUC (0.842) and calibration, the default 0.5 threshold catches almost no strokes (recall 0.02) while 0.125 gives the best trade-off, and age dominates the predictions.",
          techStack: [
            "R",
            "Python",
            "scikit-learn",
            "Calibration",
            "Imbalanced Data",
          ],
          githubLink: "https://github.com/nepalanurag/stroke-prediction",
          liveLink: "https://nepalanurag.github.io/stroke-prediction/",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
        {
          title: "Premier League Match Prediction",
          description:
            "I engineered rolling form, venue splits, and travel fatigue features from three seasons (1,130 matches) and compared logistic, Poisson, XGBoost, and LightGBM models. A follow-up stress test showed the signal holds across seasons and beats always-home 0.51 to 0.43, but the travel fatigue features add noise: dropping them helps.",
          techStack: [
            "Python",
            "XGBoost",
            "LightGBM",
            "Feature Engineering",
            "Poisson Regression",
          ],
          githubLink:
            "https://github.com/nepalanurag/premier-league-match-prediction",
          liveLink:
            "https://nepalanurag.github.io/premier-league-match-prediction/",
          image:
            "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D?w=600&h=400&fit=crop",
        },
        {
          title: "Lasso Simulation Study",
          description:
            "I ran a lasso variable-selection simulation over sample sizes, dimensions, signal strengths, and correlations with 100 replications per setting, comparing min-lambda and 1se tuning. A real-data follow-up on the diabetes set confirmed the pattern: the 1se rule keeps exactly the predictors both rules select in over 94% of bootstraps.",
          techStack: ["R", "Python", "Lasso", "Simulation", "Bootstrap"],
          githubLink: "https://github.com/nepalanurag/lasso-simulation-study",
          liveLink: "https://nepalanurag.github.io/lasso-simulation-study/",
          image:
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D?w=600&h=400&fit=crop",
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
          githubLink:
            "https://github.com/nepalanurag/Detection-of-Malaria-Using-CNN",
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
          githubLink:
            "https://github.com/nepalanurag/Biomedical-Imaging-Analysis",
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
          githubLink: "https://github.com/nepalanurag/ECG-Classification",
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

  const moreProjects = [
    {
      title: "NBA Schedule Analysis",
      description:
        "NBA game and schedule data analyzed with R and the tidyverse. The source CSVs are proprietary, so the repo ships the analysis without them.",
      githubLink: "https://github.com/nepalanurag/nba-schedule-analysis",
      liveLink: "https://nepalanurag.github.io/nba-schedule-analysis/",
      liveLabel: "Results",
    },
    {
      title: "Housing Price Model",
      description:
        "A pipeline bake-off for house price modeling, comparing imputation strategies head to head.",
      githubLink: "https://github.com/nepalanurag/housing-price-model",
      liveLink: "https://nepalanurag.github.io/housing-price-model/",
      liveLabel: "Results",
    },
    {
      title: "Influenza Deaths Forecast",
      description:
        "Time series forecasting of influenza and pneumonia deaths.",
      githubLink: "https://github.com/nepalanurag/influenza-deaths-forecast",
      liveLink: "https://nepalanurag.github.io/influenza-deaths-forecast/",
      liveLabel: "Results",
    },
    {
      title: "Kalshi BTC 15m Bot",
      description:
        "A trading bot for Kalshi BTC 15-minute markets: RSI signals with a volatility-based strike picker. Paper trading only, no real orders.",
      githubLink: "https://github.com/nepalanurag/kalshi-btc15m-bot",
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
          <div
            key={group.name}
            id={`projects-${group.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="mb-16 last:mb-0 scroll-mt-24"
          >
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

        <div id="projects-more-projects" className="scroll-mt-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
            More projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-work-sans">
            More data work: studies, essays, and side analyses. Each one links to
            the code and, where there is one, a results page or live demo.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {moreProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 flex flex-col"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white font-inter">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-4 flex-1 font-work-sans">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-600"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.liveLink && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.liveLabel}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
