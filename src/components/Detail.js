import React, {useState} from 'react'
import {Card,Container,Form,Button,Modal,Alert} from 'react-bootstrap'
import logo from '../github_logo.png'
import house from '../house.jpg'

function Detail() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [price, Setprice] = useState('');
  const [msg, Setmsg] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const close = () => setShow2(false);

  let handlesubmit = async(e) => {
    e.preventDefault()
    Setmsg("Please Wait !!!")
    let response = await fetch('https://house-price-prediction-backend.herokuapp.com/api/details/', {
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({'crim': e.target.crim.value,'zn':e.target.zn.value,'indus':e.target.indus.value,
      'chas':e.target.chas.value,'nox':e.target.nox.value,'rm':e.target.rm.value,
      'age':e.target.age.value,'dis':e.target.dis.value,'rad':e.target.rad.value,
      'tax':e.target.tax.value,'ptratio':e.target.ptratio.value,'b':e.target.b.value,
      'lstat':e.target.lstat.value})
    })
    let data = await response.json()
    Setprice(data.val)
    setShow2(true);
    Setmsg("")
  }

  return (
    <div>
        <Container className='container d-flex align-items-center justify-content-center'>
            <Card className="w-100 shadow-lg rounded bg-dark opacity-50" style={{border:'none'}}>
                <Card.Body>
                    {msg && <Alert variant='warning'>{msg}</Alert>}
                    {price && 
                    <Modal show={show2} onHide={close}>
                      <Modal.Header closeButton>
                        <Modal.Title className='text-center'><img src={house} alt="house" style={{height:'50px',widows:'50px'}} /> House-Price-Predictor</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{fontWeight:'600'}}>The total price of the house is. $ {price}.</Modal.Body>
                    </Modal>    
                    }
                    <Button className='info btn btn-light' variant="primary" onClick={handleShow}>
                      ?
                    </Button>
                    <Form onSubmit={handlesubmit}>
                      <div className="row">
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >CRIM</label>
                            <input required type="number" step="any" className='form-control' name="crim" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >ZN</label>
                            <input required type="number" step="any" className='form-control' name="zn" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >INDUS</label>
                            <input required type="number" step="any" className='form-control' name="indus" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >CHAS</label>
                            <input required type="number" step="any" className='form-control' name="chas" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >NOX</label>
                            <input required type="number" step="any" className='form-control' name="nox" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >RM</label>
                            <input required type="number" step="any" className='form-control' name="rm" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >AGE</label>
                            <input required type="number" step="any" className='form-control' name="age" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >DIS</label>
                            <input required type="number" step="any" className='form-control' name="dis" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >RAD</label>
                            <input required type="number" step="any" className='form-control' name="rad" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >TAX</label>
                            <input required type="number" step="any" className='form-control' name="tax" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >PTRATIO</label>
                            <input required type="number" step="any" className='form-control' name="ptratio" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >B</label>
                            <input required type="number" step="any" className='form-control' name="b" />
                          </Form.Group>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                          <Form.Group>
                            <label >LSTAT</label>
                            <input required type="number" step="any" className='form-control' name="lstat" />
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