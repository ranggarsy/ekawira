import React from 'react'
import Head from 'next/head'
import BusinessPartners from '../../components/businessPartners/BusinessPartners'
import CompanyContainer from '../../components/CompanyProfile/companyContainer.jsx/CompanyContainer'
import CompanyHeader from '../../components/CompanyProfile/companyHeader/CompanyHeader'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'


function CompanyProfile() {
    return (
        <div className="companyProfile">

        <Head>
            <title>PancaEkawiraSanjaya</title>
            <link rel="icon" href="/iconBrand.svg" />
            <meta name="Company Profile" content=""/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
        </Head>

           <Navbar/>

            <div className="companyHeader">
                <CompanyHeader/>
            </div>

            <div className="companyContainer">
                <CompanyContainer/>
            </div>

            <div className="businessPartners">
                <BusinessPartners/>
            </div>

           <Footer/>
        </div>
           

    )
}

export default CompanyProfile
