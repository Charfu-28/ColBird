import { Component, OnInit, Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; //Importo Router y NavigationExtras para la navegacion entre ventanas

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  pajaros=[
    { //1
      id: "001",
      nombre: "Amazilla Coliazul",
      imagen: "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg", 
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg", 
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Amazilia_Coliazul.mp3",
      nombre_cientifico: "Amazilia Saucerottei | The Steely-Vented Hummingbird",
      contenido: "Posee el pico recto con la mandíbula inferior rosada y de ápice oscuro, con la cola ligeramente ahorquillada de color azul acero, lo que le da su nombre. Se observa principalmente en flores de arbustos pequeños. común en áreas cultivada, matorrales y jardines. Confundido fácilmente con otras especies similares. Distribuido en varias partes del país hasta los 2000 msnm y desde Nicaragua hasta Venezuela."
    },
    
    { //2
      id: "002",
      nombre: "Amazilla Colirrufa",
      imagen: "/assets/Imagenes/aves_pereira/Amazilla Colirrufa/Amazilla Colirrufa1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Amazilia_Colirrufa.mp3", 
      nombre_cientifico: "Amazilia tzacatl | Rufous-tailed hummingbird",
      contenido: "Posee un color verde, cola de color castaño rufa y pico recto de color verde. Es bastante común en las áreas de jardines y zonas habitables. son agresivos, cazan insectos en vuelo y liban flores de árboles y arbustos pequeños. se distribuye en todo el país hasta los 1800 msnm y desde México hasta Venezuela."
    },

    { //3
      id: "003",
      nombre: "Atrapamoscas Pechirrayado",
      imagen: "/assets/Imagenes/aves_pereira/Atrapamoscas Pechirrayado/Atrapamoscas Pechirrayado2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Atrapamoscas Pechirrayado.mp3",
      nombre_cientifico: "Myiophobus fasciatus | The Bran-colored Flycatcher",
      contenido: "Son dificiles de observar y se encuentran solitarios o en parejas sobre cercas, en bordes de pastizales, sobre matorrales o en áreas intervenidas en procesos de recuperación. Fabrica su nido con cortezas, su distribución entre los 600 hasta los 2000 msnm desde Costa Rica hasta la Argentina."
    },

    { //4
      id: "004",
      nombre: "Atrapamoscas Ganadero",
      imagen: "/assets/Imagenes/aves_pereira/Atrapamoscas Ganadero/Atrapamoscas Ganadero1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Atrapamoscas Ganadero.mp3",
      nombre_cientifico: "Machetornis rixosa | Cattle Tyrant",
      contenido: "Es similar al Sirirí pero con un café oliva por encima, ojos notablemente rojos y patas más largas. Normalmente se encuentra sobre el suelo y en prados corriendo forrajeando y atrapando insectos. También se observa posado encima del ganado. Con distribución por debajo de los 2700 msnm desde Colombia hasta Argentina."
    },

    { //5
      id: "005",
      nombre: "Atrapamoscas Guardapuentes",
      imagen: "/assets/Imagenes/aves_pereira/Atrapamoscas Guardapuentes/Atrapamoscas Guardapuentes1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Atrapamoscas Guardapuentes.mp3",
      nombre_cientifico: "Sayornis nigricans | The Black Phoebe",
      contenido: "Especie relativamente común, a menudo se encuentra posado sobre superficies cerca del agua en arroyos, lagos y lagunas donde caza insectos. De color negro hollín con el abdomen blanco. Con Distribución entre 100 y 2800 msnm y desde Estados Unidos hasta Argentina. "
    },

    { //6
      id: "006",
      nombre: "Atrapamoscas Ocráceo",
      imagen: "/assets/Imagenes/aves_pereira/Atrapamoscas Ocraceo/Atrapamoscas Ocraceo1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Atrapamoscas Ocraceo.mp3",
      nombre_cientifico: "Mionectes oleagineus | The Ochre-bellied Flycatcher",
      contenido: "Especie solitaria e inconspicua excepto cuando canta en época de reproducción, su canto es característico, repitiendo en serie un sonido como pato de hule. Es común en la selva húmeda, áreas en recuperación y bordes del bosque. Su distribución generalmente llega hasta los 1300 msnm, pero puede llegar a los 1700 msnm desde México hasta Bolivia "
    },

    { //7
      id: "007",
      nombre: "Atrapamoscas Oriental",
      imagen: "/assets/Imagenes/aves_pereira/Atrapamoscas Oriental/Atrapamoscas Oriental1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Atrapamoscas Oriental.mp3",
      nombre_cientifico: "Contopus virens | The Eastern Wood-pewee",
      contenido: "Es una ave migratoria, se reproduce en el Este de Norte América. Es difícil su identificación por el parecido con otros atrapamoscas de su género, con frecuencia se observa solitaria. Se encuentra en los niveles medios o bajos del bosque, sobre estacones o cercas de alambre. Se distribuye por debajo de los 2600 msnm invernando entre Colombia y Venezuela hasta Perú. "
    },

    { //8
      id: "008",
      nombre: "Atrapamoscas Verdoso",
      imagen: "/assets/Imagenes/aves_pereira/Atrapamoscas Verdoso/Atrapamoscas Verdoso1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Atrapamoscas Verdoso.mp3",
      nombre_cientifico: "Empidonax virescens|Acadian Flycatcher",
      contenido: "Se reproduce en el Este de Norte América. De difícil identificación, en ocasiones se observa por sus sonidos, aunque es frecuente que permanezca silencioso. Se observa en el sotobosque de bosques maduros, y presenta una distribución altitudinal hasta los 2700 msnm, invernando entre Costa Rica, Venezuela y Ecuador."
    },

    { //9
      id: "009",
      nombre: "Barranquero Andino",
      imagen: "/assets/Imagenes/aves_pereira/Barranquero Andino/Barranquero Andino4.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Barranquero Andino.mp3",
      nombre_cientifico: "Momotus aequatorialis | Andean Motmot",
      contenido: "Es el barranquero más grande y común en bosques andinos. Es de gran tamaño con  cabeza voluminosa y cola larga, la cual termina en forma de raqueta y presenta movimientos pendulares. Generalmente está en la parte media o baja de los árboles. Hace sus nidos en túneles  que construye sobre los barrancos de donde se origina su nombre. Con distribución en los bosques de las tres cordilleras entre los 1400 y los 3000 msnm exceptuando el Pacífico y desde Colombia hasta Bolivia. "
    },

    { //10
      id: "010",
      nombre: "Batará Carcajada",
      imagen: "/assets/Imagenes/aves_pereira/Batara Carcajada/Batara Carcajada2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Batara Carcajada.mp3",
      nombre_cientifico: "Thamnophilus multistriatus| Bar-crested Antshrike",
      contenido: "Relativamente común en bordes enmalezados, se camufla entre árboles y arbustos. Con un marcado dimorfismo sexual, siendo el macho completamente barrado de negro y blanco. La hembra presenta una coloración rufo castaño por encima y barrado de negro y blanco en las partes inferiores. Su voz es típica a los demás batarás pero se diferencia por sus notas. se observa también en el sotobosque de bosques maduros y tiene una distribución hasta los 2200 msnm entre Venezuela y Colombia "
    },

    { //11
      id: "011",
      nombre: "Batará Mayor",
      imagen: "/assets/Imagenes/aves_pereira/Batara Mayor/Batara Mayor2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Batara Mayor.mp3",
      nombre_cientifico: "Taraba major | The Great Antshrike",
      contenido: "Ave robusta, exhibe su cresta cuando está cantando. Tiene ojos rojos y el macho es de color negro encima y blanco debajo; la hembra es rufa encima y blanco debajo. Normalmente se encuentran en parejas y su canto es característico, como el de una pelota rebotando. Tiene una distribución en varias regiones del país hasta los 1500 msnm y desde México hasta la Argentina. "
    },

    { //12
      id: "012",
      nombre: "Batará Occidental",
      imagen: "/assets/Imagenes/aves_pereira/Batara Occidental/Batara Occidental1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Batara Occidental.mp3",
      nombre_cientifico: "Thamnophilus atrinucha | Western Slaty-Antshrike",
      contenido: "Es un ave de tamaño pequeño con cabeza grande, se encuentran solitarios o en parejas, en bandas mixtas de otros hormigueritos en el nivel medio o bajo del dosel. Son bastantes inconspicuos y se mueven lentamente. tienen un canto o gorjeo acelerado como otros Batarás. Esta especie está en la lista roja de especies amenazadas de la UICN de 2011. Tiene una distribución hasta los 1500 msnm desde México hasta el sur del Ecuador. "
    },

    { //13
      id: "013",
      nombre: "Bichofué Gritón",
      imagen: "/assets/Imagenes/aves_pereira/Bichofue Griton/Bichofué Gritón2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Bichofue Griton.mp3",
      nombre_cientifico: "Pitangus sulphuratus | Great Kiskadee",
      contenido: "Es distinguido por su llamado fuerte y ruidoso, el cual le confiere el nombre característico de bi-cho-fuii. Es agresivo y muy oportunista; se alimenta de insectos y de frutas. Común en las zonas urbanas y rurales de todo el país hasta los 1500 msnm y con distribución desde el Sur de Estados Unidos hasta Argentina. 	"
    },

    { //14
      id: "014",
      nombre: "Carpintero Buchipecoso",
      imagen: "/assets/Imagenes/aves_pereira/Carpintero Buchipecoso/Carpintero Buchipecoso1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Carpintero Buchipecoso.mp3",
      nombre_cientifico: "Colaptes punctigula | Spot-breasted Woodpecker",
      contenido: "Se diferencia por su frente negra, su coronilla en la parte superior roja y los lados de la cabeza blancos. Es característico su pecho amarillo claro con puntos negros dispersos hacia los lados. se observa solitario y en parejas en partes bajas de áreas abiertas y regularmente en el suelo comiendo insectos ( hormigas). Con distribución a las 1500 msnm en todo el país excepto en algunos lugares de la costa pacífica y desde Panamá hasta Bolivia."
    },

    { //15
      id: "015",
      nombre: "Carpintero Cariblanco",
      imagen: "/assets/Imagenes/aves_pereira/Carpintero Cariblanco/Carpintero Cariblanco1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Carpintero Cariblanco.mp3",
      nombre_cientifico: "Colaptes rubiginosus | Golden-olive Woodpecker",
      contenido: "Tienen un gran parecido con el Carpintero Buchipecoso, pero lo diferencia su rabadilla barrada. Solitarios, en parejas o en grupos mixtos; su presencia es medianamente común en selvas de montaña desde el nivel medio del bosque hasta el dosel, en montes secundarios, guaduales y árboles dispersos. Se encuentra entre los 900 hasta los 3100 msnm desde México hasta la Argentina. "
    },

    { //16
      id: "016",
      nombre: "Carpintero de los Robles",
      imagen: "/assets/Imagenes/aves_pereira/Carpintero de los Robles/Carpintero de los Robles2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Carpintero de los Robles.mp3",
      nombre_cientifico: "Melanerpes formicivorus | The Acorn Woodpecker",
      contenido: "Presentan una máscara negra alrededor de los ojos blancos o azules claros y un parche negro alrededor del pico. Es negro por encima o por debajo estriado de blanco con negro. Con distribución en gran parte del país desde los 1400 msnm, en América se encuentran desde los Estados Unidos hasta Colombia."
    },

    { //17
      id: "017",
      nombre: "Carpintero Habado",
      imagen: "/assets/Imagenes/aves_pereira/Carpintero Habado/Carpintero Habado2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Carpintero Habado.mp3",
      nombre_cientifico: "Melanerpes rubricapillus | Red-crowned Woodpecker",
      contenido: "Su frente es de color blanco amarillento con coronilla roja y las partes superiores barradas de blanco y negro. se encuentra solitario o en parejas; en partes bajas cincelando cortezas buscando insectos. es común en matorrales áridos y semiáridos y también en áreas cultivadas. a menudo se le observa comiendo frutas como el plátano. Con distribución en casi todo el país hasta los 1700 msnm y desde Costa Rica hasta Venezuela."
    },

    { //18
      id: "018",
      nombre: "Carpintero Real",
      imagen: "/assets/Imagenes/aves_pereira/Carpintero Real/Carpintero Real1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Carpintero Real.mp3",
      nombre_cientifico: "Dryocopus lineatus | Lineated Woodpecker",
      contenido: "Es un carpintero de gran tamaño, con cresta grande y prominente, su bigote es rojo. Las dos líneas blancas de la espalda en forma de V no se unen. Solitarios o en parejas en cualquier altura de los troncos grandes, perforando la superficie de la corteza. comunes en los bordes de selva y cerca de cultivos. Con distribución en todo el país hasta los 2100 msnm y desde México hasta la Argentina."
    },

    { //19
      id: "019",
      nombre: "Chamón Parásito",
      imagen: "/assets/Imagenes/aves_pereira/Chamon Parasito/Chamon Parasito1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Chamon Parasito.mp3",
      nombre_cientifico: "Molothrus bonariensis | The Shiny Cowbird ",
      contenido: "El macho adulto es totalmente negro púrpura lustroso y la hembra café grisáceo opaco por encima y de un color pálido por debajo. es común observarlo caminando  con la cola erecta, forrajeando por el suelo en sitios abiertos o en grupos buscando insectos y semillas. Se caracterizan porque no construyen nidos y ponen sus huevos en nidos de otras especies, por lo tanto cuando nacen los pichones son criados por las aves que hicieron los nidos, creyendo que son sus propias crÍas. Ocupan un amplio rango de hábitats hasta los 2600 msnm, distribuyendose desde Panamá hasta la Argentina "
    },

    { //20
      id: "020",
      nombre: "Colibrí Cola de Raqueta",
      imagen: "/assets/Imagenes/aves_pereira/Colibri Cola de Raqueta/Colibri Cola de Raqueta2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Colibri Cola de Raqueta.mp3",
      nombre_cientifico: "Ocreatus Underwoodii | The Booted Racket-tail",
      contenido: "El macho se distingue fácilmente por su color verde brillante, garganta y pecho iridiscentes y principalmente por su extremo alargado con raquis desnudos terminando en grandes raquetas de color negro azulado. Generalmente solitario o con otros colibríes, es un colibrí común en bordes de selvas húmedas. La hembra es muy pequeña (7,6 cm) difícil de fotografiar en vuelo. Se distribuye entre los 1500 msnm hasta los 2500 msnm desde Colombia hasta Bolivia."
    },

    { //21
      id: "021",
      nombre: "Colibrí de Bufón",
      imagen: "/assets/Imagenes/aves_pereira/Colibri de Bufon/Colibri de Bufon1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Colibri de Bufon.mp3",
      nombre_cientifico: "Chalybura Boffonii | The White-vented Plumeleteer",
      contenido: "Se identifica por su pico negro y largo, de color verde brillante por encima e iridiscente por debajo, además por las alas infracaudales blanca. es relativamente común, bastante esquivos y se encuentran solitarios o en parejas en los bordes del bosque o bordes sombreados y también sobre árboles grandes. Se distribuye hasta los 2000 msnm desde Panamá hasta Venezuela. "
    },

    { //22
      id: "022",
      nombre: "Colibrí Collarejo",
      imagen: "/assets/Imagenes/aves_pereira/Colibri Collarejo/Colibri Collarejo2.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Colibri Collarejo.mp3",
      nombre_cientifico: "Florisuga mellivora | White-Necked Jacobin",
      contenido: "Se diferencia por su bello color azul lustroso en la cabeza, garganta y el pecho; con una media luna blanca en la nuca y las partes bajas también  blancas. Suelen verse solitarios o en parejas revoloteando a la caza de insectos. son poco comunes, se observan en bordes de selvas húmedas y muy húmeda. Se distribuye hasta los 1600 msnm en casi todo el país y desde México hasta Bolivia."
    },

    { //23
      id: "023",
      nombre: "Elaenia Copetona",
      imagen: "/assets/Imagenes/aves_pereira/Elaenia Copetona/Elaenia Copetona3.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Elaenia Copetona.mp3",
      nombre_cientifico: "Elaenia flavogaster | Yellow-bellied Elaenia",
      contenido: "Atrapamoscas de pico corto y redondeado, se diferencia de otros por la cresta erecta y dividida en el centro. Es la Elaenia más común en Colombia, es muy ruidosa cuando se encuentra activa, moviéndose por áreas semiabiertas y matorrales; también se pueden ver en áreas de cultivo y con menor frencuencia en parques y jardines. Con distribución hasta los 2100 msnm desde México hasta la Argentina. "
    },

    { //24
      id: "024",
      nombre: "Ermitaño Verde",
      imagen: "/assets/Imagenes/aves_pereira/Ermitanio Verde/Ermitanio Verde1.jpg",
      imagenes: [
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Ermitanio Verde.mp3",
      nombre_cientifico: "Phaethornis guy | The Green Hermit",
      contenido: "Es un Colibrí con un pico largo y curvado, con mandíbula inferior roja o rosada, encima verde oscuro y vientre gris oscuro. Cola larga y degradada con un par de rectrices más largas de ápice blanco. Es una especie poco común, se encuentra dentro del sotobosque, se Distribuye en las vertientes de las tres cordilleras desde los 900 hasta los 2700 msnm y desde Costa Rica hasta Perú."
    },

    { //25
      id: "025",
      nombre: "Esmeralda Occidental",
      imagen: "/assets/Imagenes/aves_pereira/Esmeralda Occidental/Esmeralda Occidental1.jpg",
      imagenes: [ 
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul2.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul3.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul4.jpg",
        "/assets/Imagenes/aves_pereira/Amazilia Verdiazul/Amazilia Verdiazul5.jpg"
      ],
      sonido: "/assets/Cantos/aves_pereira/Esmeralda Occidental.mp3",
      nombre_cientifico: "Chlorostilbon Melanorhynchus | Western Emerald",
      contenido: "Es un Colibrí de tamaño pequeño con un pico negro y recto de color verde iridiscente por debajo, con la cola ahorquillada de color azul acero, es solitario además es relativamente común en áreas semiabiertas, en rastrojo y cerca de zona habitables. Distribuido localmente al occidente de los Andes y Valle del Cauca principalmente entre los 1000 hasta los 2200 msnm y desde Costa Rica hasta Ecuador. "
    },


    {
      nombre:"Atrapamoscas maculado",
      imagen : "/assets/Imagenes/Atrapamoscas.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",
      nombre_cientifico: "El mas perro",
      contenido : "Atrapamoscas grande y fuertemente estriado, con frecuencia ruidoso. Su nombre Myiodynastes significa señor de las moscas, derivado de la raíces griegas muia = mosca y dynástes = señor."
    },

    {
      nombre:"Atrapamoscas Ocráceo",
      imagen : "/assets/Imagenes/Ocraceo.jpg", //No es el correcto canto
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",
      contenido : " Su nombre significa ave pequeña de color oliva y deriva del griego meionektes = pequeño y del latín oleagineus = coloreado de oliva."
    },
    
    

    {
      nombre:"Baratá carcajada",
      imagen : "/assets/Imagenes/Batara.jpg",
      sonido : "/assets/Cantos/Carcajada.mp3",
      contenido : "Las poblaciones de esta especie se encuentran principalmente en Colombia y una pequeña porción del noroeste de Venezuela. Su nombre Thamnophilus proviene de las raíces griegas thamnos = arbusto y philos = amante de. "
    },

    {
      nombre:"Batara Occidental",
      imagen : "/assets/Imagenes/bata_oc.jpg",
      sonido : "/assets/Cantos/Occidental.mp3",
      contenido : "Anteriormente considerada como una raza de T. punctatus. Su nombre Thamnophilus proviene de las raíces griegas thamnos = arbusto y philos = amante de."
    },

    {
      nombre:"Hormiguero Inmaculado",
      imagen : "/assets/Imagenes/hormiguero.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",//No es el correcto
      contenido : " El hormiguero inmaculado (en Colombia) (Hafferia immaculata), es una especie de ave paseriforme perteneciente al género Hafferia de la familia Thamnophilidae. Anteriormente formaba parte del amplio género Myrmeciza, de donde fue separada recientemente, en 2013. Es nativa del noroeste de América del Sur."
    },

    {
      nombre:"Cucarachero pechiblanco",
      imagen : "/assets/Imagenes/Atrapamoscas.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.jpg",
      contenido : "Su nombre hace referencia a su pico particularmente largo y los orificios nasales ligeramente ocultos. A menudo los individuos de esta especie son muy obvios y curiosos, aunque son adeptos de permanecer ocultos."
    },

    {
      nombre:"Cucarachero jaspeado",
      imagen : "/assets/Imagenes/jaspeado.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",//No es el correcto
      contenido : "El espatulilla común es un pájaro pequeño con la cabeza proporcionalmente grande y pico negro, largo y recto."
    },

    {
      nombre:"Espatulilla común",
      imagen : "/assets/Imagenes/espatulilla.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",// No es el correcto
      contenido : "Atrapamoscas grande y fuertemente estriado, con frecuencia ruidoso. Su nombre Myiodynastes significa señor de las moscas, derivado de la raíces griegas muia = mosca y dynástes = señor."
    },

    {
      nombre:"Tororoi dorsiescamado",
      imagen : "/assets/Imagenes/tororoi.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3", // No es el correcto
      contenido : "Esta especie es principalmente terrestre y le gusta saltar sobre el suelo o en troncos caidos, ocasionalmente se percha en ramas en el sotobosque. Busca de lombrices, insectos grandes, otros invertebrados y ranitas."
    },

    {
      nombre:"Trepatroncos cacao",
      imagen : "/assets/Imagenes/Trepador.jpg",
      sonido : "/assets/Cantos/Trepatroncos.mp3",
      contenido : "Anteriormente considera conespecífica con X. guttatus de la cual difiere en tamaño y canto."
    }
  ]

  
  //Agrego al constructor el Router
  constructor(private router: Router) { }

  //Envio como JSON el array de los pajaros con la posicion donde se dio click y que se 
  //muestre en la vista biblioteca-info
  ave_info(i: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.pajaros[i])
      }
    };
    this.router.navigate(['biblioteca-info'], navigationExtras);
  }

  ngOnInit() {
  }

}
