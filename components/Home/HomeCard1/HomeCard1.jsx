import './HomeCard1.css'
import Image from 'next/image'

const HomeCard1 = () =>{
    return(
        <div className="aboutCard">
                <div className="cardLeft">
                    <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/rumah1.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardRight">
                    <h1>Lorem Ipsum Dolor</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
                </div>
                <div className="cardBottom">
                        <div className="buletCardUtama"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="blueDecoration"></div>


                </div>
            </div>
    )
}

export default HomeCard1