import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import SneakersList from "../components/SneakersList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getBrands, getSneakers, getTypes} from "../api/sneakerApi";

const Shop = observer(() => {
    const {sneaker} = useContext(Context)

    useEffect(() => {
        getTypes().then(data => sneaker.setTypes(data))
        getBrands().then(data => sneaker.setBrands(data))
        // getSneakers(null, null, 1, 2).then(data => {
        //     sneaker.setSneakers(data.rows)
        //     sneaker.setTotalCount(data.count)
        // })
    }, [])

    useEffect(() => {
        getSneakers(sneaker.selectedBrand.id, sneaker.selectedType.id, sneaker.page, 8).then(data => {
            sneaker.setSneakers(data.result)
            //sneaker.setTotalCount(data.count)
        })
    }, [sneaker.page, sneaker.selectedType, sneaker.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <SneakersList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;