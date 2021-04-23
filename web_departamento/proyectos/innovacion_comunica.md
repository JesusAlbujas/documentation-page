---
meta: 
  - property: "og:image"
    content: /assets/img/proyectos/comunica.jpg
icon: card
title: Proyecto de innovación Comunica
author: Informática y Comunicaciones
time: 2021-04-22
category: Proyectos
tag:
  - Proyectos
  - Comunica
sticky: true
star: true
article: true
footer: Proyectos
comment: false
---

## :rocket: Descripción del proyecto Comunica

<p style="text-align:center;">
  <img src="/assets/img/proyectos/comunica.jpg" width=100%/>
</p>

<!-- more -->

El proyecto consiste en el desarrollo de un comunicador aumentativo y alternativo que permita a personas con problemas de comunicación y parálisis no solo comunicarse directamente con otras personas que estén en la misma estancia, si no en distintos lugares. Permite, además, comunicarse con su entorno, es decir poder realizar acciones con elementos de su hogar. 

La aplicación será multidispositivo y hará uso de los Amazon Web Services y la tecnología de control por voz Alexa, seguimiento ocular mediante Eye Tracking y control táctil. De esta manera **COMUNICA** ofrecerá un mecanismo que permita romper barreras y fomentar la rehabilitación e integración de las personas con dificultades de este tipo independientemente de los problemas que lo generen (paraplejia, parálisis cerebral, autismo, etc.).

Para ello el sistema COMUNICA hará uso de la teoría de relaciones de equivalencia de Sidman para crear una asociación entre pictogramas, sonido y acciones. Para ello haremos uso de redes hipermedia para poder crear estructuras gramaticales sencillas basadas en sujeto + verbo + predicado, y con ellos poder establecer comunicaciones sencillas con personas o realizar acciones con objetos. Esto es debido a que existe un conjunto de relaciones condicionales entre estímulos, de manera que a partir del entrenamiento explícito (directo) de una relación entre estímulos, aparecen nuevas relaciones implícitas entre los estímulos como resultados del entrenamiento. 

### Mecanismos de comunicación

El comunicador muestra una estructura de plantillas o redes hipermedia con imágenes similar a la que se hace de forma tradicional con las plantillas de pictogramas en papel. Las imágenes pueden ser pictogramas, fotografías y dibujos, y representan objetos que pueden pedirse o acciones que pueden ser realizadas. 
Cuando una imagen es seleccionada, se está indicando que se desea ese objeto o acción, y se escucha un sonido que es una frase o una palabra grabadas. El sonido permite al que lo escucha saber qué desea el usuario y al propio usuario. Además, al elegir una imagen de una plantilla es posible ir a otra plantilla donde se puede continuar con la selección de más imágenes. 

Esta “navegación” entre elementos de la red hipermedia y una gramática BNF o red semántica permite construir frases o hacer selecciones en las que se categoricen los objetos que se eligen como podemos ver en el ejemplo de boceto de interfaz.

<p style="text-align:center;">
  <img src="/assets/img/proyectos/comunica_1.jpg" width=100%/>
</p>

Además, el sistema permite:
- **Comunicación persona - persona**. Gracias a la asociación pictograma sonido y sujeto más acción con la cual el usuario va navegando a través de la red hipermedia y el uso de altavoces podremos recibir las intenciones que el usuario quiere expresar.
- **Comunicación persona - persona remota**. La aplicación permite enviar las intenciones del usuario a otro usuario usando los servicios web desarrollados y que al usuario remoto lo reciba en su dispositivo móvil.
- **Comunicación persona remota - persona**. La aplicación permite recibir gracias a los servicios web mensajes de personas que no estén presente en el mismo espacio y reproducirlos en los altavoces manejados por nuestro sistema o realizar llamadas de urgencia y socorro si se necesita.
- **Comunicación persona - entorno**. La aplicación permite mediante el uso de elementos gráficos poder interactuar con el entorno: encender luces, calefacción, aire acondicionado lavadora, portero, teléfono, etc. Así como rutinas o disparadores de varias acciones simultáneas rompiendo las barreras existentes para que los usuarios puedan interactuar con los elementos de su entorno. Además también permite que remotamente otra persona pueda interactuar con los elementos del entorno del usuario facilitando la labor de asistencia.

<p style="text-align:center;">
  <img src="/assets/img/proyectos/comunica_2.jpg" width=100%/>
</p>

- **Comunicación persona remota - entorno**. La aplicación también permite que remotamente otra persona pueda interactuar con los elementos del entorno del usuario facilitando la labor de asistencia.

<p style="text-align:center;">
  <img src="/assets/img/proyectos/comunica_3.jpg" width=100%/>
</p>

- **Administración y creación de perfiles**. Se podrán crear perfiles de usuarios para adaptar la construcción de frases de comunicación y acciones, así como personalizar los elementos gráficos y sonidos al perfil del usuario.
- **Multiplataforma**. La aplicación estará disponible en formato web y en móvil (tableta, teléfono y televisión).
- **Interacción accesible**. Los modos de interacción serán táctil, reconocimiento de voz y seguimiento ocular
- **Despliegue**. Para un despliegue rápido se utilizará la tecnología Docker, que permite crear contenedores de software, de forma que la aplicación pueda rápidamente transportarse al servidor. Además la aplicación estará disponible en un servidor web y en las tienda de aplicaciones móviles.

## :rocket: Descripción de la web del proyecto Comunica

Consiste en el desarrollo de una web de difusión del proyecto COMUNICA y la metodología asociada basado en el gestor de contenidos Wordpress. 

En este portal se podrán llevar a cabo inicialmente las siguientes funciones:
-	Exposición de cada una de las fases de desarrollo de la aplicación, así como herramientas de la metodología de desarrollo ágil utilizada.
-	Métodos de evaluación de los productos desarrollados.
-	Plataforma de intercambio de opiniones en forma de foro.
-	Gestión de usuarios garantizando la seguridad de acceso a la plataforma.
-	Gestión y moderación de noticias publicadas (notas de prensa, comentarios, etc.)
-	Integración con redes sociales para la difusión y explotación del proyecto.
-	Mecanismo de contacto para redes de centros y asociaciones interesadas en participar en el proyecto.

## :raised_hands: Participantes

### Alumnado

Los ciclos formativos que participarán en el proyecto de innovación y el grado en el que se beneficiarán de este son: 

- [**Alumnado de 2º curso del CGS de Desarrollo de Aplicaciones Web**](/fp_reglada/daw/)
- [**Alumnado de 2º curso del CGS de Desarrollo de Aplicaciones Multiplataforma**](/fp_reglada/dam/)
- [**Alumnado de 2º curso del CGS de Administración de Sistemas Informáticos en Red**](/fp_reglada/asir/)

### Profesorado

[Miembros](/members/) del departamento de **Informática y Comunicaciones** del [CIFP Virgen de Gracia](https://cifpvirgendegracia.com/), principalmente los profesores que forman parte de los equipos educativos del alumnado participante.

### Participante externo

**Fundación para la Atención Integral de las Personas con Discapacidad Intelectual - FUENTE AGRIA** de Ciudad Real, representada por [ASPADES - La Laguna](http://www.aspadeslalaguna.org/). Puertollano, Ciudad Real. Esta fundación representará el papel de client owner, es decir, es la que va a utilizar el producto final y va a participar en su desarrollo

## :books: Metodologías destacables

### Integración de módulos

La fuerte relación existente entre los módulos del segundo curso del ciclo de Desarrollo de Aplicaciones Multiplataforma ([DAM](/fp_reglada/dam/)), Desarrollo de aplicaciones Web ([DAW](/fp_reglada/daw/)) y Administración de Sistemas Informáticos y Redes ([ASIR](/fp_reglada/asir/)) lo hace idóneo para un proyecto común que entrelace lo aprendido en cada módulo; reforzando el aprendizaje de las mismas y ampliando, incluso, contenidos.

El aula como empresa de desarrollo de software aplicando dinámicas de planificación **SCRUM y KANBAN** y de herramientas profesionales relacionadas con la forma de trabajo de una empresa moderna de desarrollo de software. Habilidades de organización, autogestión, colaboración, oratoria y síntesis (entre otras) serán desarrolladas. De esta manera, el alumnado titulará con los conocimientos y las habilidades que le permitirán integrarse de una forma más eficiente y rápida en el sector empresarial.

### Aprendizaje colaborativo basado en retos

Mediante esta metodología se lanzará un reto en el aula, el cual se llevará a cabo a través de la filosofía Aprendizaje-Servicio. Se caracteriza por la intermodularidad, equipos docentes de ciclos autogestionados, evaluar para desarrollar en el desarrollo competecional y la adecuación del espacio de aprendizaje en entornos activos-colaborativos.

### Metodología orientada al marco laboral y al entorno empresarial

- **DevOps** (acrónimo inglés de development -desarrollo- y operations -operaciones-) es una práctica de ingeniería de software que tiene como objetivo unificar el desarrollo de software (Dev) y la operación del software (Ops). La principal característica del movimiento DevOps es defender enérgicamente la automatización y el monitoreo en todos los pasos de la construcción del software, desde la integración, las pruebas, la liberación hasta la implementación y la administración de la infraestructura.

- **Desarrollo ágil** de software que proporciona un enfoque para la toma de decisiones en los proyectos de desarrollo de software, y está relacionado con métodos de ingeniería del software basados en el desarrollo iterativo e incremental, donde los requisitos y soluciones evolucionan con el tiempo según la necesidad del proyecto. Así el trabajo es realizado mediante la colaboración de equipos auto-organizados y multidisciplinares, inmersos en un proceso compartido de toma de decisiones a corto plazo. Esta filosofía se resume en los siguientes principios: individuos e interacciones sobre procesos y herramientas, software funcionando sobre documentación extensiva, colaboración con el cliente sobre negociación contractual y respuesta ante el cambio sobre seguir un plan.


