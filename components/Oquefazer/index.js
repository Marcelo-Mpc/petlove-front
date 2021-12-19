import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Image from 'next/image';


const Banner = () => (
  <>
    <div className="container justify-content-center">
      <div className="row m-0 justify-content-center">
        {/* coluna 1 */}
        <div className="col-sm-5 col-lg-4">
          <h1 className="topoq optext">O que deseja Fazer?</h1>
        </div>
        {/* coluna 2 */}
        <div className="col-sm-3 col-lg-2">
          <div className="topoq">
            <Image src="/pegadas.png" width={200} height={90} />
          </div>
        </div>
        {/* coluna adocao */}
        <div className="col-sm-3 col-lg-3 p-0 ">          
            <a href="/showpet" className=""> <button className="lgcoracao button button-1">Adoção</button></a>         
        </div>
        {/* coluna doacao */}
        <div className=" col-sm-3 col-lg-2 ">
          <div className="mt-4 p-0">
          <a href="/cadastropet" className=""> <button className="lgpegada button button-1">Doação</button></a>
          </div>
        </div>
      </div>
    </div>
  </>

);

export default Banner;