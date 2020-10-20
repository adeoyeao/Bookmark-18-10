import styles from "../styles/components/faq.module.scss"

const Faq__button = (props) => {
      const buttonStyle = {}
      props.visible && (buttonStyle.transform = "rotate(-90deg)")
      
      const cName = `faq__button`
      return (
            <button className={styles[cName]}
            name={props.index} style={buttonStyle}
            onClick={(e) => props.handleClick(e)}></button>
      )
}

export default Faq__button