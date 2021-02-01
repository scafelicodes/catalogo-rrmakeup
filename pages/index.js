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

  <Container>
  <Image
  src="/logo-rr.png"
  alt="RR MakeUp"
  width="150"
  height="150"

   />
   </Container>
</header>




<section className="hero">
  <Container>
  
    <div className="content">
      <h3>Catálogo</h3>
      <h1>RR MakeUp</h1>
      <p>Para consultar a disponibilidade, <b>clique em comprar</b>. Você será redirecionada para uma de nossas atendentes.</p>

      <ul>
        <li><a href="https://www.instagram.com/rrmakeup.ofc/"><i class="fab fa-instagram" target="_blank"></i>Instagram </a></li>
        <li><a href="#"><i class="fab fa-whatsapp" target="_blank"></i> WhatsApp</a></li>
        <li><a href="https://goo.gl/maps/iPZZuzpyfrKhpoE39" target="_blank"><i class="fas fa-map-marker-alt"></i> Como chegar</a></li>
      </ul>

    </div>

    </Container> 
</section>


<section className="catalog">

<Container>

<Row>
  <Col xs={6} md={4} xl={3}>
   <div className="product">
     
     
   <Image
  src="/products/001.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />
     <h3>Redutor de Poros - Max Love</h3>
     <p className="price">R$10</p>
     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>


  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/002.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$35</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/003.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$12</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/004.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/005.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/006.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/007.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/008.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/009.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/010.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/011.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/012.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/013.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/014.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/015.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/016.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/017.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/018.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/019.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/020.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/021.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/022.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/023.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/024.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/025.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/026.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/027.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/028.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/029.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/030.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/031.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/032.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/033.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/034.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/035.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/036.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/037.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/038.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/039.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/040.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/041.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/042.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/043.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/044.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/045.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/046.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/047.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/048.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/049.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/050.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/051.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/052.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/053.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/054.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/055.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/056.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
   <Image
  src="/products/057.jpg"
  alt="RR MakeUp"
  width="400"
  height="500"

   />     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>


</Row>

</Container>

</section>

    

      <footer>
        <Container>

          <p>R. Alberto Tôrres, 5 - Centro, Itaboraí - RJ</p>

            <a
              href="https://scafeli.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
            Feito com ❤️ por Scafeli
            
          </a>

          </Container>
      </footer>

    </>
  )
}
