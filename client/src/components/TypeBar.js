import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {
    const {sneaker} = useContext(Context);
    return (
        <ListGroup style={{marginTop: '60px'}}>
            {sneaker.brands.map((type) =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === sneaker.selectedType.id}
                    key={type.id}
                    onClick={() => sneaker.setSelectedType(type)}>
                        {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;