import './HomeHeader.css'
import Image from 'next/image'


const HomeHeader = () =>{
    return(
        <div className="headerImgContainer">
        <div className="heroText">
        <h1>YOUR BUILD SOLUTION</h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem.</h3>
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