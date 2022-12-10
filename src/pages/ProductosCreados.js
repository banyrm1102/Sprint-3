import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints";
import { ProductoCards } from "../components/ProductoCards";

const ProductosCreados=()=>{

    const [productos, setProductos]= useState([])

    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setProductos(respuesta.data)
        })
        .catch(err=>{
            console.log(err)

        })
    }, [])
    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center"> 
                <Col sm="14" md="8" log="16">
                    <h3 className="text-center"> Promoción de Productos</h3>
                    <div className="row justify-content-center text-center">
                        {productos.map(producto=> <ProductoCards key={producto.idproducto} producto={producto}/>)}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export {ProductosCreados}