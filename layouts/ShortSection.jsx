import Copy from "../components/Copy"
import styles from "../styles/layouts/shortsection.module.scss"

const ShortSection = (props) => {
      return (
            <section className={styles.shortsection} id={props.id}>
            <Copy type={props.type} head={props.head} text={props.text}/>
            </section>
      )
}

export default ShortSection