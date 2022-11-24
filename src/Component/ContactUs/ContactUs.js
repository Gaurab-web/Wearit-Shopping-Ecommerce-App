import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Col, Container, Form, Row, FloatingLabel, Button } from 'react-bootstrap'
import './ContactUs.css'
import ContactModal from './ContactModal/ContactModal';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
    const navigate = useNavigate();

    const [inputState, setInput] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log("Event Name: ", name, "Event value: ", value);

        setInput({ ...inputState, [ name ] : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submiited Value: ", inputState);

        emailjs.sendForm(
            'service_mi1suj8',
            'template_8usr0w8',
            event.target,
            'fwlACNRVUVhznlLyT'
        ).then(res=>{
            console.log("Email Res: ", res);
        })
        .catch(err=>{
            console.log("Email Error: ", err);
        });
    };

    // For Modal Purpose
    const [modal, setModal] = useState(false);

    const modalOpen = ()=>{
        setModal(true);
    }

    const modalClose = ()=>{
        setModal(false);
        navigate('/');
    }
    return (
        <>
            <div className='con-sec'>
                <img src="../../../../Images/contact_us.jpg"
                    alt="con_sec"
                    className='sec-conct'
                />
            </div>

            <Container className='contact-por'>
                <div className='cont-head pb-2 mb-3'>
                    Contact Wearit
                </div>

                <Row className='justify-content-between mb-5 mt-5'>
                    <Col xs={4} className="imp-cont pt-4 pe-4 ps-4 pb-4">
                        <div className='headqua-sec'>
                            <p className='head-headqua'>CORPORATE HEADQUARTERS</p>
                            <p className='headqua-set'>
                                Indianapolis Office Wearit Property Group, Inc. 225 West Washington Street Indianapolis, Indiana 46204
                            </p>
                        </div>

                        <div className='headqua-sec mt-4'>
                            <p className='head-headqua'>OTHER CORPORATE LOCATIONS</p>
                            <p className='headqua-set'>
                                New York Office Wearit Property Group, Inc. 399 Park Avenue, 29th Floor New York, New York 10022
                            </p>
                            <p className='headqua-set mt-3'>
                                Wearit Premium Outlets® Office Wearit Property Group, Inc. 60 Columbia Road, Building B Morristown, New Jersey 07960
                            </p>
                        </div>

                        <div className='headqua-sec mt-5'>
                            <p className='head-headqua'>Wanting to call our Corporate Headquarters?</p>
                            <p className='headqua-set'>
                                (+91) - 9851129850
                            </p>
                        </div>

                        <div className='headqua-sec mt-5'>
                            <p className='head-headqua'>Or looking to call Shop Premium Outlets?</p>
                            <p className='headqua-set'>
                                (+91) - 9836541203
                            </p>
                        </div>

                        <div className='headqua-sec mt-5'>
                            <p className='head-headqua'>Looking to call a local Wearit center?</p>
                            <p className='headqua-set'>
                                Find the right phone number here.
                            </p>
                        </div>

                        <div className='headqua-sec mt-5'>
                            <p className='head-headqua'>Looking for help with your Shop Premium Outlets (SPO.com) order or account?</p>
                            <p className='headqua-set'>
                                Review help guides, open a support request, call (888) 605-2801 during business hours or email their support team now.
                            </p>
                        </div>
                    </Col>
                    <Col xs={8} className="form-sec pt-4 pe-3 ps-3">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-4'>
                                <FloatingLabel controlId="floatingPassword" label="Full Name" className='text-form'>
                                    <Form.Control
                                        type="text"
                                        name="full_name"
                                        placeholder="Enter your full name"
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <FloatingLabel controlId="floatingPassword" label="Email Address" className='text-form'>
                                    <Form.Control
                                        type="email"
                                        name="user_email"
                                        placeholder="Enter your email address"
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingSelectGrid"
                                            label="Region (optional)"
                                            className='text-form'
                                        >
                                            <Form.Select aria-label="Floating label select example" name="state" onChange={handleChange}>
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
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="Mobile Number" className='text-form'>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                onChange={handleChange}
                                            />
                                        </FloatingLabel>
                                    </Col>

                                </Row>
                            </Form.Group>

                            <Form.Group className='mb-5'>
                                <FloatingLabel controlId="floatingTextarea2" label="Your Query" className='text-form'>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        name="query"
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='query-sec'>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="
                                        Yes, I want Wearit to be able to contact me as I am 18 years of age or older and agree to Wearit Property Group’s Terms of Use, Privacy Policy & Cookie Policy. I also agree that by providing personal information on this page, I am consenting to Wearit’s use, storage and maintenance of the information for the intended purposes.
                                    "
                                    className='text-form-query'
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='d-grid'>
                                <Button variant='dark' type='submit' className='send-btn' onClick={modalOpen}>Send message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <ContactModal data = {modal} func = {modalClose} />
        </>
    )
}
