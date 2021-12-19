import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';

const BannerCuidado = () =>(
  
  
    <Container>
      <Row>          
        <div className="bannercuidado">
        <h1 className="adotecuidado2">Quem ama<br/>Cuida!</h1>
        </div>
        <Col >
              <div className="pegadas">
                  <Image src="/pegadas.png" width={256} height={105} />
              </div>
          </Col>
      </Row>
    </Container>

);

export default BannerCuidado;