import TopLogin from '../components/TopLogin';
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'
import Styles from "../styles/Show.module.css"
import { Button } from "reactstrap"
import axios from "axios";
import { useState } from "react";
 
function showPet() {
    const url = "http://localhost:8080/animais/";
    
    const [animais,setAnimais] = useState([])
    
axios.get(url,{}).then((res)=>{
    
    setAnimais(res.data)
    console.log(animais)
 
}
)
    return (
        <>
            <TopLogin />
            <div className={Styles.animal}>
                {animais.map(animal => (
                    <div className="mb-5">
                        {/* linha 1 */}
                        <div >
                            {/* coluna 1*/}
                            <div >
                                <img src={animal.imagem} className={Styles.imagem} alt="" />
                                <div className="m-0 p-0">
                                    <div className="fs-3 fw-bold descricaotexto text-xl">
                                        <label>{animal.nome}</label>
                                    </div>
                                    {/* localidade*/}
                                    <ul className="p-0 m-0">
                                        <li>
                                            <strong className="reset">raca: </strong>
                                            {animal.raca}
                                        </li>
                                    </ul>
 
                                    {/* L2 botoes */}
                                    <div className="row">
                                        {/* L2/C1 */}
                                        <div className="col-sm-1 col-lg-5">
                                            <a href="/adotar"> <button type="button" className="mdcoracao button button-1" id="">Adotar</button></a>
                                            {/* <Button className="botoes" size="sm" href="">Mais</Button> */}
                                        </div>
                                        {/* L2/C2 */}
                                        <div className="col-sm-1 col-lg-5">
                                            <a href={`/descricao?id=${animal.id}`}> <button type="button" className="mdpegada button button-1" id="">saber mais</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
 
            <Footer />
        </>
    )
}
 
export default showPet