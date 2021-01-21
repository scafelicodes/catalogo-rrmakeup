import React from "react";

import "../styles/globals.scss"
import "../styles/main.scss"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (<>

<Head>
  <title>RR MakeUp - Catálogo 2021</title>
</Head>


<header>
  <h1 id="logo">Catálogo</h1>
</header>

<section className="hero">
  <div className="container">
    <div className="content">
      <h1>RR MakeUp - Catálogo 2021</h1>
      <p></p>
    </div>    
  </div>
</section>


<section id="catalog">

<div className="container">

      <h2>Nossos produtos</h2>
      <table id="data-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="product">
              <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
            </td>
            <td class="description">BASE HD BEGE 02 LÍQUIDA YES!</td>
            <td class="value">R$ 15</td>
          </tr>

          <tr>
            <td class="product">
              <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
            </td>
            <td class="description">BASE HD BEGE 02 LÍQUIDA YES!</td>
            <td class="value">R$ 15</td>
          </tr>

          <tr>
            <td class="product">
              <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
            </td>
            <td class="description">BASE HD BEGE 02 LÍQUIDA YES!</td>
            <td class="value">R$ 15</td>
          </tr>


          <tr>
            <td class="product">
              <img src="https://images.tcdn.com.br/img/img_prod/556508/base_hd_bege_02_liquida_yes_make_up_yes_cosmetics_749_1_20190116131304.png" />
            </td>
            <td class="description">BASE HD BEGE 02 LÍQUIDA YES!</td>
            <td class="value">R$ 15</td>
          </tr>
          
        </tbody>
      </table>

      </div>

    </section>


    

      <footer>

        <div className="container text-center">
          <a
            href="https://scafeli.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ by Scafeli
            
          </a>
        </div>
      </footer>
    </>
  )
}
