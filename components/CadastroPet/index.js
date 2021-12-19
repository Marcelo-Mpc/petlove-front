import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from "reactstrap";
import Image from "next/image";
import Styles from "../../styles/User.module.css"


const CadPet = () => (
    <>
        <div className="container corpo">
            <Row className={Styles.borda}>
                <Col ><Image src="/pegadas.png" alt="dogCadastro" width={256} height={105} /></Col>
                <Col ><Image src="/cadastroDog.png" alt="dogCadastro" width={170} height={240} /></Col>
            </Row>

            <div className="card" id={Styles.corpo}>
                <div className="card-header text-center" id={Styles.h1}>
                    <h2 className={Styles.h2} id={Styles.pad}>Adicione seu pet para adoção</h2>
                </div>

                {/* formulario */}
                <div className='text-center' id={Styles.h1, Styles.h2}></div>
                <form method="post" action="" id="userdados">
                    {/* nome */}
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text"
                                    className="form-control"
                                    id="floatingInputNome"
                                    placeholder="Nome do pet"
                                />
                                <label htmlFor="floatingInputNome">Nome do pet</label>
                            </div>
                        </div>

                        {/* nascimento */}
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-floating mb-3 mt-3">
                                <input type="date"
                                    className="form-control"
                                    id="floatingInputNascimento"
                                    placeholder="Data de nascimento"
                                />
                                <label htmlFor="floatingInputNascimento">Data de nascimento</label>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        {/* raça */}
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="floatingInputRaca"
                                    placeholder="Raça do pet"
                                />
                                <label htmlFor="floatingInputRaca">Raça do pet</label>
                            </div>
                        </div>

                        {/* caracteristica */}
                        <div className="col-sm-12 col-md-auto col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="floatingInputCaracteristicas"
                                    placeholder="Características"
                                />
                                <label htmlFor="floatingInputCaracteristicas">Características</label>
                            </div>
                        </div>

                    </div>

                    {/* sexo */}
                    <div className="row my-3">
                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <div className="form-floating">
                                <select name="Especie" className="form-select" id="floatingSelectEspecie">
                                    <option value="sel">Espécie</option>
                                    <option value="canino">Canino</option>
                                    <option value="felino">Felino</option>
                                </select>
                                <label htmlFor="floatingSelectEspecie">Especie</label>
                            </div>
                        </div>

                        {/* especie */}
                        <div className="col-sm-12 col-md-12 col-lg-3 col">
                            <div className="form-floating">
                                <select name="Sexo" className="form-select" id="floatingSelectSexo">
                                    <option value="sel">Sexo</option>
                                    <option value="canino">Macho</option>
                                    <option value="felino">Fêmea</option>
                                </select>
                                <label htmlFor="floatingSelectSexo">Sexo</label>
                            </div>
                        </div>

                        {/* Porte */}
                        <div className="col-sm-12 col-md-auto col-lg-3 col" >
                            <div className="form-floating">
                                <select name="Porte" className="form-select" id="floatingSelectPorte">
                                    <option value="sel">Porte</option>
                                    <option value="pequeno">Pequeno</option>
                                    <option value="medio">Médio</option>
                                    <option value="grande">Grande</option>
                                </select>
                                <label htmlFor="floatingSelectPorte">Porte</label>
                            </div>
                        </div>

                        {/* comportamento */}
                        <div className="col-sm-12 col-md-auto col-lg-3 col">
                            <div className="form-floating">
                                <select name="Comportamento" className="form-select" id="floatingSelectComportamento">
                                    <option value="sel">Comportamento</option>
                                    <option value="docil">Dócil</option>
                                    <option value="bravo">Bravo</option>
                                    <option value="bipolar">Bipolar</option>
                                    <option value="desconhecido">Desconhecido</option>
                                </select>
                                <label htmlFor="floatingSelectComportamento">Comportamento</label>
                            </div>
                        </div>
                    </div>

                    {/* Origem */}
                    {/* <div className="row my-3">
                        <div className="col-sm-12 col-md-auto col-lg-3 col">
                            <div className="form-floating">
                                <select name="Origem" className="form-select" id="floatingSelectOrigem">
                                    <option value="Origem">Origem</option>
                                    <option value="Pessoa">Pessoa</option>
                                    <option value="ONG">ONG</option>
                                    <option value="Abrigo">Abrigo</option>
                                </select>
                                <label htmlFor="floatingSelectOrigem">Origem</label>
                            </div>
                        </div>
                    </div> */}


                    {/* teste Origem */}
                    <div className="container">
                        <div className="row my-3">
                            <div className="col-sm-12 col-md-auto col-lg-2" id={Styles.radio}>
                                <label htmlFor="floatingSelectOrigens">Origem*</label>
                            </div>
                            <div className="row my-2" id={Styles.teste}>
                                <div className="col-sm-12 col-md-auto col-lg-4">
                                    <label>Pessoa</label>
                                    <input type="radio" value="pessoa" name="Origem"/>
                                </div>
                                <div className="col-sm-12 col-md-auto col-lg-4">
                                    <label>ONG</label>
                                    <input type="radio" value="ONG" name="Origem"/>
                                </div>
                                <div className="col-sm-12 col-md-auto col-lg-4">
                                    <label>Abrigo</label>
                                    <input type="radio" value="Abrigo" name="Origem"/>
                                </div>
                            </div>
                        </div>
                    </div>
                                        {/* botao registrar */}
                    <div className="card-footer">
                        <div className="container d-flex justify-content-center mb-2 mt-2">
                            <button className={Styles.btregistrar} onClick={'#'}>Cadastrar</button>
                        </div>
                    </div>
                </form>
                {/* form end */}
            </div>
        </div>
    </>

);

export default CadPet;

