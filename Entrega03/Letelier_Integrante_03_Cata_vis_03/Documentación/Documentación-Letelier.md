# Documentación del Proyecto: Mujeres en el Congreso Chileno (1950-2026)


### Proceso de visualización: pasos y decisiones

Para transformar los datos brutos en información visual comprensible, se siguió un flujo de trabajo técnico en **Google Colab** utilizando la librería **Altair**. Las decisiones tomadas fueron:

1. **Agregación de datos:**  
   La base original **"Mujeres Parlamentarias"** contenía registros individuales por nombre. Para las visualizaciones, se transformó esta información en una base de conteo por año y cámara: `hojatotalcongreso.csv`.

2. **Selección de gráficos:**  
   Se optó por **gráficos de barras apiladas y comparativas** para representar series de tiempo. Esta decisión permite visualizar claramente los “saltos” históricos, como el impacto de la Ley de Cuotas en 2018.

3. **Codificación de colores:**  
   Se utilizó una escala de colores distinta para cada año electoral, lo que facilita la distinción visual de los periodos legislativos en la webstory.

---

### Base de datos utilizada y procesamiento

La base de datos central utilizada para las gráficas es **`hojatotalcongreso.csv`**.

- **Selección:**  
  Se seleccionó esta base porque consolida el esfuerzo de limpieza de los registros individuales, permitiendo una lectura directa de las tendencias cuantitativas por cada elección.

- **Procesamiento:**  
  Se procesó desde la base **"Mujeres Parlamentarias"** mediante la limpieza de nombres duplicados —parlamentarias reelectas— y la estandarización de los años de asunción para que coincidieran con los ciclos electorales oficiales.

---

### Preguntas que responde la visualización

1. **¿Cuál fue el impacto real de la Ley de Cuotas?**  
   Se observa un salto de 22 mujeres en 2014 a 41 en 2018 en la Cámara de Diputados.

2. **¿En qué año se produjo el primer registro femenino en el Senado?**  
   La visualización muestra que ocurrió en 1953, con una representante.

3. **¿Cómo se refleja la paridad para el ciclo 2026?**  
   Las gráficas muestran un récord histórico de 56 mujeres en el total del Congreso.

