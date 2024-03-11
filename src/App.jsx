
import './App.css'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Articles from './components/Articles'
import Topics from './components/Topics'
import ArticleCard from './components/ArticleCard'
import Login from './components/Login'

function App() {
 

  return (
    <>
    
    <Header/>
    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path='/articles' element = {<Articles/>}/>
    <Route path ='/topics' element ={<Topics/>}/>
    <Route path ='/articles/:article_id' element ={<ArticleCard/>}/>
    <Route path ='/login' element ={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
