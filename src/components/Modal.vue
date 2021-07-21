<template>
<v-dialog
      v-model="dialog"
      max-width="1140"
      persistent
    >
      <v-card>
        <header class="modal-header">
          <v-card-actions class="closeBtn">
            <span @click="cerrarModal()"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg></span>
          </v-card-actions>
          <v-card-title class="text-h5">
              {{title}} {{smalltitle}}
          </v-card-title>
        </header>

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
            <iframe :src="video"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
          <ul class="video-detail">
            <li><b>CARGO:</b> {{cargo}}</li>
            <li v-if="productora"><b>PRODUCTORA:</b> {{productora}}</li>
            <li v-if="agenciaURL || agencia"><b>AGENCIA:</b> <a v-if="agenciaURL" target="_blanck" :href="agenciaURL">{{agencia}}</a><span v-else>{{agencia}}</span> </li>
            <li v-if="cliente"><b>CLIENTE:</b> {{cliente}}</li>
          </ul>
          <p v-html="text"></p>
        </div>


       
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      title: String,
      smalltitle: String,
      video: String,
      text: String,
      cargo: String,
      productora: String,
      agencia: String,
      cliente: String,
      agenciaURL: String,
      dialog: Boolean
    },
    data () {
    return {
  
    }
  },
   methods: {
      cerrarModal() {
        this.$emit('cerrarModal', {isClose: false, videoURL: ''} );
      }
     
    }
  };
</script>

<style>
.modal-header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: #fff;
}
  .video-detail {
    text-align: left;
    list-style: none;
  }
  .video-detail li:not(:last-child) {
    margin-bottom: 5px;
  }
  .video-detail li b {
    margin-right: 3px;
  }
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
</style>