import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel.css'

export default function CarouselSec() {
    return (
        <Carousel variant='dark'>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro-img"
                    src="../../../../../Images/banner_2.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro-img"
                    src="../../../../../Images/banner_3.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro-img"
                    src="../../../../../Images/banner_4.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro-img"
                    src="../../../../../Images/banner_5.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro-img"
                    src="../../../../../Images/banner_6.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro-img"
                    src="../../../../../Images/banner_7.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
