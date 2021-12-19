import Styles from "../styles/User.module.css";
import React from "react";
import { useState } from "react";
import TopLogin from "../components/TopLogin";
import Footer from "../components/Footer";
import axios from "axios";

function FormPet() {

    const url = "http://localhost:8080/animais";

    const [data, setData] = useState({
        nome: "",
        idade: "",
        tempo: "",
        raca: "",
        caracteristicas: "",
        especie: "",
        sexo: "",
        tamanho: "",
        comportamento: "",
        imagem: "",
        user: "1",
        status: "D"
    });

    function submit(e) {
        e.preventDefault();

        axios
            .post(url, {
                nome: data.nome,
                idade: data.idade,
                tempo: data.tempo,
                raca: data.raca,
                caracteristicas: data.caracteristicas,
                especie: data.especie,
                sexo: data.sexo,
                tamanho: data.porte,
                comportamento: data.comportamento,
                imagem: data.imagem,
                user:data.user,
                status: data.status
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

    const handleImage = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setData((old) => ({ ...old, imagem: reader.result }));
        };
    };
    var status = true
    if (status) {
        return (
            <div>
                <TopLogin />
                <div className="container corpoform mb-5 mt-5">
                    <div className="card corpoform" id={Styles.corpo}>
                        <div className="card-header text-center" id={Styles.h1}>
                            <h2 className="h2 mt-2" id={Styles.pad}>
                                Adicione seu pet para adoção
                            </h2>
                        </div>
                        {/* linha da imagem */}
                        <div className="row mt-3 ajustarconteudo card-header d-flex justify-content-center">
                            <div className="col-lg-12 ms-4 ajustarconteudo border me-4" id={Styles.corpo}>
                                {data.imagem.length > 0 && (
                                    <img
                                        className="previewimg corpoform"
                                        src={data.imagem}
                                        object-fit="contain"
                                        alt="preview"
                                    />
                                )}
                            </div>
                        </div>

                        {/* linha 1 */}
                        {/* formulario */}
                        <div className="text-center" id={(Styles.h1, Styles.h2)}></div>
                        <form
                            onSubmit={(e) => [submit(e), uploadImage]}
                            id="userdados"
                            className="mb-1"
                        >
                            {/* nome */}
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-8">
                                    <div className="form-floating mb-3 mt-3 ms-2">
                                        <input
                                            type="text"
                                            onChange={(e) => handle(e)}
                                            value={data.nome}
                                            className="form-control"
                                            id="nome"
                                            placeholder="Nome do pet"
                                        />
                                        <label htmlFor="floatingInputNome">Nome do pet</label>
                                    </div>
                                </div>

                                {/* idade */}
                                <div className="col-sm-12 col-md-6 col-lg-1">
                                    <div className="form-floating mb-3 mt-3 me-n1 mx-0">
                                        <input
                                            type="text"
                                            onChange={(e) => handle(e)}
                                            value={data.idade}
                                            className="form-control"
                                            id="idade"
                                            placeholder="Idade estimada"
                                        />
                                        <label htmlFor="floatingInputNascimento">Idade</label>
                                    </div>
                                </div>
                                {/* meses / anos */}
                                <div className="col-sm-12 col-md-12 col-lg-2">
                                    <div className="form-floating mt-3 mb-3 me-2 mx-n2">
                                        <select
                                            name="tempo"
                                            className="form-select"
                                            id="tempo"
                                            onChange={(e) => handle(e)}
                                            value={data.tempo}
                                        >
                                            <option value="sel">----</option>
                                            <option value="Meses">Meses</option>
                                            <option value="Anos">Anos</option>
                                        </select>
                                        <label htmlFor="floatingSelectIdade">Meses / Ano</label>
                                    </div>
                                </div>
                            </div>

                            {/* linha 2 */}
                            <div className="row my-3">
                                {/* raça */}
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-floating mb-3 ms-2">
                                        <input
                                            type="text"
                                            onChange={(e) => handle(e)}
                                            value={data.raca}
                                            className="form-control"
                                            id="raca"
                                            placeholder="Raça do pet"
                                        />
                                        <label htmlFor="floatingInputRaca">Raça do pet</label>
                                    </div>
                                </div>

                                {/* caracteristica */}
                                <div className="col-sm-12 col-md-auto col-lg-6">
                                    <div className="form-floating mb-3 me-2">
                                        <input
                                            type="text"
                                            onChange={(e) => handle(e)}
                                            value={data.caracteristicas}
                                            className="form-control"
                                            id="caracteristicas"
                                            placeholder="Características"
                                        />
                                        <label htmlFor="floatingInputCaracteristicas">
                                            Características
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* linha 3 */}
                            {/* L3/C1 especie */}
                            <div className="row my-3">
                                <div className="col-sm-2 col-md-2 col-lg-2">
                                    <div className="form-floating ms-2">
                                        <select
                                            name="Especie"
                                            className="form-select"
                                            id="especie"
                                            onChange={(e) => handle(e)}
                                            value={data.especie}                                    >
                                            <option value="sel">Espécie</option>
                                            <option value="can">Canino</option>
                                            <option value="del">Felino</option>
                                        </select>
                                        <label htmlFor="floatingSelectEspecie">Especie</label>
                                    </div>
                                </div>
                                {/* testaando modificação */}
                                {/*L3/C2 sexo */}
                                <div className="col-sm-12 col-md-12 col-lg-2 col">
                                    <div className="form-floating">
                                        <select
                                            name="Sexo"
                                            className="form-select"
                                            id="sexo"
                                            onChange={(e) => handle(e)}
                                            value={data.sexo}
                                        >
                                            <option value="sel">Sexo</option>
                                            <option value="M">Macho</option>
                                            <option value="F">Fêmea</option>
                                        </select>
                                        <label htmlFor="floatingSelectSexo">Sexo</label>
                                    </div>
                                </div>

                                {/*L3/C3 comportamento */}
                                <div className=" col col-sm-3 col-md-3 col-lg-3">
                                    <div className="form-floating">
                                        <select
                                            name="Comportamento"
                                            className="form-select"
                                            id="comportamento"
                                            onChange={(e) => handle(e)}
                                            value={data.comportamento}
                                        >
                                            <option value="sel">Comportamento</option>
                                            <option value="docil">Dócil</option>
                                            <option value="bravo">Bravo</option>
                                            <option value="bipolar">Bipolar</option>
                                            <option value="desconhecido">Desconhecido</option>
                                        </select>
                                        <label htmlFor="floatingSelectComportamento">
                                            Comportamento
                                        </label>
                                    </div>
                                </div>
                                <div className="porte container col-sm-3 col-md-3 col-lg-4 mt-0">
                                    {/* <label className="ms-5 ">Porte</label> */}
                                    <div className="row mt-5 ms-2">
                                        <div className="col-sm-2">
                                            <label className="">1</label>
                                            <input
                                                className=""
                                                type="radio"
                                                placeholder=""
                                                name="porte"
                                            />
                                        </div>
                                        <div className="col-sm-2 ms-2">
                                            <label className="">2</label>
                                            <input
                                                className=""
                                                type="radio"
                                                placeholder=""
                                                name="porte"
                                            />
                                        </div>
                                        <div className="col-sm-2 ms-3">
                                            <label className="">3</label>
                                            <input
                                                className=""
                                                type="radio"
                                                placeholder=""
                                                name="porte"
                                            />
                                        </div>
                                        <div className="col-sm-2 ms-3">
                                            <label className="">4</label>
                                            <input
                                                className=""
                                                type="radio"
                                                placeholder=""
                                                name="porte"
                                            />
                                        </div>
                                        <div className="col-sm-2 ms-3">
                                            <label className="">5</label>
                                            <input
                                                className=""
                                                type="radio"
                                                placeholder=""
                                                name="porte"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Porte */}
                            {/* <div className="col-sm-12 col-md-auto col-lg-3 col" >
                                <div className="form-floating">
                                    <select name="Porte" className="form-select" id="tamanho" onChange={(e) => handle(e)} value={data.tamanho}>
                                        <option value="sel">Porte</option>
                                        <option value="pequeno">Pequeno</option>
                                        <option value="medio">Médio</option>
                                        <option value="grande">Grande</option>
                                    </select>
                                    <label htmlFor="floatingSelectPorte">Porte</label>
                                </div>
                            </div> */}
                            {/* carregar imagem */}
                            <div className="d-flex justify-content-center mb-4 ">
                                <div className="me-2">
                                    <label
                                        className="ms-3 fw-bold mt-5"
                                        id={Styles.label}
                                        htmlFor="fotoDoPet"
                                    >
                                        Foto do pet
                                    </label>
                                    <input
                                        type="text"
                                        id="imagem"
                                        className="form-control-file"
                                        name="image"
                                        onChange={(e) => handle(e)}
                                        value={data.imagem}
                                    />
                                </div>
                            </div>

                            {/* botao registrar */}
                            <div className="card-footer mt-1 ">
                                <div className="row input-heigth mb-2">
                                    <div className="container d-flex justify-content-center mb-2 mt-2">
                                        <button className={Styles.btregistrar}>Cadastrar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* form end */}
                    </div>
                </div>

                <Footer />
            </div>
        );

    } else {
        return (
            <div>
                {console.log("login nescessario")}

            </div>

        );
    }
}
export default FormPet;
