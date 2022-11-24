import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import { GoQuote } from 'react-icons/go'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      {/* Top Part of about page */}
      <div className='ab-ban-1'>
        <img src="../../../../Images/ab-ban.jpg"
          alt="ab-ban"
          className='ab-ban'
        />
        <img src="https://d39afr5wio5j08.cloudfront.net/assets-p/about/about-hero-bg-d6d968d4a566bfa7ee99d9f21fad58987f6f40648d220c804d3bc333d23c6b1f.svg"
          alt="wave_img"
          className='wave-img'
        />
      </div>

      <Container>
        <Row>
          <Col>
            <div className='ab-head' data-aos="fade-right">
              <p className='head-part'>About Wearit</p>
              <p className='tail-part'>
                Wearit has made its mark in the e-commerce world in 2012, as a cross-border shopping platform serving more than 180 countries.<br /><br />

                Through its website and app, Wearit provides over 100 million brand-new, unique products from the best international brands in the US, the UK, and other countries.

                Wearit enables seamless and confined payment methods as well as faster checkouts while amplifying the shopper's experience. <br /><br />
                As an International Shopping doorway, we bring quality products from luxury brands to customers' doorsteps from around the world with the assistance of the most trusted courier partners in the industry.
              </p>
            </div>
          </Col>

          <Col>
            <div className='ab-img-sec' data-aos="fade-left">
              <img src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/about-us/world-group.png.webp"
                alt="ab-img"
                className='ab-img'
              />
            </div>
          </Col>
        </Row>

        {/* Main part */}
        <div className='main-part mt-5'>
          <div className='main-head'>
            <p className='head-main'>A True belief</p>
          </div>

          {/* Founder Part */}
          <Row className='justify-content-center founder-sec'>
            <Col lg = {4}>
              <div className='founder-details'>
                <p className='fnd-det'>
                  It was in 2012 that our founder <b>Susmita Sen</b> left behind a lucrative,20-year-long career in It sector to satisfy an entrepreneurialitch. What resulted was a burgeoning business that changed the way womenbuy beauty in the country forever. Her approach that continually kept the customer at its core, swiftly amassed 18 million loyal followers whothen urged us to craft an experience just as exciting in fashion.
                </p>
                <p className='fnd-name'>
                  Susmita Sen, Founder at Wearit
                </p>
              </div>
            </Col>
            <Col xs = {8} md = {6} lg = {4}>
              <div className='founder-img'>
                <img src="https://images.pexels.com/photos/5463113/pexels-photo-5463113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="fnd_img"
                  className='fnd-img'
                />
              </div>
            </Col>
          </Row>
          {/* Founder part */}

          {/* Next part */}

          <Row className='justify-content-center next-part'>
            <Col xs = {8} md = {6} lg={4} >
              <div className='next-img'>
                <img src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/about-us/The-Nykaa-fashion-experience.gif"
                  alt="next_img"
                  className='next-img-sec'
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className='next-details'>
                <p className="next-head">
                  THE Wearit<br /> FASHION<br /> EXPERIENCE
                </p>
                <p className='next-del'>
                  We launched Wearit Fashion in 2012, as a curated and managed marketplace with an endeavor to inspire consumers to make fashion and lifestyle choices that best suit them. We have a wide assortment of offerings, across price points, to cater to women of diverse demographics. Presently, Wearit Fashion houses 1,500+ brands and over 1.8 million products. Within these consumer segments, we merchandise across several categories including western wear, Indian wear, lingerie, footwear, jewelry, accessories, athleisure, home décor, bath, bed and kitchen in order to cater to the diverse consumers’ journeys across our platform. We offer a mix of brands across established national brands, international brands, luxury brands, and emerging labels and designers.
                </p>
              </div>
            </Col>
          </Row>

          {/* Next part */}
        </div>
      </Container>

      {/* CEO section */}
      <div className='ceo-sec'>
        <Container>
          <div className='quote-sec mb-4'>
            <GoQuote className='quote' />
          </div>

          <div className='quote-line'>
            <p className='qu-li-1'>
              I think women today are ready to be inspired and shop in a way that truly inspires them. It’s less about discounts and more about trend and quality.
            </p>
            <p className='qu-li-1'>
              This is mirrored in our mission statement -
            </p>
          </div>

          <div className='main-line mt-4'>
            <p className='line-main'>
              Inspiring Indians, especially for women to make fashion & lifestyle choices that best suit them.
            </p>
          </div>

          <div className='writter-by mt-4'>
            <p className='author'>
              – Raima Sen, CEO, Wearit Fashion
            </p>
          </div>
        </Container>
      </div>
      {/* CEO section */}

      {/* WHT US section */}
      <Container className='mt-5'>
        <div className='why-head'>
          <p className='head-why'>Why us</p>
          <p className='head-det'>
            While we offer a wide range of products, we place strong emphasis on curation. We identify fashion-forward brands, vetting for<br /> style and quality, and further select styles within these brands to offer. We also place importance on selling full-price products,<br /> reducing reliance on discounting, and selling the latest season’s designs. In addition, we use digital content, personalized mobile<br /> application experiences and proprietary recommendation algorithms, to build differentiated style-driven, discovery-led<br /> experiences for consumers.
          </p>
        </div>

        <Row className='justify-content-around mt-5 mb-5 easy-return'>
          <Col xs={4} lg = {3} className="img-mar">
            <div className='wht-img'>
              <img src="https://lastinch.in/wp-content/uploads/2021/01/img1.jpg"
                alt="wht_img"
                className='wht-one'
              />
            </div>
          </Col>
          <Col xs={4} lg = {3} className="img-mar">
            <div className='wht-img'>
              <img src="https://lastinch.in/wp-content/uploads/2021/01/img2.jpg"
                alt="wht_img"
                className='wht-one'
              />
            </div>
          </Col>
          <Col xs={4} lg ={3} className="img-mar">
            <div className='wht-img-2'>
              <img src="https://lastinch.in/wp-content/uploads/2021/01/img3-1.jpg"
                alt="wht_img"
                className='wht-one'
              />
            </div>
          </Col>
        </Row>
        {/* WHT section */}

        {/* Find your Moment section */}
        <Row className='justify-content-center fyc-sec'>
          <Col lg = {4}>
            <div className='find-your-content'>
              <p className='fyc-head'>Find your<br /> moment</p>
              <p className='fyc-det'>
                You know that moment when you land the perfect pair of jeans? What aboutthat moment when you find a dress that hugs you in all the right places?Or that moment when you discover shoes that go with just abouteverything in your closet?
              </p>
              <Link className='extra-link' to="/contact_us_page">
                <p className='fyc-btn'>
                  Get in touch
                </p>
              </Link>
            </div>
          </Col>
          <Col xs = {6} md = {8} lg = {4}>
            <div className='find-content-img'>
              <img src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/about-us/find-your-moment.jpg"
                alt="fyc_img"
                className='fyc-img'
              />
            </div>
          </Col>
        </Row>
        {/* Find your Moment section */}

        {/* Map Section */}

        <Row className='map-part'>
          <Col>
            <div className='map-sec'>
              <p className='map-head'>
                Global Presence
              </p>
              <p className='map-det'>
                Add an international punch to your abroad shopping spree with Ubuy. We have already laid our steps in the international market and are growing<br /> to be a globally renowned marketplace in different continents such as:
              </p>
            </div>
          </Col>
          <Col>
            <div className='map-img'>
              <img src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/about-us/global-map.svg"
                alt="map_img"
                className='map-sec'
              />
            </div>
          </Col>
        </Row>

        {/* Map Section */}

        {/* Work with us */}
        <div className='wwu-sec'>
          <Link className='extra-link' to = "/contact_us_page">
            <div className='wwu-btn mb-5'>
              Work with us
            </div>
          </Link>

          <div className='wwu-head'>
            <p className='head-wwu'>
              Our Fashion Categories
            </p>
            <p className='head-det'>
              We merchandise across several categories including western wear, Indian wear, lingerie, footwear, bags, jewelry,<br /> accessories, athleisure, tech, home décor, bath, bed and kitchen
            </p>
          </div>
        </div>
        {/* Work with us */}
      </Container>

      {/* Brand section */}
      <div className='brand-sec-1'>
        <Container>
          <div className='brand-head mb-5'>
            <p className='head-brand'>
              Top Brands
            </p>
          </div>

          <Row xs={4}>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/uploads/64baf6f6-ce53-4380-b001-ba0c7f8e3987.jpg"
                  alt="brand_img_1"
                  className='img-brand'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/media/wysiwyg/cms/fashion/about-us/top-brands/puma.jpg"
                  alt="brand_img_2"
                  className='img-brand'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/uploads/a7df7aaf-43e7-437d-a83e-ae16c5107bd3.jpg"
                  alt="brand_img_3"
                  className='img-brand'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/uploads/b92d53ac-aa93-46ec-8236-9648f81c5aa2.jpg"
                  alt="brand_img_4"
                  className='img-brand'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/uploads/f6e087a1-d170-4593-ab74-a5d3c52a4548.jpg"
                  alt="brand_img_5"
                  className='img-brand mt-4'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/uploads/a9753f58-b2ae-444a-8eec-5fd3009fc219.jpg"
                  alt="brand_img_6"
                  className='img-brand mt-4'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/uploads/23ac66b8-f4db-494c-8e2d-48103648b421.jpg"
                  alt="brand_img_7"
                  className='img-brand mt-4'
                />
              </div>
            </Col>
            <Col>
              <div className='brand-img'>
                <img src="https://images-static.nykaa.com/media/wysiwyg/cms/fashion/about-us/top-brands/fab-india.jpg"
                  alt="brand_img_8"
                  className='img-brand mt-4'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Brand section */}

      {/* Support Us section */}
      <Container className='support-us'>
        <div className='sup-sec'>
          <div className='sup-head'>
            <p className='head-sup'>Support us</p>
          </div>
          <div className='sup-det'>
            <p className='det-sup'>
              We’ll know we’re successful not through skyrocketing numbers but if wemanage to build a community of customers who cares<br /> for us as deeply as wecare for them. Keep coming back to us and tell us what you love, there’snothing that makes us happier!
            </p>
          </div>
        </div>
        <Row className='justify-content-center mt-5'>
          <Col xs={10}>
            <div className='sup-img'>
              <img src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/about-us/Show-us-some-love%20(1).gif"
                alt="sup_img"
                className='img-sup'
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* Support Us section */}

      {/* The leader of our journey */}
      <Container className='mb-5'>

        <div className='leader-head'>
          <p className='head-sup'>The leader of our journey</p>
        </div>
        <Row className='justify-content-center mt-5 ceo-part'>
          <Col lg = {4}>
            <div className='ceo-msg'>
              <div className='quote-sec'>
                <GoQuote className='quote' />
              </div>

              <div className='ceo-state'>
                <p className='det-sup'>
                  We thoroughly enjoyed the process of building Wearit beauty and it’s the same with Wearit Fashion. More than the end goal, it’s about piecing something together, delighting customers and building memories with our teammates every day. This is something that I’ve learnt through C P Cavafy’s poem Ithaka, which my mother and I constantly go back to.
                </p>
              </div>

              <div className='ceo-sign mt-5'>
                <p className='fnd-name'>
                  – Raima Sen, CEO, Wearit Fashion
                </p>
              </div>
            </div>
          </Col>
          <Col xs = {6} md={8} lg = {4}>
            <div className='ceo-img'>
              <img src="https://images.pexels.com/photos/12376082/pexels-photo-12376082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ceo_img"
                className='img-ceo'
              />
            </div>
          </Col>
        </Row>

      </Container>

      {/* Mobile app section */}
      <Container>
        <Row className='justify-content-center phone-sec'>
          <Col lg = {5} className = "get-order-1">
            <div className='get-know'>
              <p className='head-sup'>
                Get to know us
              </p>
              <p className='det-sup'>
                We’ve worked very hard towards building a team of seriously cool and talented people and we want you to know who they are. You can get a glimpse of their style and lives on our website, by signing up for ourmailers or following us on Instagram. (@Wearit)
              </p>
              <div className='follow-btn'>
                <p className='follow-us-btn'>
                  Follow us
                </p>
              </div>
            </div>
          </Col>

          <Col xs = {7} md = {5} lg={3} className = "get-order">
            <div className='get-know-img'>
              <img src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/about-us/Get%20to%20know%20us.jpg"
                alt="get_know_img"
                className='get-img'
              />
            </div>
          </Col>
        </Row>
        {/* Mobile app section */}
      </Container>
    </>
  )
}
