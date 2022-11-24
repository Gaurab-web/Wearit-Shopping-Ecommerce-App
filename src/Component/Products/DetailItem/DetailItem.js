import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import ItemData from '../item.json'
import './DetailItem.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactImageMagnify from 'react-image-magnify';
import { FaStarHalfAlt, FaStar, FaCcAmazonPay } from 'react-icons/fa'
import { BsHandbag, BsCartCheck, BsTruck } from 'react-icons/bs'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { GoNote } from 'react-icons/go'
import { TbTruckDelivery, TbArrowsRightLeft } from 'react-icons/tb'
import AddCart from '../CartSection/addCart.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function DetailItem() {
  const navigate = useNavigate();

  const { id, name } = useParams();

  const userLogin = window.sessionStorage.getItem('User_id');

  const catItem = ItemData.products.find((data) => data.cat_name === name);
  const subItem = catItem.cat_sub.find((data) => data.sub_id === id);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  const [show, setShow] = useState(subItem.sub_img[0]);
  const hoverChange = (data, index) => {
    setShow(data);
  };

  const cartedPro = AddCart.cartItems.find((data)=> data.sub_id === id);

  const cartHandle = ()=>{
    const cartItems = AddCart.cartItems;
    subItem.user_id = userLogin;
    cartItems.push(subItem);
    navigate('/view_cart_page');
  };

  const viewCartHandle = ()=>{
    navigate('/view_cart_page');
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Container>
        <Row className='detail-sec justify-content-between'>
          <Col xs={5} className = "for-small">
            
            <Carousel responsive={responsive}>
              {subItem.sub_img.map((data, index)=>(
                <Row key = {index} className = "de-pic-1">
                  <Col>
                    <img src = {data} 
                      alt = "list_img"
                      className='short-img'
                    />
                  </Col>
                </Row>
              ))}
            </Carousel>
            
            <Row className='de-pic'>
              <Col>
                <Row className='list-photo'>
                  {subItem.sub_img.map((data, index) => (
                    <Col xs={5}
                      className="mb-3"
                      data-aos={subItem.anime[index++]}
                      key={index}>
                      <img src={data}
                        alt="list_img"
                        className='list-img'
                        onMouseOver={() => hoverChange(data, index)}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col className='main-img' data-aos="fade-down">
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: show
                  },
                  largeImage: {
                    src: show,
                    width: 1200,
                    height: 1800
                  },
                  enlargedImageContainerDimensions: {
                    width: '180%',
                    height: '150%',
                  },
                  shouldUsePositiveSpaceLens: true
                }} />
              </Col>
            </Row>
          </Col>

          <Col lg = {6}>
            <div className='cato-name'>
              {catItem.cat_name}
            </div>

            <div className='sub-name'>
              {subItem.sub_title}
            </div>

            <div className='rating-container'>
              <div className='rating-count'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className='rating-num ms-2'>{subItem.sub_rating}</span>
              </div>
            </div>

            <div className='pro-price mt-3'>
              ₹ {subItem.sub_price}
              <span className='off-price ms-2'>20% off</span>
              <p className='mrp-sec'>MRP <span className='cut-price'>₹10,589</span><span className='ms-2'>Inclusive of all taxes</span></p>
            </div>

            <Row className='delivery-sec mt-4 mb-5'><span className='deli-head'><b>Delivery Options</b><BsTruck className='truck-icon ms-2' /></span>
              <Col className='mt-4 mb-2'>
                <Row>
                  <Col xs={2}><TbTruckDelivery className='deli-icon' /></Col>
                  <Col xs={10} className = "deli-details">Get it by Thu, Oct 20</Col>
                </Row>
              </Col>

              <Col className='mb-2'>
                <Row>
                  <Col xs={2}><FaCcAmazonPay className='deli-icon' /></Col>
                  <Col xs={10} className = "deli-details">Pay on delivery available</Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={2}><TbArrowsRightLeft className='deli-icon' /></Col>
                  <Col xs={10} className = "deli-details">Easy 30 days return & exchange available</Col>
                </Row>
              </Col>
            </Row>

            <Row className='justify-content-between detail-lower'>
              <Col className='d-grid'>
                {cartedPro && subItem.user_id === userLogin ?
                <Button variant='dark' size='lg' className='de-btn' onClick={viewCartHandle}>
                  <BsCartCheck className='bag me-2' /> View Cart
                </Button>
                :
                <Button variant='dark' size='lg' className='de-btn' onClick={cartHandle}>
                  <BsHandbag className='bag me-2' /> Add to Cart
                </Button>
                }

              </Col>
              <Col className='d-grid'>
                <Button variant='outline-dark' className='de-btn' size='lg'>
                  <MdOutlineDoubleArrow className='buy-btn me-1' /> Buy Now
                </Button>
              </Col>
            </Row>

            <div className='pro-desc mt-4'>
              <div className='detail-product mb-3'>
                Product Details <GoNote />
              </div>
              {subItem.description}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
