import React, { useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useFormik } from 'formik'
import { AiFillInfoCircle } from 'react-icons/ai'
import axios from 'axios'

const validation = (loginData) => {
  let isError = {};

  const validEmail = /^([a-z0-9.-]+)@([a-z]{5,10}).([a-z.]{2,6})$/;
  const validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/;

  if (!loginData.email) {
    isError.email = "Email field is empty";
  } else if (!validEmail.test(loginData.email)) {
    isError.email = "Enter a valid email address";
  }

  if (!loginData.password) {
    isError.password = "Password field is empty";
  } else if (!validPassword.test(loginData.password)) {
    isError.password = "Must contain (A-Z), (a-z), (0-9) and (!@#$%^&*)";
  }

  return isError;
}

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validate: validation,

    onSubmit: (data) => {
      axios.post('https://nodeprojectapi.herokuapp.com/login', data)
      .then(res=>{
        alert(res.data.message);
        window.sessionStorage.setItem('Token',res.data.data.token);
        window.sessionStorage.setItem('FName',res.data.data.firstname);
        window.sessionStorage.setItem('LName',res.data.data.lastname);
        window.sessionStorage.setItem('User_id',res.data.data.adminId);
        navigate(`/user_detail/${res.data.data.firstname}/${res.data.data.lastname}`);
      })
      .catch(err=>{
        console.log("Login Error: ", err);
      });
    }
  });
  return (
    <>
      <Container>
        <Row className='login-sec justify-content-between'>

          {/* Left section */}
          <Col className='left-sec'>
            <p className='head-right-lg' data-aos="fade-down">Login</p>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className='mb-3 mt-5'>
                <Form.Label><b>Email Address</b></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder='Enter your email addresss'
                  onChange={formik.handleChange}
                />
                <Form.Text>
                  {formik.errors.email ?
                    <>
                      <AiFillInfoCircle /> <span>{formik.errors.email}</span>
                    </>
                    : null
                  }
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder='Enter your password'
                  onChange={formik.handleChange}
                />
                <Form.Text>
                  {formik.errors.password ?
                    <>
                      <AiFillInfoCircle /> <span>{formik.errors.password}</span>
                    </>
                    : null
                  }
                </Form.Text>
              </Form.Group>

              {/* Forget password and remember login section */}
              <Row>
                <Col>
                  <Form.Check aria-label="option 1" inline label="Remember Me" className='rem-me' />
                </Col>

                <Col className='fr-pd'>
                  <Link className='forget-link'>
                    Forget Password?
                  </Link>
                </Col>
              </Row>
              {/* Forget password and remember login section */}

              <div className='lower-log mt-4'>
                <p>By continuing, I agree to  <Link>Terms & Conditions & Privacy Policy</Link></p>
              </div>

              <Form.Group className="sign-btn mb-5 mt-4">
                <Button variant='dark' type='submit' className='sb-btn'>
                  Submit
                </Button>
              </Form.Group>

              <p className='or-sec'>- Or login with -</p>

              <div className='log-icon-sec'>
                <FcGoogle className='google-icon me-2' />
                <FaFacebook className='fb-icon' />
              </div>
            </Form>
          </Col>

          {/* Right section */}
          <Col className='right-sec'>
            <p className='head-right-new' data-aos="fade-down">New User? Create an Account</p>
            <p className='subhead-right'>Benefits of Creating an New Account</p>
            <Row className='encir-sec'>
              <Col className='border-col mt-4'>
                <p className='lower-head' data-aos="fade-right">Encircle Programs</p>
                <p className='lower-subhead' data-aos="fade-right">Redeem Encircle points on purchases.</p>
              </Col>
              <Col className='border-col mt-4'>
                <p className='lower-head' data-aos="fade-up">Special Previews</p>
                <p className='lower-subhead' data-aos="fade-up">Previews to our limited collections.</p>
              </Col>
              <Col>
                <p className='lower-head mt-4' data-aos="fade-left">Tailor Made Offers</p>
                <p className='lower-subhead' data-aos="fade-left">Receive tailor-made offers just for you.</p>
              </Col>
            </Row>

            <div className='img-right mt-4'>
              <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/ac227c73-0dd1-4db9-a230-9d97c51ba8bd/desktop/8.png?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-ac227c73-0dd1-4db9-a230-9d97c51ba8bd-desktop-o3LKOax"
                alt="img"
                className='img-adv'
                data-aos = "fade-up"
              />
            </div>

            <div className='sign-btn'>
              <Link to="/register_user">
                <Button variant='dark' className='sb-btn'>
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
