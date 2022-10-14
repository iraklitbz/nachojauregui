<template>
  <div class="general">
    <Header
      :page-work="true"
    />
    <div
      class="content-wrapper h-96 flex items-end justify-start"
      :style="'background-image: url(' + require(`~/assets/images/${entryData.folder}/${entryData.backgroundImage}`) + ');'"
    >
      <div class="content w-full">
        <h1 class="text-white text-3xl lg:text-5xl font-bold">
          {{ entryData.title }}
        </h1>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content lg:flex">
        <div class="w-full lg:w-5/12 mb-10 lg:mb-0 lg:pr-10">
          <h2 class="text-white text-2xl font-bold">{{ entryData.subtitle }}</h2>
          <div class="mt-2 short-list text-white" v-html="entryData.shortlist"></div>
          <p class="mt-7 text-white text-lg">{{ entryData.description }}</p>
        </div>
        <div class="w-full lg:w-7/12">
          <video-player
            :src="entryData.videoUrl"
          />
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4">
        <div v-for="(item, i) in entryData.gallery" :key="i" class="item-image">
          <img :src="require(`~/assets/images/${entryData.folder}/${item}`)">
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div
        class="flex items-center nav-footer"
        :class="currentPosition > 0 ? 'justify-between' : 'justify-end'"
      >
        <nuxt-link
          v-if="currentPosition > 0"
          class="text-white flex items-center font-bold text-2xl"
          :to="'/work/' + dataSource[currentPosition - 1].slug"
          >
          <load-svg class="text-white w-8 mt-1" name="chevronLeft" /> {{ dataSource[currentPosition - 1].title }}
        </nuxt-link>
        <nuxt-link
          v-if="currentPosition < (dataSource.length - 1)"
          class="text-white flex items-center text-right font-bold text-2xl"
          :to="'/work/' + dataSource[currentPosition + 1].slug"
          >{{ dataSource[currentPosition + 1].title }}
          <load-svg class="text-white w-8 mt-1" name="chevronRight" />
        </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import data from '../../static/data.js'
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  name: 'WorkPage',
  components: {
    VideoPlayer
  },
  data () {
    return {
        slug: this.$route.params.slug,
        dataSource: [],
        entryData: {},
        page404: false,
        currentPosition: 0,
        previData: {},
        nextData: {}
    }
  },
  created () {
    this.dataSource = data.data
    const entrada = this.dataSource.filter((item, i) => {
        if(item.slug === this.slug) {
          this.currentPosition = i
        }
        return item.slug === this.slug
    })
    const existSlug = entrada.map(element => element.slug)
    if(existSlug.shift() !== this.slug) {
        this.$router.push('/404')
    } else {
        this.entryData = entrada.shift()
    }
  }
}
</script>
<style scoped lang="scss">
.content-wrapper {
      position: relative;
      z-index: 2;
      width: 100%;
      box-sizing: border-box;
      padding-top: 2.8vw;
      padding-bottom: 2.8vw;
      padding-left: 6vw;
      padding-right: 6vw;
      pointer-events: auto;
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      .content {
        max-width: 1400px;
        margin: 0 auto;
      }
}
</style>
