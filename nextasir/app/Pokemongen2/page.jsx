"use client"; 

import { useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
import Tarjeta from "@/componentes/Tarjeta"; 


export default function RandomPokemonGen1Page() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getRandomPokemonsGen2 = async () => {
      try {
        
        const response = await fetch('https://pokeapi.co/api/v2/generation/2/');
        const data = await response.json();
        const pokemonSpecies = data.pokemon_species;

     /*  pokemon aleatorio 10 */
        const pokemonPromises = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * pokemonSpecies.length);
          const randomPokemonUrl = pokemonSpecies[randomIndex].url;
          const urlParts = randomPokemonUrl.split('/');
          /* Extrae el ID del Pokémon */
          const randomId = urlParts[urlParts.length - 2]; 

          // función  para obtener los datos del Pokémon
          pokemonPromises.push(fetchData({ id: randomId }));
        }

        const pokemonsData = await Promise.all(pokemonPromises);
        setPokemons(pokemonsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getRandomPokemonsGen2();
  }, []);

  if (pokemons.length === 0) {
    return <div>Cargandooo...</div>;
  }

  return (
    <>
      <section style={{backgroundColor:"green", display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemons.map((pokemon, index) => (
          <Tarjeta 
            key={index}
            nombre={pokemon.nombre}
            id={pokemon.numero}
            imgSrc={pokemon.img}
            pokert="Pokemongen2" 
          />
        ))}
      </section>
    </>
  );
}
