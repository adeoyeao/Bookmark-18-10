import styles from "../styles/layouts/header.module.scss"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Menu from "./Menu"
import Hamburger from "../components/Hamburger"
import { useState } from "react"

const Header = () => {
      const [ visible, setVisible ] = useState(false)

      const handleClick = () => setVisible(!visible)
 
      return (
                   <header className={styles.header}>
                        <Logo type="primary"/>
                        <Navbar type="primary" />
                        <Hamburger type="hamburger" handleClick={handleClick}/>
                        {visible && <Menu handleClick={handleClick}/>}
                  </header>
      )
}

export default Header