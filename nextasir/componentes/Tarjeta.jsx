"use client";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Tarjeta({ nombre, id, imgSrc, pokert }) {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      <Card.Img variant="top" src={imgSrc} alt={`Imagen de ${nombre}`} />
      
    {/* detalles del titulo y descripcion  */}
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          ID: {id}
        </Card.Text>
      </Card.Body>
      
     {/*  aqui se agrega mas datos y propiedades  */}
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Tipo: {pokert}</ListGroup.Item>
        <ListGroup.Item>Más detalles en el enlace</ListGroup.Item>
      </ListGroup>

      {/* Enlaces  */}
      <Card.Body>
        <Link href={`/${pokert}/${id}`} passHref>
          <Button variant="primary">Quieres saber más</Button>
        </Link>
        <Card.Link href={`/${pokert}`}>Ver todos</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
