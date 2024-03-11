import { useState,useEffect, useContext } from "react";
import { postComment } from "./utils/api";
import { UserContext } from "./contexts/UserContext";

const CommentAdder = ({setComments,article_id})=>{
    const {user,setUser} = useContext(UserContext)
    const[newComment,setNewComment]=useState({username:user,body:''})
    const [error,setError]=useState()
    const handleSubmit = (event) => {
        event.preventDefault()
       

    if (validateForm()) {
        postComment(article_id,newComment).then((response)=>{
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
        setError({username:errors.username,body:errors.body})
        setNewComment((prevState) => ({ ...prevState, errors }));
        return Object.keys(errors).length === 0
    }
    const handleChange = (event) => {

        const { name, value } = event.target

        setNewComment((prevState) => ({ ...prevState, [name]: value }));
    }
    
    return(
        <>
<form onSubmit={handleSubmit}>
<label htmlFor = "body">Body</label>
<textarea id="body"  name="body" value={newComment.body} onChange={handleChange}/>
<button type='submit'>submit comment</button>
</form>
{error?.username? <p>Please login</p>:null}
{error?.body? <p>Please Insert Comment into textbox</p>:null}
</>
    )

}
export default CommentAdder