

    "use client";
import Link from "next/link";

export default function Error() {
  return (

  /*   aqui se agrega la imagen error */
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Error  horror! 404</h1>
      <p>La página que buscas no existe.</p>
      <Link href="/">

        <button style={{ padding: "10px 20px", backgroundColor: "blue", color: "white" }}>
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
}
