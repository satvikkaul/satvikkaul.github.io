window.siteData = {
  profile: {
    name: "Satvik Kaul",
    school: "MSC COMPUTER SCIENCE",
    roleTarget: "TARGETING AI/ML AND FULL-STACK SOFTWARE ROLES",
    valueProp:
      "MSc Computer Science student building AI/ML and full-stack systems that solve real problems.",
    summary:
      "I work across applied machine learning, backend systems, and user-facing products. Recent projects include histopathology grading, resume analysis tools, and recommendation-focused applications.",
    githubUsername: "satvikkaul",
    githubUrl: "https://github.com/satvikkaul",
    resumeUrl: "pages/resume.html",
    contactCopy:
      "Open to ML, software engineering, and research conversations. Email is the best way to reach me, and you can also connect on LinkedIn or GitHub.",
  },
  quickFacts: [
    {
      title: "Focus",
      body: "AI/ML systems, medical imaging, and product-oriented software builds.",
    },
    {
      title: "Core stack",
      body: "Python, PyTorch, FastAPI, React, JavaScript, and applied ML workflows.",
    },
    {
      title: "Project themes",
      body: "Histopathology grading, resume intelligence, recommendation systems, and practical developer tools.",
    },
    {
      title: "Open to",
      body: "ML, SWE, and research-oriented co-op opportunities with strong technical depth.",
    },
  ],
  about: [
    "I'm interested in building intelligent systems that move from experimentation into practical use. Most of my work sits at the intersection of applied machine learning, software engineering, and product development.",
    "The projects below include research-heavy medical imaging work, applied NLP, and full-stack systems with live interfaces. The goal of this portfolio is to show both technical depth and the ability to turn ideas into usable software.",
  ],
  skillGroups: [
    {
      title: "Core Stack",
      items: ["Python", "JavaScript", "Git", "APIs", "Data workflows"],
    },
    {
      title: "Machine Learning",
      items: [
        "PyTorch",
        "Self-supervised learning",
        "Computer vision",
        "Recommendation systems",
        "Model evaluation",
      ],
    },
    {
      title: "Application Development",
      items: ["FastAPI", "React", "Vite", "Frontend development", "Backend systems"],
    },
    {
      title: "Applied Areas",
      items: ["Medical imaging", "Resume analysis", "Nutrition AI", "Full-stack apps"],
    },
  ],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:satvik.kaul@torontomu.ca",
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
      name: "Smart-Resume-Analyzer",
      slug: "smart-resume-analyzer",
      cardTitle: "Smart Resume Analyzer",
      caseStudyTitle: "Smart Resume Analyzer",
      cardDescription:
        "Scores resumes against job descriptions and suggests practical rewrites for stronger applications.",
      stack: "Python / FastAPI / Vite / Rule-based NLP / Resume scoring",
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
      slug: "nutrisnap-ai-nutrition-assistant",
      cardTitle: "NutriSnap AI Nutrition Assistant",
      caseStudyTitle: "NutriSnap AI Nutrition Assistant",
      cardDescription:
        "Explores food recognition and recommendation-driven nutrition tracking through a lightweight product prototype.",
      stack: "PyTorch / FastAPI / React / EfficientNet / Recommender System",
      statusLine:
        "Prototype in progress combining meal recognition with personalized nutrition recommendations.",
      statusLabel: "Prototype",
      summary:
        "Explores food recognition and personalized recommendation ideas for lightweight nutrition tracking.",
      overview:
        "NutriSnap is a product-oriented prototype direction that combines meal recognition ideas with personalized recommendation logic for lightweight nutrition support.",
      problem:
        "Most calorie-tracking apps are either too manual or overloaded with features, so the goal here is to explore a simpler workflow driven by image input and personalized suggestions.",
      built: [
        "A project direction combining food image recognition with recommendation-driven outputs.",
        "A system design centered on lightweight meal analysis rather than full-scale nutrition logging.",
        "A product concept that connects computer vision with more personalized food guidance.",
      ],
      results:
        "This project is still in prototype stage. The current focus is validating the workflow, selecting the right model components, and defining a simple user experience that is practical enough to build and test.",
      demoUrl: "",
      extraLinks: [],
      visualType: "flow",
      visualSteps: [
        "Meal photo",
        "Recognition model",
        "Nutrition estimate",
        "Recommendation output",
      ],
    },
    {
      name: "Masked_auto_encoder",
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
  ],
};
