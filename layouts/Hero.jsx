import styles from "../styles/layouts/hero.module.scss"

import Copy from "../components/Copy"
import Button from "../components/Button"
import Image from "../components/Image"

const Hero = (props) => {
      return (
            <section className={styles.hero}>
                  <div className={styles.content}>
                  <Copy
                        align="left"
                        type="primary"
                        head="A Simple Bookmark" 
                        text="A clean and simple interface to organzie your favourite websites. Open a new brroswer tab and see your sites load instantly. Try it for free."/>
                  <div className={styles.buttons}>
                        <Button type="primary" content="Get it on Chrome" formPopout={props.formPopout}/>
                        <Button type="secondary" content="Get in on Firefox" formPopout={props.formPopout}/>
                  </div>
                  </div>
                  <Image url="illustration-hero"/>
            </section>
      )
}

export default Hero