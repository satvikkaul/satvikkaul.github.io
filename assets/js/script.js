/* Homepage rendering. The bridge is the signature: needles carry mass, so they
   sweep from the left pin with overshoot and settle, once, when the row is seen. */

const data = window.siteData;

const MIN_ANGLE = -46;
const MAX_ANGLE = 46;
const ZERO_VU = 0.62;

const angleFor = (level) => MIN_ANGLE + level * (MAX_ANGLE - MIN_ANGLE);

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

const PIVOT_X = 130;
const PIVOT_Y = 138;

const polar = (angleDeg, radius, cx = PIVOT_X, cy = PIVOT_Y) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)];
};

/* The scale: numerals ride outside the tick arc, everything past 0 VU in red. */
function scaleMarkup() {
  const majors = [
    { level: 0.0, text: "−" },
    { level: 0.13, text: "20" },
    { level: 0.27, text: "10" },
    { level: 0.39, text: "7" },
    { level: 0.5, text: "5" },
    { level: 0.61, text: "3" },
    { level: 0.72, text: "0" },
    { level: 0.83, text: "1" },
    { level: 0.93, text: "3" },
    { level: 1.0, text: "+" },
  ];

  let ticks = "";
  for (let i = 0; i <= 26; i += 1) {
    const level = i / 26;
    const hot = level > ZERO_VU;
    const major = i % 2 === 0;
    const angle = angleFor(level);
    const [x1, y1] = polar(angle, major ? 92 : 99);
    const [x2, y2] = polar(angle, 108);
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${hot ? "#d23b2d" : "#0e0e0e"}" stroke-width="${major ? 1.7 : 1}" />`;
  }

  const numerals = majors
    .map(({ level, text }) => {
      const [x, y] = polar(angleFor(level), 120);
      const hot = level > ZERO_VU;
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="${hot ? "#d23b2d" : "#0e0e0e"}">${text}</text>`;
    })
    .join("");

  const [ax, ay] = polar(angleFor(ZERO_VU), 112);
  const [bx, by] = polar(MAX_ANGLE, 112);
  const redArc = `<path d="M ${ax.toFixed(1)} ${ay.toFixed(1)} A 112 112 0 0 1 ${bx.toFixed(1)} ${by.toFixed(1)}" fill="none" stroke="#d23b2d" stroke-width="3.2" />`;

  return ticks + numerals + redArc;
}

function meterMarkup(metric) {
  return `
    <div class="meter" data-level="${metric.level}">
      <div class="meter-face">
        <svg viewBox="8 6 244 104" role="img" aria-label="${esc(metric.name)}: ${esc(metric.value)}">
          ${scaleMarkup()}
          <g class="meter-needle">
            <line x1="${PIVOT_X}" y1="${PIVOT_Y}" x2="${PIVOT_X}" y2="${PIVOT_Y - 96}" stroke="#0e0e0e" stroke-width="2.4" stroke-linecap="round" />
          </g>
        </svg>
      </div>
      <div class="meter-strip">
        <span class="meter-ch">${esc(metric.ch)}</span>
        <span class="meter-name">${esc(metric.name)}</span>
      </div>
      <div class="meter-read">
        <div class="meter-value${metric.hot ? " is-hot" : ""}">${esc(metric.value)}</div>
        <p class="meter-note">${esc(metric.note)}</p>
      </div>
    </div>
  `;
}

function channelMarkup(project, index) {
  const readouts = (data.readouts && data.readouts[project.slug]) || [];
  const rows = readouts.length
    ? readouts
        .map(
          (row) => `
          <div class="readout-row">
            <span class="readout-key">${esc(row.key)}</span>
            <span class="readout-val${row.hot ? " is-hot" : ""}">${esc(row.value)}</span>
          </div>`,
        )
        .join("")
    : `<p class="readout-empty">No published metrics yet. This one is stated as work in progress rather than dressed up as a result.</p>`;

  const links = [
    `<a href="pages/case-study.html?project=${encodeURIComponent(project.slug)}">Case study</a>`,
    `<a href="${data.profile.githubUrl}/${encodeURIComponent(project.name)}" target="_blank" rel="noreferrer">Source</a>`,
  ];
  if (project.demoUrl) {
    links.push(`<a href="${esc(project.demoUrl)}" target="_blank" rel="noreferrer">Demo</a>`);
  }
  (project.extraLinks || []).forEach((link) => {
    links.push(`<a href="${esc(link.href)}" target="_blank" rel="noreferrer">${esc(link.label)}</a>`);
  });

  // The badge must never claim more than the readout beside it can show.
  let badge;
  if (readouts.some((row) => row.hot)) {
    badge = `<span class="tag tag-hot">Beats baseline</span>`;
  } else if (project.statusLabel) {
    badge = `<span class="tag">${esc(project.statusLabel)}</span>`;
  } else if (readouts.length) {
    badge = `<span class="tag">Measured</span>`;
  } else {
    badge = `<span class="tag">No metrics published</span>`;
  }

  return `
    <article class="channel lean">
      <div class="channel-no">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <div class="channel-title">
          <h3>${esc(project.cardTitle)}</h3>
          ${badge}
        </div>
        <p class="channel-desc">${esc(project.cardDescription)}</p>
        <p class="channel-stack">${esc(project.stack)}</p>
        <div class="channel-links">${links.join("")}</div>
      </div>
      <div class="channel-readout">${rows}</div>
    </article>
  `;
}

function render() {
  const { profile } = data;

  document.querySelectorAll("[data-name]").forEach((el) => {
    el.textContent = profile.name;
  });

  const headline = document.querySelector("[data-headline]");
  if (headline) {
    headline.innerHTML = profile.headline
      .map((line, i) =>
        i === profile.headlineAccent ? `<span class="rule-word">${esc(line)}</span>` : esc(line),
      )
      .join("<br />");
  }

  const lede = document.querySelector("[data-lede]");
  if (lede) lede.textContent = profile.summary;

  const spec = document.querySelector("[data-spec]");
  if (spec) spec.textContent = profile.specLine;

  const bridge = document.querySelector("[data-bridge]");
  if (bridge) bridge.innerHTML = data.bridge.map(meterMarkup).join("");

  const band = document.querySelector("[data-band]");
  if (band) {
    band.innerHTML = data.quickFacts
      .map(
        (fact) => `
        <div class="band-cell lean">
          <h3>${esc(fact.title)}</h3>
          <p>${esc(fact.body)}</p>
        </div>`,
      )
      .join("");
  }

  const channels = document.querySelector("[data-channels]");
  if (channels) channels.innerHTML = data.featuredRepositories.map(channelMarkup).join("");

  const sessions = document.querySelector("[data-sessions]");
  if (sessions) {
    sessions.innerHTML = data.experience
      .map(
        (job) => `
        <article class="session lean">
          <div class="session-when">${esc(job.when)}</div>
          <div>
            <h3>${esc(job.role)}</h3>
            <p class="session-org">${esc(job.org)}</p>
            <ul>${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          </div>
        </article>`,
      )
      .join("");
  }

  const panel = document.querySelector("[data-panel]");
  if (panel) {
    panel.innerHTML = data.skillGroups
      .map(
        (group) => `
        <div class="panel-cell">
          <h3>${esc(group.title)}</h3>
          <div class="panel-jacks">${group.items.map((i) => `<span class="jack">${esc(i)}</span>`).join("")}</div>
        </div>`,
      )
      .join("");
  }

  const specs = document.querySelector("[data-specs]");
  if (specs) {
    specs.innerHTML = data.specs
      .map(
        (row) => `
        <div class="spec-row">
          <span class="spec-key">${esc(row.key)}</span>
          <span class="spec-val">${esc(row.value)}</span>
        </div>`,
      )
      .join("");
  }

  const contactCopy = document.querySelector("[data-contact-copy]");
  if (contactCopy) contactCopy.textContent = profile.contactCopy;

  const contactLinks = document.querySelector("[data-contact-links]");
  if (contactLinks) {
    contactLinks.innerHTML = data.contactLinks
      .map((link) => `<a href="${esc(link.href)}">${esc(link.label)}</a>`)
      .join("");
  }
}

/* One authored moment: the row leans together, staggered by channel, then settles. */
function swingNeedles(root) {
  const meters = [...root.querySelectorAll(".meter")];
  meters.forEach((meter, i) => {
    const needle = meter.querySelector(".meter-needle");
    const target = angleFor(Number(meter.dataset.level));
    window.setTimeout(() => {
      meter.classList.add("is-live");
      needle.style.transform = `rotate(${target}deg)`;
    }, 90 + i * 70);
  });
}

function observe() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bridge = document.querySelector(".bridge");

  if (reduced) {
    document.querySelectorAll(".lean").forEach((el) => el.classList.add("is-in"));
    document.querySelectorAll(".meter").forEach((meter) => {
      meter.querySelector(".meter-needle").style.transform =
        `rotate(${angleFor(Number(meter.dataset.level))}deg)`;
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        if (entry.target === bridge) swingNeedles(bridge);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
  );

  document.querySelectorAll(".lean").forEach((el) => io.observe(el));
}

/* The back-to-top control only exists once there is a top to go back to. */
function toTop() {
  const btn = document.querySelector(".to-top");
  if (!btn) return;
  const toggle = () => btn.classList.toggle("is-shown", window.scrollY > window.innerHeight * 0.9);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

render();
observe();
toTop();
