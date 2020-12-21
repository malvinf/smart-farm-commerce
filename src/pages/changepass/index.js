import React /* { useState } */ from 'react';
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
// import { getCookie } from '../../utils/cookie';
// import { CustomerService } from '../../services';
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar/index';

const ChangePass = () => {
  /*

  const [customerLoading, setCustomerLoading] = useState(false);
  const [password, setPassword] = useState('');

  function getId() {
    if (getCookie('userData')) {
      const data = JSON.parse(getCookie('userData')).id;
      return data;
    }
    return '';
  }
  const id = `${getId()}`;

  const updatePassword = () => {
    setCustomerLoading(false);
    CustomerService.updateCustomer(id, password)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCustomerLoading(false);
      });
  };
*/
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
            <Button
              className="mt-5 px-5"
              color="danger"
              onClick={(e) => {
                e.preventDefault();
                // updatePassword();
              }}
              // disabled={customerLoading}
            >
              Ganti Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePass;
