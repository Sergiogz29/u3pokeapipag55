'use client'
import localFont from "next/font/local";
/* import "./globals.css"; */
import Image from "next/image";
import { Suspense, useState, useEffect } from "react";
/* import Link from "next/link"; */
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "@/AddBootstrap";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  let [idioma, setIdioma] = useState('en');
  let dict = getDictionary(idioma);

  /* cambia idioma de español a ingles */
  const changeLanguage = (lang) => {
    setIdioma(lang);
  }

  const [randomNumber, setRandomNumber] = useState(null); // Generar el número aleatorio solo en el cliente 
  
  useEffect(() => { setRandomNumber(Math.floor(Math.random() * 1000) + 1); }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AddBootstrap/>
        <header>

          {/* navbar de boostrap */}
          <div>

           {/*  color de barra navegacion con bg-primary */}
            <nav className="navbar navbar-expand-lg bg-primary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/pokemon"> Navbar </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/pokemon">Inicio</a>
                    </li>

                    {/* Desplegable */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Pokemon Generación </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/Pokemongen1">Generación 1</a></li>
                        <li><a className="dropdown-item" href="/Pokemongen2">Generación 2</a></li>
                        <li><a className="dropdown-item" href="/Pokemongen3">Generación 3</a></li>
                      </ul>
                    </li>

                  </ul>
                  {/* botones de idiomas en al barra de boostrap */}
                  <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
                    <Image src="/spain.png" alt="Español" width={24} height={24} />
                  </button>

                  <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
                    <Image src="/uk.png" alt="Inglés" width={24} height={24} />
                  </button>

                  <button onClick={() => changeLanguage('fr')} className="p-2 rounded-full hover:bg-gray-200">
                    <Image src="/fr.png" alt="Français" width={24} height={24} />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          {/* navbar de boostrap */}
        </header>
        {/* traduccion del textpo con la funcion */}
        <h1>{dict.title}</h1>
        <h2>{dict.description}</h2>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
