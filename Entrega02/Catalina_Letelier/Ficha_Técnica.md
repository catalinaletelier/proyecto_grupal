# Ficha técnica y diccionario de datos

---

## A. Ficha Técnica: Liderazgo Femenino en el Congreso Nacional (1950-2026)

**Fuente de los datos:**  
Los listados oficiales de integrantes y mesas directivas se obtuvieron de los sitios web del Senado de Chile, de la Cámara de Diputadas y Diputados (específicamente el PDF de "Mesas Históricas") y de anexos electorales de Wikipedia.  
El enriquecimiento cualitativo (profesión, edad, estado civil y maternidad) se realizó consultando las Reseñas Parlamentarias de la Biblioteca del Congreso Nacional (BCN) y perfiles biográficos adicionales de Wikipedia.

**Metodología de la construcción de la base:**  
Se utilizó un método de inscripción manual para registrar nombres, periodos y partidos políticos a partir de las fuentes primarias. Posteriormente, se realizó una búsqueda dirigida de cada perfil en el portal de la BCN para completar las variables biográficas y académicas. Finalmente, los datos se consolidaron y ordenaron en Google Sheets para su limpieza y estandarización.

**Alcance de los datos:**  
La base abarca un periodo histórico que va desde 1950 hasta 2026. Incluye el registro de todas las mujeres electas como parlamentarias y aquellas que alcanzaron cargos en las Mesas Directivas (Testeras) de ambas cámaras.

**Característica de los datos:**  
Es una base de datos de carácter mixto (cualitativa y cuantitativa). Combina datos administrativos (años, cargos, partidos) con datos sociodemográficos y biográficos (profesiones, edad, maternidad).

**Otras observaciones:**  
La serie cronológica presenta una interrupción democrática entre 1973 y 1990 debido a la dictadura militar, periodo en el cual el Congreso permaneció disuelto.

---

## B. Diccionario de Datos: Matriz de Testeras (Base 1)

| Variable        | Descripción                                      | Tipo de dato | Valores posibles                         | Observaciones                                      |
|----------------|--------------------------------------------------|--------------|------------------------------------------|---------------------------------------------------|
| Nombre         | Nombre completo de la parlamentaria              | String       | Texto libre                              | Identificador principal                           |
| Cargo          | Puesto ocupado en la mesa directiva              | String       | Presidenta, Vicepresidenta               | Incluye 1ra y 2da vicepresidencia                |
| Cámara / Senado| Rama del Congreso donde ejerció                  | String       | Cámara, Senado                           | Indica la institución                            |
| Año            | Año de inicio en el cargo de la mesa             | Integer      | AAAA (1950-2026)                         | Año de elección                                  |
| Partido        | Militancia política al momento del cargo         | String       | Sigla del partido                        | Ej: PDC, PS, PPD, RN, PC                         |
| Signo Político | Clasificación ideológica del partido             | String       | Derecha, Centro, Izquierda, etc.         | Basado en el espectro político chileno           |
| Profesión      | Título profesional o grado académico             | String       | Texto libre                              | Según registro de la BCN                         |
| Edad al asumir | Edad de la mujer al momento del nombramiento     | Integer      | Valor numérico                           | Calculada a partir de fecha de nacimiento        |
| Estado Civil   | Situación sentimental registrada                 | String       | Casada, Soltera, Divorciada              | Extraído de reseñas biográficas                  |
| Maternidad     | Indica si la parlamentaria tiene hijos           | String       | Sí, No                                   | Variable para análisis de brechas de cuidado     |

---

## C. Diccionario de Datos: Congreso General (Base 2)

| Variable                | Descripción                                  | Tipo de dato | Valores posibles                 | Observaciones                                   |
|------------------------|----------------------------------------------|--------------|----------------------------------|------------------------------------------------|
| Nombre                 | Nombre completo de la mujer electa           | String       | Texto libre                      | Identificador de la parlamentaria              |
| Cámara / Senado        | Rama para la cual resultó electa             | String       | Cámara, Senado                   | Define el espacio de representación            |
| Año en el que asume    | Inicio del periodo legislativo               | Integer      | AAAA (1951-2026)                 | Corresponde al año de la elección o asunción   |
| Partido                | Afiliación política de la candidatura        | String       | Sigla del partido                |                                                |
| Signo Político         | Clasificación ideológica de la coalición     | String       | Izquierda, Centro, Derecha, etc. | Permite medir la transversalidad               |
| Profesión              | Oficio o profesión declarada                 | String       | Texto libre                      | Muestra la evolución técnica de los perfiles   |