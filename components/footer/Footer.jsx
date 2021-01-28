import './Footer.module.css'
import Image from 'next/image'



function Footer() {
    return (
    <>
        <div className="footer">
            <div className="bluebg">
                <div className="footerKiri">
                    <h3 className="PTpancaFooterText">PT. PANCA EKAWIRA SANJAYA</h3>
                    <h4 className="textFooter">The CEO Building 12th floor  Jl. TB. Simatupang 
                        No. 18 C Jakarta Selatan, 12430 
                    </h4>
                   

                   

                    <div className="kontakPT">
                        <div className="contactMeContainer">
                            <i className="fas fa-phone-alt telLogo"></i>
                            <h3>TELEPON</h3>
                        </div>
                        <div className="contactMeContainer">
                            <i className="far fa-envelope"></i>
                            <h3>CONTACT US</h3>
                        </div>
                        <div className="contactMeContainer">
                            <i className="fab fa-whatsapp"></i>
                            <h3>WHATSAPP</h3>
                        </div>
                        <div className="contactMeContainer">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>LOCATION</h3>
                        </div>
                    </div>
                </div>
                <div className="footerKanan">
                    <div className="footerProduct">
                        <h3>PRODUCT</h3>
                        <h4>Milan Ecowood</h4>
                        <h4>Alderon</h4>
                    </div>
                    <div className="footerProject">
                        <h3>PROJECT</h3>
                        <h4>Cluster Caelus, Greenwich</h4>
                        <h4>Cluster Water Terrace</h4>
                        <h4>The Branz Simatupang</h4>
                        <h4>Pabrik Difi Medika </h4>
                    </div>
                    <div className="footerServices">
                        <h3>SERVICES</h3>
                        <h4>Building</h4>
                        <h4>Supplying</h4>
                        <h4>Distributing</h4>
                        <h4>Construction Services</h4>
                    </div>

                </div>
                </div>
           
            
        

        </div>
        <div className="footerBawah">
               
            <h3 className="footerTitle">© 2021 Panca Ekawira Sanjaya. All rights reserved.</h3>
        </div>  

        <style jsx>
            {
                `
                    .footer{
                        background-image: url('./Assets/footerbg.jpg');
                        background-position:center;
                    }
                `
            }
        </style>
    </>
    )
}

export default Footer
