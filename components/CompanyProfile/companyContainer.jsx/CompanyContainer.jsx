import React from 'react'
import './CompanyContainer.css'
import Image from 'next/image'

function CompanyContainer() {
    return (
        <div className="companyContainer">

                        <div className="separatorBlack">

                            <Image
                                src="/separatorBlack.svg"
                                alt="Picture of the author"
                                width={255}
                                height={18}
                            />

                        </div>

                        <div className="companyIsi">
                            <h2 className="companyIsiHeader">ABOUT US</h2>

                            <p>Established in Jakarta, Indonesia in 2018, PT. Panca Ekawira Sanjaya was founded by professionals with years of experience in supplying and distributing building materials and providing construction services.
                            </p>
                            
                            <p>
                            The basic function of the company is as a source in distributing building materials and construction services throughout Indonesia.
                            The essence of our business today is to assist clients in the supply of goods and providing the best solution on the needs of the products to  be used and ensure the products we supply are the best in their field.
                            Our experience team is committed to working responsibly to meet the  \needs of clients with reliable experience gained from our principles.
                            </p>

                            <div className="separatorBlack">
                                <Image
                                src="/separatorBlack.svg"
                                alt="Picture of the author"
                                width={255}
                                height={18}
                                />
                            </div>

                            {/* <div className="companyBusiness">
                                <h1>OUR BUSINESS PARTNERS</h1>


                                <Image
                                    src="/alderon.svg"
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}
                                />
                                <Image
                                    src="/mortarUtama.svg"
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                />
                                <Image
                                    src="/weber.svg"
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}
                                />
                                <Image
                                    src="/milanEcowood.svg"
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}
                                />
                            </div> */}
                        </div>
                </div>
    )
}

export default CompanyContainer
