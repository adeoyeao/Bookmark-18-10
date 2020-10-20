import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Social from "../components/Social"
import styles from "../styles/layouts/footer.module.scss"

const Footer = () => {
      return (
            <footer className={styles.footer}>
                  <Logo type="secondary" />
                  <Navbar type="secondary" />
                  <div>
                        <Social social="facebook" url="icon-facebook" />
                        <Social social="twitter" url="icon-twitter" />
                  </div>
            </footer>
      )
}

export default Footer