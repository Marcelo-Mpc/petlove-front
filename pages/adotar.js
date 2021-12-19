import React from 'react';
import Footer from '../components/Footer'
import TopLogin from '../components/TopLogin';
import Styles from "../styles/User.module.css"
import axios, { Axios } from "axios";
import { useState } from "react";

function Adotar() {

    const url = "http://localhost:8080/adotar"
    const [data, setData] = useState({
       qtnAnimail:"",
       motivo:"",
       qtnmoradores:"",
       tipoMoradia:"",
       crianca:"",
       ficarsozinho:"",
       rendimento:"",
       idAnimal:"",
       idUser:""

    });
    function submit(e) {
        e.preventDefault();

        axios
            .post(url, {
                qtnAnimail:data.qtnAnimail,
                motivo:data.motivo,
                qtnmoradores:data.qtnmoradores,
                tipoMoradia:data.tipoMoradia,
                crianca:data.crianca,
                ficarsozinho:data.ficarsozinho,
                rendimento:data.rendimento,
                idAnimal:data.idAnimal,
                idUser:data.idUser
            })
            .then((res) => {
                console.log(res.data);

                if (res.data) {
                    window.location.href = "http://localhost:3000/inicio";
                } else {
                    alert("Erro ao cadastrar Pet");
                }
            });
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return (
        <>
            <TopLogin/>
            <div className="container corpo mb-4 mt-4">

                <div className="card">
                    <div className="card-header text-center" id={Styles.h1}>
                        <h2 className='f-color-1'>Questionário</h2>
                    </div>
                    <div className="card-body" id={Styles.corpo}>

                        <div className='text-center' id={Styles.h1, Styles.h2}><p className={Styles.text}>Responda o questionário de adoção:</p></div>

                        <form onSubmit={(e) => submit(e)} id="adotar" >

                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="qtnAnimail" onChange={(e) => handle(e)}
                                            value={data.qtnAnimail}
                                            placeholder="1. Quantos animais você tem em casa?"
                                        />
                                        <label htmlFor="floatingInputNome">1. Quantos animais você tem em casa?</label>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-8">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="motivo" onChange={(e) => handle(e)}
                                            value={data.motivo}
                                            placeholder="2. Qual o motivo da adoção?"
                                        />
                                        <label htmlFor="floatingInputNome">2. Qual o motivo da adoção?</label>
                                    </div>
                                </div>
                            </div>

                            {/* linha 2 */}
                            <div className="row">

                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="qtnmoradores" onChange={(e) => handle(e)}
                                            value={data.qtnmoradores}
                                            placeholder="3. Quantas pessoas moram na casa?"
                                        />
                                        <label htmlFor="floatingInputNome">3. Quantas pessoas moram na casa?</label>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="tipoMoradia" onChange={(e) => handle(e)}
                                            value={data.tipoMoradia}
                                            placeholder="4. Qual a moradia (casa, apartamento, chácara etc.)? "
                                        />
                                        <label htmlFor="floatingInputNome">4. Qual moradia (casa, ap, chácara etc.)? </label>
                                    </div>
                                </div>


                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="crianca" onChange={(e) => handle(e)}
                                            value={data.crianca}
                                            placeholder="5. Tem criança em casa?"
                                        />
                                        <label htmlFor="floatingInputNome">5. Tem criança em casa?</label>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="ficarsozinho" onChange={(e) => handle(e)}
                                            value={data.ficarsozinho}
                                            placeholder="6. O animal vai ficar sozinho durante o dia? por quanto tempo?"
                                        />
                                        <label htmlFor="floatingInputNome">6. O animal vai ficar sozinho durante o dia? por quanto tempo?</label>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="rendimento" onChange={(e) => handle(e)}
                                            value={data.rendimento}
                                            placeholder="7. Qual a sua média de rendimento mensal? "
                                        />
                                        <label htmlFor="floatingInputNome">7. Qual a sua média de rendimento mensal? </label>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-lg-6 d-flex justify-content-center input-heigth">
                                        <button className={Styles.btregistrar} >Voltar</button>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-center input-heigth">
                                        <button className={Styles.btregistrar} >Enviar Fomulário</button>
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}
export default Adotar;