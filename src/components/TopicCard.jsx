import { Link, NavLink } from "react-router-dom"


function TopicCard({topic}) {

    return(<div className='topic-header'>
    <NavLink className={({isActive}) => isActive ? "active-topic": "NavLink-topic" }   exact='true' to ={`/articles/?topic=${topic.slug}`}><h1>{topic.slug}</h1></NavLink>
    
    
    </div>)
    
}

export default TopicCard