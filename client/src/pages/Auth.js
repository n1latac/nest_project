import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {login, registration} from "../api/userApi";
import './assets/style.css'

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 custom-overlay">
        <Card style={{width: 600}} className="p-5 custom-card">
            <h2 className="m-auto">{isLogin ? 'Authentication' : "Registration"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3 custom-form-control"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-3 custom-form-control"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <div>
                            Don't have an account? <NavLink className="custom-link" to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                        </div>
                        :
                        <div>
                            Already have an account? <NavLink className="custom-link" to={LOGIN_ROUTE}>Log In!</NavLink>
                        </div>
                    }
                    <Button
                        variant={"outline-success"}
                        onClick={click}
                        className="custom-button"
                    >
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                </Row>
            </Form>
        </Card>
    </Container>
    
    
    );
});

export default Auth;