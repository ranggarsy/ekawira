import React from 'react'
import './ProductHeader.css'
import Image from 'next/image'

function ProductHeader() {
    return (
        <div className="productHeader">
        <div className="darkEffect">
            <div className="productTextHeader">
                <h1>PRODUCT</h1>
            </div>
        </div>
                <Image
                src="/Assets/imgProduct.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"               
                />
        
    </div>
    )
}

export default ProductHeader
