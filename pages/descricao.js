import { useState } from "react";
import Top from '../components/Top';
import Footer from '../components/Footer'
import Styles from "../styles/Show.module.css"
import { Button } from "reactstrap"
import axios from "axios";
import { useRouter } from 'next/router'

function Detalhes() {

    const router = useRouter()
    const { id } = router.query


    const url = "http://localhost:8080/animais/";

    const [animal, setAnimal] = useState([])


    console.log(id)
    axios.get(url + id, {}).then((res) => {
        console.log(res.data)
        setAnimal(res.data)
        console.log(animal)

    }
    )
    return (
        <>
            <Top />
            <div className="container mt-5 mb-5 ">
                <div className="row justify-content-center">
                    <div className="col col-sm-4" id={Styles.petdetalhes}>
                        <div className="row justify-content-center">
                            <img src={animal.imagem} className={Styles.imagem} />
                            <div className="fs-2 fw-bold descricaotexto text-xl mb-2">
                                <p><label >{animal.nome} </label> - <label className="fst-italic fs-5">{animal.local} </label></p>
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className="col-sm-1 col-lg-5 me-3">
                                <a href="adotar" className=""> <button className="mdcoracao button button-1">Adotar</button></a>
                            </div>
                            <div className="col-sm-1 col-lg-5 ms-3">
                                <a href="/showpet" className=""> <button className="smpegada button button-1">Voltar</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-lg-3 ms-4 exibirdetalhes">
                        <div className="row mt-4">
                            <label className=""><strong>Idade:</strong> <spam>{animal.idade} {animal.tempo}</spam></label>
                            <label className=""><strong>Espécie:</strong> <spam>{animal.especie}</spam></label>
                            <label className=""><strong>Raça:</strong> <spam>{animal.raca}</spam></label>
                            <label className=""><strong>Características:</strong> <spam>{animal.caracteristicas}</spam></label>
                            <label className=""><strong>Sexo:</strong> <spam>{animal.sexo}</spam></label>
                            <label className=""><strong>Tamanho:</strong> <spam>{animal.tamanho}</spam></label>
                            <label className=""><strong>Comportamento:</strong> <spam>{animal.comportamento}</spam></label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Detalhes;