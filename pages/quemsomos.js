import React from 'react';

import Top from '../components/Top';
import BannerQuemSomos from '../components/BannerQuemSomos'
import QuemSomos from '../components/QuemSomos'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
        <Top/>
        <BannerQuemSomos/>
        <QuemSomos/>
        <Footer/>
    </div>
  )
}
