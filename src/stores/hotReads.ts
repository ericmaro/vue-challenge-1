// stores/users.js
import CheckedOutBooksApi from '@/services/CheckedOutBooksApi';
import type { Book } from '@/types/book'
import { AxiosError } from 'axios';
import { defineStore } from 'pinia'

interface useHotReadsStoreProps {
    books: Book[];
    isFetching: boolean;
    error: string;

}

export const useHotReadsStore = defineStore("hotReadsStore", {
    state: () => ({
        books: [],
        isFetching: false,
        error: "",
    } as useHotReadsStoreProps),
    getters: {},
    actions: {
        async loadBooks(params?: { [key: string]: any }) {
            try {
                this.isFetching = true;
                const response = await CheckedOutBooksApi.getBooks(params);
                this.isFetching = false;
                this.books = response.data;
                console.log("books", response.data)
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
