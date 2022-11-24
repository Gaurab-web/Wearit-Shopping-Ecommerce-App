import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import OrderPlaceModal from './OrderPlaceModal/OrderPlaceModal';
import './PlaceItem.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function PlaceItem() {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 2000 });
      });

    // For Modal Part
    const [modal, setModal] = useState(false);
    const modalOpen = ()=>{
        setModal(true);
    };

    const modalClose = ()=>{
        setModal(false);
        navigate("/");
    }
    // For Modal Part

    const [inputState, setInput] = useState();

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setInput({...inputState, [ name ] : value});
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
    };
    return (
        <>
            <Container>
                <Row className='login-sec'>
                    <Col className='left-sec' lg = {9}>
                        <p className='head-right-lg' data-aos = "fade-down">Product Checkout</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-5'>
                                <Form.Label><b>Contact Information</b></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder='Enter your email address'
                                    onChange={handleChange}
                                    className = "place-field"
                                />
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Email me with news and offers"
                                    className='mt-3 check-pro'
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label><b>Shipping Address</b></Form.Label>
                                <FloatingLabel controlId="floatingSelect" label="State">
                                    <Form.Select aria-label="Floating label select example" name = "state" onChange={handleChange} className = "place-field">
                                        <option>Select your state</option>
                                        <option value="1">Andhra Pradesh</option>
                                        <option value="2">Arunachal Pradesh</option>
                                        <option value="3">Assam</option>
                                        <option value="4">Bihar</option>
                                        <option value="5">Chhattisgarh</option>
                                        <option value="6">Goa</option>
                                        <option value="7">Gujrat</option>
                                        <option value="8">Haryana</option>
                                        <option value="9">Himachal Pradesh</option>
                                        <option value="10">Jharkand</option>
                                        <option value="11">Karnataka</option>
                                        <option value="12">Kerala</option>
                                        <option value="13">Madhya Pradesh</option>
                                        <option value="14">Maharastra</option>
                                        <option value="15">Manipur</option>
                                        <option value="16">Meghalaya</option>
                                        <option value="17">Mizoram</option>
                                        <option value="18">Nagaland</option>
                                        <option value="19">Odisha</option>
                                        <option value="20">Punjab</option>
                                        <option value="21">Rajasthan</option>
                                        <option value="22">Sikkim</option>
                                        <option value="23">Tamil Nadu</option>
                                        <option value="24">Telengana</option>
                                        <option value="25">Uttarakand</option>
                                        <option value="26">Uttar Pradesh</option>
                                        <option value="27">West Bengal</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="First Name" className = "place-field">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Enter your first name" 
                                                name = "fname"
                                                onChange={handleChange}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="Last Name" className = "place-field">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Enter your last name" 
                                                name = "lname"
                                                onChange={handleChange}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <FloatingLabel controlId="floatingInputGrid" label="Address" className = "place-field">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your address" 
                                        name = "address"
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="City" className = "place-field">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Enter your city name" 
                                                name = "city"
                                                onChange={handleChange}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="PIN Code" className = "place-field">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Enter your pin code" 
                                                name = "pin"
                                                onChange={handleChange}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <FloatingLabel controlId="floatingInputGrid" label="Phone" className = "place-field">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your phone number" 
                                        name = "phone"
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-2'>
                                <Form.Check
                                    type='checkbox'
                                    id='default checkbox'
                                    label="Save this information for next time"
                                    className='check-pro'
                                />
                            </Form.Group>

                            <Form.Group className='mb-5'>
                                <Form.Check
                                    type='checkbox'
                                    id='default checkbox'
                                    label="SMS and Whatsapp me with news and offers"
                                    className='check-pro'
                                />
                            </Form.Group>

                            <Form.Group className='check-btn d-grid'>
                                <Button variant='dark' type='submit' onClick={modalOpen} className = "place-field">Continue to Shipping</Button>
                            </Form.Group>
                        </Form>
                    </Col>

                    {/* Right Section */}
                    <Col className='right-sec-check' lg = {3} data-aos = "fade-left">
                        <div className='check-pic'>
                            <img src = "https://images.pexels.com/photos/2728753/pexels-photo-2728753.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                                alt="check_pic"
                                className='pic-check'
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <OrderPlaceModal data = {modal} func = {modalClose} />
        </>
    )
}
