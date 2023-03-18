import type { Book } from "@/types/book"
import api from "./api"

export default {
    getBooks: (params?: { [key: string]: any }) => {
        let query = ""
        if (params) {
    
            query = Object.keys(params)
                .filter((key) => {
                    return params[key] !== undefined && params[key] !== ""
                })
                .map((key) => {
                    if (params[key] === undefined) {
                        return ""
                    }
                    return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
                })
                .join("&")
        }

     
        return api().get<Book[]>(`/7OMEPn/checkoutbooks${query ? "?" + query : ""}`)
    },
}