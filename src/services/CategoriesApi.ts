
import type { Category } from "@/types/category"
import api from "./api"

export default {
    getCategories: (params?: { [key: string]: any }) => {
        let query = ""
        if (params) {
            query = Object.keys(params)
                .map((key) => {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
                })
                .join("&")
        }
        return api().get<Category[]>(`/08tGI8/categories${query ? "?" + query : ""}`)
    },
}