import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import SneakerItem from "./SneakerItem";

const SneakersList = observer(() => {
    const {sneaker} = useContext(Context);

    return (
        sneaker?.sneakers ?
        <Row className="d-flex">
            {sneaker.sneakers.map(sneaker =>
               <SneakerItem key={sneaker.id} sneaker={sneaker}/>
            )}
        </Row> : null
    );
});

export default SneakersList;