import './HomeCard1.css'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'

const HomeCard1 = () =>{

    const [carousel,setCarousel] = useState({
        carousel1 : true,
        carousel2 : false,
        carousel3 : false,
        carousel4 : false
    })

    useEffect(()=>{
        setTimeout(()=>{
            setCarousel({
                carousel2 : true
            })
        }, 10000)

        setTimeout(()=>{
            setCarousel({
                carousel3 : true
            })
        }, 20000)

        setTimeout(()=>{
            setCarousel({
                carousel4 : true
            })
        }, 30000)

        setTimeout(()=>{
            setCarousel({
                carousel1 : true
            })
        }, 40000)

        setTimeout(()=>{
            setCarousel({
                carousel2 : true
            })
        }, 50000)

        setTimeout(()=>{
            setCarousel({
                carousel3 : true
            })
        }, 60000)

        setTimeout(()=>{
            setCarousel({
                carousel4 : true
            })
        }, 70000)

        setTimeout(()=>{
            setCarousel({
                carousel1 : true
            })
        }, 80000)

    },[])

    return(
        <div className="aboutCard">
            {carousel.carousel1 && (
                <>
                <div className="cardLeft">
                <span className="material-icons arrowLeft" onClick={()=>{
                    setCarousel({
                        carousel4 : true
                    })
                }}>
                 keyboard_arrow_left
                </span>
                    <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/project1.JPG"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardRight">
                    <span className="material-icons arrowRight" onClick={()=>{
                        setCarousel({
                            carousel2 : true
                        })
                    }}>
                    keyboard_arrow_right
                    </span>
                    <h1>Cluster Caelus, Greenwich – BSD (128 units)</h1>
                    <p>Pengerjaan : Kisi – Kisi Almunium</p>
                    <p>Material : Almunium</p>
                </div>
                <div className="cardBottom">
                        <div className="buletCardUtama"></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel2 : true
                            })
                        }}></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel3 : true
                            })
                        }}></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel4 : true
                            })
                        }}></div>
                        <div className="blueDecoration"></div>


                </div>
                </>
            )}

                {carousel.carousel2 && (
                <>
                <div className="cardLeft">
                <span className="material-icons arrowLeft" onClick={()=>{setCarousel({
                    carousel1 : true
                })}} >
                 keyboard_arrow_left
                </span>
                    <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/project2.JPG"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardRight">
                    <span className="material-icons arrowRight" onClick={()=>{
                        setCarousel({
                            carousel3 : true
                        })
                    }}>
                    keyboard_arrow_right
                    </span>
                    <h1>Cluster Water Terrace, Grand Wisata (24 units)</h1>
                    <p>Pengerjaan : Kisi – Kisi Almunium</p>
                    <p>Material : Almunium Handal</p>
                </div>
                <div className="cardBottom">
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel1 : true
                            })
                        }}></div>
                        <div className="buletCardUtama"></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel3 : true
                            })
                        }}></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel4 : true
                            })
                        }}></div>
                        <div className="blueDecoration"></div>


                </div>
                </>
            )}

            {carousel.carousel3 && (
                <>
                <div className="cardLeft">
                <span className="material-icons arrowLeft" onClick={()=>{setCarousel({
                    carousel2 : true
                })}} >
                 keyboard_arrow_left
                </span>
                    <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/project3.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardRight">
                    <span class="material-icons arrowRight" onClick={()=>{
                        setCarousel({
                            carousel4 : true
                        })
                    }}>
                    keyboard_arrow_right
                    </span>
                    <h1>The Branz Simatupang</h1>
                    <p>Pengerjaan : Decking outdoor & indoor </p>
                    <p>Product : Milan Ecowood</p>
                </div>
                <div className="cardBottom">
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel1 : true
                            })
                        }}></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel2 : true
                            })
                        }}></div>
                        <div className="buletCardUtama"></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel4 : true
                            })
                        }}></div>
                        <div className="blueDecoration"></div>


                </div>
                </>
            )}

            {carousel.carousel4 && (
                <>
                <div className="cardLeft">
                <span className="material-icons arrowLeft" onClick={()=>{setCarousel({
                    carousel3 : true
                })}} >
                 keyboard_arrow_left
                </span>
                    <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/project4.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardRight">
                    <span className="material-icons arrowRight" onClick={()=>{
                        setCarousel({
                            carousel1 : true
                        })
                    }}>
                    keyboard_arrow_right
                    </span>
                    <h1>Pabrik Difi Medika</h1>
                    <p>Pengerjaan : Atap </p>
                    <p>Product : Alderon</p>
                </div>
                <div className="cardBottom">
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel1 : true
                            })
                        }}></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel2 : true
                            })
                        }}></div>
                        <div className="buletCard" onClick={()=>{
                            setCarousel({
                                carousel3 : true
                            })
                        }}></div>
                        <div className="buletCardUtama"></div>
                        <div className="blueDecoration"></div>


                </div>
                </>
            )}


        </div>
    )
}

export default HomeCard1