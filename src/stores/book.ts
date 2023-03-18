// stores/users.js
import BooksApi from '@/services/BooksApi';
import type { Book } from '@/types/book'
import { AxiosError } from 'axios';
import { defineStore } from 'pinia'

interface useBookStoreProps {
    books: Book[];
    isFetching: boolean;
    error: string;

}

export const useBookStore = defineStore("bookStore", {
    state: () => ({
        books: [],
        isFetching: false,
        error: "",
    } as useBookStoreProps),
    getters: {
        filteredBooks: (state) => (Title?: string, ItemType?:string) => {   
            if (Title && ItemType) {
                return state.books.filter((book) => book.Title?.toLowerCase().includes(Title.toLowerCase()) && book.ItemType?.toLowerCase().includes(ItemType.toLowerCase()));
            } else if (Title) {
                return state.books.filter((book) => book.Title?.toLowerCase().includes(Title.toLowerCase()));
            } else if (ItemType) {
                return state.books.filter((book) => book.ItemType?.toLowerCase().includes(ItemType.toLowerCase()));
            } else {
                return state.books;
            }    
        }
    },
    actions: {
        async loadBooks(params?: { [key: string]: any }) {
            try {
                this.isFetching = true;
                const response = await BooksApi.getBooks(params);
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
