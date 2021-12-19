import React from 'react';
// componentes
// import Top from '../components/Top';
import TopLogin from '../components/TopLogin';
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'

import { Row, Col } from "reactstrap";
import Image from "next/image";
import Styles from "../styles/User.module.css"
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { ReactDOM } from 'react-dom';

function FormUser() {
    const url = "http://localhost:8080/usuarios"
    const [data, setData] = useState({
        nome: "",
        sobrenome: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        email: "",
        senha: "",
        confsenha: ""
    })

    function submit(e) {
        e.preventDefault();
        if (!data.senha == data.confsenha) {
            alert('As senhas não sao indenticas')

        } else {
            axios.post(url,
                {
                    nome: data.nome + " " + data.sobrenome,
                    email: data.email,
                    senha: data.senha,
                    endereco: data.endereco,
                    cidade: data.cidade,
                    estado: data.estado
                })

                .then(res => {
                    var currentColor = localStorage.getItem('email');
                    window.location.href = "http://localhost:3000/inicio";

                    console.log(currentColor)

                    if (res.data) {
                    } else {
                        alert("Erro ao cadastrar Usuario");
                    }
                })

        }
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            {/* <Top/>  */}
            <TopLogin />
            <div className="container corpo mb-4">

                <Row className={Styles.borda}>
                    <Col ><Image src="/pegadas.png" alt="dogCadastro" width={256} height={105} /></Col>
                    <Col ><Image src="/cadastroDog.png" alt="dogCadastro" width={170} height={240} /></Col>
                </Row>

                <div className="card">
                    <div className="card-header text-center" id={Styles.h1}>
                        <h2 className={Styles.h2}>Cadastre seu usuário</h2>
                    </div>
                    <div className="card-body" id={Styles.corpo}>

                        <div className='text-center' id={Styles.h1, Styles.h2}><p className={Styles.text}>Coloque seus dados abaixo para cadastrar seu usuário:</p></div>

                        <form onSubmit={(e) => submit(e)} id="userdados">

                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={(e) => handle(e)} value={data.nome}
                                            className="form-control"
                                            id="nome"
                                            placeholder="Seu nome"
                                        />
                                        <label htmlFor="floatingInputNome">Seu nome</label>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={(e) => handle(e)} value={data.sobrenome}
                                            className="form-control" id="sobrenome" placeholder="Seu sobrenome" />
                                        <label htmlFor="floatingInputSobrenome">Seu sobrenome</label>
                                    </div>
                                </div>

                            </div>

                            <div className="row my-3">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={(e) => handle(e)} value={data.endereco}
                                            className="form-control" id="endereco" placeholder="Endereço" />
                                        <label htmlFor="floatingInputEndereco">Endereço</label>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={(e) => handle(e)} value={data.bairro}
                                            className="form-control" id="bairro" placeholder="Bairro" />
                                        <label htmlFor="floatingInputBairro">Bairro</label>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={(e) => handle(e)} value={data.cidade}
                                            className="form-control" id="cidade" placeholder="Cidade" />
                                        <label htmlFor="floatingInputCidade">Cidade</label>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating">
                                        <select name="estado" className="form-select" id="estado" onChange={(e) => handle(e)} value={data.estado}>
                                            <option value="ac">Acre</option>
                                            <option value="al">Alagoas</option>
                                            <option value="am">Amazonas</option>
                                            <option value="ap">Amapá</option>
                                            <option value="ba">Bahia</option>
                                            <option value="ce">Ceará</option>
                                            <option value="df">Distrito Federal</option>
                                            <option value="es">Espírito Santo</option>
                                            <option value="go">Goiás</option>
                                            <option value="ma">Maranhão</option>
                                            <option value="mt">Mato Grosso</option>
                                            <option value="ms">Mato Grosso do Sul</option>
                                            <option value="mg">Minas Gerais</option>
                                            <option value="pa">Pará</option>
                                            <option value="pb">Paraíba</option>
                                            <option value="pr">Paraná</option>
                                            <option value="pe">Pernambuco</option>
                                            <option value="pi">Piauí</option>
                                            <option value="rj">Rio de Janeiro</option>
                                            <option value="rn">Rio Grande do Norte</option>
                                            <option value="ro">Rondônia</option>
                                            <option value="rs">Rio Grande do Sul</option>
                                            <option value="rr">Roraima</option>
                                            <option value="sc">Santa Catarina</option>
                                            <option value="se">Sergipe</option>
                                            <option value="sp">São Paulo</option>
                                            <option value="to">Tocantins</option>
                                        </select>
                                        <label htmlFor="floatingSelectEstado">Estado</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row my-3">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-floating mb-3">
                                        <input type="email" onChange={(e) => handle(e)} value={data.email}
                                            className="form-control" id="email" placeholder="Seu e-mail" />
                                        <label htmlFor="floatingInputEmail">Seu e-mail</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="password" onChange={(e) => handle(e)} value={data.senha}
                                            className="form-control" id="senha" placeholder="Sua senha" />
                                        <label htmlFor="floatingInputSenha">Sua senha</label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="password" onChange={(e) => handle(e)} value={data.confsenha}
                                            className="form-control" id="confsenha" placeholder="Confirme senha" />
                                        <label htmlFor="floatingInputConfirmaSenha">Confirme senha</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer mt-1 ">
                                <div className="row input-heigth mb-2">
                                    <div className="container d-flex justify-content-center mb-2 mt-2">
                                        <button className={Styles.btregistrar} >Cadastrar</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="card-footer mb-4">
                        <div className="link col-lg-12 trespacamento">
                            <br /><br />Já é cadastrado? <a href="/Login" className="mark"> Faça Login</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* <CatServico /> */}
            <Footer />
        </div>
    )
} export default FormUser;
