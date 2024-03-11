import { getUsers } from "./utils/api"
import { UserContext } from "./contexts/UserContext"
import { useContext, useEffect, useState } from "react"

function Login() {
    const {user,setUser} = useContext(UserContext)
    const [allUsers,setAllUsers]=useState([])
    const [userInput,setUserInput]=useState('')
    useEffect(()=>{
        getUsers().then((users)=>{
            console.log(users);
            setAllUsers(users)

        })

    },[])
    function handleSubmit(event) {
        event.preventDefault()
        
        if(allUsers.some((testuser)=> testuser.username === userInput)){
            setUser(userInput)
            localStorage.setItem('user',JSON.stringify(userInput))
        }
        setUserInput('')
        
    }
    function handleChange(event){
      setUserInput(event.target.value)

    }
    return(<>
    <h1>Login below</h1>
    <form onSubmit={handleSubmit}>
      <label>Enter your username:<input type="text" value={userInput} onChange={handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
    </>)
}
export default Login