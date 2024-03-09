import {ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons'
import { incrementCommentVoteCount } from './utils/api'
function CommentCard({comment,setUpdateComment,updateComment}) {
    function changeVotes({comment_id},vote) {
        incrementCommentVoteCount(comment_id,vote).then((comment)=>{setUpdateComment(updateComment+1)})
        
    }
    return(<div className = "comment">
    <p className="comment-author">{comment.author}  {comment.created_at.slice(0,10)}</p>
    <p className="comment-body">{comment.body}</p>
    <p className="comment-votes"><ArrowUpOutlined onClick={()=>{changeVotes(comment,1)}} />Votes:{comment.votes}<ArrowDownOutlined onClick={()=>{changeVotes(comment,-1)}} /></p>
   
    </div>)
}
export default CommentCard