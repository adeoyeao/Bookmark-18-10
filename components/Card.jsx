import Image from "./Image"
import Copy from "./Copy"
import Button from "./Button"
import styles from "../styles/components/card.module.scss"

const Card = (props) => {
      return (
            <div className={styles.card}>
                  <Image url={props.url}/>
                  <Copy 
                  type="tertiary"
                  head={props.head}
                  text={props.text}/>
                  <Button type="primary"
                  content="Add & Install Extension" formPopout={props.formPopout}/>
            </div>
      )
}

export default Card