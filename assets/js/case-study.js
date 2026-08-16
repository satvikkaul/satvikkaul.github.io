/* Case study page. The flow diagram is the only visual: a chain of chassis-dark
   steps in the world's own grammar, one per stage the project actually has. */

const data = window.siteData;

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

const slug = new URLSearchParams(window.location.search).get("project");
const project = data.featuredRepositories.find((p) => p.slug === slug);

const set = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
};

if (!project) {
  set("[data-title]", "Project not found");
  set(
    "[data-summary]",
    'That case study does not exist. <a href="../index.html#work" style="border-bottom:1px solid currentColor">Browse all work</a>.',
  );
} else {
  document.title = `${project.caseStudyTitle} | Satvik Kaul`;
  set("[data-title]", esc(project.caseStudyTitle));
  set("[data-summary]", esc(project.summary));
  set("[data-stack]", esc(project.stack));

  const links = [
    `<a class="btn btn-solid" href="${data.profile.githubUrl}/${encodeURIComponent(project.name)}" target="_blank" rel="noreferrer">Source</a>`,
  ];
  if (project.demoUrl) {
    links.push(
      `<a class="btn btn-ghost" href="${esc(project.demoUrl)}" target="_blank" rel="noreferrer">Demo</a>`,
    );
  }
  (project.extraLinks || []).forEach((link) => {
    links.push(
      `<a class="btn btn-ghost" href="${esc(link.href)}" target="_blank" rel="noreferrer">${esc(link.label)}</a>`,
    );
  });
  set("[data-links]", links.join(""));

  const steps = project.visualSteps || [];
  if (steps.length) {
    const chain = steps
      .map(
        (step, i) =>
          `<div class="case-step">${esc(step)}</div>` +
          (i < steps.length - 1 ? `<span class="case-arrow" aria-hidden="true">&rarr;</span>` : ""),
      )
      .join("");
    set("[data-visual]", `<div class="case-flow">${chain}</div>`);
  }

  const readouts = (data.readouts && data.readouts[project.slug]) || [];
  if (readouts.length) {
    const rows = readouts
      .map(
        (row) => `
        <div class="readout-row">
          <span class="readout-key">${esc(row.key)}</span>
          <span class="readout-val${row.hot ? " is-hot" : ""}">${esc(row.value)}</span>
        </div>`,
      )
      .join("");
    set(
      "[data-readout]",
      `<div class="channel-readout" style="max-width:28rem">${rows}</div>`,
    );
  }

  const blocks = [
    { title: "Overview", body: `<p>${esc(project.overview)}</p>` },
    { title: "The problem", body: `<p>${esc(project.problem)}</p>` },
    {
      title: "What I built",
      body: `<ul>${project.built.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`,
    },
    { title: "Results", body: `<p>${esc(project.results)}</p>` },
  ];

  set(
    "[data-body]",
    blocks
      .map((block) => `<section class="case-block"><h3>${block.title}</h3>${block.body}</section>`)
      .join(""),
  );
}

/* Same back-to-top rule as the homepage. */
const topBtn = document.querySelector(".to-top");
if (topBtn) {
  const toggleTop = () =>
    topBtn.classList.toggle("is-shown", window.scrollY > window.innerHeight * 0.9);
  toggleTop();
  window.addEventListener("scroll", toggleTop, { passive: true });
}
