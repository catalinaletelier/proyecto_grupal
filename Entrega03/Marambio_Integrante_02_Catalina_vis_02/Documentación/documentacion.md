# Proceso de visualización

Quise representar visualmente el aumento de presidencia femenina en partidos políticos chilenos según sector político desde el 1989 (año en que presidió la primera mujer un partido). 

Hice una tabla dinámica en Excel a partir de una única columna de mi tabla: la de signo político. Esta solo contabilizaba la frecuencia por lo que incluí la columna de Período. Sin embargo, este cruce no me fue útil porque se ordenaban por signo político y no en orden cronológico. Revisé nuevamente mi tabla original y ahí estaban: ordenadas cronológicamente. Copié y pegué las mismas columnas directamente a otra hoja de excel. 

Ya que mi tabla tiene solo un poco más de 20 filas, hice a mano una nueva que resuma los datos que deseo visualizar. Para esto, dejé los signos ideológicos como títulos, dejando una fila para cada uno: Izquierda, centroizquierda, centro, centroderecha, derecha y ultraderecha. Según los datos pertinentes decidí no incluir a la ultraizquierda ya que actualmente no hay partidos en Chile que se identifiquen como tal. En las siguientes columnas dejé períodos, de manera que contabilizo las presidentas de partidos políticos según signo ideológico en distintos momentos a lo largo de los últimos 30 años. Definí 3 períodos para visualizar y comparar entre sí; 1989-2009, 2010-2019 y 2020-2026. 

Creo que es una buena visualización hacer gráficos de barras para cada período en que cada barra representa un signo político y su tamaño la cantidad de presidentas electas dentro de ese período.  

Para realizar la visualización de mis datos, subí el csv de mi nueva tabla a Google Collab. 

Al empezar a jugar con códigos de Altair me di cuenta de que la tabla tal como estaba, no me servía para lo que yo quería evidenciar. Yo quería hacer tres gráficos de barras distintos, por lo que en estas alturas del trabajo dividí esta base en tres nuevas, de forma que tenía una tabla por periodo para hacer de cada una un gráfico. Este paso lo hice manualmente. 

Subiré la tabla de datos de 1989-2009 y haré el gráfico antes de subir y realizar los otros dos. 

Gemini me ayudó con ordenar los signos ideológicos (en el eje X) de “Izquierda” a “Ultraderecha” con “sort”, cuando hice el gráfico inicialmente, salieron los signos desordenados y además marcas en 0,5, 1,5 y 2,5. Al tratarse de cantidad de presidentas electas, no tienen sentido los decimales, por lo que le pedí ayuda para que solo hubiese números enteros en el eje Y, para esto, agregó “format=d” al final de la información del eje Y, ese comando, hace la indicación de solo mostrar números enteros. 

Viendo el gráfico, me pareció que se entendía mejor de forma horizontal, así que intercambié los ejes y quedó como un rectángulo recostado. Sabía también que se podía personalizar los colores del gráfico pues por defecto son todas azules. Quería que cada signo ideológico tuviese su color, con ayuda de Gemini logré que fuese un rango entre rojo y azul de forma que centro también fuese un color neutral, de forma que los colores hagan más evidente la información que busco transmitir con el gráfico. 

Ya con esto solo tenía que replicar el código con las otras bases de datos. Subí la segunda base en formato csv con el código con el que nos ayudaron el lunes pasado en la noche: from google.colab import files / uploaded = files.upload(). 

Lo definí en Google Collab como “df2” y me aseguré de que estuviese bien a tabla con “.head” antes de poner el código del nuevo gráfico. Luego, copié el código del primer gráfico y cambié simplemente los años dentro del código ya que las guardé con nombres similares.  

Hice exactamente lo mismo con la tercera base de datos y posterior gráfico, la llamé en Google Collab “df3”. 

Les puse títulos especificando que se trataba de presidentas de partidos políticos para que el gráfico se entendiera bien por sí solo. 

Respondiendo las preguntas que entregan los gráficos, encontré un nuevo dato que me pareció interesante visualizar. El aumento de mujeres electas entre periodos, el aumento exponencial; 4 en los primeros 20 años luego de que fuera electa la primera, 8 en los siguientes 10 años 

Creo que sería buena opción calcular una “tasa” de mujeres electas por año o cada dos años y comparar esas 3 cifras; 5 en 20 años, 8 en 10 años y 11 en 6 años en un nuevo gráfico simple de 3 barras. Para esto haré los cálculos manualmente y haré una tabla de datos con los períodos como títulos y los resultados respectivos. 

Haciendo la tabla decidí que era mejor dejarlos como decimal, creo que esa tasa da a entender mejor lo que quiero contar con el gráfico. 

Subí a Google Collab mi nuevo csv UTF-8 y lo llamé “df4”. En este caso se trata de un gráfico de barras más simple así que no copiaré los anteriores, sino que partiré directamente desde un código de barras simple en Altair. Además, quería un gráfico vertical por lo que debía invertir mis ejes respecto a los gráficos anteriores. 

El primer gráfico que obtuve era cuadrado y las “barras” también eran cuadradas. El problema estaba en que mis números eran decimales, había que aclararlo pues las puntuaciones tienen su propia función en código, para esto me ayudó Gemini agregando “decimal=','” junto al código con que definí el nombre del csv, para que lo lea de esa forma. 

Personalicé con la ayuda de Gemini la apariencia del gráfico; ancho de las barras, colores y título. Opté por un degradé de azules dejando el más oscuro en el primer período ya que engloba la mayor cantidad de años. 

Finalmente, mi visualización de datos permite comparar simple y directamente la participación femenina en política, específicamente de presidentas de partidos políticos y su aumento mediante visualizaciones de 3 periodos de 10 años aproximadamente. Esto da respuesta a preguntas como: 

¿Ha habido un aumento progresivo en la presidencia de mujeres en partidos políticos en los últimos años? O ¿A qué ideología pertenecen aquellos partidos que han tenido más presidentas? 