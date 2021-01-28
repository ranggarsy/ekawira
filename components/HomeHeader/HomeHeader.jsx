import './HomeHeader.css'
import Image from 'next/image'


const HomeHeader = () =>{
    return(
        <div className="headerImgContainer">
        <div className="heroText">
        <h1>PANCA EKAWIRA SANJAYA</h1>
        <h3>Distribution Company in Indonesia
        With Building Material</h3>
        </div>
        <Image
            src="/Assets/hero.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"                
        />
        </div>
    )
}

export default HomeHeader