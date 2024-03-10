import { useEffect,useState } from "react"
import { getArticles } from "./utils/api"
import Grid from '@mui/material/Unstable_Grid2'; 
import { Link, useSearchParams } from "react-router-dom";
import Topics from "./Topics";

function Articles() {
    const [articles,setArticles]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const topic = searchParams.get('topic')
    useEffect(()=>{
        getArticles(topic).then((articles)=>{
            setArticles(articles)
        })

    },[topic])
    
    
    return(<>
    <h1>Our Latest Articles</h1>
    <Topics styling = 'small'></Topics>
    <Grid className = 'article-container' container alignItems="stretch"  rowSpacing={2}>
        {articles.map((art)=> {
            return(
            <Grid className = 'article' xs={12} sm={12} md={8} lg={8} xl={6} sx={{minWidth: '600px'}} key={art.article_id}><div className ="title">{art.title}</div><Link to={`/articles?topic=${art.topic}`}><div className ='topic'>{art.topic}</div></Link> <div className='author'>{art.author}</div> 
            <div className="article-image-container">
                <Link to={`/articles/${art.article_id}`}><img className='article-image' src={art.article_img_url}/></Link>
                </div>
                <div className = 'date'>{art.created_at.slice(0,10)} Votes: {art.votes}</div>
            </Grid>)})}
        </Grid>
    </>)
}

export default Articles