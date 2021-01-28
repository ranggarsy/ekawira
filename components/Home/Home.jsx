import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'


function Home() {
    return (
        <main className={styles.Home}>
            <Navbar/>



            {/* VISI N MISI PERUSAHAAN */}
            <div className={styles.visiMisi}>
            <div className={styles.imgContainer}>
            <div className={styles.darkEffect}>
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
            
            
            </div>
            <div className={styles.businessPartners}>
                <h1>OUR BUSINESS PARTNERS</h1>
            <Image
                src="/alderon.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
             <Image
                src="/mortarUtama.svg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
             <Image
                src="/weber.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
             <Image
                src="/milanEcowood.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />

            </div>
        </main>
    )
}

export default Home
