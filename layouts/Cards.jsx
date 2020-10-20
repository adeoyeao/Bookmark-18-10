import Card from "../components/Card"
import styles from "../styles/layouts/cards.module.scss"

const Cards = (props) => {
      return (
            <section className={styles.cards}>
                  <Card url="logo-chrome"
                  head="Add to Chrome"
                  text="Minimum version 6.2" formPopout={props.formPopout}/>
                  <Card url="logo-firefox"
                  head="Add to Firefox"
                  text="Minimum version 5.5" formPopout={props.formPopout}/>
                  <Card url="logo-opera"
                  head="Add to Opera"
                  text="Minimum version 4.6" formPopout={props.formPopout}/>
            </section>
      )
}

export default Cards