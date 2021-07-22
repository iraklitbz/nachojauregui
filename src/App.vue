<template>
  <div id="app">
    <div class="switch-language">
       <a href="javascript:void(0)" @click="switchLocale('es')" class="lang">ES</a>
        <a href="javascript:void(0)" @click="switchLocale('en')">EN</a>
    </div>
    <div class="main-logo">
      <a href="#"><img src="https://nachojauregui.com/new/img/logo.png" ></a>
    </div>
    <div class="main-navbar" id="nav">
      <router-link to="/">{{$t('nav1')}}</router-link>
      <router-link to="/about">{{$t('nav2')}}</router-link>
     
    </div>
    
    <router-view :key="componentKey" />
    <footer>
      <ul class="main-social">
          <a target="_blank" href="https://vimeo.com/nachojauregui"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA7UlEQVRIie2UURWCQBBFbwQiEIEINNAINNAGEoEGEsEG0gAaSANpgB+AZ1lndkc5/nHPmb83b2eHt8DORjLgACQBTQKcgCtwmXuipMAdGOdqFV0OPB3dUnlsaqnpbNSNQKOZF4Gmm6ftFd1Sonmo4eFo83lK7ZBBOqAGOqZVdNaplEP82wLrpByVA6SENIKuUIZZMRgaE0EzEI71m1porjxNKWhKiznIa3LfQ8pn4nrr9CBf331EUhBy3ySGZNLOFVufiVK5hV8dX6zGJTOYm1Oj0UfMTX/PEOU/zRf8j92wcS0+CVNKKn6I4k6QF9gfqpIgLj5tAAAAAElFTkSuQmCC"/></a>
          <a target="_blank" href="https://www.instagram.com/naajau/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA3klEQVRIie2U2w2DMAxFzwiMwggZoSMwQjcoG5QN6g3oJnQDsgFsQH8cKULBhNcflq6E7Pge5yHgjp3hgA/QA9OKel3rcs2rDNMlVTmT7zUPMnciG81GoATqKCcWwBtmAjxVYZBO+x7Rut4CpIx/OuU8Sq11wDDr2QQogQJ4q9Gg34XWUj3ZANF8k6g1WpMjgFrzY6IWzrq+CuDPAIhhEuDfI4BwyQHiVcH88CWHs156pvPnuQrwCw0T0AIvVWus8xZAjMZciQVwJwCcBYCLf9fxTgT7TuIzl5zJ70jGH6oXAMkBg7n+AAAAAElFTkSuQmCC"/></a>
          <a href="mailto:hola@nachojauregui.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAk0lEQVRIie2UwQ2AIBAEpwRLsgQ7xY6kA+lAP5gQPA5OTPTBJvcweDu7n4OhP2kGNuDonC163eRfME8hN12Pa4dxulsEACxAMBiHuJP7iIApfk+NbdZspwrYkzRamyD8t7cArnFKmzy1E/argFIbLbUZILXRUj8GpG201F0A6wyAHWA5DbXxEmDmnYvqKZzroW90AjiSFbnLofZbAAAAAElFTkSuQmCC"/></a>
      </ul>
      <p v-html="$t('footer_html')"></p>
    </footer>
    
  </div>
</template>
<script>
export default {
    data () {
    return {
      componentKey: 0,
    }
  },
   methods: {
    switchLocale(locale) {
        if (this.$i18n.locale !== locale) {
          this.$i18n.locale = locale;
          this.$i18n.fallbackLocale = locale;
          this.componentKey += 1;  
        }
      }
    }
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&display=swap');
#app {
  font-family: 'Hind', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 15px;
}
 @media (min-width: 800px) { 
  #app {
  padding: 0 30px;
} 
 }
.switch-language {
  margin-top: 25px;
  text-align: right;
  
}
.switch-language a {
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 3px;
  position: relative;
  text-decoration: none;
}
.switch-language a:not(:last-child) {
  margin-right: 35px;
}
 @media (min-width: 800px) {
    .switch-language {
        position: fixed;
        right: 25px;
        top: 25px;
        margin-top: 0px;
      }
      .switch-language a:not(:last-child) {
          margin-right: 25px;
        }
  }
.main-logo {
  margin: 45px 0;
}
.main-logo a {
  display: block;
  max-width: 450px;
  margin: auto;
}
.main-logo a img {
  width: 100%;
  max-width: 100%;
}
 @media (min-width: 800px) {
    #app {
      padding: 0px;
    }
  }
h1 {
  font-weight: bold;
  font-size: 50px;
  margin: 0px;
  margin-bottom: 40px;
}
p {
  font-size: 18px;
line-height: 30px;
font-weight: 400;
text-align: center;
color: #303133;
max-width: 780px;
margin: auto;
}
.main-navbar {
  text-align: center;
  display: block;
  margin-bottom: 60px;
}


.main-navbar a {
color: #000;
text-transform: uppercase;
font-weight: bold;
font-size: 14px;
line-height: 13px;
letter-spacing: 3px;
position: relative;
text-decoration: none;
}
.main-navbar a:not(:first-child) {
margin-left: 35px;
}

.main-navbar a:before {
  content: "";
position: absolute;
bottom: 0;
left: 0;
width: 0;
height: 1px;
background-color: #303133;
-webkit-transition-duration: .2s;
transition-duration: .2s;
}

.main-navbar a:hover:before {
width: 100%;
}
.main-social {
  margin-left: 0px;
  padding-left: 0px;
}
.main-social a:not(:last-child)  {
  margin-right: 15px;
}
.main-social a  {
  opacity: 0.6;
  transition: opacity 0.2s linear;
}
.main-social a:hover  {
  opacity: 1;
}
footer p {
  color: #666;
}
 @media (max-width: 800px) {
    .main-modal .v-dialog {
      margin: 0px;
    }
    .main-modal .v-dialog:not(.v-dialog--fullscreen) {
    max-height: 100%;
    height: 100%;
    }
  }
</style>
