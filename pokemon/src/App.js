import React ,{useState,useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

 

function App() {
 const [pokemon, setPokemon] = useState()

useEffect(()=>{
  axios.get("https://pokeapi/api/v2/pokemon").then(res=>{
    setPokemon(res.data.results.map(p=>p.name))
  })
},[])

 return(
    <PokemonList pokemon={pokemon}/>  //pass pokemon to pokemonList it can render our pokemon
 );
}

export default App;
