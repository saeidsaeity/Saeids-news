import { Link } from "react-router-dom"


function TopicCard({topic}) {

    return(<>
    <Link to ={`/articles/?topic=${topic.slug}`}><h1>{topic.slug}</h1></Link>
    
    
    </>)
    
}

export default TopicCard