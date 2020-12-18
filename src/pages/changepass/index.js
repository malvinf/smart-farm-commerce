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
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar/index';

const ChangePass = () => {
  return (
    <Container>
      <Navbar />
      <Row className="mt-4">
        <Col xs="3">
          <Sidebar />
        </Col>
        <Col xs="6" className="text-center">
          <div>
            <h3>Ganti Password</h3>
            <hr />
          </div>
          <Form>
            <FormGroup row>
              <Label for="examplePassword" sm={3}>
                Password Lama
              </Label>
              <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-4">
              <Label for="examplePassword" sm={3}>
                Password Baru
              </Label>
              <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" />
              </Col>
            </FormGroup>
            <Button className="mt-5 px-5" color="danger">
              Ganti Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePass;
