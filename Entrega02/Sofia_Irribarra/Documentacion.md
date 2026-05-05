# DOCUMENTACIÓN DEL PROCESO DE DATOS  
## Ministras de Chile (1952–2026)

---

## 1. Explicación del proceso de limpieza de datos

El proceso de construcción y limpieza de la base de datos de ministras de Chile (1952–2026) se desarrolló como un ejercicio de reconstrucción histórica y sistematización de información dispersa. A diferencia de bases institucionales consolidadas, no existe un registro único que reúna variables biográficas y profesionales de todas las ministras, por lo que fue necesario construir la base mediante distintas fuentes.

### Pasos del proceso:

**Recolección y sistematización inicial:**  
La base se construyó a partir del archivo oficial entregado, el cual contenía información sobre nombramientos ministeriales (nombre, año, gobierno, ministerio). A partir de esta base, se filtraron únicamente los registros correspondientes a mujeres ministras.

**Depuración de duplicados:**  
Se identificó que varias ministras aparecían en múltiples filas debido a cambios de cartera. Para efectos analíticos, se mantuvieron todas las filas, pero se estandarizó la información biográfica para que cada persona tuviera datos consistentes en toda la base.

**Estandarización de variables:**  
Se corrigieron inconsistencias en nombres (tildes, dobles apellidos, errores de digitación) y en categorías como profesión. Esto permitió evitar duplicaciones erróneas y facilitar el cruce de información.

**Enriquecimiento de datos:**  
Dado que la base original no contenía variables biográficas clave, se realizó un cruce con fuentes externas para incorporar:

- Profesión  
- Edad al asumir  
- Estado civil  
- Maternidad  

Para esto se utilizó principalmente la lista de ministras de Chile disponible en Wikipedia, que permite acceder a las biografías individuales de cada ministra. :contentReference[oaicite:0]{index=0}  

Desde esas biografías se extrajo:
- Año de nacimiento → para calcular edad al asumir  
- Formación profesional  
- Información pública sobre hijos  
- Información disponible sobre estado civil  

**Criterio metodológico clave:**  
Se utilizó un criterio de rigurosidad estricta, por lo que:

- Solo se incorporaron datos cuando existía respaldo claro en fuentes públicas  
- En caso contrario, se utilizó la categoría:  
  **“No hay información pública verificada”**

Esto afecta principalmente las variables de estado civil y maternidad, que no siempre están documentadas.

---

## 2. Lista de fuentes y justificación

Se utilizaron fuentes de carácter institucional y biográfico para asegurar la validez de los datos:

### Base principal
- Archivo oficial de gabinetes ministeriales (entregado para el trabajo)

---

### Fuentes biográficas

**Wikipedia – Lista de ministras de Chile**  
https://en.wikipedia.org/wiki/List_of_female_cabinet_ministers_of_Chile  

- Permite identificar el universo completo de ministras desde 1952  
- Contiene enlaces a biografías individuales  

---

### Wikipedia – Biografías individuales
Utilizadas para obtener:
- Año de nacimiento  
- Profesión  
- Información sobre hijos  
- Estado civil (cuando está disponible)  

---

### Fuentes complementarias

**Biblioteca del Congreso Nacional (BCN)**  
https://www.bcn.cl  

- Utilizada para validar perfiles profesionales y trayectorias  

**Medios de comunicación y entrevistas**  
- Utilizados en casos donde Wikipedia no contenía información suficiente  

---

## 3. Limitaciones de la base de datos

La base presenta limitaciones importantes que deben ser consideradas en su análisis:

- No todas las ministras tienen biografías completas  
- La información sobre estado civil y maternidad no es sistemática  
- La edad al asumir depende de la disponibilidad del año de nacimiento  
- Algunas profesiones presentan múltiples categorías posibles (ej: académica, política, profesional técnica)

Estas limitaciones fueron abordadas mediante el uso de categorías explícitas de **“No hay información pública verificada”**, evitando inferencias no respaldadas.

---

## 4. Preguntas que se pueden responder con la base de datos

### A. Perfil de ministras (1952–2026)

- ¿Existe una tendencia hacia la profesionalización técnica en el tiempo?  
- ¿Qué profesiones predominan en distintos periodos históricos?  
- ¿Se observa un cambio generacional en la edad al asumir?  

---

### B. Género y biografía

- ¿La maternidad es una característica común entre ministras?  
- ¿Existe relación entre edad y presencia de hijos?  
- ¿Qué tan visible es la vida personal en los perfiles públicos?  

---

### C. Dimensión política

- ¿Qué gobiernos han tenido mayor presencia de ministras?  
- ¿Existe continuidad de mujeres en distintos gobiernos?  
- ¿Se observa concentración en ciertos ministerios?  

