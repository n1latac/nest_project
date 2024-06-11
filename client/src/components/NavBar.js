import React, {useContext} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from '../utils/constants'
import {Button, Container, Nav} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = async() => {
        user.setUser({});
        user.setIsAuth(false);
        await localStorage.removeItem('token');
    }

    console.log(user.isAuth)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"
             style={{position: 'fixed', width: '100%', zIndex: 1000, top: 0, marginBottom: '60px'}}>
            <Container>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand" to={HOME_ROUTE}>Sneakers Store</Link>
                    {user.isAuth ? (
                        <Nav>
                            <Button onClick={() => navigate(ADMIN_ROUTE)} variant="outline-dark" className="me-2">Admin page</Button>
                            <Button onClick={() => logOut()} variant="outline-dark">Logout</Button>
                        </Nav>
                    ) : (
                        <Nav>
                            <Button variant="outline-dark" onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                        </Nav>
                    )}
                </div>
            </Container>
        </nav>
    );
});

export default NavBar;