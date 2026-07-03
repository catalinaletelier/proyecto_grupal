document.addEventListener("DOMContentLoaded", () => {
  initGlossaryModal();
  initTimeline();
  initVegaChart();
});

function initGlossaryModal() {
  const modal = document.getElementById("glossaryModal");
  const triggers = document.querySelectorAll(".glossary-trigger");
  const closeButtons = document.querySelectorAll("[data-close-glossary]");

  if (!modal || triggers.length === 0) return;

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function initTimeline() {
  const cards = document.querySelectorAll(".timeline-item");

  cards.forEach((card) => {
    const marker = card.querySelector(".timeline-marker");

    if (!marker) return;

    marker.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("active"));
      card.classList.add("active");
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    });
  });
}

function initVegaChart() {
  const target = document.getElementById("vis");

  if (!target) return;

  if (typeof vegaEmbed === "undefined") {
    target.innerHTML = "<p>No se pudo cargar la librería Vega-Lite.</p>";
    return;
  }

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "width": "container",
    "height": 360,
    "background": "#ffffff",
    "title": {
      "text": "El aumento exponencial de mujeres electas para la presidencia de partidos políticos en Chile en los últimos 37 años",
      "anchor": "start",
      "font": "TT Corals",
      "fontSize": 18,
      "fontWeight": "bold",
      "color": "#451059"
    },
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
      "cornerRadiusTopLeft": 10,
      "cornerRadiusTopRight": 10
    },
    "encoding": {
      "x": {
        "field": "Períodos",
        "type": "nominal",
        "axis": {
          "title": "Períodos",
          "labelAngle": 0,
          "labelColor": "#451059",
          "titleColor": "#451059"
        }
      },
      "y": {
        "field": "Tasa de presidentas electas por año",
        "type": "quantitative",
        "axis": {
          "title": "Tasa de presidentas electas por año",
          "labelColor": "#451059",
          "titleColor": "#451059",
          "gridColor": "rgba(69, 16, 89, 0.12)"
        }
      },
      "color": {
        "field": "Períodos",
        "type": "nominal",
        "scale": {
          "domain": ["1989-2009", "2010-2019", "2020-2026"],
          "range": ["#FBC693", "#F67C2F", "#E43F77"]
        },
        "legend": null
      },
      "tooltip": [
        { "field": "Períodos", "type": "nominal" },
        { "field": "Tasa de presidentas electas por año", "type": "quantitative" }
      ]
    },
    "config": {
      "view": {
        "stroke": "transparent"
      },
      "axis": {
        "domainColor": "#451059",
        "tickColor": "#451059",
        "labelFont": "TT Corals",
        "titleFont": "TT Corals"
      }
    }
  };

  vegaEmbed("#vis", spec, {
    mode: "vega-lite",
    actions: false
  }).catch((error) => {
    target.innerHTML = "<p>No se pudo cargar el gráfico.</p>";
    console.error(error);
  });
}