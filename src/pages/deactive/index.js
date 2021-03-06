import React from 'react';
import {
  Col,
  Container,
  Form,
  Row,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import { getCookie } from '../../utils/cookie';
import { CustomerService } from '../../services';
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar/index';

const Deactive = () => {
  function getId() {
    if (getCookie('userData')) {
      // console.log(JSON.parse(getCookie('data')).id);
      const data = JSON.parse(getCookie('userData')).id;
      return data;
    }
    return '';
  }
  const id = `${getId()}`;

  const deleteAccount = () => {
    CustomerService.deleteCustomer(id)
      .catch(() => {
        // console.log(err);
      })
      .finally(() => {
        window.location.replace('/login');
      });
  };
  return (
    <Container>
      <Navbar />
      <Row className="mt-4">
        <Col xs="3">
          <Sidebar />
        </Col>
        <Col xs="6" className="text-center">
          <div>
            <h3>Account Deactivation</h3>
            <hr />
          </div>
          <Form className="mt-4">
            <FormGroup row className="mb-4">
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-4">
              <Label for="examplePassword" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-4 text-center">
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    Yes, I want deactive my account
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <Button
              className="mt-4 text-center px-5"
              color="danger"
              onClick={(e) => {
                e.preventDefault();
                deleteAccount();
              }}
            >
              Deactive Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Deactive;
