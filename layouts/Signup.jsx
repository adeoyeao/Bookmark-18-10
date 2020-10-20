import styles from "../styles/layouts/signup.module.scss"
import {useState } from "react"

const Signup = () => {
      const [ valid, setValid ] = useState(false)
      const [ input, setInput ] = useState("")

      const inputStyle = {}
      valid ? (inputStyle.border = "2px solid green") : (inputStyle.border = "2px solid red")

      const handleChange = (e) => {
            const emailRegex = /\w{2,}\@\w{2,}\./ig
            setInput(e.target.value)
            emailRegex.test(input) ? setValid(true) : setValid(false)
      }

      const handleSubmit = (e) => {
            !valid && e.preventDefault()
      } 

      return (
            <div className={styles.signup}>
                  <h4>35,000+ ALREADY JOINED</h4>
                  <h2>Stay up-to-date with what we're doing</h2>
                  <form method="POST" action="/subscribe">
                        <input type="text" placeholder="Enter your email address" 
                        value={input} onChange={handleChange} style={inputStyle} name="email"/>
                        <input type="submit" value="Contact Us" onClick={handleSubmit}/>
                  </form>
            </div>
      )
}

export default Signup