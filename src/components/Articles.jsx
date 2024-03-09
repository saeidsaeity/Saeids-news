import { useEffect,useState } from "react"
import { getArticles } from "./utils/api"
import Grid from '@mui/material/Unstable_Grid2'; 
import { Link } from "react-router-dom";

function Articles() {
    const [articles,setArticles]=useState([])
    useEffect(()=>{
        getArticles().then((articles)=>{
            setArticles(articles)
        })

    })
    return(<>
    <h1>Our Latest Articles</h1>
    <Grid className = 'article-container' container rowSpacing={2}>
        {articles.map((art)=> {
            return(
            <Grid className = 'article' xs={12} sm={12} md={8} lg={8} xl={6} key={art.article_id}><div className ="title">{art.title}</div><div className ='topic'>{art.topic}</div> <div className='author'>{art.author}</div> 
            <div className="article-image-container">
                <Link to={`/articles/${art.article_id}`}><img className='article-image' src={art.article_img_url}/></Link>
                </div>
                <div className = 'date'>{art.created_at.slice(0,10)}</div>
            </Grid>)})}
        </Grid>
    </>)
}

export default Articles