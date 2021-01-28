import './BusinessPartner.css'
import Image from 'next/image'

const BusinessPartner = () =>{
    return(
        <div className="businessPartners">
            <h1>OUR BUSINESS PARTNERS</h1>
        <div className="imgContainerBusiness">
        <div className="imgContainerBottom">
        <div className="gambarBawah">
        <Image
            src="/alderon.svg"
            alt="Picture of the author"
            width="300px"
            height="300px"
        />
        </div>

        <div className="mortar">
         <Image
            src="/mortarUtama.svg"
            alt="Picture of the author"
            width="150px"
            height="150px"

        />
        </div>

        <div className="gambarBawah">
         <Image
            src="/weber.svg"
            alt="Picture of the author"
            width="300px"
            height="300px"

        />
        </div>
        <div className="gambarBawah">
         <Image
            className="milan"
            src="/milanEcowood.svg"
            alt="Picture of the author"
            width="3500px"
            height="300px"

        />
        </div>

        </div>
        </div>
        <div className="forMarginBottomHome">
            {/*Jangan dihapus*/}
        </div>

        </div>
    )
}

export default BusinessPartner