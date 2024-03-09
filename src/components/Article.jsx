import { useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import { getArticleById } from "./utils/api";
import Comments from "./Comments";
import {ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons'
import CommentAdder from "./CommentAdder";

function Article() {
    const {article_id}= useParams()
    const [article,setArticle]=useState([])
    const[comments,setComments]=useState([])
    useEffect(()=>{
        getArticleById(article_id).then((article)=>{
            setArticle(article)
        }
        )
    },[])
   return(<>
    <h1>{article.title}</h1>
    <h2>Topic: {article.topic} Author:{article.author}</h2>
    <h3>{article.created_at?.slice(0,10)} Votes: {article.votes}<ArrowUpOutlined/><ArrowDownOutlined /></h3>
    <p>{article.body}</p>
    <img src = {article.article_img_url}/>
    <h2>Comments ({article.comment_count})</h2>
    <hr></hr>
    <CommentAdder setComments={setComments} article_id = {article_id}/>
    <Comments article_id = {article_id} setComments={setComments} comments={comments}/>
   
   </>)
}
export default Article