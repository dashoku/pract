import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import './stylepages.css';
import ButtonGroup from './ButtonGroup';

import ProfileImg from './img/homeimg.png';

const Profile = observer(() => {
  return (

    <Container className="profile-container">
        <ButtonGroup />
      <Col className="u-prof-container">
        <Row className="profile-row">
          <Col xs={12} md={4}>
            <Image src={ProfileImg} roundedCircle fluid />
          </Col>
          <Col xs={12} md={8}>
            <h2>Им'я Прізвище</h2>
            <Col className="profile-p">
              <div>
                <p>+30 (67) 1001001</p>
                <p>email@email.gmail.com</p>
              </div>

              <div>
                <p>+30 (67) 1001001</p>
                <p>email@email.gmail.com</p>
              </div>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='ml-3'>Опис.</p>
            <Button className="prof-button">Редагувати</Button>
          </Col>
        </Row>
      </Col>
    </Container>

  );
});

export default Profile;
