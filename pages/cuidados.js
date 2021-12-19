import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Top from '../components/Top';
import BannerCuidado from '../components/BannerCuidado'
import Cuidados from '../components/Cuidados'
import Footer from '../components/Footer'

export default function Cuidado() {
  return (
    <div >
        <Top/>
        <BannerCuidado/>
        <Cuidados/>
        <Footer/>
    </div>
  )
}
