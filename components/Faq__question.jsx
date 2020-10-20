import styles from "../styles/components/faq.module.scss"

const Faq__question = (props) => {
      const cName = `faq__question`
      return (
            <h4 className={styles[cName]}>{props.question}</h4>
      )
}

export default Faq__question