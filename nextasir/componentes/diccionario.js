/* almacena textos traducidos */ 
const dictionaries = {
    en: {
      title: 'Welcome to my multilingual page',
      description: 'This is a simple page that can be translated into Spanish and English.',
      home:'Home',
      esperando:'Waiting 3s'
    },
    es: {
      title: 'Bienvenido a mi página multilingüe',
      description: 'Esta es una página sencilla que se puede traducir al español y al inglés.',
      home:'Inicio',
      esperando:'Esperando 3s'
    },

    fr: {
      title: 'Bienvenue sur ma page multilingue',
      description: 'Ceci est une page simple qui peut être traduite en espagnol, anglais et français.',
      home: 'Accueil',
      esperando: 'En attente 3s'
    }

  };
/*   recibe el idioma y devuelve el diccionario correspondiente */
  export const getDictionary = (lang) => dictionaries[lang ]