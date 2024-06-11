import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateSneaker from "../components/modals/CreateSneaker";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [sneakerVisible, setSneakerVisible] = useState(false)

    return (
        <Container className="d-flex flex-column" style={{marginTop: '60px'}}>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setSneakerVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateSneaker show={sneakerVisible} onHide={() => setSneakerVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;