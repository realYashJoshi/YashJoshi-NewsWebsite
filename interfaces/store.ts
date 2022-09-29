import { NewsArticleI } from "./News"

export type NewsStateType =  {
    news: NewsType
    loading: boolean
    category: string
    error: string | null
    query: string | null
}

export type NewsType = {
    [key: string]: NewsArticleI[]
}