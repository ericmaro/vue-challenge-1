// stores/users.js
import CategoriesApi from '@/services/CategoriesApi';
import type { Category } from '@/types/category'
import { AxiosError } from 'axios';
import { defineStore } from 'pinia'

interface useCategoryStoreProps {
    categories: Category[];
    isFetching: boolean;
    error: string;

}

export const useCategoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
        isFetching: false,
        error: "",
    } as useCategoryStoreProps),
    getters: {},
    actions: {
        async loadCategories(params?: { [key: string]: any }) {
            try {
                this.isFetching = true;
                const response = await CategoriesApi.getCategories(params);
                this.isFetching = false;
                this.categories = response.data;
                console.log("categories", response.data)
            } catch (e: Error | AxiosError | any) {
                this.isFetching = false;
                if (e instanceof AxiosError) {
                    this.error = e.response?.data.message;
                } else {
                    this.error = e.message ?? e.toString();
                }
            }
        }
    },
})
