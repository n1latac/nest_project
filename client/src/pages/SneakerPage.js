import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Image, Card, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import RatingBigStar from '../img/RatingBigStar.png'
import {getOneSneaker} from "../api/sneakerApi";

const SneakerPage = () => {

        const [sneaker, setSneaker] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        getOneSneaker(id).then(data => {
            setSneaker(data)
        })
    }, [])

    return (
        <Container className="mt-3" style={{paddingTop: '60px'}}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + 'uploads/' + sneaker.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{sneaker.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${RatingBigStar}) no-repeat center center`, width:100, height: 100, backgroundSize: 'cover', fontSize:34, color: 'black'}}
                        >
                            {sneaker.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {sneaker.price} ₴.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            {   sneaker?.device_info ?
                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                    {sneaker.device_info.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
                : null
            }

        </Container>
    );
};

export default SneakerPage;