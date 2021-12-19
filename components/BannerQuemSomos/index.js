import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';

const BannerQuemSomos = () =>(
<div className="bannerquemsomos">
  <Container>
    <h1 className="adotequemsomos">Quem</h1>
    <h1 className="adotequemsomos2"> Somos </h1>
    <h5 className="ligacao">Encurtando </h5>
    <h5 className="ligacao">a ligação </h5>
    <h5 className="ligacao">Homem-Animal.</h5>
  </Container>
</div>
);

export default BannerQuemSomos;