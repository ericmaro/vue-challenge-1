
<script setup lang="ts">
import IconArrowRightVue from '@/components/icons/IconArrowRight.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { defineProps, ref } from 'vue';
import type { Book } from '@/types/book';
const props = defineProps<{
    books: Book[];
}>()


</script>

<template>
    <Carousel :items-to-show="4" :wrap-around="false" >
        <Slide v-for="book in props.books" :key="book.id" class="mx-2">
            <img class="my-4 shadow-md" src="@/assets/cover.png" />
        </Slide>

        <template #addons>
            <Navigation>
                <template #next > <button
                        class="btn btn-circle bg-base-100 shadow-xl border-0 hover:text-primary hover:bg-base-100 -mr-10  ">
                        <IconArrowRightVue />
                    </button></template>
                <template #prev>

                </template>

            </Navigation>
        </template>
    </Carousel>
</template>
<style scoped>
.carousel__viewport {
    overflow: visible !important;

}
.carousel {
    display: flex;
   overflow-x: visible;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>