## Visualización 1
<!DOCTYPE html> 

<html> 

<head> 

 <meta charset="UTF-8"> 

 <style> 

   #vis.vega-embed { 

     width: 100%; 

     display: flex; 

   } 

 

   #vis.vega-embed details, 

   #vis.vega-embed details summary { 

     position: relative; 

   } 

 </style> 

 <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vega@5"></script> 

 <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vega-lite@5.20.1"></script> 

 <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script> 

</head> 

<body> 

 <div id="vis"></div> 

 <script> 

   (function(vegaEmbed) { 

     var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "data": {"name": "data-1696d91dff84af5ce026b0ffcf5a7806"}, "mark": {"type": "bar"}, "encoding": {"color": {"field": "Per\u00edodos", "scale": {"domain": ["1989-2009", "2010-2019", "2020-2026"], "range": ["#B57EDC", "#4A148C", "#B744A1"]}, "type": "nominal"}, "x": {"field": "Per\u00edodos", "type": "nominal"}, "y": {"field": "Tasa de presidentas electas por a\u00f1o", "type": "quantitative"}}, "title": "El aumento exponencial de mujeres electas para la presidencia de partidos pol\u00edticos en Chile en los \u00faltimos 37 a\u00f1os", "width": 400, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "datasets": {"data-1696d91dff84af5ce026b0ffcf5a7806": [{"Per\u00edodos": "1989-2009", "Tasa de presidentas electas por a\u00f1o": 0.25}, {"Per\u00edodos": "2010-2019", "Tasa de presidentas electas por a\u00f1o": 0.88}, {"Per\u00edodos": "2020-2026", "Tasa de presidentas electas por a\u00f1o": 1.83}]}}; 

     var embedOpt = {"mode": "vega-lite"}; 

 

     function showError(el, error){ 

         el.innerHTML = ('<div style="color:red;">' 

                         + '<p>JavaScript Error: ' + error.message + '</p>' 

                         + "<p>This usually means there's a typo in your chart specification. " 

                         + "See the javascript console for the full traceback.</p>" 

                         + '</div>'); 

         throw error; 

     } 

     const el = document.getElementById('vis'); 

     vegaEmbed("#vis", spec, embedOpt) 
     
Visualizaciones 2, 3 y 4


<div class="flourish-embed flourish-chart" data-src="visualisation/29505011"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/29505011/thumbnail" width="100%" alt="chart visualization" /></noscript></div> 

<div class="flourish-embed flourish-chart" data-src="visualisation/29505099"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/29505099/thumbnail" width="100%" alt="chart visualization" /></noscript></div> 

<div class="flourish-embed flourish-chart" data-src="visualisation/29505116"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/29505116/thumbnail" width="100%" alt="chart visualization" /></noscript></div> 


## Visualización 5 (profesiones)
<div class="flourish-embed flourish-chart" data-src="visualisation/29504515"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/29504515/thumbnail" width="100%" alt="chart visualization" /></noscript></div> 
