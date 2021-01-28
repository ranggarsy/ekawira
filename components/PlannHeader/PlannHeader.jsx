import './PlannHeader.css'
import Image from 'next/image'


const PlannHeader=()=>{
    return(
        <div className="headerImgContainerPlann">
        <div className="heroTextPlann">
        <h1>Ecommerce Plann</h1>
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

export default PlannHeader