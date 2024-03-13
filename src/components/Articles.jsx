import { useEffect,useState } from "react"
import { getArticles } from "./utils/api"
import Grid from '@mui/material/Unstable_Grid2'; 
import { Form, Link, useSearchParams } from "react-router-dom";
import Topics from "./Topics";

function Articles() {
    const [articles,setArticles]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const topic = searchParams.get('topic')
    const sort_by=searchParams.get('sort_by')
    const order = searchParams.get('order')
    useEffect(()=>{
        getArticles(topic,sort_by,order).then((articles)=>{
            console.log(articles);
            setArticles(articles)
        })

    },[topic,sort_by,order])
    function handleChange(event) {
        if(event.target.value === 'asc' ||event.target.value === 'desc' ){
         const currSort = searchParams.get('sort_by')
         setSearchParams({sort_by : currSort, order:event.target.value})
        }
        else{
       setSearchParams({sort_by : event.target.value})
        }

    }
    
    return(<>
    <h1>Our Latest Articles</h1>
    
   
    
    <Grid className = 'article-container' container alignItems="stretch"  rowSpacing={2}>
       <Grid  className='left-sidebar' xs={12} sm={12} md={12} lg={12} xl={1}>
       <Topics styling = 'small'></Topics>
     
        <div className ='select-box'>
        <form>
    <label>

      Sort By:<select name="selectedQuery" onChange={handleChange}>
        <option value="created_at">Date</option>
        <option value="title">title</option>
        <option value="author">author</option>
        <option value="votes">votes</option>
      </select>
      </label>
      <select onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value = "desc">Descending</option>
      </select>
    
    </form>
    </div></Grid>
    <Grid container spacing = {2} className = 'article' xs={5} sm={5} md={5} lg={5} xl={8} sx={{minWidth: '1200px'}}>
        {articles.map((art,index)=> {
            if(index === 0){
                
                return (
                <Grid xl = {9} className='individual-article-latest' key={art.article_id}>
                <div key ={art.article_id}>
                    <div className ="title">{art.title}</div><Link to={`/articles?topic=${art.topic}`}><div className ='topic'>{art.topic}</div></Link> <div className='author'>{art.author}</div> 
                     <div className="article-image-container">
                         <Link to={`/articles/${art.article_id}`}><img className='article-image-first' src={art.article_img_url}/></Link>
                         </div>
                         <div className = 'date'>{art.created_at.slice(0,10)} Votes: {art.votes}</div>
                   
                     </div>
                     </Grid>
                     )
            }
            return(
                <Grid xl = {3} key ={art.article_id} className="individual-article">
                <div key ={art.article_id} >
           <div className ="title">{art.title}</div><Link to={`/articles?topic=${art.topic}`}><div className ='topic'>{art.topic}</div></Link> <div className='author'>{art.author}</div> 
            <div className="article-image-container">
                <Link to={`/articles/${art.article_id}`}><img className='article-image' src={art.article_img_url}/></Link>
                </div>
                <div className = 'date'>{art.created_at.slice(0,10)} Votes: {art.votes}</div>
          
            </div>
            </Grid>
            )})}
              </Grid>
        </Grid>
    </>)
}

export default Articles