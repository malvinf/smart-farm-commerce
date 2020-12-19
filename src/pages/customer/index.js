import React, { useState, useEffect } from 'react';
import {
  Container,
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
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noHp, setNoHp] = useState('');
  const [alamat, setAlamat] = useState('');

  function getId() {
    if (getCookie('userData')) {
      const data = JSON.parse(getCookie('userData')).id;
      return data;
    }
    return '';
  }
  const id = `${getId()}`;

  useEffect(() => {
    CustomerService.getCustomer(id)
      .then((res) => {
        setNama(res.nama);
        setEmail(res.email);
        setPassword(res.password);
        setNoHp(res.noHp);
        setAlamat(res.alamat);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCustomerLoading(false);
      });
  }, [id]);

  const onSubmit = () => {
    setCustomerLoading(true);
    CustomerService.updateCustomer(id, nama, email, noHp, alamat)
      .error((err) => {
        console.log(err);
      })
      .finally(() => {
        setCustomerLoading(false);
      });
  };

  return (
    <Container>
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
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
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
              <Label for="nohp">No. Hp</Label>
              <Input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="no hp"
                value={noHp}
              />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label for="alamat">Alamat</Label>
              <Input
                type="textarea"
                name="alamat"
                id="alamat"
                value={alamat}
                onChange={(e) => {
                  setAlamat(e.target.value);
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
    </Container>
  );
};

export default Customer;
