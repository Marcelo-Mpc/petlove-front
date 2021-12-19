import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Top = () =>(
    
    <Container>        
        <Row>
        <Row >
              <div className="">
                  <Image src="/pegadas.png" width={256} height={105} />
              </div>
          </Row>
            <Col>
            <div><h1 class= "toptexto">Quem somos</h1></div>
            <div class ="cuidados">                                                
                <p> 
                    <span>
                        Somos um grupo de estudantes da PUC-GO que temos em comum, além do curso Análise e Desenvolviento de sistemas, 
                        um carinho enorme pelos animais.  Diante disso, observando o grande número de animais sem lares, abandonados, famintos
                        ou com uma péssima condição de vida, somados ao curto alcance das publicações e as dificuldade do processo de adoção realizado hoje em dia,
                        tomamos como iniciativa criar esse site.
                    </span>
                </p>               
                <p>
                    <span>
                        Temos como missão estreitar a relação homem-animal e garantir a melhor escolha possível do lar para 
                        milhares de animais que estão a espera de um. Temos como missão arrancar sorrisos e propiciar momementos únicos
                        e agradáveis a você em convívio com seu pet. Garantindo a eles melhores condições de vida em um ambiente em que haja uma troca
                        mútua de carinho, tornando a história de vida deles o mais bela possível.
                    </span>
                </p>
                <p>
                    <span>
                        E é claro, nosso objetivo é aproximar você deles, trazendo praticidade e descomplicando todo o processo de adoção.
                        Veja bem. Caso você queira adotar um animal, terá disponível informações consistentes e detalhadas que serão adicionadas pelos 
                        doadores como fotos, raça, vaicinas, sexo, comportamento, idade, doenças etc. Terá um leque de amplo de opções que podem assugurar
                        uma escolha segura e agradável. E acima de tudo, poderá dar um lar para um pet que relamente necessita, livrando dos perigos das ruas.
                    </span>
                </p>
            </div>            
            </Col>    
            <Row >
              <div className="pegadas">
                  <Image src="/pegadas.png" width={256} height={105} />
              </div>
          </Row>                                       
        </Row>
    </Container>
);

export default Top