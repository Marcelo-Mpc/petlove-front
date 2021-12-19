import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const TopLogin = () =>(
<div className="container">
    <div className="row">

      {/* imagem */}
      <div className="col-sm-4 col-lg-2">
        <Image src="/logo.png" width={169} height={91} />
      </div>
      {/* menu */}
      <div className="col-sm-4 col-lg-6">
        <Nav className="topnav">
          <div className="col-sm-8 col-lg-2">
            <NavItem className="navmark">
              <NavLink className="nav" href="/" >Home</NavLink>
            </NavItem>
          </div>
          <div className="col-sm-8 col-lg-2">
            <NavItem className="navmark">
              <NavLink className="nav" href="/quemsomos">Sobre</NavLink>
            </NavItem>
          </div>
          <div className="col-sm-8 col-lg-3">
            <NavItem className="navmark">
              <NavLink className="nav" href="/cuidados">Pet Care</NavLink>
            </NavItem>
          </div>
          <div className="col-sm-8 col-lg-2">
            <NavItem className="navmark">
              <NavLink className="nav" href="/Contato">Contato</NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>

    </div>
  </div>
);

export default TopLogin;