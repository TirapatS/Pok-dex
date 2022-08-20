import {useState} from 'react'
import PokeAPI from "../services/PokeAPI"
import '../assets/css/App.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const typeColor = {
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}


function HomePage() {
  const [pokemonName, setPokemonName] = useState('') /* get user input */
  const [pokemonData, setPokemonData] = useState({}) /*  get pokeome data*/
  const [currentPokemon, setCurrentPokemon] = useState(false) /* display pokemon if pokemonData is true*/

  /* make first letter of the string capitalized */
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /* User can also press Enter to Search */
  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
        searchPokemon()
    }
  }

  // Execute search
  const searchPokemon = async () => {
    const data = await PokeAPI.getPokemon(pokemonName)
    console.log(data) /* Show data */

    /* insert data into setPokemonData to be later printed out */
    setPokemonData(
        {
            name:pokemonName,
            img: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            type: data.types[0].type.name,
            order: data.order
            
        }
    )
    setCurrentPokemon(true)
  }

 
  return (
    <>
        <div className="searchContainer">
            <input id="searchBar" 
            type="text" 
            placeholder="Example: Pikachu"
            onKeyPress={handleKeyPress}
            onChange={(event) => 
                {setPokemonName(event.target.value.toLowerCase())}}
            />{/* update useState when user writes in searchBar. Force lowercase */}

            {/* When clicked run SearchPokemon */}
            <button onClick={searchPokemon}>Search</button>
        </div>
        <div className="wrapper">
            <div className="displayContainer">
                <div className="displayPokemon" >    
                    {currentPokemon && (
                        <>  
                            <div className="info">
                                <h4>{pokemonData.order}</h4>
                                <p style={{backgroundColor: `${typeColor[pokemonData.type]}`}}>{capitalizeFirst(pokemonData.type)} </p>
                            </div>
                            <div className="about">
                                <div className="image">
                                    <img src={pokemonData.img} />
                                </div>
                                <div className="profile">
                                    <h1>{capitalizeFirst(pokemonData.name)}</h1>

                                    <p>Hp:</p>
                                    <ProgressBar now={pokemonData.hp} label={`${pokemonData.hp}`}/>

                                    <p>Attack:</p>
                                    <ProgressBar now={pokemonData.attack} label={`${pokemonData.attack}`}/>
                                    
                                    <p>Defense:</p>
                                    <ProgressBar now={pokemonData.defense} label={`${pokemonData.defense}`}/>

                                    <p>Special Attack:</p>
                                    <ProgressBar now={pokemonData.specialAttack} label={`${pokemonData.specialAttack}`}/>

                                    <p>Special Defense:</p>
                                    <ProgressBar now={pokemonData.specialDefense} label={`${pokemonData.specialDefense}`}/>

                                    <p>Speed:</p>
                                    <ProgressBar now={pokemonData.speed} label={`${pokemonData.speed}`}/>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
  
    </>
    
    
  )
}

export default HomePage