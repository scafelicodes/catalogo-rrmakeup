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
     <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$10</p>
     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>


  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/Q20200572/kit-batom-vermelhissimo-e-esmalte-vermelherrimo.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$35</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://cdn.ultrafarma.com.br/static/produtos/812188/large-637054456057073563-812188_2.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$12</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://prebel.vteximg.com.br/arquivos/ids/160436-1000-1000/maquillaje-rostro-bases-catrice-base-liquida-hd-046-camel-beige-catrice-f9d7a0-pb0081186-sku_pb0081186_d7b691_1.png?v=637250119365430000" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://cdn.awsli.com.br/600x450/987/987288/produto/36625679/pancake-branco-c973e3e0.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://http2.mlstatic.com/D_NQ_NP_930269-MLB31100276046_062019-O.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://www.luxbel.com.br/imagem/index/26295723/G/kit_omega_3_bell_corpus.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://www.maxvalleshop.com.br/shop/product_images/j/014/higienizador_%28com_fundo%29_500x500__41804_std.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://ae01.alicdn.com/kf/HTB1roIqPFXXXXcRXFXXq6xXFXXXW/229468445/HTB1roIqPFXXXXcRXFXXq6xXFXXXW.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="https://dozlxztiddv53.cloudfront.net/Custom/Content/Products/10/13/1013430_fixador-de-maquiagem-ruby-rose_m1_636727984327085959.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
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
