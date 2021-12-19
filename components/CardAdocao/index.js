import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Image from 'next/image';


const Banner = () => (
  <>
    <div className="container mt-0">
      <h2 className="adote2">Adoção</h2>
      <div className="row">
        <Image src="/adocao.png" width={1173} height={400} />
      </div>
    </div>
  </>

);

export default Banner;