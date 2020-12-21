import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CardBody,
  CardText,
} from 'reactstrap';
import { getCookie } from '../../utils/cookie';
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar/index';
import { CustomerService } from '../../services';
import {} from './style.css';

const Customer = () => {
  const [customerLoading, setCustomerLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  function getId() {
    if (getCookie('id')) {
      const data = JSON.parse(getCookie('id'));
      return data;
    }
    return '';
  }
  const id = `${getId()}`;

  useEffect(() => {
    CustomerService.getCustomer(id)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setPhoneNumber(res.data.phoneNumber);
        setAddress(res.data.address);
      })
      // .catch((err) => {
      //  console.log(err);
      // })
      .finally(() => {
        setCustomerLoading(false);
      });
  }, [id]);

  const onSubmit = () => {
    setCustomerLoading(true);
    CustomerService.updateCustomer(id, name, email, phoneNumber, address)
      // .error((err) => {
      // console.log(err);
      // })
      .finally(() => {
        setCustomerLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <Row className="mt-4">
          <Col xs="2" className="sidebar">
            <Sidebar />
          </Col>
          <Col xs="6">
            <h3>Profile Saya</h3>
            <p>
              Kelola informasi profil Anda untuk mengontrol, melindungi dan
              mengamankan akun
            </p>
            <Form>
              <FormGroup className="mb-2">
                <Label for="name">Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="phoneNumber">No. Hp</Label>
                <Input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="no hp"
                  value={phoneNumber}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="alamat">Alamat</Label>
                <Input
                  type="textarea"
                  name="alamat"
                  id="alamat"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </FormGroup>
              <Button
                className="mt-4 float-end px-5"
                color="success"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                disabled={customerLoading}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs="3" className="ml-5">
            <Card>
              <CardImg
                width="10%"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
              />
              <CardBody className="text-center">
                <Button color="primary" style={{ margin: '0 auto' }}>
                  Upload Photo
                </Button>
                <CardText tag="p" className="mt-3">
                  Ukuran gambar: maks. 1 MB Format gambar: .JPEG, .PNG
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Customer;
