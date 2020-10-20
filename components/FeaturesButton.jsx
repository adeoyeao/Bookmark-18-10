import styles from "../styles/components/featuresbutton.module.scss"

const FeaturesButton = (props) => {
      return (
            <button className={styles.featuresbutton}
            name={props.index}
            onClick={(e) => props.handleClick(e)}>{props.feature}</button>
      )
}

export default FeaturesButton