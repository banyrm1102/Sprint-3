import Card from 'react-bootstrap/Card';
import { Link } from  'react-router-dom';

function ProductoCards({producto}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title className='color-titulo'>
            <Link to={`/producto/${producto.idproducto}`}>
              {producto.titulo}
            </Link>
        </Card.Title>
        <Card.Text>COP$ {producto.precio}</Card.Text>
        <Card.Text className='color-precio'> </Card.Text>
        </Card.Body>
    </Card>
  );
}

export {ProductoCards}; 