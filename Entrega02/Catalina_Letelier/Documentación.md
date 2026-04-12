# DOCUMENTACIÓN DEL PROCESO DE DATOS  
## Mujeres en el Congreso Nacional (1950-2026)

---

## 1. Explicación del proceso de limpieza de datos

El proceso de construcción y limpieza de las dos bases de datos (Testeras y Congreso General) fue un ejercicio de reconstrucción histórica que abarcó desde 1950 hasta 2026. Dado que la información original se encontraba dispersa en registros administrativos, PDFs históricos y reseñas biográficas, se aplicó la siguiente metodología:

### Pasos del proceso:

**Recolección y Transcripción Manual:**  
La primera etapa consistió en extraer los nombres de las mujeres electas y aquellas que ocuparon cargos en las Mesas Directivas desde fuentes oficiales como el Senado y la Cámara de Diputados. Se registraron manualmente nombres, años de inicio de periodo y partidos políticos.

**Estandarización de Variables:**  
Se detectaron inconsistencias en las siglas de los partidos (por ejemplo, "PCCH" vs "PC") y en la clasificación de signos políticos. Se tomó la decisión de agregar otro ítem de clasificación para lograr unificar los criterios bajo categorías estándar:  
- Extrema Izquierda  
- Izquierda  
- Centro-Izquierda  
- Centro  
- Centro-Derecha  
- Derecha  
- Extrema Derecha  

**Enriquecimiento Cualitativo (Data Enrichment):**  
Para probar la hipótesis de profesionalización, se cruzó el listado de nombres con las Reseñas Parlamentarias de la Biblioteca del Congreso Nacional (BCN). Esto permitió añadir variables críticas que no estaban en los listados de elección:

- **Profesión:** Se categorizaron títulos (ej. Abogada, Socióloga, Matrona).  
- **Variables Biográficas:** Se incluyó "Edad al asumir", "Estado Civil" y "Maternidad" para la base de Testeras.

**Interrupción democrática:**  
Se evidencia de forma natural el periodo de interrupción democrática (1973-1990). En esos periodos no se registran mujeres electas. No debe interpretarse este salto como una falta de participación femenina, sino como una suspensión institucional.

**Validación y Proyecciones:**  
Se integraron los datos de las elecciones recientes y las mesas directivas hasta 2026 (como Paulina Núñez en el Senado o Ximena Ossandón en la Cámara) para mantener la base actualizada al ciclo político vigente.

### Herramientas utilizadas:

- **Google Sheets:** Para la consolidación de datos.  
- **Filtros y Validación de Datos:** Para asegurar que las categorías de "Signo Político" y "Cámara" fueran consistentes en todas las filas.

---

## 2. Lista de fuentes y justificación

Se seleccionaron fuentes de carácter institucional y biográfico para garantizar la veracidad de la información y permitir el análisis cualitativo solicitado:

### Sitios oficiales

- **Senado de Chile:**  
  https://www.senado.cl/acerca-del-senado/antecedentes-historicos/historico-de-presidencias-y-vicepresidencias-del-senado  

- **Cámara de Diputados:**  
  https://www.camara.cl/camara/doc/mesas_historicas.pdf  

Proporcionaron el listado oficial y las fechas exactas de las Mesas Directivas. Se eligieron por ser la fuente primaria de la administración legislativa. Sin embargo, solo contaban con registros desde 1990, por lo que fue necesario complementar con otras fuentes.

### Biblioteca del Congreso Nacional (BCN)

- **Reseñas Parlamentarias:**  
  https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Adriana_Mu%C3%B1oz_D%27Albora  

Fue la fuente más valiosa para añadir la dimensión de "Profesionalización". Permitió conocer el perfil académico y personal de cada mujer.

### Wikipedia (Anexos de elecciones)

Se utilizó para contrastar resultados electorales históricos (1961-1973) y (1989-2025), especialmente útil para visualizar coaliciones:

- 1961: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1961  
- 1965: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1965  
- 1969: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1969  
- 1973: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1973  
- 1989: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1989  
- 1993: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1993  
- 1997: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1997  
- 2001: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2001  
- 2005: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2005  
- 2009: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2009  
- 2013: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2013  
- 2017: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2017  
- 2021: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2021  
- 2025: https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2025  

### Documento técnico

- **PDF "Mesas Históricas" (Cámara de Diputados):**  
  https://www.camara.cl/camara/doc/mesas_historicas.pdf  

Permitió reconstruir las 1° y 2° vicepresidencias, cargos frecuentemente omitidos.

---

## 3. Preguntas que se pueden responder con la base de datos limpia

### A. Base de Testeras (1951-2026)

- **¿Existe una tendencia de profesionalización técnica en el tiempo?**  
  Permite observar el paso desde oficios tradicionales en los años 60 a profesiones altamente calificadas desde 1990.

- **¿Es la maternidad un factor común o una barrera en el liderazgo?**  
  Permite analizar la compatibilidad entre tareas de cuidado y liderazgo político.

- **¿Cómo ha evolucionado la transversalidad ideológica?**  
  Evidencia el paso desde predominancia de centro-izquierda hacia mayor diversidad ideológica.

- **¿Diferencias en edad promedio entre cámaras?**  
  Permite comparar trayectorias entre Cámara de Diputados y Senado.

---

### B. Base Congreso General (1951-2026)

- **¿Cómo ha evolucionado el “techo de cristal” profesional?**  
  Permite analizar el cambio desde oficios a profesiones técnicas.

- **¿Qué coaliciones han facilitado el ingreso de mujeres?**  
  Identifica sectores políticos más inclusivos en distintos periodos.

- **¿Relación entre tipo de cámara y profesión?**  
  Permite comparar perfiles profesionales entre Senado y Cámara.

---

### C. Cruce de ambas bases

- **¿Cuánto tarda una parlamentaria en llegar a la Testera?**  
  Permite calcular la curva de ascenso político.

- **¿Existe un perfil distinto entre parlamentarias y líderes?**  
  Analiza diferencias en especialización y trayectoria.

- **¿La Testera refleja la composición del Congreso?**  
  Evalúa si la representación femenina se traduce en liderazgo.

- **¿Impacto del recambio generacional?**  
  Analiza si ingresar joven aumenta probabilidad de liderazgo futuro.