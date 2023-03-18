<script setup lang="ts">

import type { Menu } from '@/util/types/menu';
import IconCart from '@/components/icons/IconCart.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();

const path = computed(() => route.path)

const menuItems: Menu[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Category',
        path: '/category',
    },
    {
        name: 'Popular',
        path: '/popular',
    },
    {
        name: 'My Picks',
        path: '/picks',
    },
];


</script>

<template>
    <div class="max-w-6xl mx-auto px-5 sm:px-6 navbar">
        <div class="flex-none -ml-8">
            <router-link to="/">
                <img src="@/assets/logo.svg" class="h-14" />
            </router-link>
        </div>
        <div class="flex-1 ml-5">
            <ul class="flex gap-2 px-1">
                <li v-for="menuItem in menuItems"><a
                        class=" cursor-pointer py-2 px-4 rounded-3xl  hover:bg-white border hover:border-gray-300 "
                        :class="menuItem.path === path ? 'bg-white' : ''">{{ menuItem.name }}</a></li>
            </ul>
        </div>
        <div class="flex-none m-8">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <IconCart />

                    </div>
                </label>

            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>