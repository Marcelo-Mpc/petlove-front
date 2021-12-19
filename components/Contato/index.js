import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from "../../styles/Contato.module.css"


const Contato = () => {
    return (
        <div className="container body mb-5 mt-5">
            <div className="row">
                <small className={Styles.small}>Entre com sua mensagem (opcional) e clique "Enviar"</small>
                <div class="wrapper centered corpocarta col-sm-8 col-lg-12">
                    <article className={Styles.letter}>
                        <div className={Styles.side}>
                            <h1 className={Styles.h1}>Contate-Nos</h1>
                            <div className="col-sm-8 mt-5 mb-3">
                                <textarea placeholder="Sua mensagem" className={Styles.textarea}></textarea>
                            </div>
                        </div>
                        <div className={Styles.side}>
                            <div className="col-sm-8 col-md-5 mt-5">
                                <input type='text' placeholder='Seu nome' className={Styles.input}></input>
                            </div>

                            <div className="col-sm-8 col-g-md-5 mt-2 mb-3">
                                <input type="email" placeholder="Seu email" className={Styles.input}></input>
                            </div>
                            <div>
                                <button id="sendLetter" className={Styles.button}>Enviar</button>
                            </div>
                        </div>
                    </article>
                    <div className={Styles.envelope, Styles.front}></div>
                    <div className={Styles.envelope, Styles.back}></div>
                </div>
                <p class="result-message centered">Obrigado por sua mensagem</p>
            </div>
        </div>
    )
    function addClass() {
        document.body.classList.add("sent");
    }
    sendLetter.addEventListener("click", addClass);
}

export default Contato