import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Image from "react-bootstrap/Image";
import {SNEAKER_ROUTE} from "../utils/constants";
import star from '../img/star.png'

const SneakerItem = ({sneaker}) => {
    const navigate = useNavigate();
    console.log(sneaker)
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(SNEAKER_ROUTE + '/' + sneaker.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image style={{objectFit: 'cover'}} width={150} height={150} src={process.env.REACT_APP_API_URL + 'uploads/' +sneaker.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{sneaker?.brand?.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{sneaker.rating}</div>
                        <Image width={14} height={14} src={star}/>
                    </div>
                </div>
                <div>{sneaker.name}</div>
            </Card>
        </Col>
    );
};

export default SneakerItem;