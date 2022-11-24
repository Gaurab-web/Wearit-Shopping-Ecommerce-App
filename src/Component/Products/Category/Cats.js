import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemData from '../item.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Cats.css'

export default function Cats() {
  useEffect(()=>{
    Aos.init({duration : 2000})
  }, [])
  return (
    <>
      <Container>
        <h1 className='cat-head pb-4 mt-4 mb-5'>Categories</h1>
        <Row xs={1} md={2} lg={3}>
          {ItemData.products.map((data) => (
            <Col key={data.cat_id} data-aos = "zoom-in">
              <Card className="bg-dark text-white mt-4 mb-4">
                <Card.Img src={data.cat_img} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>{data.cat_name}</Card.Title>
                  <Link to={`/sub_category/${data.cat_name}/${data.cat_id}`}>
                    <Button variant='light' className='mt-3'>
                      Shop now
                    </Button>
                  </Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
