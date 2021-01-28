import React from 'react'
import './ProductCard.css'
import Image from 'next/image'

function ProductCard() {
    return ( <>
        <div className="productCardHeader">
            <h1>OUR PRODUCT</h1>
        <div className="productCard">
            {/* PEMBATAS */}
            <div className="card1">
                <div className="imgCard">
                    <div className="textCard">
                        <h1>HOME SERVICE</h1>
                    </div>
                        <Image
                            src="/Assets/logoPerusahaan/logoWeber.png"
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                </div>
            </div>

            <div className="card1">
                <div className="imgCard">
                    <div className="textCard">
                        <h1>NEW TECH WOOD</h1>
                    </div>
                        <Image
                            src="/Assets/logoPerusahaan/logoMilan.png"
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                </div>
            </div>
            {/* PEMBATAS */}
        </div>

        <div className="productCard">
            {/* PEMBATAS */}
            <div className="card1">
                <div className="imgCard">
                    <div className="textCard">
                        <h1>SHERA BUILD</h1>
                    </div>
                        <Image
                            src="/Assets/logoPerusahaan/logoShera.png"
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                </div>
            </div>

            <div className="card1">
                <div className="imgCard">
                    <div className="textCard">
                        <h1>PALDECO ALUMINIUM</h1>
                    </div>
                        <Image
                            src="/Assets/logoPerusahaan/logoPaldeco.png"
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                </div>
            </div>
            {/* PEMBATAS */}
        </div>


        </div>
    </>
    )
}

export default ProductCard
