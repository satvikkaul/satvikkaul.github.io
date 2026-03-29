const siteData = window.siteData;
const fallbackRepoRoot = "https://github.com/satvikkaul?tab=repositories";

const elements = {
  school: document.querySelector("[data-school]"),
  name: document.querySelector("[data-name]"),
  role: document.querySelector("[data-role]"),
  valueProp: document.querySelector("[data-value-prop]"),
  summary: document.querySelector("[data-summary]"),
  resumeLink: document.querySelector("[data-resume-link]"),
  githubLink: document.querySelector("[data-github-link]"),
  factList: document.querySelector("[data-fact-list]"),
  projectGrid: document.querySelector("[data-project-grid]"),
  skillGrid: document.querySelector("[data-skill-grid]"),
  contactCopy: document.querySelector("[data-contact-copy]"),
  contactLinks: document.querySelector("[data-contact-links]"),
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

function caseStudyHref(project) {
  return `pages/case-study.html?project=${encodeURIComponent(project.slug)}`;
}

function renderStatusBadge(project) {
  if (!project.statusLabel) {
    return "";
  }

  return `<span class="status-badge">${project.statusLabel}</span>`;
}

function buildHomepageLinks(project) {
  const links = [
    `<a class="primary-link" href="${caseStudyHref(project)}">Case Study</a>`,
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

function projectCardMarkup(project) {
  return `
    <article class="project-card reveal">
      <a class="project-card-overlay" href="${caseStudyHref(project)}" aria-label="Open case study for ${project.caseStudyTitle}"></a>
      <div class="project-title-row">
        <div class="project-copy">
          <div class="project-heading-row">
            <h3>${project.cardTitle}</h3>
            ${renderStatusBadge(project)}
          </div>
          <p class="project-problem">${project.cardDescription}</p>
          <p class="project-stack">${project.stack}</p>
          <p class="project-status">${project.statusLine}</p>
        </div>
      </div>
      <div class="project-links">${buildHomepageLinks(project)}</div>
    </article>
  `;
}

function renderProjects(projects) {
  elements.projectGrid.innerHTML = projects.map(projectCardMarkup).join("");
  observeReveal();
}

function renderStaticContent() {
  elements.school.textContent = siteData.profile.school;
  elements.name.textContent = siteData.profile.name;
  elements.role.textContent = siteData.profile.roleTarget;
  elements.valueProp.textContent = siteData.profile.valueProp;
  elements.summary.textContent = siteData.profile.summary;
  elements.resumeLink.href = siteData.profile.resumeUrl;
  elements.githubLink.href = siteData.profile.githubUrl;
  elements.contactCopy.textContent = siteData.profile.contactCopy;

  siteData.quickFacts.forEach((item) => {
    const article = document.createElement("article");
    article.className = "fact-item";
    article.innerHTML = `<strong>${item.title}</strong><span>${item.body}</span>`;
    elements.factList.appendChild(article);
  });

  siteData.skillGroups.forEach((group) => {
    const article = document.createElement("article");
    article.className = "skill-card reveal";
    article.innerHTML = `
      <h3>${group.title}</h3>
      <div class="skill-tags">
        ${group.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
    elements.skillGrid.appendChild(article);
  });

  siteData.contactLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "contact-link";
    anchor.href = link.href;
    anchor.textContent = link.label;
    if (link.href.startsWith("http")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    elements.contactLinks.appendChild(anchor);
  });
}

async function loadGitHubProjects() {
  try {
    const repoResponse = await fetch(
      `https://api.github.com/users/${siteData.profile.githubUsername}/repos?per_page=100&sort=updated`,
    );

    if (!repoResponse.ok) {
      throw new Error("GitHub API request failed");
    }

    const repositories = await repoResponse.json();
    const repositoryMap = new Map(repositories.map((repo) => [repo.name, repo]));

    const featuredProjects = siteData.featuredRepositories.map((project) => {
      const repo = repositoryMap.get(project.name);

      return {
        ...project,
        repoUrl: repo?.html_url || fallbackRepoRoot,
      };
    });

    renderProjects(featuredProjects);
  } catch (error) {
    renderProjects(
      siteData.featuredRepositories.map((project) => ({
        ...project,
        repoUrl: fallbackRepoRoot,
      })),
    );
  }
}

renderStaticContent();
observeReveal();
loadGitHubProjects();
