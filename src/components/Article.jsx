import { useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import { getArticleById } from "./utils/api";


function Article() {
    const {article_id}= useParams()
    const [article,setArticle]=useState([])
    useEffect(()=>{
        getArticleById(article_id).then((article)=>{
            console.log(article)
            setArticle(article)
        }
        )
    },[])
   return(<>
    <h1>{article.title}</h1>
    <h2>Topic: {article.topic} Author:{article.author}</h2>
    <h3>{article.created_at?.slice(0,10)} Votes: {article.votes}</h3>
    <p>{article.body}</p>
    <img src = {article.article_img_url}/>
    <h2>Comments {article.comment_count}</h2>
    
   
   </>)
}
export default Article