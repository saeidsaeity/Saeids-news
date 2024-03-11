import {ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons'
import { deleteComment, incrementCommentVoteCount } from './utils/api'
import { useContext, useState } from 'react'
import { UserContext } from './contexts/UserContext'
function CommentCard({comment,setComments}) {
    const {user,setUser} = useContext(UserContext)
    function changeVotes({comment_id},vote) {
        setComments((currComments)=>{
            currComments.forEach((comment)=>{if(comment.comment_id === comment_id){
                comment.votes=comment.votes + vote
            }})
            return [...currComments]
        })
        incrementCommentVoteCount(comment_id,vote)
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        deleteComment(comment.comment_id)
        setComments((currComments)=>{
            
            const currentComment = comment.comment_id
            
            const filteredComments=currComments.filter((currcomment)=>currcomment.comment_id !== currentComment)
                return filteredComments
        })
        
    }
    return(<div className = "comment">
    <p className="comment-author">{comment.author}  {comment.created_at.slice(0,10)}</p>
    <p className="comment-body">{comment.body}</p>
    <p className="comment-votes"><ArrowUpOutlined onClick={()=>{changeVotes(comment,1)}} />Votes:{comment.votes}<ArrowDownOutlined onClick={()=>{changeVotes(comment,-1)}} /></p>
    {user===comment.author?
        <form onSubmit={handleSubmit}>
        <button type='submit'>delete</button>  </form>:null
       }
        
    </div>)
}
export default CommentCard