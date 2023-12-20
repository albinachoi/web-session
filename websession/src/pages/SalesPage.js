import {useState} from "react";
import styles from './SalesPage.module.scss'

export default function SalesPage() {
    const [slide, setSlide] = useState(0)

    return (
        <>
            <br/><br/><br/>
            <div className={styles.container1}>
                <div className={styles.imageContainer}>
                    <img src="10E47C6A-D1BF-41A5-BB34-4348130351CF.PNG" alt=''/>
                </div>
                <div className={styles.sale}>
                    <div className={styles.saleHeader}>
                        <span className={styles.prev} onClick={() => setSlide(0)}>&#10094;</span>
                        <h3>Акции</h3>
                        <span className={styles.next} onClick={() => setSlide(1)}>&#10095;</span>
                    </div>
                    <div className={styles.saleBody}>
                        <img className={styles.slide} src="2DC542E8-6C56-48AC-940B-67881BE9CCD4.JPEG" alt="Slide 1" style={ {display: slide === 0 ? 'block' : 'none'} }/>
                        <img className={styles.slide} src="3B0FFCBD-B919-4FB3-9897-839AF30DF950.JPEG" alt="Slide 2" style={ {display: slide === 1 ? 'block' : 'none'} }/>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="521A6F31-F7F1-4B96-A0CB-4192A7B459D1.PNG"/>
                </div>
            </div>
        </>
    )
}