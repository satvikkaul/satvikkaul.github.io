window.siteData = {
  profile: {
    name: "Satvik Kaul",
    school: "MACHINE LEARNING & AI ENGINEER",
    roleTarget: "PRODUCTION GENERATIVE AI - SELF-SUPERVISED LEARNING RESEARCH",
    headline: ["Nothing ships", "unmeasured."],
    headlineAccent: 1,
    specLine: "Python · PyTorch · LangGraph · FastAPI · MLflow · AWS",
    valueProp:
      "I build production Generative AI systems, and research the models underneath them.",
    summary:
      "Production Generative AI at Ampere Digital. Self-supervised learning for prostate cancer grading at TMU's Advanced AI Lab, where our results beat the supervised baseline by 15 points.",
    githubUsername: "satvikkaul",
    githubUrl: "https://github.com/satvikkaul",
    resumeUrl: "pages/resume.html",
    contactCopy:
      "Open to full-time ML and AI engineering roles. Email is the best way to reach me, and you can also connect on LinkedIn or GitHub.",
  },
  // The bridge. `level` is the needle position 0-1; 0.62 is 0 VU, which is the
  // baseline a metric was measured against. Only metrics with a published
  // baseline comparison are allowed past zero into the red.
  bridge: [
    {
      ch: "01",
      name: "Gleason acc",
      value: "62.8%",
      level: 0.92,
      hot: true,
      note: "vs 47.6% supervised baseline",
    },
    {
      ch: "02",
      name: "Cohen's kappa",
      value: "0.500",
      level: 0.86,
      hot: true,
      note: "vs 0.341 baseline",
    },
    {
      ch: "03",
      name: "IDP first-pass",
      value: "88%",
      level: 0.72,
      hot: false,
      note: "250+ aviation documents",
    },
    {
      ch: "04",
      name: "Agent latency",
      value: "−40%",
      level: 0.66,
      hot: false,
      note: "1,200+ interactions / month",
    },
    {
      ch: "05",
      name: "NDCG@10",
      value: "+23.7%",
      level: 0.61,
      hot: false,
      note: "vs matrix factorization",
    },
    {
      ch: "06",
      name: "Auto-decided",
      value: "60%",
      level: 0.58,
      hot: false,
      note: "at 0.97 precision threshold",
    },
  ],
  experience: [
    {
      when: "Nov 2024 - Present",
      role: "Machine Learning and AI Engineer",
      org: "Ampere Digital",
      bullets: [
        "Production intelligent document processing on Claude multimodal extraction and Cloudflare Queues: 88% first-pass structured-field accuracy across 250+ aviation documents, review time cut from ~7 minutes to under 60 seconds.",
        "Multi-model AI-agent workflows on RAG, LangChain, and LangGraph, cutting agent-turn latency ~40% across 1,200+ guided interactions per month.",
        "Decision-support classifier over ~3,000 labeled decisions, evaluated through MLflow and thresholded at 0.97 precision to automate ~60% of extracted-field decisions.",
      ],
    },
    {
      when: "Sep 2025 - Present",
      role: "Research Assistant, Advanced AI Lab (AI²)",
      org: "Toronto Metropolitan University",
      bullets: [
        "Self-supervised learning for four-class Gleason grading on SICAPv2: CAE reaches 62.8% accuracy and 0.500 Cohen's kappa against a 47.6% / 0.341 supervised baseline. Shortlisted for a conference, manuscript in preparation.",
        "Secure end-to-end FastAPI and React application for pathology upload, analysis-job submission, and reporting, with per-user data isolation.",
      ],
    },
    {
      when: "Jan 2024 - Oct 2024",
      role: "IT Analyst",
      org: "Ministry of the Attorney General",
      bullets: [
        "Led a three-person Agile team building a Power Apps workflow-automation solution: process efficiency up 25%, helpdesk escalations down 30%.",
      ],
    },
  ],
  specs: [
    { key: "MSc Computer Science", value: "Toronto Metropolitan University, 2026" },
    { key: "Graduate GPA", value: "4.28 / 4.33" },
    { key: "BSc Information Technology", value: "Centennial College, 2023" },
    { key: "Undergraduate GPA", value: "3.8 / 4.0" },
    { key: "Research", value: "Conference shortlist, manuscript in preparation" },
    { key: "Location", value: "Toronto, ON, Canada" },
  ],
  // Per-project readout, keyed by slug. Only real, published numbers belong here;
  // a project without them gets an honest note instead of an invented figure.
  readouts: {
    "secure-pathology-dashboard": [
      { key: "Cloud configs evaluated", value: "15" },
      { key: "Compliance target", value: "HIPAA / PHIPA" },
    ],
    "smart-resume-analyzer": [
      { key: "Status", value: "Deployed" },
      { key: "Surfaces", value: "API + UI" },
    ],
    "ssl-prostate-cancer-grading": [
      { key: "CAE accuracy", value: "62.8%", hot: true },
      { key: "Cohen's κ", value: "0.500", hot: true },
      { key: "Baseline", value: "47.6% / 0.341" },
    ],
    "recipe-recommender-system": [
      { key: "NDCG@10", value: "0.035" },
      { key: "HR@10", value: "0.267" },
      { key: "Latency", value: "<300ms" },
    ],
    "mae-for-gleason-grading": [],
    "java-url-shortener": [],
  },
  quickFacts: [
    {
      title: "Currently",
      body: "ML and AI Engineer at Ampere Digital, and Research Assistant at TMU's Advanced AI Lab (AI²).",
    },
    {
      title: "Core stack",
      body: "Python, PyTorch, LangGraph, FastAPI, MLflow, AWS, and Cloudflare Workers.",
    },
    {
      title: "Focus",
      body: "Production Generative AI, intelligent document processing, and self-supervised learning for medical imaging.",
    },
    {
      title: "Open to",
      body: "Full-time ML and AI engineering roles.",
    },
  ],
  about: [
    "I build AI systems that have to work in production, and I research the methods that make them better. At Ampere Digital that means multimodal document extraction, RAG and agent workflows, and the evaluation and monitoring infrastructure that tells you when they are failing.",
    "The research side runs in parallel at TMU's Advanced AI Lab, where I work on self-supervised learning for four-class Gleason grading. That work is shortlisted for a conference with a manuscript in preparation, and it is the reason I care about evaluation as much as architecture: a model that reports a good number for the wrong reason is worse than no model.",
    "The projects below span both halves. Some are deployed and measured, some are research in progress, and the difference is stated on each one.",
  ],
  skillGroups: [
    {
      title: "Programming",
      items: ["Python", "SQL", "Java", "TypeScript", "JavaScript", "C/C++"],
    },
    {
      title: "Generative AI & Agents",
      items: [
        "LangChain",
        "LangGraph",
        "RAG",
        "AI agents",
        "Anthropic Claude API",
        "OpenAI API",
      ],
    },
    {
      title: "Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "Self-supervised learning",
        "Computer vision",
        "Model evaluation",
        "Recommender systems",
      ],
    },
    {
      title: "ML Engineering & MLOps",
      items: ["MLflow", "Airflow", "Docker", "GitHub Actions", "OpenTelemetry", "Sentry"],
    },
    {
      title: "Cloud & Services",
      items: [
        "AWS",
        "Microsoft Azure",
        "Cloudflare Workers",
        "Cloudflare Queues",
        "FastAPI",
        "REST APIs",
      ],
    },
    {
      title: "Applied Areas",
      items: [
        "Intelligent document processing",
        "Medical imaging",
        "Multimodal extraction",
        "Recommender systems",
        "Full-stack apps",
      ],
    },
  ],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:satvikkaul123@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/satvik-kaul/",
    },
    {
      label: "GitHub",
      href: "https://github.com/satvikkaul",
    },
    {
      label: "Resume",
      href: "pages/resume.html",
    },
  ],
  featuredRepositories: [
    {
      name: "secure-pathology-dashboard",
      slug: "secure-pathology-dashboard",
      cardTitle: "Secure Pathology Dashboard",
      caseStudyTitle: "Secure Pathology Dashboard",
      cardDescription:
        "An end-to-end pathology analysis application with per-user data isolation, built at TMU's Advanced AI Lab for a HIPAA/PHIPA-aligned deployment.",
      stack: "FastAPI / React / AWS / HIPAA-PHIPA alignment",
      statusLine:
        "Built at the Advanced AI Lab (AI²) as the delivery surface for the lab's pathology models.",
      statusLabel: "Research lab build",
      summary:
        "A secure end-to-end application for pathology image upload, algorithm selection, analysis-job submission, and report generation.",
      overview:
        "A secure application built with FastAPI and React that takes a pathology image from upload through algorithm selection, analysis-job submission, and report generation, with per-user isolation of uploaded data and results throughout.",
      problem:
        "Research models are not useful to a pathologist sitting inside a notebook. The lab needed a delivery surface that clinicians could actually use, that kept every user's images and results separated, and that could absorb new algorithms without being rebuilt each time.",
      built: [
        "An end-to-end FastAPI and React application covering upload, algorithm selection, job submission, and report generation.",
        "Per-user isolation of uploaded data and analysis results.",
        "A modular architecture for adding new AI/ML algorithms and workflows without redesigning the core application.",
        "A cloud evaluation across AWS, Azure, and Google Cloud spanning 15 infrastructure configurations.",
      ],
      results:
        "The cloud evaluation recommended AWS on cost, regional availability, and compliance maturity for a HIPAA/PHIPA-aligned deployment. The modular architecture is what lets the lab's self-supervised grading work reach an actual user instead of stopping at a notebook.",
      demoUrl: "",
      extraLinks: [],
      visualType: "flow",
      visualSteps: [
        "Pathology image",
        "Algorithm selection",
        "Analysis job",
        "Isolated report",
      ],
    },
    {
      name: "smart-resume-analyzer",
      slug: "smart-resume-analyzer",
      cardTitle: "Smart Resume Analyzer",
      caseStudyTitle: "Smart Resume Analyzer",
      cardDescription:
        "Scores resumes against job descriptions and suggests practical rewrites for stronger applications.",
      stack: "Python / FastAPI / Vite / Rule-based NLP / Resume scoring",
      statusLabel: "Deployed",
      statusLine:
        "Includes a deployed frontend, backend API, and practical resume scoring workflow.",
      summary:
        "Scores resumes against job descriptions and suggests practical rewrites for stronger applications.",
      overview:
        "Smart Resume Analyzer is a full-stack application that evaluates resume-job alignment, scores fit, and surfaces actionable improvements through a FastAPI backend and a separate frontend UI.",
      problem:
        "Most resume tools are either too generic or too opaque, so the goal was to build a workflow that gives users practical, understandable feedback instead of vague scoring.",
      built: [
        "A FastAPI backend for parsing resumes and job descriptions.",
        "A frontend flow for uploading files, scoring fit, and reviewing suggestions.",
        "A rule-based scoring pipeline that checks alignment, tone, and rewrite opportunities.",
      ],
      results:
        "The project includes a deployed frontend, backend API, and documentation workflow. It is designed as a practical product-style build rather than just a model demo.",
      demoUrl: "https://job-fit-analyzer.netlify.app/",
      extraLinks: [
        {
          label: "API Docs",
          href: "https://smart-resume-analyzer-2nwb.onrender.com/docs",
        },
      ],
      visualType: "mock-ui",
    },
    {
      name: "SSL_Prostate_Cancer_Grading",
      slug: "ssl-prostate-cancer-grading",
      cardTitle: "Self-Supervised Learning for Gleason Grading",
      caseStudyTitle: "Self-Supervised Learning for Gleason Grading",
      cardDescription:
        "Explores self-supervised learning approaches for patch-level Gleason grading, including autoencoder SSL, SimCLR, and MoCo v2.",
      stack:
        "Python / TensorFlow-Keras / Autoencoder SSL / SimCLR / MoCo v2 / Medical Imaging",
      statusLine:
        "Ongoing research comparing multiple SSL pipelines for Gleason grading under limited labeled data.",
      statusLabel: "Research in progress",
      summary:
        "Explores self-supervised learning pipelines for patch-level Gleason grading using autoencoder SSL, SimCLR, and MoCo v2.",
      overview:
        "This project compares baseline supervised training against three self-supervised learning strategies—autoencoder pretraining, SimCLR, and MoCo v2—to study how SSL improves patch-level Gleason grading when labeled medical data is limited.",
      problem:
        "Histopathology grading is data-intensive and class imbalance makes minority classes hard to learn, so the project explores whether SSL can improve feature learning before downstream classification.",
      built: [
        "Training pipelines for baseline supervised learning, autoencoder SSL, SimCLR, and MoCo v2.",
        "Evaluation scripts and saved outputs for direct model-to-model comparison.",
        "A medical imaging workflow built around SICAPv2 patches and Gleason grading labels.",
      ],
      results:
        "This is an ongoing research direction focused on comparing multiple SSL strategies for Gleason grading. The current goal is to understand how different representation learning methods affect downstream grading quality, especially under limited labeled data and class imbalance.",
      demoUrl: "",
      extraLinks: [],
      visualType: "flow",
      visualSteps: [
        "Patch input",
        "Baseline / Autoencoder SSL / SimCLR / MoCo v2",
        "Classifier",
        "Evaluation",
      ],
    },
    {
      name: "Recipe-Recommender-System",
      slug: "recipe-recommender-system",
      cardTitle: "Recipe Recommender System",
      caseStudyTitle: "Recipe Recommender System",
      cardDescription:
        "Pairs an EfficientNet-B2 food classifier with a two-tower GRU recommender over 1.1M Food.com interactions, served under 300 ms end to end.",
      stack: "PyTorch / EfficientNet-B2 / Two-Tower GRU / FastAPI / TypeScript",
      statusLine:
        "NDCG@10 0.035 (3.6x popularity, +23.7% vs. matrix factorization), HR@10 0.267, MRR 0.108, coverage 34.2%.",
      summary:
        "A multi-modal recommendation pipeline combining food image classification with sequence-aware collaborative filtering.",
      overview:
        "A multi-modal pipeline that pairs an EfficientNet-B2 food classifier with a two-tower recommender using GRU sequence modeling over ingredient and nutrition features, trained on 1.1M Food.com interactions. Context-aware image anchors and calorie-budget re-ranking sit on top, served through FastAPI and TypeScript with end-to-end latency under 300 ms.",
      problem:
        "Most calorie-tracking apps are either too manual or overloaded with features. The goal was a workflow driven by image input and genuinely personalized suggestions, ranked against a real calorie budget rather than a generic popularity list.",
      built: [
        "An EfficientNet-B2 food classifier reaching Top-1 50-65% and Top-5 85-90%.",
        "A two-tower recommender with GRU sequence modeling over ingredient and nutrition features, trained on 1.1M Food.com interactions.",
        "Context-aware image anchors and calorie-budget re-ranking layered over the base recommender.",
        "A FastAPI and TypeScript serving path holding end-to-end latency under 300 ms.",
      ],
      results:
        "NDCG@10 reaches 0.035, 3.6x the popularity baseline and 23.7% above matrix factorization, with HR@10 0.267, MRR 0.108, and 34.2% catalogue coverage. The image classifier reaches Top-1 50-65% and Top-5 85-90%.",
      demoUrl: "",
      extraLinks: [],
      visualType: "flow",
      visualSteps: [
        "Meal photo",
        "EfficientNet-B2",
        "Two-tower GRU",
        "Calorie re-ranking",
      ],
    },
    {
      name: "Masked_Auto_Encoder",
      slug: "mae-for-gleason-grading",
      cardTitle: "Masked Autoencoder for Gleason Grading",
      caseStudyTitle: "Masked Auto Encoder for Gleason Grading",
      cardDescription:
        "Explores masked autoencoder pretraining and ViT fine-tuning for patch-level Gleason grading under class imbalance.",
      stack: "Python / PyTorch / Vision Transformer / MAE / Medical Imaging",
      statusLine:
        "Studies whether masked autoencoder pretraining improves representation quality and downstream Gleason grading.",
      summary:
        "Explores masked autoencoder pretraining and ViT fine-tuning for patch-level Gleason grading under class imbalance.",
      overview:
        "This project studies whether MAE pretraining improves prostate histopathology grading, especially for minority classes such as G5, before fine-tuning a ViT classifier on SICAPv2 patches.",
      problem:
        "Minority-class performance remains difficult in medical imaging, so the project focuses on whether representation learning through MAE can improve downstream grading quality under imbalance.",
      built: [
        "An experimental direction based on MAE pretraining followed by supervised ViT fine-tuning.",
        "A comparison setup for imbalance strategies such as sampler- and loss-based handling.",
        "An evaluation plan centered on metrics such as QWK, Macro-F1, and confusion-matrix analysis.",
      ],
      results:
        "The project studies whether masked autoencoder pretraining improves feature quality and downstream Gleason grading performance before deeper validation.",
      demoUrl: "",
      extraLinks: [],
      visualType: "flow",
      visualSteps: [
        "Masked patches",
        "Encoder",
        "Representation",
        "Fine-tuned classifier",
      ],
    },
    {
      name: "URL-Shortner",
      slug: "java-url-shortener",
      cardTitle: "Java URL Shortener",
      caseStudyTitle: "Java URL Shortener",
      cardDescription:
        "A Java REST service for short links, built around Base62-encoded keys with validation, rate limiting, and asynchronous redirect auditing.",
      stack: "Java / REST APIs / Base62 encoding / Rate limiting",
      statusLine:
        "A backend service study focused on correctness and observability rather than scale.",
      summary:
        "A URL shortening service in Java with Base62-encoded keys, strict validation, and asynchronous redirect auditing.",
      overview:
        "A URL shortening service built in Java, exposing REST endpoints to create short links and manage user redirects using unique Base62-encoded cryptographic keys.",
      problem:
        "A short-link service is trivial to build badly. The interesting problems are the ones around the edges: rejecting malformed or hostile URLs, staying responsive under repeated hits, and being able to explain after the fact what a redirect actually did.",
      built: [
        "REST endpoints for creating short links and managing user redirects.",
        "Base62-encoded cryptographic key generation for unique short codes.",
        "Strict URL validation covering format, length, and an allowlist.",
        "Lightweight rate limiting, request logging, and asynchronous redirect auditing.",
      ],
      results:
        "The service handles the full create-and-redirect path with validation and auditing in place. It is a backend study rather than a deployed product, built to keep the request path responsive while remaining debuggable after the fact.",
      demoUrl: "",
      extraLinks: [],
      visualType: "flow",
      visualSteps: [
        "Long URL",
        "Validation",
        "Base62 key",
        "Audited redirect",
      ],
    },
  ],
};
