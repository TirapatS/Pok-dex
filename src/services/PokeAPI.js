import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

const get = async(endpoint) => {
    const res = await axios.get(endpoint)

    return res.data
}

const getPokemon = async (name) => {
    return get(`pokemon/${name}`)
}


export default {
    getPokemon
}