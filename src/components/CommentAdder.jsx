import { useState,useEffect } from "react";
import { PostComment } from "./utils/api";

const CommentAdder = ({setComments,article_id})=>{
    const[newComment,setNewComment]=useState({username:'',body:''})
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newComment);

    if (validateForm()) {
        PostComment(article_id,newComment).then((response)=>{
            setNewComment({username:'',body:''})
            setComments((currItems)=> {
                 return [response, ...currItems]
             })
        }) 
        
    }  
    }
    function validateForm() {
        const errors ={}
        !newComment.username? errors.username="username is required":null
        !newComment.body? errors.body="comment is required":null
        setNewComment((prevState) => ({ ...prevState, errors }));
        return Object.keys(errors).length === 0
    }
    const handleChange = (event) => {

        const { name, value } = event.target

        setNewComment((prevState) => ({ ...prevState, [name]: value }));
    }
    
    return(
<form onSubmit={handleSubmit}>
<label htmlFor = "username">Username</label>
<input type="text" id="username" name="username" value={newComment.username} onChange={handleChange}/>
<label htmlFor = "body">Body</label>
<textarea id="body"  name="body" value={newComment.body} onChange={handleChange}/>
<button type='submit'>submit comment</button>
</form>

    )

}
export default CommentAdder