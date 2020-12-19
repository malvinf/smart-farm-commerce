import React from 'react';
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
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar/index';
import {} from './style.css';

const Customer = () => {
  return (
    <>
      <Navbar />
      <Container>
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
                <Input type="name" name="name" id="name" placeholder="name" />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="nohp">No. Hp</Label>
                <Input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="no hp"
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="alamat">Alamat</Label>
                <Input type="textarea" name="alamat" id="alamat" />
              </FormGroup>
              <Button className="mt-4 float-end px-5" color="success">
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
    </>
  );
};

export default Customer;
