# Documentación procesamiento de datos 

## Mi proceso de creación

Mi plan inicial era la creación de una tabla de datos que incluye las variables Nombre de la presidenta, Partido Político, Signo Ideológico (Derecha/Centro/Izquierda), Período, Profesión. 

Para le entrega 2, decidí enriquecer la tabla incluyendo la cantidad de hijos de cada presidenta y su estado civil al ser electas.  

Pensé en comenzar el barrido de información a partir de los 11 partidos políticos inscritos actualmente en el Servicio Electoral, para luego revisar en Wikipedia la lista de presidentes de cada uno. Desde ahí obtendría los nombres de mujeres para poder investigar sobre cada una. 

Sin embargo, definimos grupalmente que nuestro análisis contemple datos desde el 1950, y, aunque en el caso de esta base, la primera mujer presidenta de un partido político fue en 1989, el rango de tiempo hace necesario contemplar partidos políticos que no estén inscritos actualmente. 

Afortunadamente, encontré una base de datos en Wikipedia sobre las presidentas de partidos políticos electas en Chile, las variables presentes son: Nombre, Imagen, Partido político, Desde, Hasta y Notas. 

En la última variable se indica cuando se trata de la primera elección de una presidenta para cada partido político.  

En este caso, reestructuraré dentro de mi nueva base de datos solo algunos datos de esta base, pues no todos me son útiles. Aquellos que no voy a utilizar son las imágenes de cada presidenta y las notas. 

 Esta tabla me ahorra el barrido por las secciones de Wikipedia con los presidentes que ha tenido cada partido inscrito actualmente en el Servel y anotar en mi tabla a todas las mujeres que encuentre además de hacer lo mismo con los partidos políticos inscritos desde 1950. 

Quedan dos variables a completar en mi tabla, hijos y estado civil al ser electas. Esta información también está disponible en Wikipedia, en los perfiles personales de cada presidenta, la mayoría de estos están hipervinculados a sus nombres en la primera tabla de datos que utilicé.  

Sin embargo, una fuente más completa y confiable es la Biblioteca Nacional del Congreso de Chile, la cual cuenta con perfiles de cada personaje político que incluye datos bibliográficos como años de nacimiento, hijos, año de matrimonio en caso de haberse casado e información sobre su trayectoria política que me permite hacer un cruce de datos manual para calcular sus edades al ser electas.  

En el caso de Marilén Cabrera y Adriana Muñoz D'Albora por ejemplo, no contaba con una reseña biográfica en la Biblioteca del Congreso Nacional y en Wikipedia no había información sobre la fecha de su matrimonio. Para saber su estado civil al ser electa. Para llegar a este dato, las busqué en el rutificador con sus nombres completos, para con su Rut, poder buscar su certificado de matrimonio en la página del registro civil. En este, encontré fecha de contracción de matrimonio y de divorcio según el caso, mediante las cuales pude, junto al periodo de presidencia indicado en Wikipedia, definir su estado civil al momento de su elección. 

## ¿Qué preguntas puede responder mi base de datos?

¿Ha habido un aumento progresivo en la presidencia de mujeres en partidos políticos en los últimos años? 

¿Existe mayor representación femenina en partidos ligados a la izquierda? 

¿A qué ideología pertenecen aquellos partidos que han tenido más presidentas? 

¿Es distinto el perfil familiar (hijos y estado civil) de las presidentas según el período histórico y la ideología? 

## Lista de fuentes
### Tabla de Wikipedia con presidentas de partidos
https://es.wikipedia.org/wiki/Anexo:Presidentas_de_partidos_pol%C3%ADticos_en_Chile 


### Para complementar información cualitativa
#### Reseñas biográficas parlamentarias BCN 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Laura_Fiora_Rodr%C3%ADguez_Riccomini 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Gladys_del_Carmen_Mar%C3%ADn_Millie 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Mar%C3%ADa_Soledad_Alvear_Valenzuela 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Carolina_Toh%C3%A1_Morales 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Mar%C3%ADa_Isabel_Allende_Bussi 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Carolina_Goic_Boroevic 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Jacqueline_Van_Rysselberghe_Herrera 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Carmen_Frei_Ruiz-Tagle 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Paulina_Vodanovic_Rojas 

https://www.bcn.cl/historiapolitica/resenas_parlamentarias/wiki/Ximena_Rinc%C3%B3n_Gonz%C3%A1lez 

#### Perfiles biográficos Wikipedia

https://es.wikipedia.org/wiki/Roxana_Miranda 

https://es.wikipedia.org/wiki/Myriam_Verdugo_Godoy 

https://frevs.cl/ctshowcase-team-member/flavia-torrealba-d/ 

https://es.wikipedia.org/wiki/Ruth_Hurtado 

https://es.wikipedia.org/wiki/Gloria_Hutt 

https://es.wikipedia.org/wiki/Constanza_Mart%C3%ADnez 

#### Certificados de matrimonio para verificar estados civiles

 file:///C:/Users/catam/Downloads/MAT_CS_500691119264_6333296.pdf 

file:///C:/Users/catam/OneDrive/Desktop/MAT_CS_500691119936_6025646.pdf 

file:///C:/Users/catam/Downloads/MAT_CS_500691120447_8008573.pdf 

file:///C:/Users/catam/Downloads/MAT_AF_500691121658_8530776.pdf 

#### Verificación signos ideológicos 

https://pcchile.cl/nosotros/  

https://es.wikipedia.org/wiki/Democracia_cristiana#:~:text=La%20Democracia%20Cristiana%20es%20una%20corriente%20pol%C3%ADtica,personas%20concretas%2C%20no%20de%20fuerzas%20an%C3%B3nimas%20colectivas. 

https://www.bcn.cl/historiapolitica/partidos_politicos/wiki/Partido_Socialista_de_Chilehttps://en.wikipedia.org/wiki/Ev%C3%B3poli 