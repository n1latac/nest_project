import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createSneaker, getBrands, getTypes} from "../../api/sneakerApi";
import {observer} from "mobx-react-lite";

const CreateSneaker = observer(({show, onHide}) => {
    const {sneaker} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(undefined)
    const [file, setFile] = useState(0)
    const [info, setInfo] = useState([])
    const [selectedTypeName, setSelectedTypeName] = useState("Выберите тип");
    const [selectedBrandName, setSelectedBrandName] = useState("Выберите бренд");

    useEffect(() => {
        getTypes().then(data => sneaker.setTypes(data))
        getBrands().then(data => sneaker.setBrands(data))
    }, [sneaker])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0])
    }

    const addSneaker = () => {
        if (!name || isNaN(price) || !file) {
            console.log('Заполните все обязательные поля');
            return;
        }

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('file', file)
        formData.append('brandId', sneaker.selectedBrand.id)
        formData.append('typeId', sneaker.selectedType.id)
        formData.append('info', JSON.stringify(info))
        console.log(typeof formData.get('price'));
        createSneaker(formData).then(data => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{selectedTypeName}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sneaker.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => {
                                        sneaker.setSelectedType(type);
                                        setSelectedTypeName(type.name);
                                    }}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{selectedBrandName}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sneaker.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => {
                                        sneaker.setSelectedBrand(brand);
                                        setSelectedBrandName(brand.name);
                                    }}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => addSneaker()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateSneaker;