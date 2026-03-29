const siteData = window.siteData;
const fallbackRepoRoot = "https://github.com/satvikkaul?tab=repositories";

const elements = {
  title: document.querySelector("[data-case-title]"),
  badge: document.querySelector("[data-case-badge]"),
  summary: document.querySelector("[data-case-summary]"),
  stack: document.querySelector("[data-case-stack]"),
  visual: document.querySelector("[data-case-visual]"),
  detail: document.querySelector("[data-case-detail]"),
};

function observeReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function renderVisual(project) {
  if (project.visualType === "mock-ui") {
    return `
      <div class="visual-card visual-ui">
        <div class="visual-window-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="visual-ui-grid">
          <div class="visual-score">
            <p>Match score</p>
            <strong>87</strong>
          </div>
          <div class="visual-panel">
            <p>Top suggestions</p>
            <ul>
              <li>Add stronger role-specific keywords</li>
              <li>Tighten action verbs in experience bullets</li>
              <li>Improve alignment with required skills</li>
            </ul>
          </div>
          <div class="visual-panel">
            <p>Tone check</p>
            <span>Clear, direct, and role-aligned</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="visual-card visual-flow">
      <div class="flow-steps">
        ${project.visualSteps
          .map(
            (step, index) => `
              <div class="flow-step">
                <span>${step}</span>
              </div>
              ${index < project.visualSteps.length - 1 ? '<div class="flow-arrow">></div>' : ""}
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function buildLinks(project) {
  const links = [
    `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>`,
  ];

  if (project.demoUrl) {
    links.push(`<a href="${project.demoUrl}" target="_blank" rel="noreferrer">Demo</a>`);
  }

  project.extraLinks.forEach((link) => {
    links.push(`<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`);
  });

  return links.join("");
}

function renderCaseStudy(project) {
  elements.title.textContent = project.caseStudyTitle;
  elements.summary.textContent = project.summary;
  elements.stack.textContent = project.stack;

  if (project.statusLabel) {
    elements.badge.hidden = false;
    elements.badge.textContent = project.statusLabel;
  } else {
    elements.badge.hidden = true;
  }

  elements.visual.innerHTML = renderVisual(project);

  elements.detail.innerHTML = `
    <div class="case-study-copy">
      <div class="case-study-block">
        <h4>Overview</h4>
        <p>${project.overview}</p>
      </div>
      <div class="case-study-block">
        <h4>Problem</h4>
        <p>${project.problem}</p>
      </div>
      <div class="case-study-block">
        <h4>What I built</h4>
        <ul class="detail-highlights">
          ${project.built.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="case-study-block">
        <h4>Results / Current status</h4>
        <p>${project.results}</p>
      </div>
      <div class="project-links">${buildLinks(project)}</div>
    </div>
  `;

  document.title = `${project.caseStudyTitle} | Satvik Kaul`;
}

async function initCaseStudy() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = siteData.featuredRepositories.find((item) => item.slug === slug);

  if (!project) {
    elements.title.textContent = "Case study not found";
    elements.summary.textContent = "Return to the portfolio to choose a project.";
    elements.stack.textContent = "";
    elements.detail.innerHTML = `
      <div class="project-links">
        <a href="../index.html">Back to portfolio</a>
      </div>
    `;
    observeReveal();
    return;
  }

  try {
    const repoResponse = await fetch(
      `https://api.github.com/users/${siteData.profile.githubUsername}/repos?per_page=100&sort=updated`,
    );

    if (!repoResponse.ok) {
      throw new Error("GitHub API request failed");
    }

    const repositories = await repoResponse.json();
    const repositoryMap = new Map(repositories.map((repo) => [repo.name, repo]));
    renderCaseStudy({
      ...project,
      repoUrl: repositoryMap.get(project.name)?.html_url || fallbackRepoRoot,
    });
  } catch (error) {
    renderCaseStudy({
      ...project,
      repoUrl: fallbackRepoRoot,
    });
  }

  observeReveal();
}

initCaseStudy();
