<script setup lang="ts">
import BookFinder from '@/components/home_page/BookFinder.vue';
import Hero from '@/components/home_page/Hero.vue';
import HotReads from '@/components/home_page/HotReads.vue';
import BookShelf from '@/components/home_page/BookShelf.vue';
import { ref } from 'vue';

const searchParams = ref<{ItemType?:string, Title?: string}| null>(null);

const find = (values:{category?:string, text?: string}) => {
  console.log(values)
    searchParams.value = {
        ItemType: values?.category,
        Title: values?.text
    };
}

</script>

<template>
  <main>
   <Hero/>
   <HotReads />
   <BookFinder @search="find"/>
   <BookShelf :search-params="searchParams"/>
  </main>
</template>
