"use client"; 
import { useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
import Tarjeta from "@/componentes/Tarjeta"; 


export default function RandomPokemonGen3Page() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getRandomPokemonsGen3 = async () => {
      try {
      /*   obtener lista generacion 3 */
        const response = await fetch('https://pokeapi.co/api/v2/generation/3/');
        const data = await response.json();
        const pokemonSpecies = data.pokemon_species;

        // Selecciona 10 Pokémon aleatorios de la lista de la generación 3
        const pokemonPromises = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * pokemonSpecies.length);
          const randomPokemonUrl = pokemonSpecies[randomIndex].url;
          const urlParts = randomPokemonUrl.split('/');
          const randomId = urlParts[urlParts.length - 2]; // Extrae el ID del Pokémon

          // Utiliza la función fetchData para obtener los datos del Pokémon
          pokemonPromises.push(fetchData({ id: randomId }));
        }

        const pokemonsData = await Promise.all(pokemonPromises);
        setPokemons(pokemonsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getRandomPokemonsGen3();
  }, []);

  if (pokemons.length === 0) {
    return <div>Cargandoo...</div>;
  }

  return (
    <>
      <section style={{backgroundColor:"blue", display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
