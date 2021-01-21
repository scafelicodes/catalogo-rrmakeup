import React from "react";

import "../styles/globals.scss"
import "../styles/main.scss"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (<>

<Head>
  <title>RR MakeUp - Catálogo 2021</title>
</Head>


<header>
  <Image
  src="/logo-rr.png"
  alt="RR MakeUp"
  width="150"
  height="150"

   />
</header>




<section className="hero">

  <Container>
  
    <div className="content">
      <h1><b>RR MakeUp</b> Catálogo 2021</h1>
      <p>Para consultar a disponibilidade, clique no produto desejado. <br></br> Você será redirecionada para uma de nossas atendentes :)</p>
    </div>   

    </Container> 
  
</section>


<section className="catalog">

<Container>

<Row>
  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$10</p>
     <a href="#" className="cta-link">eu quero</a>

   </div>
  </Col>


  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$35</p>

     <a href="#" className="cta-link">eu quero</a>

   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$12</p>

     <a href="#" className="cta-link">eu quero</a>

   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>

  <Col xs={6} md={3}>
   <div className="product">
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link">eu quero</a>
   </div>
  </Col>
</Row>

</Container>

</section>

    

      <footer>

        <div className="container text-center">
          <a
            href="https://scafeli.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feito com ❤️ por Scafeli
            
          </a>
        </div>
      </footer>

    </>
  )
}
