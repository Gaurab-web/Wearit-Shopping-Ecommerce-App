import React from 'react'
import CarouselSec from './Carousel/Carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AllItem from '../Products/allItems.json'
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';
import LowerHome from './LowerHome/LowerHome';
import BrandName from './BrandName/BrandName';

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      {/* Carousel Section */}
      <CarouselSec />

      {/* First Banner Portion */}
      <Container>
        <Row className='first-banner'>
          <img src="https://images-static.nykaa.com/uploads/56ea9b3f-6f26-43fb-bad7-856fa5281951.jpg?tr=w-1200,cm-pad_resize"
            alt="first_banner"
            className='first-ban'
          />
        </Row>
      </Container>

      {/* Multi Carousel Section */}
      <div className='lst-item mt-5'>
        <Container>
          <div className='latest-pro'>
            <p className='latest-text'>Latest Products</p>
          </div>
          <Carousel responsive={responsive}>
            {AllItem.allitems.map((data) => (
              <Row key={data.id}>
                <Col>
                  <Link to={`/detail_item/${data.item_name}/${data.id}`}>
                    <div className='all-img'>
                      <img src={data.item_img}
                        alt="item_img"
                        className='item-img'
                      />
                    </div>
                  </Link>
                </Col>
              </Row>
            ))}
          </Carousel>
        </Container>
      </div>

      {/* Second Banner Portion */}
      <div className='par-banner'>
        <img src="../../../../../Images/par_banner.jpg"
          alt="par_img"
          className='par-img'
        />
      </div>

      {/* Showcasing Brand Portion */}
      <Container>
        <div className='brand-sec mt-5'>
          <p className='brand-one'>New on Wearit</p>
          <p className='brand-second'>Discover chic new labels</p>
        </div>

        <Row className='mb-5' xs={1} md={3} lg={6}>
          <Col>
            <div className='img-one'>
              <img src="https://images.pexels.com/photos/12899571/pexels-photo-12899571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="first-img"
                className='poster-img'
              />
            </div>
            <div className='logo-all mb-3 mb-lg-0'>
              <img src="https://seeklogo.com/images/F/fabindia-logo-9A16766A72-seeklogo.com.png"
                alt="one-logo"
                className='all-logo'
              />
            </div>
          </Col>
          <Col>
            <div className='img-two'>
              <img src="https://images.pexels.com/photos/2728267/pexels-photo-2728267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="second-img"
                className='poster-img'
              />
            </div>
            <div className='logo-all mb-3 mb-lg-0'>
              <img src="https://avadatapparels.com/wp-content/uploads/2020/05/Freakins_new.png"
                alt="two-logo"
                className='all-logo'
              />
            </div>
          </Col>
          <Col>
            <div className='img-three'>
              <img src="https://images.pexels.com/photos/7685511/pexels-photo-7685511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="third-img"
                className='poster-img'
              />
              <div className='logo-all mb-3 mb-lg-0'>
                <img src="https://seeklogo.com/images/Z/zara-logo-4888CAE2DA-seeklogo.com.png"
                  alt="third-logo"
                  className='all-logo'
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className='img-fourth'>
              <img src="https://images.pexels.com/photos/7686285/pexels-photo-7686285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="fourth-img"
                className='poster-img'
              />
            </div>
            <div className='logo-all mb-3 mb-lg-0'>
              <img src="https://theopinionatedindian.com/static/c1e/client/86164/uploaded/3d6c330d546ecd56c2d2698ff5aa4460.jpg"
                alt="fourth-logo"
                className='all-logo'
              />
            </div>
          </Col>
          <Col>
            <div className='img-fifth'>
              <img src="https://images.pexels.com/photos/7176696/pexels-photo-7176696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="fifth-img"
                className='poster-img'
              />
            </div>
            <div className='logo-all mb-3 mb-lg-0'>
              <img src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/ezgif.com-gif-maker_316c42d2-0897-40bc-81d1-5119f87bfef7.png?v=1614757535"
                alt="fifth-logo"
                className='all-logo'
              />
            </div>
          </Col>
          <Col>
            <div className='img-sixth'>
              <img src="https://images.pexels.com/photos/8638007/pexels-photo-8638007.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="sixth-img"
                className='poster-img'
              />
            </div>
            <div className='logo-all'>
              <img src="https://seeklogo.com/images/M/manyavar-logo-E162068696-seeklogo.com.png"
                alt="sixth-logo"
                className='all-logo'
              />
            </div>
          </Col>
        </Row>

        {/* Promotional Offer Portion */}
        <div className='promo-sec mb-5'>
          <p className='promo-text'>Promotional Offers</p>
        </div>
        <Row className='promo-offers mb-5'>
          <Col>
            <div className='promo-1'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/h0e/hc8/28537499156510/app-More-Brands-Home-6-Widgets-Spaces_26102022.jpg"
                alt="promo"
                className='promo-img'
              />
            </div>
          </Col>
          <Col>
            <div className='promo-2'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/h7b/h37/28537502466078/app-More-Brands-Handbags-6-Widgets-Hidesign-26102022.jpg"
                alt="promo"
                className='promo-img'
              />
            </div>
          </Col>
          <Col>
            <div className='promo-3'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/h6a/h34/28537502531614/app-More-Brands-Handbags-6-Widgets-Fastrack-26102022.jpg"
                alt="promo"
                className='promo-img'
              />
            </div>
          </Col>
          <Col>
            <div className='promo-4'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hbc/h33/28537502597150/app-More-Brands-Handbags-6-Widgets-Tommy-Hilfiger-26102022.jpg"
                alt="promo"
                className='promo-img'
              />
            </div>
          </Col>
          <Col>
            <div className='promo-5'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hab/h30/28537502662686/app-More-Brands-Handbags-6-Widgets-Kompanero-26102022.jpg"
                alt="promo"
                className='promo-img'
              />
            </div>
          </Col>
          <Col>
            <div className='promo-6'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/had/h2d/28537502728222/app-More-Brands-Handbags-6-Widgets-Ceriz-26102022.jpg"
                alt="promo"
                className='promo-img'
              />
            </div>
          </Col>
        </Row>

        {/* Offer section */}
        <Row className='offer-sec mb-5'>
          <Col>
            <div className='offer-1'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hf4/hca/28570344161310/Estatos_6-Widgets_7333877222_ghhnahhqgwqww.jpg"
                alt="offer"
                className='offer-img'
              />
            </div>
          </Col>
          <Col>
            <div className='offer-2'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hf2/hcd/28570344226846/Soulflower_6-Widgets_562323_jhnnjayyqqqq_kka.jpg"
                alt="offer"
                className='offer-img'
              />
            </div>
          </Col>
          <Col>
            <div className='offer-3'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hb3/hce/28570344292382/Belliziya_6-Widgets_65222ghbvvbzzzz_kkaq.jpg"
                alt="offer"
                className='offer-img'
              />
            </div>
          </Col>
          <Col>
            <div className='offer-4'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hb1/hd1/28570344357918/Vivinka_6-Widgets_67223hgbnbnhgjsssss_nkkaqq.jpg"
                alt="offer"
                className='offer-img'
              />
            </div>
          </Col>
          <Col>
            <div className='offer-5'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/hc2/hd4/28570344423454/Shoetopia_6-Widgets_67772222_jjjkkaiiqqqpppa.jpg"
                alt="offer"
                className='offer-img'
              />
            </div>
          </Col>
          <Col>
            <div className='offer-6'>
              <img src="https://sslimages.shoppersstop.com/sys-master/root/he3/hc7/28570344095774/La-French_6-Widgets_ghhhanqyywtw_77626.jpg"
                alt="offer"
                className='offer-img'
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Third Banner */}
      <div className='par-banner'>
        <img src="../../../../../Images/par_banner_2.jpg"
          alt="par_img"
          className='par-img'
        />
      </div>

      {/* Home Lower Section */}
      <div className='hm-lower'>
        <div className='magazine'>
          <p className='maga-first'>MAGAZINE</p>
          <p className='maga-second'>A world of Inspiration</p>
        </div>
        <LowerHome />
      </div>

      {/* Lower Facilities */}
      <Container>
        <Row className='mt-4 mb-4'>
          <Col xs = {3} md = {2}>
            <div className='fac-icon'>
              <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2.063a6.938 6.938 0 1 0 0 13.875 6.938 6.938 0 0 0 0-13.876zM3.936 9a8.063 8.063 0 1 1 16.125 0A8.063 8.063 0 0 1 3.937 9z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5.063a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.876zM6.936 9a5.063 5.063 0 1 1 10.125 0A5.063 5.063 0 0 1 6.937 9zM16.5 14.437c.31 0 .563.252.563.563v7.5a.562.562 0 0 1-.814.503l-4.25-2.124-4.247 2.124a.562.562 0 0 1-.814-.503V15a.562.562 0 1 1 1.125 0v6.59l3.685-1.843a.562.562 0 0 1 .503 0l3.687 1.843V15c0-.311.251-.563.562-.563z' fill='%23000'/%3E%3C/svg%3E"
                alt="fac_icon"
                className='fac-img'
              />
            </div>
            <div className='fac-name mt-3'>
              <p className='fac-det'>Authentic Products</p>
            </div>
          </Col>

          <Col xs = {3} md = {2}>
            <div className='fac-icon'>
              <img src="data:image/svg+xml;charset=utf8,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.936 3.936a4.333 4.333 0 0 1 7.396 2.98h-8.665a4.333 4.333 0 0 1 1.269-2.98zm-2.603 4.48V11a.667.667 0 0 0 1.334 0V8.417h8.666V11a.667.667 0 0 0 1.334 0V8.417h3.579a.25.25 0 0 1 .24.181l1.52 5.319H4.994l1.52-5.319a.25.25 0 0 1 .24-.181h3.58zm0-1.5a5.667 5.667 0 0 1 11.333 0h3.58a1.75 1.75 0 0 1 1.682 1.27l1.788 6.258.034.227v1.996a4.75 4.75 0 0 1-2 3.873v8.127a1.75 1.75 0 0 1-1.75 1.75H7a1.75 1.75 0 0 1-1.75-1.75V20.54a4.745 4.745 0 0 1-2-3.873v-2.005a.75.75 0 0 1 .034-.218l1.788-6.258a1.75 1.75 0 0 1 1.682-1.27h3.58zm18.383 7.528.034.223a.727.727 0 0 0-.034-.223zm-7.966 2.223v-1.25h6.5v1.25a3.25 3.25 0 0 1-1.51 2.745.746.746 0 0 0-.22.128 3.25 3.25 0 0 1-4.77-2.873zm3.25 4.75c.426 0 .846-.058 1.25-.168v7.418a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25v-7.418A4.748 4.748 0 0 0 12 19.23a4.751 4.751 0 0 0 8 0 4.751 4.751 0 0 0 4 2.188zm-4.75-6v1.25a3.25 3.25 0 1 1-6.5 0v-1.25h6.5zm-8 1.25v-1.25h-6.5v1.25a3.25 3.25 0 0 0 1.51 2.744.75.75 0 0 1 .221.129 3.25 3.25 0 0 0 4.769-2.873z' fill='%23333'/%3E%3C/svg%3E"
                alt="fac_icon"
                className='fac-img'
              />
            </div>
            <div className='fac-name mt-3'>
              <p className='fac-det'>Express Store Pickup</p>
            </div>
          </Col>

          <Col xs = {3} md = {2}>
            <div className='fac-icon'>
              <img src="data:image/svg+xml;charset=utf8,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13.333V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v7.333c0 10.502-8.913 13.982-10.693 14.572a.944.944 0 0 1-.614 0C13.913 27.315 5 23.835 5 13.333z' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m21.5 12-7.333 7-3.667-3.5' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                alt="fac_icon"
                className='fac-img'
              />
            </div>
            <div className='fac-name mt-3'>
              <p className='fac-det'>Secure Payment</p>
            </div>
          </Col>

          <Col xs = {3} md = {2}>
            <div className='fac-icon'>
              <img src="data:image/svg+xml;charset=utf8,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.998 28.6c6.96 0 12.6-5.641 12.6-12.6s-5.64-12.6-12.6-12.6C9.04 3.4 3.398 9.04 3.398 16s5.642 12.6 12.6 12.6z' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m16.55 18.5-3.3 3.3-3.3-3.3' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.95 18.5v-6.05A3.85 3.85 0 0 0 17.1 8.6h0a3.85 3.85 0 0 0-3.85 3.85v9.35' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                alt="fac_icon"
                className='fac-img'
              />
            </div>
            <div className='fac-name mt-3'>
              <p className='fac-det'>Easy return and Exchange</p>
            </div>
          </Col>

          <Col className='mt-2 brand-set' xs = {10} md = {4}>
            <BrandName />
          </Col>
        </Row>
      </Container>
    </>
  )
}
