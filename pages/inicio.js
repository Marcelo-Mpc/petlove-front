import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';

import Top from '../components/Top';
import Banner from '../components/Banner'
import Oqf from '../components/Oquefazer'
import CardAdocao from '../components/CardAdocao'
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
        <div className="container">
    <div className="row">

      {/* imagem */}
      <div className="col-sm-4 col-lg-2">
        <Image src="/logo.png" width={169} height={91} />
      </div>

      {/* menu */}
      <div className="col-sm-4 col-lg-6">
        <Nav className="topnav">
          <div className="col-sm-8 col-lg-2">
            <NavItem className="navmark">
              <NavLink className="nav" href="/" >Home</NavLink>
            </NavItem>
          </div>
          <div className="col-sm-8 col-lg-2">
            <NavItem className="navmark">
              <NavLink className="nav" href="/quemsomos">Sobre</NavLink>
            </NavItem>
          </div>
          <div className="col-sm-8 col-lg-3">
            <NavItem className="navmark">
              <NavLink className="nav" href="/cuidados">Pet Care</NavLink>
            </NavItem>
          </div>
          <div className="col-sm-8 col-lg-2">
            <NavItem className="navmark">
              <NavLink className="nav" href="/Contato">Contato</NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>

      {/* botoes */}
      
    </div>
  </div>
        <Banner/>
        <Oqf/>
        <CardAdocao/>
        {/* <CatServico/>
        <Servicos/> */}
        <Footer/>
    </div>
  )
}