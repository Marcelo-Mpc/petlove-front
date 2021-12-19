import Styles from "../../styles/Pet.module.css"
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

function Login() {
    const url = "http://localhost:8080/Login"
    const [data, setData] = useState({
        email: "",
        senha: "",
        teste: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url,
            {
                email: data.email,
                senha: data.senha
            })

            .then(res => {

                console.log(res.data)
                if (res.data !='Email ou senha inválido') {
                    global.localStorage.setItem('token', res.data);
                                     
                    window.location.href = "http://localhost:3000/inicio";
                } else {
                    alert("Email ou senha inválido");
                }
            })

    } function handle(e) {
        data.teste = localStorage.getItem('c');

        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="container paddingbotton" >
            <div className="row align-items-center">
                {/* imagem */}
                <div className="col-sm-8 col-lg-4 tdlog">
                    <img className="imagem" src="/log1.jpg" />
                </div>

                {/* formulario */}
                <div className="col-sm-8 col-md-auto col-lg-6 card-formulario" >
                    <div className="card" >
                        <div className="card-header text-center header">
                            <h2>Entrar</h2>
                        </div>

                        <div className="card-body">
                            <form onSubmit={(e) => submit(e)} id="userdados" >
                                <div className="form-floating mb-3">
                                    <input type="email" onChange={(e) => handle(e)} value={data.email}
                                        className="form-control" id="email" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputEmail">Seu e-mail</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" onChange={(e) => handle(e)} value={data.senha}
                                        className="form-control" id="senha" placeholder="Sua senha" />
                                    <label htmlFor="floatingPassword">Sua senha</label>
                                </div>

                                <div className="col-sm-8 col-lg-12 borderteste">
                                    <button type="submit" className="btvejamais lg">Entrar</button>
                                </div>
                            </form>
                        </div>

                        <div className="mb-3 form-check d-flex justify-content-center" >
                            <input type="checkbox" id="exampleCheck1" className="form-check-input" id="exampleCheck1" />
                            <label for="exampleCheck1" className="form-check-label">Mantenha conectado</label>
                        </div>
                        <div className="card-footer ">

                            <div className=" link col-lg-12">
                                <br /><br />Ainda não tem conta? <a href="/cadastrouser" className="mark"> Cadastre-se</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};


export default Login;

