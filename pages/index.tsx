import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Cta3 from '../comps/showoff'
import Section2 from '../comps/ComoComprar'
import Contactolink from '../comps/contactolink'
import Promociones from '../comps/promociones'
import Barrita from '../comps/barritatop' 
import FAQS from '../comps/FAQS'

export default function Home() {
  return (
    <div>
      <div className="bg-gray-50">
        <Barrita></Barrita>
        <Cta3></Cta3>
        <Promociones></Promociones>
        <Section2></Section2>
        <Contactolink></Contactolink>
        <FAQS></FAQS>
      </div>
    </div>
    )
}