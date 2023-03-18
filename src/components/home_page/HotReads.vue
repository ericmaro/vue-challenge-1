
<script setup lang="ts">
import IconFire from '@/components/icons/IconFire.vue';
import ReadsCarousel from '@/components/home_page/ReadsCarousel.vue';
import { useHotReadsStore } from '@/stores/hotReads';
const hotReadsStore = useHotReadsStore();
hotReadsStore.loadBooks({});


</script>

<template>
    <div class="flex flex-col  max-w-6xl mx-auto px-5 sm:px-6 -mt-64">
        <div class="flex items-center mb-2">
            <IconFire />
            <p class=" text-2xl">Hot Reads</p>
        </div>

        <ReadsCarousel :books="hotReadsStore.books" />

    </div>
</template>