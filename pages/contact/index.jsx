import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'


const index = () => {
  return (
    <>
      <Layout>
      <ContactHeader />
      <main className="contact">

        <img
          src="/separatorBlack.svg"
          alt="Picture of the author"   
          width="100"   
          style={{marginTop: '50px'}}      
        />

        <ContactForm />

      </main>
      </Layout>
    </>
  )
}

export default index
