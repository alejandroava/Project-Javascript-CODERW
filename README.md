# CodeRW  

|Integrantes          | Roles                            |
|:--------------------|:---------------------------------|
|Juan Pablo Arias     | FrontEnd Developer y Scrum Master|
|Juan Fernando Tuiran | Full Stack Developer             |
|Alejandro Velazquez  | FrontEnd Developer               |
|Jonatan Suarez       | BackEnd Developer                |

## Objetivos
1. Creación de una plataforma de aprendizaje adaptativa, que permita fortalecer y fomentar el aprendizaje autónomo de nuestros coders. Y así mismo, responder a las necesidades inmediatas, individuales y colectivas que pueden generarse en el proceso de formación.
2. Fomentar una comunidad de entrenamiento y competencia sana.
3. Fomentar los lazos en la comunidad de coders.

## Planteamiento del problema
La industria del software está en constante evolución... Las tecnologías emergentes crean una brecha de habilidades entre los desarrolladores de software y la demanda del mercado, por lo que esto disminuye el desarrollo y productividad de una empresa.

Los mentores de Riwi desempeñan un papel fundamental en la transmisión de conocimiento y experiencia a los coders, no obstante, este personal debe mantenerse a la vanguardia día a día, sin embargo, la evolución del mercado no da tregua.  Los mentores deben facilitar material actualizado y de calidad para poder fomentar un aprendizaje que logre satisfacer las demandas del mercado, es en la pedagogía individual hacia cada coder por parte de un mentor donde nace el problema… Ya que cada mentor no posee el tiempo necesario para satisfacer todas las necesidades individuales de cada coder y al mismo tiempo mantenerse a la vanguardia.

Esto genera que el seguimiento de formación sea menos continuo y observado a detalle, contribuyendo a disminuir la calidad del producto empresarial. A partir de esto surge otro problema y es que no existe una correcta identificación de las debilidades que existen en cada coder y ya que no existe una identificación tampoco existe un tratamiento.

Existe un problema que manejan todos los centros de educación… El cual consiste en lograr una persistencia durante el proceso de formación ya que así los conocimientos quedan mayor mente arraigados, sin embargo, en vez de cumplirse lo primero, sucede todo lo opuesto… Existe una cultura de aprendizaje momentáneo, es decir, donde el sujeto solo busca lograr cumplir con un objetivo inmediato... Este es el hito central del planteamiento, ya que es la base de los problemas mencionados anteriormente por lo tanto es el principal objeto de solución de este proyecto.

## Alcance
1. Corto Plazo: Estabilizar la plataforma y definir los roles que podran crear contenido y retos dentro de la plataforma.
2. Mediano Plazo: Implementar un plan piloto dentro de la comunidad de Riwi, en dónde los mentores puedan crear el contenido y los retos y los demás coders puedan realizarlos.
3. Largo Plazo: Usar la plataforma de aprendizaje dentro de Riwi con las futuras cohortes y comercializar el acceso a otras instituciones.

## Requisitos Funcionales e Historias de Usuario
- HU1 
  - Navegación del sitio.
  - Como usuario, quiero poder acceder a las diferentes secciones de la aplicación a través de una barra lateral (menú desplegable) y una barra de navegación para poder navegar fácilmente por el sitio y         encontrar lo que necesito rápidamente.
  - Usuario
- RF1.1
  - Crear el componente menú desplegable de navegación.
  - Crear un componente de menú hamburguesa el cual, con un evento click, desplegará la barra lateral de navegación en cualquier escena.
  - Develop Team
- RF1.2
  - Diseñar la estructura y funcionalidad de la barra lateral.
  - Crear un diseño atractivo y eficaz para la barra lateral, la cuál contendrá enlaces a todas las secciones importantes de la online learning platform. Una vez creada visualmente, adicionarle la               funcionalidad para que se haga visible y se oculte con el componente de menú de hamburguesa.
  - Develop Team
- RF1.3
  - Crear el componente barra de navegación superior.
  - Diseñar el componente navbar para reutilizarlo en cualquier escena. Este componente debe incluir enlaces importantes y logotipo de la online learning platform.
  - Develop Team
RF1.4
Enrutar los componentes.
Según la elección del usuario en los componentes de menú desplegable y barra de navegación superior, se deben definir las rutas para lograr mostrar el contenido de la escena necesaria.
Develop 
Team
RF1.5
Realizar pruebas de usabilidad de los componentes.
Testear la correcta funcionalidad de la barra lateral y la barra de navegación superior para garantizar el enrutamiento deseado, logrando así un alto nivel de UX.
Develop 
Team
HU2 
Visualización de perfil. 
Como usuario, deseo ver mi información básica, mi progreso de
Usuario

Requisitos Funcionales





cada uno de los módulos y mis medallas obtenidas dentro de mi perfil para tener una visión general de mi actividad y desempeño en el online learning platform.


RF2.1 
RF2.2 
HU3 
Crear la escena Perfil. 
Consultar la información del usuario. 
Contenido del sitio.
Se debe crear una escena que refleje dinámicamente la información según el usuario autenticado. 
La escena Perfil debe recopilar la siguiente información: 
● Nombre de usuario. 
● Correo electrónico. 
● Mostrar la cantidad de retos completados y el porcentaje completado de cada módulo. 
● Lista de medallas obtenidas por el usuario. 
Según el usuario que esté autenticado en el navegador, se debe consultar en las bases de datos definidas los datos y estadísticas obtenidas por el usuario en cuestión. Esta consulta debe conectar con la escena para poder dinamizar el contenido mostrado. 
Como usuario, quiero participar en diferentes tipos de juegos interactivos (como juegos de preguntas y respuestas) para poner a prueba mis conocimientos y habilidades de programación de una manera divertida y educativa.
Develop 
Team 
Develop 
Team 
Usuario
RF3.1
Diseñar la escena principal del sitio.
Cuando un usuario ingresa al sitio y se autentica de manera satisfactoria lo redirigirá a una escena principal llamada Dashboard. Esta escena debe mostrar cada uno de los módulos a los que el usuario puede ingresar.
Develop 
Team
RF3.2
Definir módulos de la plataforma.
Los lenguajes de programación que serán enseñados dentro de la plataforma en su primera versión serán: HTML, CSS y JavaScript. De esa manera se deben mostrar en la escena de Dashboard estos 3 módulos, y posteriormente diseñar la escena de cada uno de estos módulos en donde
Develop 
Team







se mostrará la lista de los retos relacionados.


RF3.3 
Desarrollar los retos.
Dentro de la escena de cada módulo, se debe mostrar una lista de los retos relacionados a este. Cada uno de estos retos será una escena nueva la cuál será cargada cuando el usuario haga su elección. 
Se deben desarrollar los componentes visuales y la lógica dentro de la escena de cada uno de los retos.
Develop 
Team
HU4 
Sistema de puntuación.
Como usuario, espero recibir puntos por cada actividad completada en los juegos interactivos dentro de los módulos, para poder medir mi progreso y compararlo con el de otros usuarios.
Usuario
RF4.1
Diseñar lógica dentro de los retos.
Una vez creadas todas las escenas de los retos de cada uno de los módulos, se debe diseñar e implementar dentro de cada una de estos retos la lógica del timer y del porcentaje de acierto conseguido por el usuario, con base a estas dos funcionalidades se construirá el sistema de puntuación.
Develop 
Team
RF4.2
Implementar modelo matemático.
Con base a los datos obtenidos dentro de cada reto, relacionados a las funcionalidades del timer y del porcentaje de aciertos, se debe investigar e implementar un modelo matemático de puntuación que beneficie a los usuarios más rápidos y precisos.
Develop 
Team
RF4.3
Guardar datos del sistema de puntuación.
Dentro de la base de datos del proyecto, se debe crear una tabla de estadísticas que se relacione con la tabla de usuarios para así obtener la estadísticas de cada usuario del sistema. En esta tabla se debe guardar la puntuación (según el modelo matemático implementado) obtenida por el usuario únicamente en el primer intento de cada reto, además el sitio guardará los datos de mejor tiempo, mejor porcentaje de acierto y cantidad total de intentos del usuario por reto.
Develop 
Team



HU5 
Sistema de medallas.
Como usuario, deseo que se me otorguen medallas por alcanzar ciertos logros en el online learning platform para aumentar mi motivación y compromiso con el aprendizaje.
Usuario
RF5.1
Diseñar los conceptos de las medallas.
Para crear el sistema de medallas, se necesita definir las acciones que recompensarán a los usuarios con la obtención de una medalla (como completar módulos o obtener una puntuación alta en un reto). 
Una vez definida la lista de medallas obtenibles dentro de la online learning platform, se procede a diseñar los conceptos visuales de cada una de estas.
Develop 
Team
RF5.2 
RF5.3
Desarrollar la lógica de obtención de medallas. 
Guardar datos del sistema de medallas.
Con la lista de medallas ya definida, se puede proceder con el desarrollo lógico de los desencadenadores que hacen al usuario obtener cada una de estas. Este desencadenamiento se puede dar dentro de las escenas de los retos o dentro de las escenas de los módulos. 
Al igual que el sistema de puntuación para el sistema de medallas se creará una tabla en la base de datos del proyecto, la cual se relaciona con la tabla de usuarios para consultar las medallas obtenidas por cada usuario. Cuando un desencadenador se ejecuta en la lógica definida, el sistema convierte en true la columna de la medalla en cuestión, lo que hace que en el perfil del usuario ahora se muestre la visual de esa medalla.
Develop 
Team 
Develop 
Team
HU6
Estructura de la plataforma.
Como Team Leader quiero desarrollar la online learning platform bajo la arquitectura Single Page Application para organizar la estructura del sitio por escenas y mejorar la optimización del mismo.
Team Leader
RF6.1
Crear arquitectura Frontend.
Para construir un sitio bajo la arquitectura SPA, es necesaria la comprensión y el uso de ciertos conceptos de frontend:
Team Leader







● En este proyecto se usará un único archivo HTML el cuál 
dinamizará todo el contenido mostrado en su etiqueta “root“. 
● La dependencia de Webpack nos ayudará a unificar cada archivo JS en uno sólo para mejorar de esta manera la optimización del sitio. 
● La dependencia de Babel traducirá el código escrito a una versión entendible por 
todos los navegadores, y así mejorar la accesibilidad de la plataforma. 
● Para mostrar al usuario múltiples “páginas web“ con un único archivo HTML es necesario el uso de un Router, el cuál define que escena mostrar según la “ruta“ que el 
usuario este siguiendo.


RF6.2
Crear arquitectura Backend.
“Un miembro del backend explica esta tarea según el ejemplo de frontend.”
Team Leader
RF6.3 
Testear conexión.
Se debe probar la funcionalidad y correcta conexión entre el backend y el frontend del proyecto, en este caso se probará con un login simple del usuario “John Doe” y el acceso a una escena de Dashboard.
Team Leader
HU7 
Recopilación de datos.
Como propietario de la online learning platform quiero recopilar los datos y estadísticas de los usuarios para controlar y administrar el funcionamiento de la plataforma.
Riwi
RF7.1
Modelar la base de datos.
El modelo inicial de la base de datos de la plataforma en su primera versión debe contener: 
● Tabla de usuarios, donde se recopila la información de autenticación de los usuarios. Esta tabla se relacionará con las siguientes mediante un userID.
Develop 
Team







● Tabla de estadísticas, donde se recopila la información de los usuarios por cada uno de los retos (Puntuación, Mejor 
tiempo, Mejor porcentaje de cumplimiento, Intentos). 
● Tabla de medallas, donde se relaciona el usuario con las medallas que ha obtenido.


HU8 
Panel de tips.
Como usuario, quiero poder acceder a una herramienta de ayuda dentro de los retos, la cuál contenga explicaciones relacionadas con el problema actual, para pensar respuestas rápidas y acertadas.
Usuario
RF8.1 
RF8.2
Crear el componente Ayuda. 
Diseñar el panel de ayuda.
Crear un componente de ícono “��“ el cuál, con un evento click, desplegará dentro del reto un panel de ayuda con pistas relacionadas a la solución del mismo. 
Crear el diseño visual del componente que se desplegará con el ícono ayuda “��“, posteriormente añadir la funcionalidad de que se haga visible y se oculte según el evento del usuario. Tener en cuenta que este componente se debe reutilizar en cada uno de los retos únicamente cambiando su contenido textual.
Develop 
Team 
Develop 
Team
HU9 
Estadísticas avanzadas.
Como usuario, quiero tener acceso a estadísticas detalladas de cada reto, incluyendo el mejor tiempo, el mejor resultado y la cantidad total de intentos; para analizar mi rendimiento e identificar áreas de mejora.
Usuario
RF9.1
Crear sección de estadísticas avanzadas.
Dentro de la escena Perfil, se debe crear una sección la cual muestra el rendimiento de cada usuario en cada uno de los retos existentes en la plataforma. Toda la información necesaria para esta sección ya está definida en la base de datos del proyecto, esta información por reto incluye:
Develop 
Team







● Cantidad total de intentos usados por el usuario. 
● Mejor tiempo de respuesta. 
● Mejor porcentaje de acierto obtenido. 
● Puntuación obtenida (primer intento).



