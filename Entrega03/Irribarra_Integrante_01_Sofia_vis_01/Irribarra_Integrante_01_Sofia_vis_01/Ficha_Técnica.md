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
