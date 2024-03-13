import { useEffect,useState } from "react"
import { getArticles } from "./utils/api"
import Grid from '@mui/material/Unstable_Grid2'; 
import { Form, Link, useSearchParams } from "react-router-dom";
import Select from 'react-select';
import Topics from "./Topics";

function Articles() {
    const [articles,setArticles]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const topic = searchParams.get('topic')
    const sort_by=searchParams.get('sort_by')
    const order = searchParams.get('order')
    const[error,setError]=useState()
    useEffect(()=>{
        getArticles(topic,sort_by,order).then((articles)=>{

            setArticles(articles)
           
        }).catch((error)=>{setError(error.response.data)})

    },[topic,sort_by,order])
    function handleChange(event) {
       
        if(event.value === 'asc' ||event.value === 'desc' ){
         const currSort = searchParams.get('sort_by')
         setSearchParams({sort_by : currSort, order:event.value})
        }
        else{
            const currOrder = searchParams.get('order')
    setSearchParams({sort_by : event.value, order: currOrder!==null?currOrder:'desc'})
        }

    }
    if(error){
        return(<h2>Error {error.status}: {error.msg}</h2>)
        
    }
    const options = [{value: "created_at", label: 'Date'},{value: 'title', label: 'Title'},{value: 'author', label: 'Author'},{value: 'votes', label: 'Votes'}]
    const optionsorder = [{value:'desc',label:'Descending'},{value:'asc',label:'Ascending'}]
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          boxShadow: state.isFocused ? '0 0 0 2px blue' : 'none', // Add box-shadow on focus
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'gray',
          },
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'white', // Change color of selected value
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            display: 'none', // Hide the dropdown indicator
          }),
      };




    return(
 
    
        
    
    <Grid className = 'article-container' container alignItems="stretch"  rowSpacing={2}>
    <Grid className='topic-grid-container' xs={12} sm={12} md={12} lg={12} xl={12}>
       <Topics styling = 'small'></Topics> 
       </Grid>
    <h1>Our Latest Articles</h1>
       <Grid container className='left-sidebar' xs={12} sm={12} md={12} lg={12} xl={12}>
        
       <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
       <form >
    
     <Select placeholder="Sort Articles" options = {options}onChange={handleChange} styles={customStyles}> </Select>
    <Select placeholder="Choose either Ascending or Descending order" options = {optionsorder}onChange={handleChange}styles={customStyles} > </Select>
    
    </form>
    </Grid>
    </Grid>
    <Grid container spacing = {2} className = 'article' xs={12} sm={12} md={5} lg={5} xl={8} sx={{minWidth: '100%'}}>
        {articles.map((art,index)=> {
            if(index === 0){
                
                return (
                <Grid xs={12} sm={12} xl = {9} className='individual-article-latest' key={art.article_id}>
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
                <Grid  xs ={12} sm= {12} xl = {3} key ={art.article_id} className="individual-article">
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
    )
}

export default Articles