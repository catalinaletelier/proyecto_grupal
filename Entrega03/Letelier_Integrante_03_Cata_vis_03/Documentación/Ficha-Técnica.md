
## Ficha técnica de la base de datos original

### Características generales

La base de datos es el resultado de un cruce entre fuentes oficiales —BCN, Senado, Cámara— y registros biográficos. Cubre el periodo **1950-2026**, con una interrupción explícita durante la dictadura militar **1973-1990**.

---

### Variables incorporadas

| Variable | Descripción |
| :--- | :--- |
| **Nombre** | Nombre completo de la parlamentaria. |
| **Cámara / Senado** | Corporación a la que pertenece: Cámara de Diputados o Senado. |
| **Año** | Año de inicio del periodo legislativo o elección. |
| **Partido** | Militancia política registrada. |
| **Signo Político** | Clasificación ideológica: Extrema Izquierda, Izquierda, Centro, Derecha, Extrema Derecha. |
| **Profesión** | Título profesional o formación técnica declarada. |
| **Edad al asumir** | Edad de la mujer al momento de ingresar al cargo. |
| **Maternidad** | Variable dicotómica —Sí/No— que indica si la mujer tiene hijos. |

---

### Observaciones sobre la base de datos

- **Interrupción democrática:**  
  No existen registros entre 1973 y 1989 debido a la disolución del Congreso.

- **Extremos ideológicos:**  
  Siguiendo el feedback recibido, se incorporaron las categorías de **Extrema Izquierda** —ej. PCCH— y **Extrema Derecha** —ej. PRCH— para dar cuenta de la polarización y la transversalidad actual.

## Ficha técnica de la base de datos seleccionada

## Características de los datos

La base `hojatotalcongreso.csv` registra la cantidad de mujeres presentes en el Congreso chileno entre **1951 y 2026**, desagregando la información por corporación legislativa: **Cámara de Diputadas y Diputados** y **Senado**.

Se trata de una base **agregada**, no individual. Es decir, no contiene nombres ni trayectorias personales, sino conteos totales por año. Su objetivo principal es permitir visualizar la evolución histórica de la presencia femenina en el Congreso.

La base permite observar hitos relevantes, como la primera presencia femenina en la Cámara, el ingreso de mujeres al Senado, la interrupción democrática posterior a 1973 y el aumento de representación femenina en el periodo reciente.

---

## Variables incorporadas

| Variable | Descripción |
| :--- | :--- |
| **Año** | Año de inicio del periodo legislativo o año asociado al registro de representación femenina en el Congreso. |
| **Total Congreso** | Suma total de mujeres registradas en ambas cámaras para ese año. Corresponde a la suma de Cámara y Senado. |
| **Cámara** | Cantidad de mujeres registradas en la Cámara de Diputadas y Diputados para ese año. |
| **Senado** | Cantidad de mujeres registradas en el Senado para ese año. |

---

## Observaciones sobre la base de datos

- La base está construida para mostrar una **tendencia histórica general**, por lo que no permite analizar perfiles individuales, partidos políticos, profesiones, maternidad ni estado civil.

- La base presenta una **interrupción entre 1973 y 1990**, correspondiente al periodo en que el Congreso Nacional fue disuelto durante la dictadura militar. Por eso no hay registros legislativos en esos años.

- El registro comienza en **1951**, año en que aparece la primera mujer en la Cámara de Diputados.

- El primer registro femenino en el **Senado** aparece en **1953**.

- En los años recientes se observa un aumento significativo en el total de mujeres en el Congreso, especialmente desde **2018**, año asociado a los efectos de la Ley de Cuotas.

- La base es adecuada para construir gráficos simples de evolución temporal, como líneas o barras, y para comparar el peso relativo de la Cámara y el Senado en el crecimiento de la representación femenina.