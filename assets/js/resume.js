/* Resume page: skills and project list come from site-data so they never drift
   from the homepage. Everything else on this page is authored in the markup. */

const data = window.siteData;

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

const panel = document.querySelector("[data-panel]");
if (panel) {
  panel.innerHTML = data.skillGroups
    .map(
      (group) => `
      <div class="panel-cell">
        <h3>${esc(group.title)}</h3>
        <div class="panel-jacks">${group.items
          .map((item) => `<span class="jack">${esc(item)}</span>`)
          .join("")}</div>
      </div>`,
    )
    .join("");
}

const list = document.querySelector("[data-project-list]");
if (list) {
  list.innerHTML = data.featuredRepositories
    .map(
      (project, index) => `
      <article class="channel">
        <div class="channel-no">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <div class="channel-title"><h3>${esc(project.cardTitle)}</h3></div>
          <p class="channel-desc">${esc(project.cardDescription)}</p>
          <p class="channel-stack">${esc(project.stack)}</p>
          <div class="channel-links">
            <a href="case-study.html?project=${encodeURIComponent(project.slug)}">Case study</a>
            <a href="${data.profile.githubUrl}/${encodeURIComponent(project.name)}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </article>`,
    )
    .join("");
}

/* Same back-to-top rule as the homepage. */
const topBtn = document.querySelector(".to-top");
if (topBtn) {
  const toggleTop = () =>
    topBtn.classList.toggle("is-shown", window.scrollY > window.innerHeight * 0.9);
  toggleTop();
  window.addEventListener("scroll", toggleTop, { passive: true });
}
