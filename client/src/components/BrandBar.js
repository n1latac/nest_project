import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {sneaker} = useContext(Context);
    return (

            sneaker.brands ? (
            <Row className="d-flex flex-nowrap" style={{marginTop: '60px'}}>
                {sneaker.types.map(brand =>
                    <Card
                        key={brand.id}
                        className="p-3"
                        style={{width: 'calc(25% - 30px)', cursor: 'pointer'}}
                        onClick={() => sneaker.setSelectedBrand(brand)}
                        border={brand.id === sneaker.selectedBrand.id ? 'dark' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )}
            </Row>)
            : null
    );
});

export default BrandBar;