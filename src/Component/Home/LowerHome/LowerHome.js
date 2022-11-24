import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Container, Row } from 'react-bootstrap';
import './LowerHome.css'
import { BsArrowRight } from 'react-icons/bs'

export default function LowerHome() {
    return (
        <>
            <Container>
                <Row className='justify-content-center info-card'>
                    <Col xs = {8} md = {3} className = "mb-3 mb-md-0">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="https://images.pexels.com/photos/7176435/pexels-photo-7176435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="green iguana"
                                className='lower-img'
                            />
                            <CardContent className='card-inside'>
                                <Typography gutterBottom component="div" className='card-head-1'>
                                    Inside Wearit
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='card-head-2'>
                                    Wearit Move teams up with Zlatan Ibrahimovic
                                </Typography>
                            </CardContent>
                            <CardActions className='card-lower'>
                                <Button size="small" className='hd-btn'>Read this story <BsArrowRight className='ms-2'/></Button>
                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs = {8} md = {3} className = "mb-3 mb-md-0">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="https://images.pexels.com/photos/7686312/pexels-photo-7686312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="green iguana"
                                className='lower-img'
                            />
                            <CardContent className='card-inside'>
                                <Typography gutterBottom component="div" className='card-head-1'>
                                    Inside Wearit
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='card-head-2'>
                                    Take a seat at Brasserie Hennes and Gerogia
                                </Typography>
                            </CardContent>
                            <CardActions className='card-lower'>
                                <Button size="small" className='hd-btn'>Read this story <BsArrowRight className='ms-2'/></Button>
                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs = {8} md = {3} className = "mb-3 mb-md-0">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="https://images.pexels.com/photos/10242123/pexels-photo-10242123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="green iguana"
                                className='lower-img'
                            />
                            <CardContent className='card-inside'>
                                <Typography gutterBottom component="div" className='card-head-1'>
                                    Inside Wearit
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='card-head-2'>
                                    A true beautiful story of a Bride and her Life-Style
                                </Typography>
                            </CardContent>
                            <CardActions className='card-lower'>
                                <Button size="small" className='hd-btn'>Read this story <BsArrowRight className='ms-2'/></Button>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
