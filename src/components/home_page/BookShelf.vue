

<script setup lang="ts">
import IconBookOpen from '@/components/icons/IconBookOpen.vue';
import IconStar from '@/components/icons/IconStar.vue';
import { useBookStore } from '@/stores/book';
import  IconBookMark from '../icons/IconBookMark.vue';
const bookStore = useBookStore();
bookStore.loadBooks();

const props = defineProps<{
    searchParams: { ItemType?: string; Title?: string } | null;
}>()


</script>
<template>
    <div class="flex flex-col  max-w-6xl mx-auto px-5 sm:px-6 mt-10">
        <div class="flex items-center mb-2">
            <IconBookOpen />
            <p class="ml-2 text-2xl">Book Shelf</p>
        </div>

        <div v-if="!bookStore.isFetching" class="grid grid-cols-5 gap-5 mt-4">
            <div v-for="book in bookStore.filteredBooks(props.searchParams?.Title, props.searchParams?.ItemType )">
                <div class="relative">
                    <img class="border" src="@/assets/cover.png" />
                    <p class="text-lg font-semibold mt-3 line-clamp-1">{{ book.Title }}</p>
                    <p class="text-sm text-gray-600 line-clamp-1">{{ book.Author }}</p>
                    <!-- ratings star -->
                    <div class="flex items-center mt-1">
                        <span class="mr-1">
                            <IconStar />
                        </span> <span class="mt-1">{{ book.ItemCount }}</span>
                    </div>
                    <div class="absolute top-3 right-3">
                        <IconBookMark/>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="flex justify-center items-center h-[480px]">
            <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
    </div>
</template>