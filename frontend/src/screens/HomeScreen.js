import React, {udeEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/product'




const HomeScreen = () => {
  
  useEffect(() => {
    const fetchProducts = () => {
      const {data} = axios.get('/api/products')

    }

  } )
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  )
}

 export default HomeScreen
