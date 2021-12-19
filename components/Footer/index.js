import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Image from 'next/image';

const Footer = () => (
  <div className="divfooter">
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Image src="/logo.png" width={169} height={91} />
                </Col>
                <Col>
                  <div class="col-auto">
                    <p class="footer__menu-list-title">Onde estamos</p>
                    <a href="https://www.facebook.com/petlovego" title="Facebook da Petlove" target="_blank" rel="noopener" class="mr-8">
                      <img data-sizes="auto" data-src="https://www.petlove.com.br/static/uploads/images/social/icon_facebook.svg" src="https://www.petlove.com.br/static/uploads/images/social/icon_facebook.svg" alt="Facebook" width="28" height="28" class="lazyautosizes lazyloaded" sizes="172px" />
                    </a>
                    <a href="https://www.instagram.com/sist.petlove" title="Instagram da Petlove" target="_blank" rel="noopener" class="mr-8">
                      <img data-sizes="auto" data-src="https://www.petlove.com.br/static/uploads/images/social/icon_instagram.svg" src="https://www.petlove.com.br/static/uploads/images/social/icon_instagram.svg" alt="Instagram" width="28" height="28" class="lazyautosizes lazyloaded" sizes="172px" />
                    </a>
                    <a href="https://www.twitter.com/" title="Twitter da Petlove" target="_blank" rel="noopener" class="mr-8">
                      <img data-sizes="auto" data-src="https://www.petlove.com.br/static/uploads/images/social/icon_twitter.svg" src="https://www.petlove.com.br/static/uploads/images/social/icon_twitter.svg" alt="Twitter" width="28" height="28" class="lazyautosizes lazyloaded" sizes="172px" />
                    </a>
                    <a href="https://www.youtube.com/user/" title="Youtube da Petlove" target="_blank" rel="noopener" class="mr-8">
                      <img data-sizes="auto" data-src="https://www.petlove.com.br/static/uploads/images/social/icon_youtube.svg" src="https://www.petlove.com.br/static/uploads/images/social/icon_youtube.svg" alt="Youtube" width="28" height="28" class="lazyautosizes lazyloaded" sizes="172px" />
                    </a>
                    
                  </div>

                </Col>

              </Row>
            </Col>

          </Row>
        </Col>
        <Col>
          <Row>
            <Col >
              
              <Row><Col>
              <p class="footer__menu-list-title mt-24">Baixe o app</p>
                    <a href="#" title="Baixar na App Store" target="_blank" rel="noopener" class="block mr-8">
                      <img data-sizes="auto" data-src="https://www.petlove.com.br/static/uploads/banner_image/image/17754/apple_stroke.png" src="https://www.petlove.com.br/static/uploads/banner_image/image/17754/apple_stroke.png" alt="Apple store" width="146" class="footer__menu-list-img lazyautosizes lazyloaded" heigth="43" sizes="146px" />
                    </a>
                    <a href="#" title="Baixar na Google Play" target="_blank" rel="noopener" class="block">
                      <img data-sizes="auto" data-src="https://www.petlove.com.br/static/uploads/banner_image/image/17755/google_stroke.png" src="https://www.petlove.com.br/static/uploads/banner_image/image/17755/google_stroke.png" alt="Play store" width="146" class="footer__menu-list-img lazyautosizes lazyloaded" heigth="43" sizes="146px" />
                    </a></Col ></Row>
              <Row></Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>

    <hr size="3" width="100%" />
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <p > © Todos os direitos estão reservados aos desenvolvedores</p>
            </Col>

          </Row>
        </Col>
        <Col>
          <Row>
            <Col >
              <Nav >
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" >Nossos Serviços</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/quemsomos">Quem somos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contato">Contato</NavLink>
                </NavItem>
              </Nav>

            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  </div>

);

export default Footer;