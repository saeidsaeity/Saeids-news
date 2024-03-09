import axios from 'axios'

const newsApi = axios.create({
    baseURL: "https://saeids-interesting-news.onrender.com/api"
})

export const getArticles = async ()=>{
   const response = await newsApi.get('/articles')
   return response.data.articles
    
}
export const getArticleById = async (article_id)=>{
    const response = await newsApi.get(`/articles/${article_id}`)
    return response.data.article
     
 }