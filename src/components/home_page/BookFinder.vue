<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import { useCategoryStore } from '@/stores/category';
import { ref } from 'vue';
const categoryStore = useCategoryStore();
categoryStore.loadCategories();
const selectedCategory = ref('');
const searchText = ref('');
const emit = defineEmits(['search'])
const search = () => {
    emit('search', {
        category: selectedCategory.value,
        text: searchText.value
    })
}
</script>

<template>
    <div class="max-w-6xl mx-auto px-5 sm:px-6  mt-10">
        <div class="border border-gray-200 bg-gray-100 p-2 rounded-lg ">
            <div class="flex">
                <div class="border-r">
                    <select v-model="selectedCategory" class="select bg-transparent w-[240px] focus:outline-none">
                            <option value="" selected>All Categories</option>
                            <option v-for="category in categoryStore.categories" :value="category.Code">{{ category.Description }}</option>
                        </select>

                
                </div>

                <input v-model="searchText" type="text" placeholder="Find the book you like..."
                    class="input bg-transparent flex-1 focus: ring-0 focus: border-0 focus:outline-none" />
                <button @click="search" class="btn btn-primary capitalize ml-5 w-[180px] text-lg font-light text-white">
                    Search <span class="bg-transparent ml-3">
                        <IconSearch />
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>


