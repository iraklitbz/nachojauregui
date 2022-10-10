<template>
    <header
        class="main-header z-50"
        :class="[pageWork ? 'sm:absolute' : 'sm:relative', isActive ? 'active': '']"
    >
        <div class="header-inner flex items-center justify-between py-7 lg:py-0">
            <h1
                class="text-2xl sm:text-4xl font-bold"
                :class="pageWork ? 'text-white' : 'text-yellow'"
            >
                <nuxt-link
                    to="/"
                    class="uppercase flex flex-col lg:flex-row"
                    :class="pageWork ? 'text-white' : 'text-yellow'"
                >Nacho jauregui <span class="lowercase lg:ml-5">editor & director</span></nuxt-link>
            </h1>
            <nav class="main-navbar">
                <ul class="navbar text-white font-bold text-sm hidden lg:flex">
                    <li>
                        <nuxt-link to="/">work</nuxt-link>
                    </li>
                    <li class="ml-5">
                        <nuxt-link to="/about">about</nuxt-link>
                    </li>
                    <li class="ml-5">
                        <nuxt-link to="/contact">contact</nuxt-link>
                    </li>
                    <li class="ml-5">
                        <a href="https://vimeo.com/nachojauregui"  target="_blank">vimeo</a>
                    </li>
                    <li class="ml-5">
                        <a href="https://www.instagram.com/naajau/" target="_blank">instagram</a>
                    </li>
                </ul>
                <div
                    class="hamburguer-button inline-block lg:hidden"
                    :class="{ 'active': isActive }"
                    @click="activeMenu"
                >
                    <div class="bar1"></div>
                    <div class="invis"></div>
                    <div class="bar3"></div>
                </div>
            </nav>
        </div>
        <div
            class="responsive-menu flex"
            :class="isActive ? 'block lg:hidden': 'hidden lg:hidden'"
        >
            <nav class="flex justify-center pt-14 lg:pt-0 w-full">
                <div>
                    <ul class="text-yellow text-center font-bold text-3xl">
                        <li>
                            <nuxt-link to="/">work</nuxt-link>
                        </li>
                        <li class="mt-5">
                            <nuxt-link to="/about">about</nuxt-link>
                        </li>
                        <li class="mt-5">
                            <nuxt-link to="/contact">contact</nuxt-link>
                        </li>
                        <li class="mt-5">
                            <a href="https://vimeo.com/nachojauregui"  target="_blank">vimeo</a>
                        </li>
                        <li class="mt-5">
                            <a href="https://www.instagram.com/naajau/" target="_blank">instagram</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
 export default {
    props: {
        pageWork: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        activeMenu() {
            this.isActive = !this.isActive
        }
    }
 }
</script>

<style scoped lang="scss">
.main-header {
    width: 100%;
    box-sizing: border-box;
    padding-top: 2.8vw;
    padding-bottom: 2.8vw;
    padding-left: 6vw;
    padding-right: 6vw;
    pointer-events: auto;
    .responsive-menu {
        position: absolute;
        left: 0;
        bottom: -100%;
        width: 100%;
        height: calc(100% - 120px);
        z-index: 40;
        transition: bottom 0.2s ease-in-out;
    }
    &.active {
        z-index: 9999;
        @media (max-width: 1023px) {
            position: fixed;
            @apply bg-black top-0 left-0 h-screen w-full;
            .header-inner {
                position: relative;
                z-index: 100;
                h1 a {
                    @apply text-yellow
                }
            }
            .responsive-menu {
                bottom: 0;
                transition: bottom 0.2s ease-in-out;
                ul {
                    a {
                        line-height: 1.8em;
                        padding: 0.1em 0;
                    }
                }
            }
         }
    }
    .hamburguer-button {
        cursor: pointer;
        .bar1, .bar3 {
            width: 35px;
            height: 2px;
            background-color: #fff;
            margin: 6px 0;
            transition: 0.4s;
        }
        .invis {
            width: 35px;
            height: 2px;
            margin: 6px 0;
        }
        &.active {
            .bar1 {
                -webkit-transform: rotate(-45deg) translate(-5px, 6px);
                transform: rotate(-45deg) translate(-5px, 6px);
            }

             .bar3 {
                -webkit-transform: rotate(45deg) translate(-5px, -6px);
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
    }
    .header-inner {
        max-width: 1400px;
        margin: 0 auto;
        .main-navbar {
            .navbar {
                a {
                    line-height: 1.8em;
                    backface-visibility: hidden;
                    padding: 0.1em 0;
                    display: block;
                }
                .nuxt-link-exact-active {
                    background-image: linear-gradient(currentColor,currentColor);
                    background-repeat: repeat-x;
                    background-size: 1px 1px;
                    background-position: 0 100%;
                }
            }
        }
    }
}
</style>
