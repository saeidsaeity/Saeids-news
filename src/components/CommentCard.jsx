import {ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons'
import { incrementCommentVoteCount } from './utils/api'
import { useState } from 'react'
function CommentCard({comment,setComments}) {
    
    function changeVotes({comment_id},vote) {
        setComments((currComments)=>{
            currComments.forEach((comment)=>{if(comment.comment_id === comment_id){
                comment.votes=comment.votes + vote
            }})
            return [...currComments]
        })
        incrementCommentVoteCount(comment_id,vote)
        
    }
    return(<div className = "comment">
    <p className="comment-author">{comment.author}  {comment.created_at.slice(0,10)}</p>
    <p className="comment-body">{comment.body}</p>
    <p className="comment-votes"><ArrowUpOutlined onClick={()=>{changeVotes(comment,1)}} />Votes:{comment.votes}<ArrowDownOutlined onClick={()=>{changeVotes(comment,-1)}} /></p>
   
    </div>)
}
export default CommentCard