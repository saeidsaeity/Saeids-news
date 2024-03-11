import { useEffect,useState } from "react"
import { getArticles } from "./utils/api"
import Grid from '@mui/material/Unstable_Grid2'; 
import { Link, useSearchParams } from "react-router-dom";
import Topics from "./Topics";

function Articles() {
    const [articles,setArticles]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const topic = searchParams.get('topic')
    const sort_by=searchParams.get('sort_by')
    useEffect(()=>{
        getArticles(topic,sort_by).then((articles)=>{
            setArticles(articles)
        })

    },[topic,sort_by])
    function handleChange(event) {
       setSearchParams({sort_by : event.target.value})
    }
    
    return(<>
    <h1>Our Latest Articles</h1>
    
   
    
    <Grid className = 'article-container' container alignItems="stretch"  rowSpacing={2}>
       <Grid  className='left-sidebar' xs={12} sm={12} md={12} lg={12} xl={1}>
       <Topics styling = 'small'></Topics>
     
        <div className ='select-box'>
    <label>
      Sort By:<select name="selectedQuery" onChange={handleChange}>
        <option value="created_at">Date</option>
        <option value="title">title</option>
        <option value="author">author</option>
        <option value="votes">votes</option>
      </select>
    </label>
    </div></Grid>
    <Grid className = 'article' xs={12} sm={12} md={12} lg={12} xl={11} sx={{minWidth: '1200px'}}>
        {articles.map((art)=> {
            return(
                <div key ={art.article_id}>
           <div className ="title">{art.title}</div><Link to={`/articles?topic=${art.topic}`}><div className ='topic'>{art.topic}</div></Link> <div className='author'>{art.author}</div> 
            <div className="article-image-container">
                <Link to={`/articles/${art.article_id}`}><img className='article-image' src={art.article_img_url}/></Link>
                </div>
                <div className = 'date'>{art.created_at.slice(0,10)} Votes: {art.votes}</div>
          
            </div>
            )})}
              </Grid>
        </Grid>
    </>)
}

export default Articles