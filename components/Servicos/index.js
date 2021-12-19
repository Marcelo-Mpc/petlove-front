import React from 'react'

const Servicos = () => {

    <>
    // <div className="flex align-items-center ">
    //     <section className="flex-column align-items-center ">
    //         <header className="mb-8">
    //             <div className="mb-24">
    //                 <img src="https://www.petlove.com.br/static/uploads/banner_image/image/27868/Hospedagem.png" alt="Representação do serviço de hospedagem da &quot;dog hero&quot;. Imagem de um cachorrinho dentro de uma casa para pets. " />
    //             </div>
    //             <h3 className="font-16 font-bold mb-8">
    //                 Hospedagem
    //             </h3> 
    //             <p className=" mb-24">
    //                 O hotel que seu cãozinho merece: um lar como o seu.
    //             </p>
    //         </header>
    //         <a href="https://www.doghero.com.br/?utm_source=Petlove&amp;utm_medium=home&amp;utm_campaign=booking_host" className="btn mb-8 w-100" aria-label="Ir para a página de hospedagem">
    //             <span >
    //                 Agendar
    //             </span>
    //         </a>
    //         <a href="https://www.petlove.com.br/servicos/hospedagem" className="text-btn mb-12 w-100" aria-label="Saiba mais sobre hospedagem em casa para pets">
    //             <span >
    //                 Saiba Mais
    //             </span>
    //         </a>
    //     </section>
    //     <section className="flex-column align-items-center doghero-service">
    //         <header className="mb-8">
    //             <div className="mb-24">
    //                 <img src="https://www.petlove.com.br/static/uploads/banner_image/image/27949/PlanoDeSaude.png" alt="Representação do serviço de plano de saúde da &quot;dog hero&quot;. Imagem de uma mulher sorrindo abracada com seu gatinho." />
    //             </div>
    //             <h3 className="font-16 font-bold mb-8">
    //                 Plano de Saúde
    //             </h3>
    //             <p className=" mb-24">
    //                 Já pensou em dar um plano de saúde para o seu pet?
    //             </p>
    //         </header>
    //         <a href="https://vetsmartbr.typeform.com/to/QeT0rjBl?typeform-source=home-petlove" className="btn mb-8 w-100" aria-label="Ir para a página de plano de saúde para seu pet.">
    //             <span >
    //                 Contratar
    //             </span>
    //         </a>
    //         <a href="https://www.petlove.com.br/portopet" className="text-btn mb-12 " aria-label="Saiba mais sobre o serviço de plano de saúde">
    //             <span >
    //                 Saiba Mais
    //             </span>
    //         </a>
    //     </section>
    //     <section className="flex-column align-items-center">
    //         <header className="mb-8">
    //             <div className="mb-24">
    //                 <img src="https://www.petlove.com.br/static/uploads/banner_image/image/27871/Veterinaria.png" alt="Representação do serviço veterinário da &quot;dog hero&quot;. Imagem de uma veterinária realizando a consulta de um cachorrinho." />
    //             </div>
    //             <h3 className="font-16 font-bold mb-8">
    //                 Veterinário
    //             </h3>
    //             <p className=" mb-24">
    //                 Receba, em casa, o cuidado que seu pet merece!
    //             </p>
    //         </header>
    //         <a href="https://www.doghero.com.br/vet/book?service=consultas%20veterinarias?utm_source=Petlove&amp;utm_medium=home&amp;utm_campaign=booking_vet" className="btn mb-8 w-100" aria-label="Ir para a página de veterinário">
    //             <span>
    //                 Agendar
    //             </span>
    //         </a>
    //         <a href="https://www.petlove.com.br/servicos/veterinario-domiciliar" className="text-btn mb-12 " aria-label="Saiba mais sobre o serviço de veterinário">
    //             <span >
    //             Saiba Mais
    //         </span>
    //         </a>
    //     </section>
    //     <section className="flex-column align-items-center doghero-service">
    //         <header className="mb-8">
    //             <div className="mb-24">
    //                 <img src="https://www.petlove.com.br/static/uploads/banner_image/image/27870/petSitter.png" alt="Representação do serviço  de pet sitter da &quot;dog hero&quot;. Imagem de um gatinho recebendo um petisco." />
    //             </div>
    //             <h3 className="font-16 font-bold mb-8">
    //                 Pet Sitter
    //             </h3>
    //             <p className=" mb-24">
    //                 Um herói vai até a sua casa para cuidar do seu pet.
    //             </p>
    //         </header>
    //         <a href="https://www.doghero.com.br/pet-sitter?utm_source=Petlove&amp;utm_medium=home&amp;utm_campaign=booking_sitter" className="btn mb-8 " aria-label="Ir para a página de pet sitter">
    //             <span >
    //                 Agendar
    //             </span>
    //         </a>
    //         <a href="https://www.petlove.com.br/servicos/pet-sitter" className="text-btn mb-12 " aria-label="Saiba mais sobre o serviço de pet sitter">
    //             <span>
    //             Saiba Mais
    //         </span>
    //         </a>
    //     </section>
    //     <section className="flex-column align-items-center ">
    //         <header className="mb-8">
    //             <div className="mb-24">
    //                 <img src="https://www.petlove.com.br/static/uploads/banner_image/image/27869/passeador.png" alt="Representação do serviço de passeador da &quot;dog hero&quot;. Imagem de um cachorrinho na coleira olhando para quem esta passeando com ele." />
    //             </div>
    //             <h3 className="font-16 font-bold mb-8">
    //                 Passeador
    //             </h3>
    //             <p className=" mb-24">
    //                 Passeios de 30 ou 60 min para seu pet gastar energia.
    //             </p>
    //         </header>
    //         <a href="https://www.doghero.com.br/dog-walker/book?utm_source=Petlove&amp;utm_medium=home&amp;utm_campaign=booking_dog-walker" className="btn mb-8 w-100" aria-label="Ir para a página de passeador">
    //             <span >
    //                 Agendar
    //             </span></a>
    //         <a href="https://www.petlove.com.br/servicos/passeio" className="text-btn mb-12 " aria-label="Saiba mais sobre o serviço de passeador">

    //             <span >
    //                 Saiba Mais
    //             </span>
    //         </a>
    //     </section>
    //     <section className="flex-column align-items-center ">
    //         <header className="mb-8">
    //             <div className="mb-24">
    //                 <img src="https://www.petlove.com.br/static/uploads/banner_image/image/27867/creche.png" alt="Representação do serviço de creche da &quot;dog hero&quot;. Imagem de um cachorrinho com o rosto encostado em outro cachorrinho." />

    //             </div>
    //             <h3 className="font-16 font-bold mb-8">
    //                 Creche
    //             </h3>
    //             <p className=" mb-24">Não deixe seu cão sozinho em casa enquanto trabalha!</p>
    //         </header>
    //         <a href="https://www.doghero.com.br/creche-para-cachorro/sp?utm_source=Petlove&amp;utm_medium=home&amp;utm_campaign=booking_daycare " className="btn mb-8 btn--full" aria-label="Ir para a página de creche">
    //             <span >
    //                 Agendar
    //             </span>
    //         </a>
    //         <a href="https://www.petlove.com.br/servicos/creche-para-cachorro" class="text-btn mb-12 " aria-label="Saiba mais sobre o serviço de creche">
    //             <span >
    //                 Saiba Mais
    //             </span>
    //         </a>
    //     </section>
    // </div>
    </>
}
export default Servicos