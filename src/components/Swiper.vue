<template>
    <swiper :slidesPerView="3" :spaceBetween="10" :slidesPerGroup="1" :loop="true" :loopFillGroupWithBlank="true"
        :breakpoints="swiperOptions.breakpoints" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="repo in repositories" :key="repo.id">

            <Card v-bind:name="repo.name" v-bind:url="repo.html_url"
                v-bind:description="repo.description ? repo.description : 'this repository has no description at the moment'" />

        </swiper-slide>


    </swiper>
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Card from "./Card.vue";
let ajax = new XMLHttpRequest();

export default {
    name: 'SWIPER',
    data() {
        return {
            repositories: {},
            swiperOptions: {
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,

                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    670: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },

                    771: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Card
    },
    methods: {
        handleSetResponseFormatJson: function () {
            this.repositories = JSON.parse(ajax.responseText);
        },
        handleGetProfileGithub: async function () {
            ajax.addEventListener("load", this.handleSetResponseFormatJson);
            await ajax.open("GET", "https://api.github.com/users/marcoDmc/repos");
            ajax.send();
        }
    },
    mounted: function () {
        this.repositories = this.handleGetProfileGithub();



    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style>
.swiper {
    width: 100%;
    margin-top: 100px;
    flex: 1;
    display: flex;
    background-color: var(--black);
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
}

.swiper-slide {
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background-color: var(--black);
    height: 100%;
    width: 100%;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    margin-right: 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
}
</style>
