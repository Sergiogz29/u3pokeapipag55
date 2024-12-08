/* "use client"; 

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({ nombre, id, imgSrc, pokert }) {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <h2>{nombre}</h2>
        <h2>{id}</h2>
        <Link href={`/${pokert}/${id}`} passHref> <Button variant="primary">Saber más</Button> </Link>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
 */


"use client";

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Tarjeta({ nombre, id, imgSrc, pokert }) {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      {/* Imagen superior */}
      <Card.Img variant="top" src={imgSrc} alt={`Imagen de ${nombre}`} />
      
      {/* Título y descripción */}
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          ID: {id}
        </Card.Text>
      </Card.Body>
      
      {/* Lista de atributos (puedes agregar más datos si tienes más propiedades) */}
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Tipo: {pokert}</ListGroup.Item>
        <ListGroup.Item>Más detalles en el enlace</ListGroup.Item>
      </ListGroup>

      {/* Enlaces y botones */}
      <Card.Body>
        <Link href={`/${pokert}/${id}`} passHref>
          <Button variant="primary">Saber más</Button>
        </Link>
        <Card.Link href={`/${pokert}`}>Ver todos</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
