import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={styles.flexContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            {imageOn && (
                <figure className={styles.image}>
                    <Image src={cube} alt="" layout="responsive"
                        sizes="(min-width:1152px) 576px(min-width:768px)50vw,100vw"
                        priority
                        placeholder="blur"
                    />
                </figure>
            )}
        </div>
    )
}
