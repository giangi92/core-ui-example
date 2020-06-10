import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../src/assets/img/logo/imole-logo.png';

import { Alert, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const UserRegister = () => {

  var [name, setName] = useState('');
  var [surname, setSurname] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [retypePassword, setRetypePassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [goToLogin, setGoToLogin] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const submitCredentials = (e) => {
    e.preventDefault();
    console.log('email inserita?', email);
    setValidEmail(true);
    setValidPassword(true);
    setShowAlert(false);

    if (password !== retypePassword) {
      setValidPassword(false);
      return;
    }

    // setEmail(event)
    // console.log("current email:",email)
    fetch("/user/register",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, email, password })
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.error) {
          setValidEmail(false);
          console.log('Errore: ' + data.error.message, validEmail)
        } else {

          console.log(data);
          // const user = new User(data);
          localStorage.setItem('user', JSON.stringify(data));
          setShowAlert(true);
          setTimeout(() => {

            setGoToLogin(true);
          }, 3000)
          //alert('Registrato nuovo utente: ' + data.name + '. Effettua l`accesso');
          // console.log(localStorage.getItem("sessionToken"));
        }
      })
  }

  if (goToLogin) {
    return (
      <div>
        <Redirect to="/dashboard" />
      </div>
    )
  } else {
    return (
      <div>
        <div className='d-flex justify-content-center align-items-center space-allaround'>
          {/* <h1 className='display-1'>Giangisoft</h1> */}
          <img src={logo} alt="Imole-logo"></img>
        </div>
        <div className="flex-row align-items-center">

          <Container>
            {showAlert && <Alert variant="success">Registrazione avvenuta con successo. Reindirizzamento in corso...</Alert>}
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form onSubmit={(e) => submitCredentials(e)}>
                      <h1>Register</h1>
                      <p className="text-muted">Create your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} autoComplete="surname" />
                      </InputGroup>
                      {!validEmail && <p className="red-border">Email già in uso</p>}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                      </InputGroup>
                      {!validPassword && <p className="red-border">Password non coincidono</p>}
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Repeat password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} autoComplete="new-password" />
                      </InputGroup>
                      <Button color="success" block>Create Account</Button>
                    </Form>
                  </CardBody>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    );
  }
}

export default UserRegister;
