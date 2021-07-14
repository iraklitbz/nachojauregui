<template>
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
            {{title}} - {{smalltitle}}
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
            <iframe :src="video"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p>{{text}}</p>
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
  
</style>