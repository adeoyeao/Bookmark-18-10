import Hamburger from "../components/Hamburger"
import Logo from "../components/Logo"
import Social from "../components/Social"
import styles from "../styles/layouts/menu.module.scss"

const Menu = (props) => {
      return (
            <section className={styles.menu}>
                  <div className={styles.header}>
                        <Logo type="secondary"/>
                        <Hamburger type="close" handleClick={props.handleClick} />
                  </div>
                  <ul>
                        <li><a href="#features" onClick={()=> props.handleClick()}>FEATURES</a></li>
                        <li><a href="#download" onClick={()=> props.handleClick()}>DOWNLOAD</a></li>
                        <li><a href="#faqs" onClick={()=> props.handleClick()}>FAQs</a></li>
                  </ul>
                  <div className={styles.socials}>
                        <Social social="facebook" url="icon-facebook" />
                        <Social social="twitter" url="icon-twitter" />
                  </div>
            </section>
      )
}

export default Menu