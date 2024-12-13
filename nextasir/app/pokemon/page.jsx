
"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
/*  ruta DE LA TARJETA*/
import Tarjeta from "@/componentes/Tarjeta"; 
export default function RandomPokemonPage() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000) + 1;

/*  datos del Pokémon aleatorio */
    async function getPokemon() {
      try {
        let pokemonData = await fetchData({ id: randomId });
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getPokemon();
  }, []);

  if (!pokemon) {
    return <div>Cargandooo...</div>;
  }

  return (
    <>
    {/* aqui llamamos a nuestro componente tarjeta */}
      <Tarjeta 
        nombre={pokemon.nombre}
       /*  no se usa tilde */
        id={pokemon.numero}
        imgSrc={pokemon.img}
        pokert="pokemon"
      />
    </>
  );
}
