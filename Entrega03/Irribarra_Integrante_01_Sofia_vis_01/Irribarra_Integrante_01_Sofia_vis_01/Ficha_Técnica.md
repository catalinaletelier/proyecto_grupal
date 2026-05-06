# Entrega personal  

## Visualización de datos: Distribución de ministras por partido político en Chile, 1950-2026

## 1. Descripción 

Este trabajo forma parte de una investigación sobre la evolución y transversalidad del poder político femenino en Chile entre 1950 y 2026. La visualización busca observar cómo se ha distribuido la presencia de mujeres en gabinetes ministeriales según el partido político asociado a cada ministra y el año en que ocupó el cargo.

La hipótesis general del proyecto plantea que el aumento de la presencia femenina en cargos de alta decisión política no es un fenómeno exclusivo de sectores progresistas, sino una tendencia transversal que se ha expandido hacia distintos sectores del sistema político chileno. A partir de esto, la visualización permite explorar si la presencia de ministras se concentra en ciertos partidos o si, con el paso del tiempo, aparece una mayor diversidad partidaria.

La visualización fue pensada para ser utilizada dentro de una webstory, por lo que se priorizó una lectura clara, visualmente atractiva y comprensible para un público general.

## 2. Proceso de visualización

Para realizar la visualización, primero se trabajó con la **Base de datos de gabinetes ministeriales limpia**, que reúne información sobre mujeres que han ocupado cargos ministeriales en Chile. Esta base incluye variables como gobierno, año, nombre de la ministra, ministerio, partido político, signo político, profesión, edad al asumir, estado civil y maternidad. Esta base fue corregida de la entrega pasada.

Primero se revise las variables disponibles para determinar cuáles permitían responder mejor a las preguntas de investigación. Después decidí trabajar con la relación entre **año** y **partido político**, ya que esta permite observar la evolución temporal de la presencia femenina en los gabinetes y, al mismo tiempo, identificar qué partidos aparecen asociados a esos nombramientos.

A partir de la base principal se construí una base específica, **Distribucion de Partidos por año.csv**, que use para hacer la visualización. Esta segunda base permitió ordenar y agrupar los registros según el año y el partido político asociado a cada ministra.

La visualización final corresponde a un gráfico de barras apiladas. En este gráfico, el eje X representa los años, el eje Y representa la cantidad de registros de ministras y el color identifica el partido político. Esto permite ver, en una sola imagen, tanto la evolución temporal como la diversidad partidaria de las mujeres que han ocupado cargos ministeriales.


## 3. Decisiones tomadas

Una de las principales decisiones fue usar **partido político** como variable de color, en lugar de agrupar inmediatamente por signo político. Esta elección permite conservar un nivel mayor de detalle y observar qué colectividades específicas han tenido mayor presencia femenina en los gabinetes ministeriales.

Otra decisión fue trabajar con el **recuento de registros**. Cada fila de la base corresponde a una mujer ministra registrada en un determinado año. Por lo tanto, el eje Y no representa un porcentaje ni una cantidad total de mujeres únicas, sino la cantidad de registros presentes en la base para cada año y partido.

También se decidí mantener los años como unidad temporal para mostrar con mayor precisión los momentos en que aparecen nombramientos femeninos en el gabinete. 

## 4. Bases de datos utilizadas

Para esta visualización se utilizaron dos bases de datos:

1. **Base de datos de gabinetes ministeriales limpia**
2. **Distribucion de Partidos por año.csv**

La **Base de datos de gabinetes ministeriales limpia** corresponde a la base principal del proyecto. En ella se sistematizó la información sobre mujeres que han ocupado cargos ministeriales en Chile entre 1950 y 2026. Esta base contiene variables políticas, institucionales y biográficas, como gobierno, año, nombre de la ministra, ministerio, partido político, signo político, profesión, edad al asumir, estado civil y maternidad.

A partir de esta base principal se construí una base más específica: **Distribucion de Partidos por año.csv**, utilizada para la visualización final. Esta segunda base permitió ordenar y agrupar los registros según el año y el partido político asociado a cada ministra, con el objetivo de observar cómo ha evolucionado la distribución partidaria de las mujeres en gabinetes ministeriales a lo largo del tiempo.

## 5. Procesamiento de la base

El procesamiento de la base consistió en preparar los datos para que pudieran ser utilizados en la visualización. Los principales pasos fueron:

1. Revisión de las columnas disponibles en la base original.
2. Selección de las variables necesarias para la visualización: **Año**, **Nombre** y **Partido**.
3. Revisión de posibles errores de escritura o variaciones en los nombres de partidos.
4. Agrupación de los datos por año y partido político.
5. Cálculo del recuento de registros para cada combinación de año y partido.
6. Construcción del gráfico en Altair.
7. Exportación de la visualización en formato HTML y JPG.

La base fue procesada de manera que cada combinación entre año y partido permitiera contar cuántas ministras estaban asociadas a ese partido en ese año específico.

## 6. Preguntas que puede responder la visualización

- ¿En qué años hubo mayor presencia de mujeres en gabinetes ministeriales?
- ¿Qué partidos políticos aparecen con mayor frecuencia asociados a ministras?
- ¿La presencia femenina en ministerios se concentra en pocos partidos o se distribuye entre varias colectividades?
- ¿Cómo ha cambiado la diversidad partidaria de las ministras a lo largo del tiempo?
- ¿La incorporación de mujeres al gabinete parece ser exclusiva de ciertos sectores políticos o muestra señales de transversalidad?

Estas preguntas se relacionan directamente con la hipótesis de la investigación, ya que permiten observar si el liderazgo femenino en el gabinete se ha mantenido concentrado en un sector o si se ha expandido hacia partidos de distinto signo político.

# Ficha técnica de la base de datos

## Nombre de la base principal

**Base de datos de gabinetes ministeriales limpia**

## Nombre de la base procesada para la visualización

**Distribucion de Partidos por año.csv**

## Formato

CSV

## Unidad de análisis

Cada fila corresponde a un registro de una mujer que ocupó un cargo ministerial en Chile.

## Cobertura temporal

1950-2026

## Características de los datos

La base contiene información política, institucional y biográfica de mujeres que han ocupado ministerios en Chile. Incluye variables que permiten analizar tanto la evolución histórica de la presencia femenina como sus perfiles partidarios, profesionales y familiares.

Es una base construida manualmente, por lo que requiere revisión y limpieza de datos para unificar criterios de escritura, especialmente en variables como partido político, ministerio, signo político y profesión.

## Variables incorporadas

| Variable | Descripción |
|---|---|
| Gobierno | Nombre del gobierno o presidente bajo el cual la ministra ocupó el cargo. |
| Año | Año en que la mujer aparece registrada como ministra. |
| Nombre | Nombre de la mujer que ocupó el cargo ministerial. |
| Sexo | Sexo de la persona registrada. En esta base corresponde principalmente a mujeres. |
| Ministerio | Ministerio en el que se desempeñó la autoridad. |
| Partido | Partido político asociado a la ministra. |
| Signo Político | Clasificación ideológica general del partido o gobierno asociado. |
| Profesión | Profesión o formación principal de la ministra. |
| Edad al asumir | Edad de la ministra al momento de asumir el cargo. |
| Estado civil | Estado civil registrado para la ministra, cuando el dato estaba disponible. |
| Maternidad | Variable que indica si la ministra tenía hijos, cuando el dato estaba disponible. |

## Variables utilizadas en la visualización 

| Variable | Uso en la visualización |
|---|---|
| Año | Se utiliza en el eje X para mostrar la evolución temporal de los registros. |
| Partido | Se utiliza como color para distinguir la distribución partidaria de las ministras. |
| Nombre | Se utiliza para contar la cantidad de registros por año y partido. |

## Observaciones sobre la base de datos

Una primera observación es que no todos los registros cuentan con el mismo nivel de información. Algunas variables biográficas, como maternidad o estado civil, pueden presentar datos incompletos o ausencia de información, especialmente en los registros más antiguos.

También otra observación importante es que la variable partido político debe ser interpretada con cuidado. En algunos casos, una ministra puede haber sido independiente, cercana a un partido, militante formal o parte de un gobierno de determinado signo político. Por eso, la visualización no pretende afirmar militancias absolutas en todos los casos, sino mostrar la asociación partidaria registrada en la base.
