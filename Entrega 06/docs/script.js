const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
  });
});

const counters = document.querySelectorAll("[data-count]");
let countersStarted = false;

function animateCounters() {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 45));

    function update() {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        return;
      }

      counter.textContent = current;
      requestAnimationFrame(update);
    }

    update();
  });
}

const statsBox = document.querySelector(".stats-box");

if (statsBox) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counterObserver.observe(statsBox);
}

const glossaryModal = document.querySelector(".glossary-modal");
const glossaryOpenButtons = document.querySelectorAll("[data-glossary]");
const glossaryCloseButton = document.querySelector(".close-glossary");

function openGlossary() {
  glossaryModal?.classList.add("active");
  glossaryModal?.setAttribute("aria-hidden", "false");
}

function closeGlossary() {
  glossaryModal?.classList.remove("active");
  glossaryModal?.setAttribute("aria-hidden", "true");
}

glossaryOpenButtons.forEach((button) => {
  button.addEventListener("click", openGlossary);
});

glossaryCloseButton?.addEventListener("click", closeGlossary);

glossaryModal?.addEventListener("click", (event) => {
  if (event.target === glossaryModal) {
    closeGlossary();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGlossary();
  }
});

const specPresidentas = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
  "width": "container",
  "height": 320,
  "background": "#ffffff",
  "title": {
    "text": "El aumento exponencial de mujeres electas para la presidencia de partidos políticos en Chile",
    "anchor": "start",
    "font": "Inter",
    "fontSize": 18,
    "fontWeight": 800,
    "color": "#25172E"
  },
  "data": {
    "values": [
      { "Períodos": "1989-2009", "Tasa de presidentas electas por año": 0.25 },
      { "Períodos": "2010-2019", "Tasa de presidentas electas por año": 0.88 },
      { "Períodos": "2020-2026", "Tasa de presidentas electas por año": 1.83 }
    ]
  },
  "mark": {
    "type": "bar",
    "cornerRadiusTopLeft": 12,
    "cornerRadiusTopRight": 12
  },
  "encoding": {
    "x": {
      "field": "Períodos",
      "type": "nominal",
      "axis": {
        "labelAngle": 0,
        "title": null,
        "labelFont": "Inter",
        "labelFontSize": 13,
        "labelFontWeight": 700
      }
    },
    "y": {
      "field": "Tasa de presidentas electas por año",
      "type": "quantitative",
      "axis": {
        "title": "Tasa de presidentas electas por año",
        "labelFont": "Inter",
        "titleFont": "Inter",
        "gridColor": "#F2D9E8"
      }
    },
    "color": {
      "field": "Períodos",
      "type": "nominal",
      "scale": {
        "domain": ["1989-2009", "2010-2019", "2020-2026"],
        "range": ["#F9C784", "#F28C28", "#C95A00"]
      },
      "legend": null
    },
    "tooltip": [
      { "field": "Períodos", "type": "nominal" },
      { "field": "Tasa de presidentas electas por año", "type": "quantitative" }
    ]
  },
  "config": {
    "view": { "stroke": null },
    "font": "Inter"
  }
};

const vegaContainer = document.querySelector("#vega-presidentas");

if (vegaContainer && window.vegaEmbed) {
  vegaEmbed("#vega-presidentas", specPresidentas, { actions: false })
    .catch((error) => console.error("Error al cargar gráfico Vega:", error));
}