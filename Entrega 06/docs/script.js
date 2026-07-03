document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("is-open"));
  });

  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    const button = item.querySelector(".timeline-year");

    button.addEventListener("click", () => {
      timelineItems.forEach((other) => other.classList.remove("is-active"));
      item.classList.add("is-active");
    });
  });

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 650) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const glossaryModal = document.getElementById("glossaryModal");
  const closeGlossary = document.getElementById("closeGlossary");
  const glossaryButtons = document.querySelectorAll("[data-open-glossary]");
  const glossarySearch = document.getElementById("glossarySearch");
  const glossaryItems = document.querySelectorAll("#glossaryList p");

  glossaryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      glossaryModal.showModal();
      glossarySearch.focus();
    });
  });

  closeGlossary?.addEventListener("click", () => {
    glossaryModal.close();
  });

  glossaryModal?.addEventListener("click", (event) => {
    const modalBox = glossaryModal.getBoundingClientRect();

    const clickedOutside =
      event.clientX < modalBox.left ||
      event.clientX > modalBox.right ||
      event.clientY < modalBox.top ||
      event.clientY > modalBox.bottom;

    if (clickedOutside) {
      glossaryModal.close();
    }
  });

  glossarySearch?.addEventListener("input", () => {
    const value = glossarySearch.value.toLowerCase().trim();

    glossaryItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });

  const specPresidentas = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.20.1.json",
    title: "El aumento exponencial de mujeres electas para la presidencia de partidos políticos en Chile en los últimos 37 años",
    width: "container",
    height: 320,
    data: {
      values: [
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
    mark: {
      type: "bar",
      cornerRadiusTopLeft: 12,
      cornerRadiusTopRight: 12
    },
    encoding: {
      x: {
        field: "Períodos",
        type: "nominal",
        axis: {
          labelAngle: 0,
          title: null
        }
      },
      y: {
        field: "Tasa de presidentas electas por año",
        type: "quantitative",
        title: "Tasa por año"
      },
      color: {
        field: "Períodos",
        type: "nominal",
        scale: {
          domain: ["1989-2009", "2010-2019", "2020-2026"],
          range: ["#F9C784", "#F28C28", "#C95A00"]
        },
        legend: null
      },
      tooltip: [
        {
          field: "Períodos",
          type: "nominal"
        },
        {
          field: "Tasa de presidentas electas por año",
          type: "quantitative"
        }
      ]
    },
    config: {
      background: "#ffffff",
      view: {
        stroke: null
      },
      axis: {
        labelFont: "Arial",
        titleFont: "Arial",
        labelColor: "#23172f",
        titleColor: "#23172f"
      },
      title: {
        font: "Arial",
        fontSize: 18,
        color: "#36135c",
        anchor: "start"
      }
    }
  };

  function renderPresidentasChart() {
    if (window.vegaEmbed && document.getElementById("visPresidentas")) {
      vegaEmbed("#visPresidentas", specPresidentas, {
        actions: false,
        renderer: "svg"
      }).catch((error) => {
        document.getElementById("visPresidentas").innerHTML =
          `<p class="chart-error">No se pudo cargar el gráfico: ${error.message}</p>`;
      });
    } else {
      setTimeout(renderPresidentasChart, 200);
    }
  }

  renderPresidentasChart();
});