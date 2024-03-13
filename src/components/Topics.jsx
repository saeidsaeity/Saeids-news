import TopicCard from "./TopicCard"
import { useEffect,useState } from "react"
import { getTopics } from "./utils/api"

function Topics({styling}) {
    const[topics,setTopics]=useState([])
   
    useEffect(()=>{
        getTopics().then((topics)=>{
            setTopics(topics)
            

        })

    },[])

   
    return(<div className={`topic-${styling}`}><h1 className="disappear">Topics</h1>
    {topics.map((topic)=>{return <TopicCard   key={topic.slug} topic={topic}/>})}
    </div>)

    
}
export default Topics