import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { EliminarProductoBoton } from "../components/EliminarProductoBoton.js";
import { PRODUCTOSDETALLE_GET_ENDPOINT } from "../connections/endpoints";


const ProductosDetalle=()=>{

    const [producto, setProducto]= useState({})
    const {id}=useParams()
    const navegar= useNavigate()

    useEffect(()=>{
        axios.get(`${PRODUCTOSDETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=>{
            setProducto(respuesta.data)
        })
        .catch(err=>{
            navegar(-1)
        })
    }, [id, navegar])

    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center"> 
                <Col sm="12" md="8" log="6">
                    <h3 className="text-center"> Descripción Artículos</h3>
                    <div className="row justify-content-center text-center">
                       <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={producto.imagen} />
                            <Card.Body>
                                <Card.Title className='color-titulo'>{producto.titulo}</Card.Title>
                                <Card.Text>Categoría{producto.categoria}</Card.Text>
                                <Card.Text>{producto.descripcion}</Card.Text>
                                <Card.Text>COP$ {producto.precio}</Card.Text>
                                <Button variant="primary" size="sm">Editar</Button>
                                <EliminarProductoBoton id={producto.idproducto}/>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export {ProductosDetalle}