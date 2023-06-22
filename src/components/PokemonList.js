import React from 'react'

const PokemonList = ({pokemon}) => {
  return (
    <div className='background'>
    <div className= "container">
        {pokemon.map(p =>(
          <div className="pokeNames" key={p}>{p}</div>  
        )
            )}
    </div>
    </div>
  )
}

export default PokemonList