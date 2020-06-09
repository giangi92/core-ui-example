import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import User from '../models/User';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const UserLogin = (userState) => {
    var [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [goToDashboard, setGoToDashboard] = useState(false);

    var [password, setPassword] = useState('');
    console.log("userState", userState.isLogged);
    
    if (userState.isLogged) {
        return (
            <div>
                <Redirect to="/dashboard" />
            </div>
        )
    }

    // if(sessionToken && jwt.verify(sessionToken))
    //  return(<Redirect to='/dasboard'></Redirect>)

    const submitCredentials = (e) => {
        e.preventDefault();
        console.log('email inserita?', email);

        // setEmail(event)
        // console.log("current email:",email)
        fetch("/user/login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                if (data.error) {
                    setValidEmail(false);
                    console.log('email inserita non valida validEmail:', validEmail)
                } else {
                    localStorage.setItem('sessionToken', data.sessionToken);
                    console.log(data);
                    // const user = new User(data);
                    localStorage.setItem('user', JSON.stringify(data));
                    setGoToDashboard(true);
                    userState.setLogged(true);
                    userState.setLoggedUser(data);
                    // console.log(localStorage.getItem("sessionToken"));
                }
            })
    }
    if (goToDashboard) {
        return (
            <div>
                <Redirect to="/dashboard" />
            </div>
        )
    } else
        return (
            <div>
                <div className='d-flex justify-content-center align-items-center space-allaround'>
                    <h1 className='display-1'>Giangisoft</h1>
                </div>
                <p className="center-element">Hai accesso per 1 minuto, dopo di che ritorni qui nella home. Questo per dimostrare che il redirect funge
                        <br></br>
                    <br />
                        account di prova: cicciocappuccio@giangisoft.com <br />
                        pass:password
                    </p>
                <div className="app flex-row align-items-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="8">
                                <CardGroup>
                                    <Card className="p-4">
                                        <CardBody>
                                            <Form onSubmit={(e) => submitCredentials(e)}>
                                                <h1>Login</h1>
                                                <p className="text-muted">Sign In to your account</p>
                                                {!validEmail && <p className="red-border">Email or password aint correct</p>}
                                                <InputGroup className="mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-user"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input type="email" placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-lock"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </InputGroup>
                                                <Row>
                                                    <Col xs="6">
                                                        <Button color="primary" className="px-4">Login</Button>
                                                    </Col>
                                                    <Col xs="6" className="text-right">
                                                        <Button color="link" className="px-0">Forgot password?</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                                        <CardBody className="text-center">
                                            <div>
                                                <h2>Sign up</h2>
                                                <p>Registrati nella tua magnifica piattaforma dove puoi giudicare i tuoi dipendenti e, volendo, licenziarli senza nessun motivo</p>
                                                <Link to="/register">
                                                    <Button color="primary" className="mt-3" active>
                                                        Register Now!
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
}

export default UserLogin;