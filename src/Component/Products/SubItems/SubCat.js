import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import './SubCat.css'
import ItemData from '../item.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BiSearchAlt } from 'react-icons/bi'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';

export default function SubCat() {
    const { id, name } = useParams();

    const catItem = ItemData.products.find((data) => data.cat_id === id);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const [searchData, setSearch] = useState("");

    const searchChange = (event) => {
        const { value } = event.target;

        setSearch(value);
    };

    const [schBtn, setBtn] = useState({ active: false });

    const searchhandle = () => {
        setBtn({ ...schBtn, active: !schBtn.active });
    };

    const [drawer, setDraw] = useState({ top: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDraw({ ...drawer, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >
            <List>
                <p className='small-search mt-4'>Search...</p>
                <InputGroup className="mb-5 mt-3 pe-5 ps-5">
                    <InputGroup.Text id="basic-addon1">
                        <BiSearchAlt />
                    </InputGroup.Text>
                    <Form.Control
                        type = "text"
                        name = "search"
                        placeholder="Search your product..."
                        aria-label="search"
                        aria-describedby="basic-addon1"
                        onChange={searchChange}
                    />
                </InputGroup>
            </List>
        </Box>
    );

    return (
        <>
            <Container>
                <Row className='up-sec mt-5 mb-5 justify-content-between'>
                    <Col xs={6}>
                        <h1 className='sut-head pb-4 '>{name}</h1>
                    </Col>

                    <Col className='search' xs={5}>
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                {/* <Button onClick={toggleDrawer(anchor, true)}>SOme</Button> */}
                                <BiSearchAlt className='search-icon ms-3' onClick={toggleDrawer(anchor, true)} title="search" />
                                <Drawer
                                    anchor={anchor}
                                    open={drawer[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </Col>

                    <Col className='search-1' xs={5}>
                        <div className="search-box">
                            <input
                                type="text"
                                name="search"
                                placeholder='Search your product...'
                                className={schBtn.active ? "search-form active" : "search-form"}
                                onChange={searchChange}
                            />

                            <BiSearchAlt className='search-icon ms-3' onClick={searchhandle} title="search" />
                        </div>
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3}>
                    {catItem.cat_sub.filter((data) => {
                        if (searchData === "") {
                            return data;
                        } else if (data.sub_title.toLowerCase().includes(searchData.toLowerCase())) {
                            return data;
                        }
                    })
                        .map((data) => (

                            <Col key={data.sub_id}>
                                <Card className="bg-dark text-black mt-4 pro-card" data-aos="flip-left">
                                    <Card.Img src={data.sub_img} alt="Card image" className='pro-img' />
                                    <Card.ImgOverlay className='img-over d-grid'>
                                        <Link className='sub-btn' to={`/detail_item/${name}/${data.sub_id}`}>
                                            <Button variant='light' size='lg'>
                                                View item
                                            </Button>
                                        </Link>
                                    </Card.ImgOverlay>
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
        </>
    )
}
