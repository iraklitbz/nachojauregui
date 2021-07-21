<template>
  <div class="home">
    <p v-html="$t('home1_html')"></p>
    <div class="hero-video">
       <div class="full-ratio">
           <div class="loading">
               <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 100 85">
                  <circle cx="30" cy="50" fill="#333">
                    <animate attributeName="r" values="0;5;0" dur="1.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="50" fill="#333">
                    <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="70" cy="50" fill="#333">
                    <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
                  </circle>
                </svg>
            </div>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/577173713" frameborder="0" allowfullscreen></iframe>
          </div>
    </div>
    <div class="portfolio">
      <div v-for="(item, id) in items" :key="id" @click.stop="openModal(item)" class="box">
          <div class="item-holder">
            <div class="item">
              <div class="overlay-background"></div>
              <div class="overlay">
                <div class="inner-overlay">
                  <h3>{{item.title}}</h3>
                  <span>{{item.smalltitle}} </span>
                </div>
              </div>
            </div>
            <img :src="item.img" alt="" >
          </div>
      </div>
    </div>
    <div data-app class="main-modal">    
      <Modal 
        :title="modalData.title" 
        :smalltitle="modalData.smalltitle" 
        :video="modalData.video" 
        :text="modalData.text"
        :cargo="modalData.cargo"
        :productora="modalData.productora"
        :agencia="modalData.agencia"
        :cliente="modalData.cliente"
        :dialog="dialog"
        :agenciaURL="modalData.agenciaURL"
        v-on:cerrarModal="updateDialog($event)"
  
      />
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from './../components/Modal.vue'
export default {
  name: 'Home',
  components:{
    Modal
  },

  data () {
      return { 
        dialog: false,
        modalData: {
          title: '',
          smalltitle: '',
          video: '',
          text: '',
          cargo: '',
          productora: '',
          agencia: '',
          cliente: '',
          agenciaURL: ''
        },
        items: [
        { title: "OLIVELEAKS",
          smalltitle: "TASTE THE TRUTH",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/pug.jpg", 
          video: "https://www.youtube.com/embed/987RSqK46k0",
          cargo: "DIRECCIÓN DE FOTOGRAFÍA, EDITOR, COLORISTA",
          productora: "LA CAÑA BROTHERS",
          agencia: "DDB ESPAÑA",
          cliente: "OLIVE OILS FROM SPAIN",
          text: "Rodado como un documental periodístico, este mockumentary para DDB España y OLIVE OILS FROM SPAIN, junto con otras 5 piezas, denuncia el hecho de que aún no se sepa de dónde procede el mejor aceite de oliva virgen extra del mundo a los EE.UU. Galardonado con el Premio Bronce en INTEGRATED de los BEST AWARDS 2019."
        },
        { 
          title: "DOCUMENTAL", 
          smalltitle: "LO QUE DE VERDAD IMPORTA",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/crate-logo.jpg",
          video: "https://www.dailymotion.com/embed/video/x81a0x4",
          cargo: "DIRECCIÓN, REALIZACIÓN",
          productora: "LA CAÑA BROTHERS",
          cliente: "MOVISTAR +",
          text: "La fundación ''Lo que de verdad importa'' tiene como objetivo difundir valores humanos universales a la sociedad. A través de los testimonios de sus colaboradores y personajes relevantes conocemos su historia y futuro. Disponible en Movistar +."
        },
        { 
          title: "SAGARDOBUS", 
          smalltitle: "IGO NAHI?",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/dress.jpg",
          video: "https://www.youtube.com/embed/zoIQofbG5JY",
          cargo: "DIRECCIÓN, REALIZACIÓN, EDICIÓN",
          cliente: "SAGARDOBUS",
          text: "Este spot de Sagardobus es un guiño a lo que somos, hemos sido y que queremos ser. Un texto inspirado en el último y célebre discurso de Eva Perón, evocando al amor de un pueblo hacia su tierra."
        },
        { 
          title: "ABANDERADOS DEL ESFUERZO", 
          smalltitle: "",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/girl.jpg",
          video: "https://www.youtube.com/embed/JbVzOcpBnNw",
          cargo: "REALIZADOR, EDITOR",
          productora: "LA CAÑA BROTHERS",
          agencia: "AFTERSHARE.TV",
          agenciaURL: "https://aftershare.tv/es/",
          cliente: "FUNDACIÓN TRINIDAD ALFONSO",
          text: "Varios deportistas del FER soñaban con disputar los Juegos Olímpicos en 2020, pero sus metas se vieron truncadas por el COVID-19. Este documental resume sus entrenamientos antes, durante y después del confinamiento; y de cómo adaptarse a las dificultades es parte de su filosofía de vida. Disponible en Prime Video y YouTube."
        },
        { 
          title: "#PRIMERO", 
          smalltitle: "LA SERIE",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/architecture2X.jpg",
          video: "https://www.youtube.com/embed/k-PME6zJfaY",
          cargo: "DIRECCIÓN, REALIZACIÓN",
          productora: "ALBIÑANA FILMS",
          agencia: "MANIFIESTO",
          cliente: "CEU UNIVERSITIES",
          text: "#PRIMERO trata sobre la amistad entre Irene, Laura y Dani, tres amigos que se separan para vivir una experiencia que les cambiará la vida para siempre: su primer año de universidad. Tras seis meses de trabajo, esta serie de 10 capítulos es una estrategia multiplataforma de branded content para CEU Universities que trata de empatizar con la generación Z y sus vivencias personales. Disponible en YouTube."
        },
        { 
          title: "SENDEROS", 
          smalltitle: "CON PEPE MEDIAVILLA (CORTOMETRAJE)",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/portrait.jpg",
          video: "https://www.youtube.com/embed/zyo9Nuxl1mQ",
          cargo: "REALIZACIÓN, EDICIÓN",
          text: "SENDEROS es una despedida a una de las mejores voces del doblaje en habla hispana, Pepe Mediavilla. Hace un par de años conté con su maravillosa voz (y persona) en un proyecto, y cuando me enteré de su fallecimiento quise despedirme de la mejor manera posible honrando su memoria. Este cortometraje mezcla espectaculares imágenes de Jordania, con una magistral narración de Pepe y una genial banda sonora de Philip Cuccias, Hammock y Chris Coleman."
        },
        
        { 
          title: "EASTPAK", 
          smalltitle: "#HANDSFREELIVING",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/girl.jpg",
          video: "https://player.vimeo.com/video/277648030",
          cargo: "DIRECCIÓN, DP, EDICIÓN",
          productora: "LA CAÑA BROTHERS",
          agencia: "VF CORPORATION INTERNATIONAL",
          cliente: "EASTPAK WORLDWIDE",
          text: "La creación de contenido digital es un punto fuerte de la famosa marca belga, la cual depositó su confianza en un grupo de creadores para que representáramos su branding desde la ciudad que nunca duerme: Nueva York. Con el hashtag #handsfreeliving, representamos la filosofía Eastpak desde retratos en Williamsburg hasta spots al ritmo del andén. Todo ello enfocado para branded content en redes sociales."
        },
        { 
          title: "'HELMETS'", 
          smalltitle: "CON MARC MÁRQUEZ",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/sarabande.jpg",
          video: "https://www.redbull.com/embed/rrn:content:videos:9fe52f84-c87b-4f4e-bacc-679f0f5b04e1:es-ES",
          cargo: "EDITOR",
          productora: "LA CAÑA BROTHERS",
          cliente: "RED BULL ESPAÑA",
          text: "El casco es la seña de identidad de los pilotos a bordo de sus motos. Marc Márquez repasa qué significa para él cada uno de los diseños más icónicos que ha tenido en los últimos cinco años: cómo se gestó la idea, qué representa para él y qué aspecto de su personalidad resalta. Disponible en Red Bull TV."
        },
        { 
          title: "#MEJORCONECTADOS", 
          smalltitle: "",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/sarabande.jpg",
          video: "https://www.youtube.com/embed/ad5LxaQ4PNQ",
          cargo: "REALIZACIÓN, EDICIÓN",
          productora: "LA CAÑA BROTHERS",
          cliente: "TELEFÓNICA",
          text: "'#MEJORCONECTADOS' es la última campaña de Telefónica que trata de visibilizar el talento nacional a través de historias únicas de deportistas, científicos, historiadores...de personas que sean capaces de transmitir un mensaje intergeneracional. Toda la campaña completa en <a target='_blank' href='https://mejorconectados.com'>https://mejorconectados.com.</a>"
        },
        { 
          title: "LAST LIGHT", 
          smalltitle: "",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/sarabande.jpg",
          video: "https://player.vimeo.com/video/513394340",
          cargo: "DIRECCIÓN, DP, EDICIÓN",
          cliente: "FURIA",
          text: "'FURIA' es una marca de ropa orgánica comprometida con el medio ambiente, con diseños exclusivos de temáticas mitológicas, históricas y naturales. A través de LAST LIGHT, tratamos de transmitir su natulareza unisex a través de un baile sentido y fluido."
        }
      ]
      }
    },

    methods: {
      updateDialog(cerrarModal){
        this.modalData.video = cerrarModal.videoURL,
        this.dialog = cerrarModal.isClose
      },
      openModal(data){
        this.dialog = true,
        this.modalData.title = data.title;
        this.modalData.smalltitle = data.smalltitle;
        this.modalData.video = data.video;
        this.modalData.text = data.text;
        this.modalData.cargo = data.cargo;
        this.modalData.productora = data.productora;
        this.modalData.cliente = data.cliente;
        this.modalData.agencia = data.agencia;
        this.modalData.agenciaURL = data.agenciaURL;

      }
     
    }
  
}
</script>

<style>

.hero-video {
  max-width: 1140px;
  margin: 45px auto;
}

.full-ratio {
  position:relative;
  padding-top:56.25%;
  background-color: #f6f6f6;
}
.full-ratio .loading {   
  position:absolute;   
  left: 50%;   
  top: 50%;   
  transform: translate(-50%, -50%); 
  }
.full-ratio iframe {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.flex-video {
  display: flex;
  gap: 30px;
  padding: 30px;
  flex-direction: column;
}

.flex-video p{
  text-align: left;
  max-width: 100%;
}

.portfolio {
  max-width: 1140px;
  margin: 40px auto 40px auto;
  column-count: 1;
  column-gap: 30px;

}
 @media (min-width: 800px) {
    .portfolio {
      column-count: 3;
    }
  }

.portfolio .box {
  background-color: #f6f6f6;
 display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 30px;
  break-inside: avoid;
}
.item-holder {
  position: relative;
  cursor: pointer;
  grid-row: 1 / -1;
  grid-column: 1;
}

.item-holder .item {
  position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
}

.item-holder .overlay-background {
  position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #fff;
opacity: 0;
-webkit-transition: .3s all;
-o-transition: .3s all;
transition: .3s all;
}

.item-holder .overlay {
 display: flex;
position: absolute;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
}



.item-holder .inner-overlay h3{
margin-top: 0;
margin-bottom: 0;
font-size: 16px;
line-height: 20px;
letter-spacing: 3px;
font-weight: 600;
text-transform: uppercase;
opacity: 0;
-webkit-transform: translateY(10px);
-ms-transform: translateY(10px);
transform: translateY(10px);
-webkit-transition: .2s all;
-o-transition: .2s all;
transition: .2s all;
}

.item-holder .inner-overlay span{
opacity: 0;
display: block;
-webkit-transform: translateY(10px);
-ms-transform: translateY(10px);
transform: translateY(10px);
-webkit-transition: .2s all;
-o-transition: .2s all;
transition: .2s all;
}

.item-holder img{
width: 100%;
}

.item-holder:hover .overlay-background {
 opacity: .95;
}

.item-holder:hover .inner-overlay h3 {
opacity: 1;
-webkit-transition-delay: .2s;
transition-delay: .2s;
-webkit-transform: translateY(0);
-ms-transform: translateY(0);
transform: translateY(0);
}

.item-holder:hover .inner-overlay span {
opacity: 1;
-webkit-transition-delay: .3s;
transition-delay: .3s;
-webkit-transform: translateY(0);
-ms-transform: translateY(0);
transform: translateY(0);
}
.v-card__title {
  justify-content: center;
  width: calc(100% - 145px);
  margin: 0 auto;
}

</style>
