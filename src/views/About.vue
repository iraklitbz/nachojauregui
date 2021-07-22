<template>
  <div class="about">

    <div class="main-pic">
     <img src="https://nachojauregui.com/new/img/me.jpg" >
    </div>
    
    <p v-html="$t('about1_html')"></p>

    <p v-html="$t('about2_html')"></p>

    <p v-html="$t('about3_html')"></p>

    <p v-html="$t('about4_html')"></p>
  </div>
</template>

<script>
  export default {
    
    data () {
    return {
  
    }
  },
  };
</script>

<style>
.main-pic {
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 60px;
}
.main-pic img {
  width: 100%;
}
.about {
  margin-bottom: 45px;
}
.about p {
  margin-bottom: 15px;
}
</style>