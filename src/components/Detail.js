import React, {useState} from 'react'
import {Card,Container,Form,Button,Modal} from 'react-bootstrap'
import logo from '../github_logo.png'

function Detail() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Container className='container d-flex align-items-center justify-content-center'>
            <Card className="w-100 shadow-lg rounded bg-dark opacity-50" style={{border:'none'}}>
                <Card.Body>
                    <Button className='info btn btn-light' variant="primary" onClick={handleShow}>
                      ?
                    </Button>
                    <Form>
                      <div className="row">
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >CRIM</label>
                            <input type="number" className='form-control' id="crim" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >ZN</label>
                            <input type="number" className='form-control' id="zn" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >INDUS</label>
                            <input type="number" className='form-control' id="indus" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >CHAS</label>
                            <input type="number" className='form-control' id="chas" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >NOX</label>
                            <input type="number" className='form-control' id="nox" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >RM</label>
                            <input type="number" className='form-control' id="rm" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >AGE</label>
                            <input type="number" className='form-control' id="age" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >DIS</label>
                            <input type="number" className='form-control' id="dis" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >RAD</label>
                            <input type="number" className='form-control' id="rad" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >TAX</label>
                            <input type="number" className='form-control' id="tax" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >PTRATIO</label>
                            <input type="number" className='form-control' id="ptratio" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >B</label>
                            <input type="number" className='form-control' id="b" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >LSTAT</label>
                            <input type="number" className='form-control' id="lstat" />
                          </Form.Group>
                        </div>
                      </div>
                      <p className='text-center' style={{marginTop:'10px'}}>
                        <Button className='btn btn-primary' type="submit">Submit</Button>
                      </p>
                      <h6 className='text-center' style={{marginTop:'10px', color:'white'}}>Copyright © Made By - Md. Aquib <a href="https://github.com/Md-Aquib">
                        <img src={logo} style={{height:'25px',width:'25px'}} alt="github_logo" /></a> </h6>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='text-center'>Attribute Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>CRIM-       per capita crime rate by town</p>

          <p>ZN-         proportion of residential land zoned for lots over 
                    25,000 sq.ft.</p>

          <p>INDUS-      proportion of non-retail business acres per town</p>

          <p>CHAS-       Charles River dummy variable (= 1 if tract bounds 
                    river; 0 otherwise)</p>

          <p>NOX-        nitric oxides concentration (parts per 10 million)</p>

          <p>RM -        average number of rooms per dwelling</p>

          <p>AGE-        proportion of owner-occupied units built prior to 1940</p>

          <p>DIS-        weighted distances to five Boston employment centres</p>

          <p>RAD-        index of accessibility to radial highways</p>

          <p>TAX-       full-value property-tax rate per $10,00</p>

          <p>PTRATIO-   pupil-teacher ratio by tow</p>

          <p>B-         1000(Bk - 0.63)^2 where Bk is the proportion of blacks 
                      by tow</p>

          <p>LSTAT-     % lower status of the population</p>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Detail