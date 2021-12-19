import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Image from 'next/image';
import Styles from '../../styles/Componentes.module.css';

const Banner = () => (
  <>
    <div className="container mb-0">
      <h2 className="adote2">Categoria de Serviços</h2>
      <div className="row">
        <div className="col-lg-3 categoria">
          <Image src="/higienico.png" width={324} height={225} />
        </div>
        <div className="col-lg-3">
          {/* <img src="/treinamento.png" className={Styles.categoria}/> */}
          <Image src="/treinamento.png" width={324} height={225} />
        </div>
        <div className="col-lg-3 " >
          <Image src="/creche.png" width={324} height={225} />
        </div>
        <div className="col-lg-3 ">
          <Image src="/saude.png" width={324} height={225} />
        </div>
        <space>.</space>
      </div>
    </div>

  </>

);

export default Banner;