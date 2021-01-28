import Image from 'next/image'
import "./navbar.module.css"
import { useState } from 'react'
import TabMenu from '../tabMenu/TabMenu'

function Navbar() {
    const [showModal,setShowModal] = useState(false)
    return (
        <>
    <TabMenu show={showModal}/>

        <nav className="navbar" style={{
            opacity : showModal ? 1 : 0.9
        }}>
            <div className="navLeft">
            <i className="fas fa-bars menuNav" onClick={()=>{
        setShowModal(!showModal)
    }}      ></i>
                <div className="imgGroups" onClick={()=>{
                    window.location.href = "/"
                }}>
                <Image
                    src="/Assets/Brand.png"
                    alt="Picture of the author"
                    width="65"
                    height="65"
                    />
                    <div className="textbrand">
                        <h3 className="textbrand1">PANCA EKAWIRA</h3>
                        <h3 className="textbrand2">SANJAYA</h3>
                    </div> 
                </div>
                <i className="fas fa-search searchIconPhone"></i>

            </div>

            <div className="navRight">
                <h3>COMPANY PROFILE</h3>
                <h3>PRODUCT</h3>
                <h3>PROJECT</h3>
                <h3>CONTACT</h3>
                <a href="/ecommplan"><h3>E-COMM PLAN</h3></a>
                <i className="fas fa-search searchIconNoteBook"></i>

                    <form className="navSearch">
                        <input type="text" className="navInput" placeholder="search..." />
                        <div className="icnContainer">
                        <span className="material-icons">search</span>
                        </div>
                        
                    </form>

            </div>
        </nav>

        </>

    )
}
export default Navbar
