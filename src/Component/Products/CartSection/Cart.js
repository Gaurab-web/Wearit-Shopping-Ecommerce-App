import React, { useReducer } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import AddCart from './addCart.json'
import './Cart.css'
import { AiFillInfoCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const user = window.sessionStorage.getItem('User_id');

    const getCart = AddCart.cartItems;

    const showCart = getCart.filter((data)=> data.user_id === user);

    let qty = showCart.map((data)=> data.quantity);
    
    let [num, dispatch] = useReducer((state, action) => {    
        let qty = state[action.index];
    
        switch (action.type) {
            case "increment": 
            state.splice(action.index,1,qty+1);
            let upItem = AddCart.cartItems;
            let increItm = upItem.find((data)=> data.sub_id === action.id);
            increItm.quantity = state[action.index];
            navigate('/view_cart_page');
            return state;
    
            case "decrement":
            state.splice(action.index,1,qty-1);
            let upItem1 = AddCart.cartItems;
            let decreItm = upItem1.find((data)=> data.sub_id === action.id);
            decreItm.quantity = state[action.index];
            navigate('/view_cart_page');
            return state;
            default: throw new Error("Something went wrong");
        }
    }, qty);
    
    let totalItem = 0;

    const deleteItem = (id) => {
        let itemIndex = showCart.findIndex((data) => data.sub_id === id);
        qty.splice(itemIndex,1);
        showCart.splice(itemIndex,1);
        getCart.splice(itemIndex,1);
        navigate('/view_cart_page');
    };

    const placeItem = ()=>{
        showCart.splice(0);
        getCart.splice(0);
        navigate('/order_placing_page');
    }
    return (
        <>
            {showCart.length ?
                <>
                    <div className='coupon-sec'>
                        Get Rs 250 off on orders above Rs 2499. Use code Wear250.
                    </div>
                    <Container>
                        <Row className='mb-4 mt-5 cart-pro'>
                            <Col md={7} lg = {8} className="cart-main">
                                <div className='cart-head'>
                                    <p className='head-cart'>
                                        Cart Items
                                    </p>
                                </div>

                                {showCart.map((data,index) => {

                                    totalItem += Number(data.sub_price * num[index]);
                                    return (
                                        <Row key={data.sub_id} className="justify-content-between cart-row pt-4 mb-4 ps-4">
                                            <Col xs={2} lg = {2}>
                                                <div className='img-cart'>
                                                    <img src={data.sub_img[0]}
                                                        alt="img_cart"
                                                        className='cart-img'
                                                    />
                                                </div>
                                            </Col>
                                            <Col xs={8} lg = {6}>
                                                <div className='cart-title'>
                                                    <p className='item-title'>
                                                        {data.sub_title}
                                                    </p>
                                                    <Row className='seller-intet'>
                                                        <Col xs={4}>
                                                            <div className='seller'>
                                                                Seller:RetailNet
                                                            </div>
                                                        </Col>
                                                        <Col xs={3}>
                                                            <div className='as-img'>
                                                                <img src="../../../../Images/assured_1-removebg.png"
                                                                    alt="assured_img"
                                                                    className='assur-img'
                                                                />
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </div>

                                                <Row className='quant-sec mt-4 justify-content-between'>
                                                    <Col xs = {1} lg = {6}>
                                                        <div className='quantity'>
                                                            Qty:
                                                        </div>
                                                    </Col>
                                                    <Col xs = {8} lg = {6}>
                                                        <div className='incre-decre' >
                                                            <span className='incre me-1' onClick={() => dispatch({ type : 'decrement', id : data.sub_id, index : index })}>-</span>
                                                            <span className='quant-num'>{num[index]}</span>
                                                            <span className='incre ms-1' onClick={() => dispatch({ type : 'increment', id : data.sub_id, index : index })}>+</span>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className='mt-4 re-btn'>
                                                    <Col className='d-grid'>
                                                        <Button variant='outline-dark' className='crt-btn' onClick={() => deleteItem(data.sub_id)}>Remove</Button>
                                                    </Col>
                                                    <Col className='d-grid'>
                                                        <Button variant='dark' className='crt-btn' onClick={placeItem}>Place Order</Button>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col xs={8} lg = {3}>
                                                <div className='price-section'>
                                                    <span className='actual-price me-2'>
                                                        ₹ {data.sub_price}
                                                    </span>
                                                    <span className='cutting-price'>
                                                        ₹44599
                                                    </span>
                                                    <div className='off-per me-2'>
                                                        28% off
                                                    </div>
                                                    <span className='offer-applied'>
                                                        2 offers applied
                                                        <AiFillInfoCircle className='info' />
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>


                                    )
                                })}
                            </Col>
                            <Col className='pr-por'>
                                <div className='por-pr'>
                                    <div className='price-head'>
                                        <p className='head-price'>
                                            Price details
                                        </p>
                                    </div>

                                    <Row className='pri-det'>
                                        <Col>
                                            <Row className='justify-content-between'>
                                                <Col xs={5}>
                                                    <div className='price'>
                                                        <p className='pr'>Price ({getCart.length} items)</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
                                                    <div className='total-price'>
                                                        ₹ {totalItem}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className='justify-content-between'>
                                                <Col xs={5}>
                                                    <div className='price'>
                                                        <p className='pr'>Discount</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
                                                    <div className='total-price green'>
                                                        -₹ 1499
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className='justify-content-between'>
                                                <Col xs={5}>
                                                    <div className='price'>
                                                        <p className='pr'>Buy more & save more</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
                                                    <div className='total-price green'>
                                                        -₹ 499
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className='justify-content-between del'>
                                                <Col xs={5}>
                                                    <div className='price'>
                                                        <p className='pr'>Delivery Charges</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
                                                    <div className='total-price green'>
                                                        FREE
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className='mt-3'>
                                            <Row className='justify-content-between del'>
                                                <Col xs={5}>
                                                    <div className='price-total'>
                                                        <p className='pr'>Total amount</p>
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
                                                    <div className='total-price-sum'>
                                                        ₹ {totalItem - 1998}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className='mt-3'>
                                            <div className='save-price'>
                                                You will save ₹ 1998 on this order
                                            </div>

                                            <div className='safety mt-4'>
                                                <Row>
                                                    <Col xs={2}>
                                                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
                                                            alt="safety_img"
                                                            className='safety-pic'
                                                        />
                                                    </Col>
                                                    <Col xs={9}>
                                                        <div className='safety-msg'>
                                                            Safe and Secure Payments.Easy returns.100% Authentic products.
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col className='d-grid re-btn'>
                                            <Button variant='dark' onClick={placeItem}>Place Order</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </>
                :
                <>

                    <div className='no-gif mt-5'>
                    <iframe 
                    src="https://embed.lottiefiles.com/animation/11209"
                    title = "no-cart"
                    width="220"
                    height="220"
                    >    
                    </iframe>
                    </div>

                    <div className='nthing'>
                        Your cart is empty
                    </div>
                </>
            }
        </>
    )
}
