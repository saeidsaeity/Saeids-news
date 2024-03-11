import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "./utils/api"
import { useEffect,useState} from "react";
function Comments({article_id,setComments,comments}) {
    
    const[updateComment,setUpdateComment]=useState([])
    useEffect(()=>{
        getCommentsByArticleId(article_id).then((comments)=>{
        setComments(comments)
        })

    },[])
    
    return(<>{comments.map((comment)=>{return <CommentCard key={comment.comment_id}comment={comment} setComments={setComments}/>})}</>)
    
}
export default Comments