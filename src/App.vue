<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';
</script>

<template>
  <header>
    <div class=" bg-secondary">
      <Navbar/>
    </div>
 
  </header>

  <RouterView />

  <Footer/>
</template>
