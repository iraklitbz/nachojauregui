<template>
  <div class="general">
    <Header />
    <div class="layout">
      <div class="content">
        <div class="flex flex-col md:flex-row">
          <div class="text-block text-white w-full md:w-7/12 order-2 md:order-1">
            <div class="md:pr-14 md:pt-10">
              <p class="text-lg mb-4">Nacho Jáuregui is an editor and director from Bilbao based in Madrid, who tells compelling & emotional stories through branded documentaries.</p>
              <p class="text-lg">He studied Advertising & Public Relations at the University of the Basque Country and specialized through a Master Degree in Editing & Post Production at CICE: the School of New Technology.</p>
              <ul class="mt-14">
                <li class="mb-4 font-bold">SELECTED WORK:</li>
                <li>Oliveleaks (DP, Editor)</li>
                <li>Branded Documentary</li>
                <li>Bronze - Branded & Integrated - Best Awards Marketing 2019</li>
                <li>El Despertar del Gigante (Director, DP, Editor)</li>
                <li>Experimental Short Film</li>
                <li>Through My Eyes Film Festival 2019 (LA, USA) - Official Selection</li>
              </ul>
            </div>
          </div>
          <div class="img-block w-full md:w-5/12 md:pt-10 order-1 md:order-2 mb-10 md:mb-0">
            <img :src="require(`~/assets/images/PHOTO_ABOUT.jpg`)">
          </div>
        </div>
        <div class="mt-32">
          <h2 class="text-white text-3xl text-center font-bold lg:mb-14">Brands & Companies I've worked</h2>
          <div class="grid grid-cols-2 gap-10 mt-10 lg:grid-cols-5 lg:mt-16">
            <figure>
              <img :src="require(`~/assets/images/brand/alh_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/movistar_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/RBMH_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/ofs_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/mazda_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/sana_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/ceu_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/eastpak_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/iberdrola_bw.png`)">
            </figure>
            <figure>
              <img :src="require(`~/assets/images/brand/madrid_bw.png`)">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
<style scoped lang="scss">
.layout {
    width: 100%;
    box-sizing: border-box;
    padding-top: 2.8vw;
    padding-bottom: 2.8vw;
    padding-left: 6vw;
    padding-right: 6vw;
    pointer-events: auto;
  .content {
      max-width: 1400px;
      margin: 0 auto;
  }
}

</style>
