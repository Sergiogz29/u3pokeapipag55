/* oculta aqui la carpeta RandomPokemonGen3Page */

import { fetchData } from "@/componentes/funciones";
import { notFound } from "next/navigation";
import ModalComponent from "@/componentes/Modal"; 
import RandomPokemonGen3Page from "../page"

export default async function Page({ params }) {
  const { id } = params;
  if (id <= 0 || id > 1000) {
    return notFound();
  }

  let pokemon = null;
  try {
    pokemon = await fetchData({ id });
  } catch (error) {
    console.error("Error fetching data: ", error);
    return notFound();
  }

 
  const modalTitle = `Número: ${pokemon.numero} - ${pokemon.nombre}`;
  const modalBodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={pokemon.img} alt={pokemon.nombre} />
      <h4>HP:{pokemon.hp} - Ataque:{pokemon.ataque} - Defensa:{pokemon.defensa}</h4>
    </div>
  );
  const modalSecondaryButtonText = "cerrar";

  return (
    <>
      
      <ModalComponent 
        title={modalTitle}
        bodyContent={modalBodyContent}
        secondaryButtonText={modalSecondaryButtonText}
      />
    </>
  );
}
