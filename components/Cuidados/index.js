import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';

const Cuidados = () =>(    
    <Container>        
        <Row>
            <Col>
            <div><h1 class="toptexto">Quais são os principais cuidados com a saúde dos pets?</h1></div>
            <div class="cuidados" >                                                
                <p>
                    <span>
                        O Brasil é o segundo país do mundo em quantidade de animais de estimação. Números do <a href="https://www.ibge.gov.br/" target="_blank" rel="noopener">IBGE</a> revelam que há 139,3 milhões de pets no país. 
                        Especialistas afirmam que o contato com bichos ajuda na recuperação de doenças, além de fazer bem à saúde mental das pessoas. Por isso, a medicina veterinária tem avançado em pesquisas, exames e tratamentos. 
                        Afinal, o cuidado periódico com o bem-estar dos companheiros de quatro patas prolonga a expectativa de vida e os mantém mais saudáveis.&nbsp;
                    </span>
                </p>
                <p>
                <span>
                    Hoje há alguns equipamentos de alta tecnologia e é cada vez mais acessível fazer exames com 
                    frequência para prevenir doenças crônicas dos animais e ajudar nos tratamentos. 
                    A recomendação principal é que os tutores agendem consultas periódicas para o acompanhamento da saúde dos pets.&nbsp;
                </span>
                </p>
                <p><span>Confira mais algumas dicas para melhorar a qualidade de vida dos animais de estimação:</span></p>

                <h4 class="distanciatexto"><b>Higiene e saúde bucal</b></h4>
                <p class="distanciatexto">
                    <span>
                        Em casa, o tutor é responsável por manter limpos tanto o pet como o ambiente onde ele vive para evitar a proliferação de carrapatos e outros transmissores de doenças. 
                        Cães podem tomar banhos semanais, tomando cuidado de que água não atinja os ouvidos do animal. Também é importante utilizar produtos indicados para pets para evitar alergias ou até mesmo intoxicação. 
                        Além disso, deve-se observar a dentição e evitar dar alimentos não recomendados ajuda a preservar a saúde bucal dos bichinhos.&nbsp;&nbsp;
                    </span>
                </p>

                <h4 class="distanciatexto"><b>Vacinação</b></h4>
                <p class="distanciatexto">
                    <span>
                        As vacinas periódicas são necessárias para prevenir doenças graves. 
                        Mantenha a carteirinha de vacinação em dia para evitar problemas de saúde mais graves no futuro, 
                        além de prevenir uma possível contaminação dos demais membros da família.&nbsp;
                    </span>
                </p>

                <h4 class="distanciatexto"><b>Check-up</b></h4>
                <p class="distanciatexto"><span>
                        Animais de estimação, muitas vezes, não demonstram que estão doentes. 
                        Por isso, a visita constante ao veterinário é importante. 
                        Os check-ups identificam possíveis tumores, doenças crônicas, como diabetes ou insuficiência renal. 
                        Por isso, é necessário que o bichinho passe por uma bateria de exames.&nbsp;
                    </span>
                </p>

                <h4 class="distanciatexto"><b>Exames básicos</b></h4>
                <p class="distanciatexto">
                    <span>
                        O rápido diagnóstico de doenças melhora as chances de resultados de um tratamento. 
                        O veterinário deve indicar exames de sangue para checar colesterol e outros problemas e exames de urina para verificar como está a saúde dos rins, por exemplo. 
                        Os testes oftalmológicos identificam as condições dos olhos.&nbsp;
                    </span>
                </p>

                <h4 class="distanciatexto"><b>Exames complementares</b></h4>
                <p class="distanciatexto">
                    <span>
                    A tecnologia também avança quando se trata de saúde animal. 
                    Há equipamentos de diagnóstico por imagem que são usados em caso de uma checagem mais aprofundada de um problema de saúde. 
                    Esses aparelhos são projetados para evitar o estresse do pet e garantir melhores resultados, em alta resolução.&nbsp;
                    </span>
                </p>
                <p><span>
                    A Imex Medical Group lançou uma série de equipamentos especializados em animais. 
                    A </span><a href="https://www.imexmedicalgroup.com.br/blog/segundo-em-faturamento-no-mercado-pet-brasil-avanca-em-tecnologia-para-veterinaria/">
                    <span>linha pet</span></a><span > inclui aparelho de radiologia computadorizada que se adapta a diferentes ambientes,</span>
                    <a href="https://www.imexmedicalgroup.com.br/categoria-de-produto/vet/arco-cirurgico-vet/"><span> arco cirúrgico</span></a>
                    <span> para dar mais precisão a procedimentos cirúrgicos em animais de pequeno e médio porte, máquinas de </span><a href="https://www.imexmedicalgroup.com.br/categoria-de-produto/vet/ultrassom-vet/">
                    <span>ultrassom </span></a><span>portáteis e </span><a href="https://www.imexmedicalgroup.com.br/categoria-de-produto/vet/ressonancia-magnetica-vet/">
                    <span>ressonância magnética</span></a><span> que gera uma imagem mais nítida. </span></p> 
                    <p><span>Além disso, possui </span><a href="https://www.imexmedicalgroup.com.br/categoria-de-produto/vet/impressoras-vet/">
                    <span>impressora</span></a><span> dry para impressão de imagens de alta qualidade, </span>
                    <a href="https://www.imexmedicalgroup.com.br/categoria-de-produto/vet/raios-x-vet/">
                    <span>raios x digital</span></a>
                    <span> projetados para espaços compactos e sistema de processamento de exames e pós-processamento de imagens que gera resultados em cinco segundos, 
                    além dos raios x portáteis, que garantem a precisão e qualidade com a facilidade no transporte do equipamento. 
                    Já a <a href="https://www.imexmedicalgroup.com.br/produtos/imagine-one-vet/">tomografia computadorizada </a> 
                    apresenta a combinação de alta tecnologia aliada a uma excelente relação custo benefício. 
                    Esse equipamento garante excelente qualidade de imagem, rapidez na aquisição de dados e acurácia diagnóstica.</span></p> 
                    <p class="fonte"><a href="https://www.imexmedicalgroup.com.br/blog/quais-sao-os-principais-cuidados-com-a-saude-dos-pets/">Artigo fonte.</a></p>             
            </div>            
            </Col>  
            <Row >
              <div className="#">
                  <Image src="/pegadas.png" width={256} height={105} />
              </div>
          </Row>                                   
        </Row>
    </Container>
);

export default Cuidados