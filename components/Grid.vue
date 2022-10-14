<template>
    <div class="grid">
        <nuxt-link
            v-for="data in dataSource"
            :key="data.id"
            :to="'/work/' + data.slug"
            class="grid-item"
        >
            <div class="grid-image">
                <div class="grid-image-inner-wrapper">
                    <img :src="require(`~/assets/images/${data.folder}/${data.imgUrl}`)">
                </div>
            </div>
            <div class="portfolio-overlay"></div>
            <div class="portfolio-text">
                <h2 class="text-white text-xl lg:text-4xl font-bold">{{ data.title }}</h2>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
import data from '../static/data.js'
export default {
    name: 'IndexPage',
    data () {
        return {
        dataSource: []
        }
    },
    mounted () {
        this.dataSource = data.data
    }
}
</script>
<style scoped lang="scss">
.grid {
    padding-top: 3.3vw;
    padding-bottom: 3.3vw;
    min-height: 33vh;
    width: 100%;
    padding-left: 6vw;
    padding-right: 6vw;
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    grid-auto-rows: min-content;
    grid-template-columns: auto;
    .portfolio-text, .portfolio-overlay {
        opacity: 0;
    }
    .portfolio-text {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        padding: 7%;
        text-align: center;
        z-index: 100;
        transition: opacity ease 200ms;
        h3 {
            margin-top: 0;
            padding-top: 0;
            margin-bottom: 0;
        }
    }
    .portfolio-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity ease 200ms;
        background-color: #000;
        z-index: 99;
    }
    .grid-item {
        padding-bottom: 20%;
        position: relative;
        height: 0;
        &:hover {
            .portfolio-overlay {
                opacity: 0.3;
            }
            .portfolio-text {
                opacity: 1;
            }
        }
        .grid-image {
            width: 100%;
            position: relative;
            overflow: hidden;
            margin: 0;
            line-height: 0;
            padding-bottom: 20%;
            .grid-image-inner-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }
            img {
                object-fit: contain !important;
                width: 100%;
                height: 100%;
                object-position: 50% 50%;
            }
        }
    }
}
</style>
