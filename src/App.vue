<template>
  <div id="app">
    <div class="main-logo">
      <h1>Nachojauregui</h1>
    </div>
    <div class="main-navbar" id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer>
      <ul class="main-social">
          <router-link to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA7UlEQVRIie2UURWCQBBFbwQiEIEINNAINNAGEoEGEsEG0gAaSANpgB+AZ1lndkc5/nHPmb83b2eHt8DORjLgACQBTQKcgCtwmXuipMAdGOdqFV0OPB3dUnlsaqnpbNSNQKOZF4Gmm6ftFd1Sonmo4eFo83lK7ZBBOqAGOqZVdNaplEP82wLrpByVA6SENIKuUIZZMRgaE0EzEI71m1porjxNKWhKiznIa3LfQ8pn4nrr9CBf331EUhBy3ySGZNLOFVufiVK5hV8dX6zGJTOYm1Oj0UfMTX/PEOU/zRf8j92wcS0+CVNKKn6I4k6QF9gfqpIgLj5tAAAAAElFTkSuQmCC"/></router-link>
          <router-link to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA3klEQVRIie2U2w2DMAxFzwiMwggZoSMwQjcoG5QN6g3oJnQDsgFsQH8cKULBhNcflq6E7Pge5yHgjp3hgA/QA9OKel3rcs2rDNMlVTmT7zUPMnciG81GoATqKCcWwBtmAjxVYZBO+x7Rut4CpIx/OuU8Sq11wDDr2QQogQJ4q9Gg34XWUj3ZANF8k6g1WpMjgFrzY6IWzrq+CuDPAIhhEuDfI4BwyQHiVcH88CWHs156pvPnuQrwCw0T0AIvVWus8xZAjMZciQVwJwCcBYCLf9fxTgT7TuIzl5zJ70jGH6oXAMkBg7n+AAAAAElFTkSuQmCC"/></router-link>
          <router-link to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAk0lEQVRIie2UwQ2AIBAEpwRLsgQ7xY6kA+lAP5gQPA5OTPTBJvcweDu7n4OhP2kGNuDonC163eRfME8hN12Pa4dxulsEACxAMBiHuJP7iIApfk+NbdZspwrYkzRamyD8t7cArnFKmzy1E/argFIbLbUZILXRUj8GpG201F0A6wyAHWA5DbXxEmDmnYvqKZzroW90AjiSFbnLofZbAAAAAElFTkSuQmCC"/></router-link>
      </ul>
      <p>{{$t('footer')}}</p>
    </footer>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&display=swap');
#app {
  font-family: 'Hind', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
color: #333;
text-transform: uppercase;
font-weight: 500;
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
</style>
