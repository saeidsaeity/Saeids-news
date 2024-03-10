import axios from 'axios'

const newsApi = axios.create({
    baseURL: "https://saeids-interesting-news.onrender.com/api"
})

export const getArticles = async (topic)=>{
   const response = await newsApi.get('/articles',{params:{topic:topic}})
   return response.data.articles
    
}
export const getArticleById = async (article_id)=>{
    const response = await newsApi.get(`/articles/${article_id}`)
    return response.data.article
     
 }
 export const getCommentsByArticleId = async(article_id)=>{
    const response = await newsApi.get(`/articles/${article_id}/comments`)
    return response.data.comments
 }
 export const incrementCommentVoteCount=async(comment_id,vote)=>{
    const response = await newsApi.patch(`/comments/${comment_id}`,{inc_votes:vote})
    return response.data.comment
 }
 export const postComment=async(article_id,newComment)=>{
    const response = await newsApi.post(`/articles/${article_id}/comments`,newComment)
    return response.data.comment
 }

 export const getTopics = async ()=>{
   const response = await newsApi.get(`/topics`)
   return response.data.topics
 }