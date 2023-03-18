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
        <div class="flex-none">
            <router-link to="/">
                <img src="@/assets/logo.svg" class="h-10" />
            </router-link>
        </div>
        <div class="flex-1 ml-5">
            <ul class="flex gap-2 px-1">
                <li v-for="menuItem in menuItems"><a
                        class=" cursor-pointer py-2 px-4 rounded-3xl  hover:bg-white border hover:border-gray-300 " :class="menuItem.path === path?'bg-white':''">{{menuItem.name }}</a></li>
            </ul>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <IconCart />
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div class="card-body">
                        <span class="font-bold text-lg">8 Items</span>
                        <span class="text-info">Subtotal: $999</span>
                        <div class="card-actions">
                            <button class="btn btn-primary btn-block">View cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
            </div>
        </div>
</div></template>