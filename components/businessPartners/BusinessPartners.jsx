import React from 'react'
import Image from 'next/image'
import './BusinessPartners.css'

function BusinessPartners() {
    return (
        <div className="businessPartners">
           
                <h1 className="businessPartnersText">OUR BUSINESS PARTNERS</h1>
            <div className="imgContainerBusiness">
                <div className="imgContainerBottom">
                    <Image
                        src="/Assets/logoPerusahaan/logoWeber.png"
                        alt="Picture of the author"
                        width="400px"
                        height="400px"
                    />
                    <Image
                        src="/Assets/logoPerusahaan/logoMilan.png"
                        alt="Picture of the author"
                        width="400px"
                        height="400px"

                    />
                    <Image
                        src="/Assets/logoPerusahaan/logoShera.png"
                        alt="Picture of the author"
                        width="400px"
                        height="400px"

                    />
                    <Image
                        src="/Assets/logoPerusahaan/logoPaldeco.png"
                        alt="Picture of the auth"
                        width="400px"
                        height="400px"

                    />

                </div>
            </div>
        </div>
    )
}

export default BusinessPartners
