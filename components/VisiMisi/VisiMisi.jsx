import './VisiMisi.css'
import Image from 'next/image'
import { useState } from 'react'

const Visimisi = () =>{
    const [visi, setVisi] = useState(true)
    return(
        <div className="visiMisi">
        
        {visi ? (
            <>
            <div className="imgContainer">
        <span className="material-icons arrowLeft2" onClick={()=>{
            setVisi(!visi)
        }}>keyboard_arrow_left</span>
        <span className="material-icons arrowRight2" onClick={()=>{
            setVisi(!visi)
        }}>keyboard_arrow_right</span>
        <div className="darkEffect">
            <h1>OUR MISSION</h1>
        <h3>Being the best distributor on providing the best solution for customer by working closely with our suppliers and our customers. We strive to provide an excellent marketing service that is supported by an experienced sales team.</h3>
        </div>
        <Image
            src="/kardus.svg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"                
        />
        
        </div>
            </>
        ) : (
            <>
            <div className="imgContainer">
        <span className="material-icons arrowLeft2" onClick={()=>{
            setVisi(!visi)
        }}>keyboard_arrow_left</span>
        <span className="material-icons arrowRight2" onClick={()=>{
            setVisi(!visi)
        }}>keyboard_arrow_right</span>
        <div className="darkEffect">
            <h1>OUR VISION</h1>
        <h3>To be trusted distribution company in Indonesia with building material as the focus product. </h3>
        </div>
        <Image
            src="/kardus.svg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"                
        />
        
        </div>
            </>
        )}

        </div>
    )
}

export default Visimisi