<template>
  <div class="home">
    <!-- <p v-html="$t('home1_html')"></p> -->
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
            <div class="around-img">
              <img :src="item.img" alt="" >
            </div>
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
        { title: this.$t('modal_title1'),
          smalltitle: this.$t('modal_subtitle1'),
          img: "https://nachojauregui.com/new/img/OLIVELEAKS.png", 
          video: "https://www.youtube.com/embed/987RSqK46k0",
          cargo: this.$t('modal_cargo1'),
          productora: "LA CAÑA BROTHERS",
          agencia: "DDB ESPAÑA",
          cliente: this.$t('modal_cliente1'),
          text: this.$t('modal1_html')
        },
        { 
          title: this.$t('modal_title7'), 
          smalltitle: this.$t('modal_subtitle7'),
          img: "https://nachojauregui.com/new/img/LQDVI.png",
          video: "https://www.dailymotion.com/embed/video/x81a0x4",
          cargo: this.$t('modal_cargo7'),
          productora: "LA CAÑA BROTHERS",
          cliente: this.$t('modal_cliente7'),
          text: this.$t('modal7_html')
        },
        { 
          title: this.$t('modal_title8'), 
          smalltitle: this.$t('modal_subtitle8'),
          img: "https://nachojauregui.com/new/img/SAGARDOBUS.png",
          video: "https://www.youtube.com/embed/zoIQofbG5JY",
          cargo: this.$t('modal_cargo8'),
          cliente: this.$t('modal_cliente8'),
          text: this.$t('modal8_html')
        },
        { 
          title: this.$t('modal_title6'), 
          smalltitle: this.$t('modal_subtitle6'),
          img: "https://nachojauregui.com/new/img/ADE.png",
          video: "https://www.youtube.com/embed/JbVzOcpBnNw",
          cargo: this.$t('modal_cargo6'),
          productora: "LA CAÑA BROTHERS",
          agencia: "AFTERSHARE.TV",
          agenciaURL: "https://aftershare.tv/es/",
          cliente: this.$t('modal_cliente6'),
          text: this.$t('modal6_html')
        },
        { 
          title: this.$t('modal_title3'), 
          smalltitle: this.$t('modal_subtitle3'),
          img: "https://nachojauregui.com/new/img/PRIMERO.png",
          video: "https://www.youtube.com/embed/k-PME6zJfaY",
          cargo: this.$t('modal_cargo3'),
          productora: "ALBIÑANA FILMS",
          agencia: "MANIFIESTO",
          cliente: this.$t('modal_cliente3'),
          text: this.$t('modal3_html')
        },
        { 
          title: this.$t('modal_title9'), 
          smalltitle: this.$t('modal_subtitle9'),
          img: "https://nachojauregui.com/new/img/senderos.png",
          video: "https://www.youtube.com/embed/zyo9Nuxl1mQ",
          cargo: this.$t('modal_cargo9'),
         text: this.$t('modal9_html')
        },
        
        { 
          title: this.$t('modal_title10'), 
          smalltitle: this.$t('modal_subtitle10'),
          img: "https://nachojauregui.com/new/img/MFNY.png",
          video: "https://player.vimeo.com/video/277648030",
          cargo: this.$t('modal_cargo10'),
          productora: "LA CAÑA BROTHERS",
          agencia: "VF CORPORATION INTERNATIONAL",
          cliente: this.$t('modal_cliente10'),
           text: this.$t('modal10_html')
        },
        { 
          title: this.$t('modal_title2'), 
          smalltitle: this.$t('modal_subtitle2'),
          img: "https://nachojauregui.com/new/img/HELMETS.png",
          video: "https://www.redbull.com/embed/rrn:content:videos:9fe52f84-c87b-4f4e-bacc-679f0f5b04e1:es-ES",
          cargo: this.$t('modal_cargo2'),
          productora: "LA CAÑA BROTHERS",
          cliente: this.$t('modal_cliente2'),
          text: this.$t('modal2_html')
        },
        { 
          title: this.$t('modal_title5'), 
          smalltitle: this.$t('modal_subtitle5'),
          img: "https://nachojauregui.com/new/img/SISHEIDO.png",
          video: "https://www.youtube.com/embed/ad5LxaQ4PNQ",
          cargo: this.$t('modal_cargo5'),
          productora: "LA CAÑA BROTHERS",
          cliente: this.$t('modal_cliente5'),
          text: this.$t('modal5_html')
        },
        { 
          title: this.$t('modal_title4'), 
          smalltitle: this.$t('modal_subtitle4'),
          img: "https://nachojauregui.com/new/img/FURIA.png",
          video: "https://player.vimeo.com/video/513394340",
          cargo: this.$t('modal_cargo4'),
          cliente: this.$t('modal_cliente4'),
          text: this.$t('modal4_html')
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

.around-img {
  height: 100%;
}



.hero-video {
  max-width: 1140px;
  margin: 45px auto 65px auto;
}
 @media (min-width: 800px) {
   .hero-video {
        margin: 45px auto;
      }
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


}
 @media (min-width: 800px) {
    .portfolio {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
  }

.portfolio .box {
  background-color: #f6f6f6;
  width: 100%;
  margin-bottom: 30px;
  height: 194px;
}
@media (min-width: 800px) {
   .portfolio .box {
    background-color: #f6f6f6;
    width: calc(25.65% - 30px);
    height: auto;
    }
    .portfolio .box:not(:nth-child(4n)) {
    margin-right: 30px;
    }
     .portfolio .box:last-child {
      margin-right: 0px;
    }
  }
.item-holder {
  position: relative;
  cursor: pointer;
  height: 100%;
}

.item-holder .item {
  position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 10;
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
  object-fit: cover;
  height: 100%;
  filter: gray;
  filter: grayscale(100%);
}

.item-holder:hover .overlay-background {
 opacity: .65;
}

.item-holder:hover img{
  filter: initial;
  filter: initial;
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

.bold {
  color: #000;
  font-weight: bold;
}

</style>
