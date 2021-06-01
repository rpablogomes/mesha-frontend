import React from "react";

import Header from './Header'
import Footer from './Footer'


import {
  useParams
} from "react-router-dom"

import data from "../data.json"


function Services() {

  let { service } = useParams()

  const selectedService = window.location.pathname.split('/')[2]

  return (

      <div>
  <Header/>
      <section className="TitulosPaginas">
        <div className="AreaTitulos">
  <h1 className="TituloPagina">SERVIÇOS</h1>
        </div>
      </section>

      <div className="AreaSetaTitulos">
        <div className="SetaTitulos">
          <img src="/images/seta_titulos.png" width="47" height="21" alt=""/>
        </div>
      </div>

      <div className="ServicosFora">
        <section className="Servicos">
          <div className="AreaServicos">
            <div className="ItensPagina">
                  <a className="ItensPaginaAtivo"  href="/services/maintenance"><span style={{fontWeight: selectedService === "maintenance" ? "bold" : "none"}}>Manutenção</span></a>
                  <a className="ItensPaginaAtivo" href="/services/recovery"><span style={{fontWeight: selectedService === "recovery" ? "bold" : "none"}}>Recuperação de Peças</span></a>
                  <a className="ItensPaginaAtivo" href="/services/production"><span style={{fontWeight: selectedService === "production" ? "bold" : "none"}}>Produção</span></a>
                  <a className="ItensPaginaAtivo" href="/services/coating"><span style={{fontWeight: selectedService === "coating" ? "bold" : "none"}}>Revestimento</span></a>
            </div>

            <div className="ConteudoPagina">
              <h2>{service}</h2>

              <div className="ImgConteudoPagina">
                {/* <ul id="demo1"> */}

                    <img className="Foto_Fabrica" alt="." src={`/images/${service}.jpg`} //picture
                     />
                    <div className="DescricaoFoto">{data.services[service]}</div> 

                {/* </ul> */}
              </div>

              <div className="TextoItensPagina"></div>
            </div>

            <div className="clear"></div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
