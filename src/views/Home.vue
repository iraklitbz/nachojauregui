<template>
  <div class="home">
    <p v-html="$t('home1_html')"></p>
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
      <v-dialog
      v-model="dialog"
      max-width="1140"
      persistent
    >
      <v-card>
         <v-card-actions class="closeBtn">
           <span @click="cerrarModal()"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg></span>
        </v-card-actions>
        <v-card-title class="text-h5">
            {{modalData.title}} - {{modalData.smalltitle}}
        </v-card-title>

        <div class="flex-video">
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
            <iframe :src="modalData.video"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p>{{modalData.text}}</p>
        </div>


       
      </v-card>
    </v-dialog>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  data () {
      return {
        dialog: false,
        modalData: {
          title: '',
          smalltitle: '',
          video: '',
          text: ''
        },
        items: [
        { title: "MIXTAPES FROM NEW YORK",
          smalltitle: "EASTPAK",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/pug.jpg", 
          video: "https://player.vimeo.com/video/277648030",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        { 
          title: "OLIVELEAKS", 
          smalltitle: "TASTE THE TRUTH",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/crate-logo.jpg",
          video: "https://www.youtube.com/embed/987RSqK46k0",
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
        },
        { 
          title: "GUERRA MUNDIAL", 
          smalltitle: "KENYA SAIZ",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/dress.jpg",
          video: "https://www.youtube.com/embed/TTgnOD7zlEs",
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
        },
        { 
          title: "I WAS ONCE", 
          smalltitle: "SHORT EDIT (IG)",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/girl.jpg",
          video: "//www.youtube.com/embed/PHm2CXedEoQ",
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
        },
        { 
          title: "SAGARDOBUS", 
          smalltitle: "SPOT 2019",
          img: "https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/architecture2X.jpg",
          video: "https://www.youtube.com/embed/zoIQofbG5JY",
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
        }
      ]
      }
    },

    methods: {
      openModal(data){
        this.dialog = true;
        this.modalData.title = data.title;
        this.modalData.smalltitle = data.smalltitle;
        this.modalData.video = data.video;
        this.modalData.text = data.text;
      },
      cerrarModal() {
        this.modalData.video = '';
        this.dialog = false
      }
     
    }
  
}
</script>

<style>
.closeBtn {
  position: absolute;
  right: 0px;
  top: 0px;
  background: transparent;
  padding: 0px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s linear;
}
.closeBtn:hover {
    opacity: 1;
}
.closeBtn svg {
  width: 40px;
  height: 40px;

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
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;

}

.portfolio .box {
  background-color: #f6f6f6;
  flex: 0 0 30%; /*grow | shrink | basis */
}
.item-holder {
  position: relative;
  cursor: pointer;
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

</style>
