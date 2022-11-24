import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { AiFillInfoCircle } from 'react-icons/ai'

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 })
  });

  const [inputElement, setInput] = useState({ isError: { fname: "", lanme: "", email: "", password: "" } });

  const validFname = RegExp('^[A-Z]{1}[a-z]{2,6}$');
  const validLname = RegExp('^[A-Z]{1}[a-z]{2,15}$');
  const validEmail = RegExp('^([a-z0-9.-]+)@([a-z]{5,15}).([a-z.]{2,6})$');
  const validPassword = RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$');

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Event Name: ", name, "Event Value: ", value);

    let errMsg = { ...inputElement.isError };
    switch (name) {
      case 'fname': errMsg.fname = validFname.test(value) ? "" : "Enter a valid first name";
        break;
      case 'lname': errMsg.lanme = validLname.test(value) ? "" : "Enter a valid last name";
        break;
      case 'email': errMsg.email = validEmail.test(value) ? "" : "Enter a valid email address";
        break;
      case 'password': errMsg.password = validPassword.test(value) ? "" : "Must contain (A-Z), (a-z), (0-9) and (!@#$%^&*)";
        break;
      default: break;
    }

    console.log("Error Msg: ", errMsg)

    setInput({ ...inputElement, [name]: value, isError: errMsg });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    axios.post('https://nodeprojectapi.herokuapp.com/register', inputElement)
      .then(res => {
        alert(res.data.message);
        navigate('/login_user');
      })
      .catch(err => {
        console.log("Register Err: ", err);
      });
  }
  return (
    <>
      <Container>
        <Row className='reg-sec'>
          <Col xs={3} className="reg-img-left">
            <img src="https://images.pexels.com/photos/12747874/pexels-photo-12747874.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="left_img"
              className='register-img'
              data-aos="fade-right"
            />
          </Col>
          <Col>
            <p className='reg-head mt-5' data-aos="fade-down">Create Account</p>
            <Form onSubmit={formSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label><b>First Name</b></Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  onChange={handleChange}
                  placeholder='Enter your first name'
                />
                <Form.Text>
                  {inputElement.isError.fname.length > 0 ? 
                    <>
                      <AiFillInfoCircle /> <span>{inputElement.isError.fname}</span>
                    </>
                    :null
                  }
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label><b>Last Name</b></Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  onChange={handleChange}
                  placeholder='Enter your last name'
                />
                <Form.Text>
                  {inputElement.isError.lanme.length > 0 ? 
                    <>
                      <AiFillInfoCircle /> <span>{inputElement.isError.lanme}</span>
                    </>
                    :null
                  }
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label><b>Email Address</b></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder='Enter your email address'
                />
                <Form.Text>
                  {inputElement.isError.email.length > 0 ? 
                    <>
                      <AiFillInfoCircle /> <span>{inputElement.isError.email}</span>
                    </>
                    :null
                  }
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder='Enter your password'
                />
                <Form.Text>
                  {inputElement.isError.password.length > 0 ? 
                    <>
                      <AiFillInfoCircle /> <span>{inputElement.isError.password}</span>
                    </>
                    :null
                  }
                </Form.Text>
              </Form.Group>

              <p className='tc'>By Signing up to create an account I accept Wearit's</p>
              <p className='tc-up'><Link>Terms & Conditions</Link> & <Link>Privacy Policy</Link></p>

              <Form.Group className='mb-5 reg-btn mt-4'>
                <Button variant='dark' type='submit'>
                  Sign Up Now
                </Button>
              </Form.Group>

              <p className='tc-log'>Already a User ?&nbsp;
                <Link to="/login_user">
                  Login
                </Link>
              </p>
            </Form>
          </Col>
          <Col xs={3} className="reg-img-right">
            <img src="https://images.pexels.com/photos/5821859/pexels-photo-5821859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="right_img"
              className='register-img'
              data-aos="fade-left"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
