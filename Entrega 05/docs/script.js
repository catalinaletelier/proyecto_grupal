
"use strict";


/* ========================================
   MENÚ PARA TELÉFONOS
======================================== */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ========================================
   APARICIÓN DE ELEMENTOS AL HACER SCROLL
======================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  }
);

revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* ========================================
   ANIMACIÓN DE CIFRAS
======================================== */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;


function animateCounter(element) {

  const target = Number(element.dataset.target);
  const duration = 1200;
  const start = performance.now();


  function update(now) {

    const elapsedTime = now - start;

    const progress = Math.min(
      elapsedTime / duration,
      1
    );

    const easedProgress =
      1 - Math.pow(1 - progress, 3);

    element.textContent = Math.round(
      target * easedProgress
    );


    if (progress < 1) {

      requestAnimationFrame(update);

    } else {

      element.textContent = target;

    }

  }


  requestAnimationFrame(update);

}


const statsSection = document.querySelector(".stats");


if (statsSection) {

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {

      const sectionIsVisible = entries.some(
        (entry) => entry.isIntersecting
      );


      if (sectionIsVisible && !countersStarted) {

        counters.forEach(animateCounter);

        countersStarted = true;

        observer.disconnect();

      }

    },
    {
      threshold: 0.3
    }
  );


  counterObserver.observe(statsSection);

}


/* ========================================
   GRÁFICO VEGA-LITE:
   PRESIDENCIAS DE PARTIDOS
======================================== */

const partyChartSpec = {

  "$schema":
    "https://vega.github.io/schema/vega-lite/v5.json",

  "title": {
    "text":
      "Aumento de mujeres elegidas para presidir partidos políticos",
    "fontSize": 20,
    "anchor": "start"
  },

  "width": "container",

  "height": 330,

  "data": {
    "values": [
      {
        "periodo": "1989–2009",
        "tasa": 0.25
      },
      {
        "periodo": "2010–2019",
        "tasa": 0.88
      },
      {
        "periodo": "2020–2026",
        "tasa": 1.83
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
      "field": "periodo",
      "type": "nominal",
      "title": "Período",
      "sort": [
        "1989–2009",
        "2010–2019",
        "2020–2026"
      ]
    },

    "y": {
      "field": "tasa",
      "type": "quantitative",
      "title":
        "Tasa de presidentas elegidas por año"
    },

    "color": {
      "field": "periodo",
      "type": "nominal",
      "legend": null,

      "scale": {
        "domain": [
          "1989–2009",
          "2010–2019",
          "2020–2026"
        ],

        "range": [
          "#B57EDC",
          "#4A148C",
          "#B744A1"
        ]
      }
    },

    "tooltip": [
      {
        "field": "periodo",
        "type": "nominal",
        "title": "Período"
      },
      {
        "field": "tasa",
        "type": "quantitative",
        "title": "Tasa anual",
        "format": ".2f"
      }
    ]

  },

  "config": {

    "view": {
      "stroke": null
    },

    "axis": {
      "labelFont": "DM Sans",
      "titleFont": "DM Sans",
      "labelFontSize": 12,
      "titleFontSize": 13
    },

    "title": {
      "font": "Playfair Display"
    }

  }

};


const partyChartElement = document.querySelector(
  "#party-presidencies-chart"
);


if (partyChartElement && window.vegaEmbed) {

  vegaEmbed(
    "#party-presidencies-chart",
    partyChartSpec,
    {
      actions: false,
      renderer: "svg"
    }
  ).catch((error) => {

    partyChartElement.innerHTML =
      "<p>No fue posible cargar este gráfico.</p>";

    console.error(error);

  });

}

