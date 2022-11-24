import React from 'react'
import { Col, Container, Row, Button, Form, InputGroup, ProgressBar, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import './UserDetail.css'
import { TbMessages, TbBrandTelegram } from 'react-icons/tb'
import { BiCalendarAlt, BiMessageRounded, BiHeart } from 'react-icons/bi'
import { AiFillSetting, AiOutlineEye } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { GrGooglePlus } from 'react-icons/gr'
import { FaEnvelope } from 'react-icons/fa'
import AddCart from '../Products/CartSection/addCart.json'

export default function UserDetail() {
    const navigate = useNavigate();

    const { fname, lname } = useParams();

    const logoutHandle = () => {
        window.sessionStorage.clear();
        navigate('/login_user');
    };

    const user = window.sessionStorage.getItem('User_id');

    const favItem = AddCart.cartItems;

    const detailCart = favItem.filter((data)=> data.user_id === user);
    return (
        <>
            <div className='pro-first-banner'>
                <img src="../../../../Images/profile-ban.jpg"
                    alt="pro_ban"
                    className='prof-first-ban'
                />
            </div>

            <Container>
                <Row className='profile'>
                    <Col className='user-main-1'>
                        <Row className='user-left'>
                            <Col className='left-head'>
                                <div>
                                    <p className='head-left'>Menu box</p>
                                </div>
                            </Col>
                            <Col>
                                <Row className='menu-item-1 mt-4'>
                                    <Col xs={1}>
                                        <TbMessages className='msg-icon' />
                                    </Col>
                                    <Col className='msg-state'>
                                        <p className='msg-word'>Messages</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='menu-item-1'>
                                    <Col xs={1}>
                                        <TbBrandTelegram className='msg-icon' />
                                    </Col>
                                    <Col className='msg-state'>
                                        <p className='msg-word'>Invites</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='menu-item-1'>
                                    <Col xs={1}>
                                        <BiCalendarAlt className='msg-icon' />
                                    </Col>
                                    <Col className='msg-state'>
                                        <p className='msg-word'>Events</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='menu-item-1'>
                                    <Col xs={1}>
                                        <AiFillSetting className='msg-icon' />
                                    </Col>
                                    <Col className='msg-state'>
                                        <p className='msg-word'>Account Settings</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Col>

                    <Col xs={8} md={6} lg={3} className = "user-main-3">
                        <div className='profile-pic'>
                            <img src="../../../../Images/user.png" alt="user_icon" className='pro-img-user' />
                            <div className='user-upper'>
                                <p className='user-name mt-4'>{fname} {lname}</p>
                                <p className='user-desgn'>Advisor and Consultant at Wearit pvt ltd.</p>
                                <Button variant='dark' size='lg' className='mt-0 mt-lg-3 lg-btn' onClick={logoutHandle}>
                                    Logout
                                </Button>
                                <hr />
                            </div>
                            <Row className='mb-3 like-sec'>
                                <Col className='first-ic'>
                                    <BiMessageRounded className='social-icon me-2' />
                                    <span>23</span>
                                </Col>
                                <Col className='first-ic'>
                                    <AiOutlineEye className='social-icon me-2' />
                                    <span>841</span>
                                </Col>
                                <Col>
                                    <BiHeart className='social-icon me-2' />
                                    <span>49</span>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col className='user-main-2'>
                        <Row className='user-left'>
                            <Col className='left-head'>
                                <div>
                                    <p className='head-left'>Newsletter</p>
                                </div>
                            </Col>
                            <Col>
                                <Row className='menu-item-2 mt-4'>

                                    <Col className='msg-state-1'>
                                        <InputGroup className="mb-3 form-subs">
                                            <InputGroup.Text id="basic-addon1" className='form-subs'>
                                                <TbMessages className='msg-icon-dif' />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="subscribe"
                                                placeholder="youremail@gmail.com"
                                                className='subs-field'
                                            />
                                        </InputGroup>
                                        <Button variant='dark' className='mt-4' size='lg'>Subscribe</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='mt-3'>
                            <Col className='fb-portion'>
                                <BsFacebook />
                                <div className='count-1'>
                                    248K
                                </div>
                            </Col>
                            <Col className='tw-portion'>
                                <BsTwitter />
                                <div className='count-2'>
                                    30K
                                </div>
                            </Col>
                            <Col className='gg-portion'>
                                <GrGooglePlus />
                                <div className='count-3'>
                                    124K
                                </div>
                            </Col>
                            <Col className='mail-portion'>
                                <FaEnvelope />
                                <div className='count-4'>
                                    89K
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

            <div className='contact-portion'>
                <Container>
                    <Row xs = {1} md = {2}>
                        <Col className='mb-4 mb-md-0'>
                            <div className='con-head'>
                                Location
                            </div>
                            <div className='mt-4'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.089866255426!2d88.42488431488222!3d22.57574198518124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275eff23edf37%3A0xdc56c0a757ecff53!2sWebskitters%20Academy!5e0!3m2!1sen!2sin!4v1667937010730!5m2!1sen!2sin"
                                    style={{ border: "0" }}
                                    loading="lazy"
                                    title="location"
                                    className='map'
                                >
                                </iframe>
                            </div>
                        </Col>
                        <Col>
                            <div className='con-head'>
                                Analysis of Usage
                            </div>
                            <div className='sub-head mb-3 mt-4'>
                                Buy items
                            </div>
                            <ProgressBar now={60} variant="dark" />
                            <div className='sub-head mb-3 mt-4'>
                                Wishlist
                            </div>
                            <ProgressBar now={80} variant="dark" />
                            <div className='sub-head mb-3 mt-4'>
                                Add to Cart
                            </div>
                            <ProgressBar now={40} variant="dark" />
                            <div className='sub-head mb-3 mt-4'>
                                Filter item
                            </div>
                            <ProgressBar now={90} variant="dark" />
                            <div className='sub-head mb-3 mt-4'>
                                Share items
                            </div>
                            <ProgressBar now={30} variant="dark" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {detailCart.length ?
            <Container>
                <div className='my-fav mt-5 pb-2 mb-4'>
                    My items
                </div>
                <Row xs={1} md={2} lg={3}>
                    {detailCart.map((data) => (
                        <Col key={data.sub_id}>
                            <Card className="bg-dark text-black mt-4 pro-card" data-aos="flip-left">
                                <Card.Img src={data.sub_img} alt="Card image" className='pro-img' />
                                <div className='card-details'>
                                    <p className='card-para mt-2'>
                                        {data.sub_title}
                                    </p>
                                    <p className='card-price'>
                                        Rs. {data.sub_price}
                                    </p>
                                </div>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
            :
            null
            }
        </>
    )
}
