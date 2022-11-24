import React, { Suspense, useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import About from '../Component/About/About'
import Login from '../Component/Authentication/Login/Login'
import Register from '../Component/Authentication/Registration/Register'
import ContactUs from '../Component/ContactUs/ContactUs'
import Home from '../Component/Home/Home'
import PageNotFound from '../Component/PNF/PageNotFound'
import Cart from '../Component/Products/CartSection/Cart'
import Cats from '../Component/Products/Category/Cats'
import DetailItem from '../Component/Products/DetailItem/DetailItem'
import UserDetail from '../Component/UserDetail/UserDetail'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ProtectRouting from './ProtectRouting'
import PlaceItem from '../Component/Products/PlaceOrder/PlaceItem'

export default function Routing() {
  const SubCat = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('../Component/Products/SubItems/SubCat')), 1000);
    })
  });

  const [ open ] = useState(true);
  return (
    <Router>
      <Header />
      <Suspense fallback={
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      }>
        <Routes>
          {/* Default page */}
          <Route path="" element={<Home />} />
          <Route path="/about_page" element={<About />} />

          {/* For protected routing */}
          <Route element = {<ProtectRouting />}>
          <Route path="/category_page" element={<Cats />} />
          <Route path="/sub_category/:name/:id" element={<SubCat />} />
          <Route path="/detail_item/:name/:id" element={<DetailItem />} />
          <Route path="/contact_us_page" element={<ContactUs />} />
          <Route path="/view_cart_page" element={<Cart />} />
          <Route path = "/order_placing_page" element = {<PlaceItem />} />
          </Route>
          {/* For protected routing */}

          <Route path="/login_user" element={<Login />} />
          <Route path="/register_user" element={<Register />} />
          <Route path="/user_detail/:fname/:lname" element={<UserDetail />} />

          {/* Page not found section */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}
