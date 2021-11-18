
import React ,{useState,useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

 

function App() {
 const [pokemon, setPokemon] = useState([])
 const [currentPageUrl,setCurrentPageUrl]=useState(["https://pokeapi.co/api/v2/pokemon" ])
 const [nextPageUrl,setNextPageUrl] =useState()
 const [prevPageUrl,setPrevPageUrl]=useState()
 const [loading,setLoading]=useState(true)

useEffect(()=>{
  //req start
  setLoading(true)
  let cancel 

  axios.get(currentPageUrl).then(res=>{
    //req completes
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.next)
    setPokemon(res.data.results.map(p=>p.name))
  })


//aplicn never loads old data //cancel prev req make new req.Finishes after new req
//every time reget pokemon,evry time go to different page

return()=> cancel()    
},[currentPageUrl]) 


//our pagination comp going to use these func
function gotoNextPage(){
  setCurrentPageUrl(nextPageUrl)
}

function gotoPrevPage(){
   setCurrentPageUrl(prevPageUrl)
}

if (loading) return "Loading...."
 
 return(
    <PokemonList pokemon={pokemon}/>  //pass pokemon to pokemonList it can render our pokemon
 );
}

export default App;
