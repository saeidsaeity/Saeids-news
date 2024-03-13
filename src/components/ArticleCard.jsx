import { useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom"
import { getArticleById, incrementArticleVoteCount } from "./utils/api";
import Comments from "./Comments";
import {ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons'
import CommentAdder from "./CommentAdder";

function ArticleCard() {
    const {article_id}= useParams()
    const [article,setArticle]=useState([])
    const[comments,setComments]=useState([])
    const [clicked,setClicked]=useState(0)
    const [error,setError]=useState()
    const [articleError,setArticleError]= useState()
    useEffect(()=>{
        getArticleById(article_id).then((article)=>{
            setArticle(article)
        }
        ).catch((error)=>{setArticleError(error.response)})
    },[])
   
    function changeVotes({article_id},vote) {
        if(clicked===0){
            setArticle((currArticle)=>{
                setClicked(1)
                return{...currArticle,votes:article.votes + 1}
            })    
        incrementArticleVoteCount(article_id,vote)
        }
        else{
            setError('already voted')
        }
            }
    if(articleError){
        return(
        <h1>Error {articleError.status} : {articleError.data.msg}</h1>
        
        )
    }

   return(<>
    <h1>{article.title}</h1>
    <h2>Topic:<Link to={`/articles?topic=${article.topic}`}>{article.topic}</Link>Author:{article.author}</h2>
    <h3>{article.created_at?.slice(0,10)} Votes: {article.votes}<ArrowUpOutlined onClick={()=>{changeVotes(article,1)}}/><ArrowDownOutlined onClick={()=>{changeVotes(article,-1)}}/></h3>
    <p style={{ color: "red" }}>{error}</p>
    <p>{article.body}</p>
    <img className='article-card-image' src = {article.article_img_url}/>
    <h2>Comments ({article.comment_count})</h2>
    <hr></hr>
    <CommentAdder setComments={setComments} article_id = {article_id}/>
    <Comments article_id = {article_id} setComments={setComments} comments={comments}/>
   
   </>)
}
export default ArticleCard