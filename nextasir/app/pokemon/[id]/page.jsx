import { fetchData } from "@/componentes/funciones";
import { notFound } from "next/navigation";
/* buscamos la ruta del modal  */
import ModalComponent from "@/componentes/Modal"; 


/* aqui pintamos la informacion  */
export default async function Page({ params }) {
  const { id } = params;
/*   no puede haber mas de 1000 o 0, error */
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

  // Definir las variables para el modal
  const modalTitle = `Número: ${pokemon.numero} - ${pokemon.nombre}`;
  const modalBodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={pokemon.img} alt={pokemon.nombre} />
      <h4>HP:{pokemon.hp} - Ataque:{pokemon.ataque} - Defensa:{pokemon.defensa}</h4>
    </div>
  );
  const modalSecondaryButtonText = "Cerrar";

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
