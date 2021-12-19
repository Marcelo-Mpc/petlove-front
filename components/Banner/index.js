import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Image from 'next/image';

const Banner = () => (
  <div className="banner mt-4">
    <div className="container">
      <div className="row ms-2 me-3">
        <div className="col-sm-6 col-lg-12">
          <h1 className="adote">Adote um Amigo<br />e tenha atenção incondicional</h1>
          <h5 className="lig">A ligação humano-pet é a relação verdadeira de amor e carinho.</h5>
        </div>
      </div>
      <button className="btvejamais" link href="/showpet">Veja mais</button>
    </div>
  </div >
);

export default Banner;