import styles from "../styles/components/hamburger.module.scss"

const Hamburger = (props) => {
      let cName
      props.type === "hamburger" ? cName = "hamburger" : cName = "close"
      return (
            <button className={styles[cName]} 
            onClick={() => props.handleClick()}></button>
      )
}

export default Hamburger