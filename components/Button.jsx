import styles from "../styles/components/button.module.scss"

const Button = (props) => {
      const cName = `button--${props.type}`
      return (
            <button className={`${styles.button} ${styles[cName]}`}
            onClick={() => props.formPopout()}>{props.content}</button>
      )
}

export default Button