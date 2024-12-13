"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
/* importamos nuesta tarjeta */ 
import Tarjeta from "@/componentes/Tarjeta"; 

export default function RandomPokemonGen1Page() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getRandomPokemonsGen1 = async () => {
      try {
        /* obtenemos la lista de generacion 1 */
        const response = await fetch('https://pokeapi.co/api/v2/generation/1/');
        const data = await response.json();
        const pokemonSpecies = data.pokemon_species;

        /* generamos 10 pokemon aleatorios de generacion 1 */
        const pokemonPromises = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * pokemonSpecies.length);
          const randomPokemonUrl = pokemonSpecies[randomIndex].url;
          const urlParts = randomPokemonUrl.split('/');
          /* extraemosd el ID del pokemon */
          const randomId = urlParts[urlParts.length - 2];  
          pokemonPromises.push(fetchData({ id: randomId }));
        }

        const pokemonsData = await Promise.all(pokemonPromises);
        setPokemons(pokemonsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getRandomPokemonsGen1();
  }, []);

  if (pokemons.length === 0) {
    return <div>Cargandooo...</div>;
  }

  return (
    <>
      {/* estilos incluido el color de fondo */}
      <section style={{backgroundColor:"red", display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemons.map((pokemon, index) => (
          <Tarjeta 
            key={index}
            nombre={pokemon.nombre}
            id={pokemon.numero}
            imgSrc={pokemon.img}
            pokert="Pokemongen1" 
          />
        ))}
      </section>
    </>
  );
}
