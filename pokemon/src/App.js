
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
  axios.get(currentPageUrl).then(res=>{
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.next)
    setPokemon(res.data.results.map(p=>p.name))
  })
},[currentPageUrl]) //every time reget pokemon,evry time go to different page

 return(
    <PokemonList pokemon={pokemon}/>  //pass pokemon to pokemonList it can render our pokemon
 );
}

export default App;
