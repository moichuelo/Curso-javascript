INFORMACIÓN ADICIONAL:
El código del archivo partials.js se importa y ejecuta en el archivo scripts.js:

Los archivos html de la carpeta partials, son archivos parciales que nos permiten modificar el menú de navegación (aside),
el header y el footer para todos los archivos de forma genérica sin necesidad de ir 1 por 1. Por ello no cumplen con el estándar
html con la creación de las etiquetas html, head y body.

En algunas ocasiones al cargar elementos mediante un fetch puede producir un "parpadeo" para evitarlo se puede poner el body oculto
y hacer que sea visible una vez que estén cargados todos los elementos (archivo partials.js)