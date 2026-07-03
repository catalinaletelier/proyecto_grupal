const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

const progress = document.querySelector(".progress-panel span");

function updateProgress() {
  if (!progress) return;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;

  progress.style.height = `${pct}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const modal = document.querySelector("#glossary-modal");
const openButtons = document.querySelectorAll(".glossary-open");
const closeButtons = document.querySelectorAll("[data-close-glossary]");
const search = document.querySelector("#glossary-search");
const glossaryItems = document.querySelectorAll("#glossary-list li");

let lastFocus = null;

function openGlossary() {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    if (search) search.focus();
  }, 50);
}

function closeGlossary() {
  modal.hidden = true;
  document.body.style.overflow = "";

  if (search) search.value = "";

  glossaryItems.forEach((item) => {
    item.classList.remove("is-hidden");
  });

  if (lastFocus) lastFocus.focus();
}

openButtons.forEach((button) => {
  button.addEventListener("click", openGlossary);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeGlossary);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeGlossary();
  }
});

if (search) {
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();

    glossaryItems.forEach((item) => {
      const match = item.innerText.toLowerCase().includes(q);
      item.classList.toggle("is-hidden", !match);
    });
  });
}

const rateSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
  "width": "container",
  "height": 330,
  "title": "El aumento exponencial de mujeres electas para la presidencia de partidos políticos en Chile",
  "data": {
    "values": [
      {
        "Períodos": "1989-2009",
        "Tasa de presidentas electas por año": 0.25
      },
      {
        "Períodos": "2010-2019",
        "Tasa de presidentas electas por año": 0.88
      },
      {
        "Períodos": "2020-2026",
        "Tasa de presidentas electas por año": 1.83
      }
    ]
  },
  "mark": {
    "type": "bar",
    "cornerRadiusTopLeft": 8,
    "cornerRadiusTopRight": 8
  },
  "encoding": {
    "x": {
      "field": "Períodos",
      "type": "nominal",
      "axis": {
        "labelAngle": 0,
        "title": null
      }
    },
    "y": {
      "field": "Tasa de presidentas electas por año",
      "type": "quantitative",
      "axis": {
        "title": "Tasa por año"
      }
    },
    "color": {
      "field": "Períodos",
      "type": "nominal",
      "scale": {
        "domain": ["1989-2009", "2010-2019", "2020-2026"],
        "range": ["#FBC693", "#F67C2F", "#451059"]
      },
      "legend": null
    },
    "tooltip": [
      { "field": "Períodos" },
      {
        "field": "Tasa de presidentas electas por año",
        "format": ".2f"
      }
    ]
  },
  "config": {
    "background": "transparent",
    "font": "Avenir Next",
    "axis": {
      "labelFontSize": 13,
      "titleFontSize": 14
    },
    "title": {
      "fontSize": 18,
      "anchor": "start",
      "color": "#451059"
    },
    "view": {
      "stroke": null
    }
  }
};

if (window.vegaEmbed && document.querySelector("#presidentas-rate-chart")) {
  vegaEmbed("#presidentas-rate-chart", rateSpec, {
    actions: false,
    renderer: "svg"
  });
}