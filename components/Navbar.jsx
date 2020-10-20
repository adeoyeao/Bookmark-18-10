import styles from "../styles/components/navbar.module.scss"

const Navbar = (props) => {
      const cName = `navbar--${props.type}`
      return (
            <nav className={`${styles.navbar} ${styles[cName]}`}>
                  <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#download">Download</a></li>
                  <li><a href="#faqs">FAQs</a></li>
                  </ul>
            </nav>
      )
}

export default Navbar