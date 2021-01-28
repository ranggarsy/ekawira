import React from 'react'
import './CompanyHeader.css'
import Image from 'next/image'

function CompanyHeader() {
    return (
        <div className="companyHeader">
            <div className="darkEffect">
                <div className="companyTextHeader">
                    <h1>COMPANY PROFILE</h1>
                </div>
                </div>
                    <Image
                    src="/Assets/imgCompany.jpg"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"               
                    />
            
        </div>
    )
}

export default CompanyHeader
