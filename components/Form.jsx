import styles from "../styles/components/form.module.scss"
import { useState } from "react"
import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils"

const Form = (props) => {
      const [ input, setInput ] = useState({
            name: "",
            email: ""
      })

      const [valid, setValid ] = useState({
            name: false,
            email: false      
      })

      const nameStyle = {}
      const emailStyle = {}

      valid.name ? nameStyle.border = "2px solid green" : nameStyle.border = "2px solid red"

      valid.email ? emailStyle.border = "2px solid green" : emailStyle.border = "2px solid red"

      const handleChange = (e) => {
            const {name, value} = e.target
            const regex = /\w{2,}/ig
            const emailRegex = /\w{2,}\@\w{2,}\./ig
            setInput(prev => {
                  return {
                        ...prev,
                        [name]: value
                  }
            })
            if(name === "name") {
                  regex.test(value) ? setValid(prev => {
                        return {
                              ...prev,
                              [name]: true
                        }
                  }) : setValid(prev => {
                        return {
                              ...prev,
                              [name]: false
                        }
                  })
            }
            if(name === "email") {
                  emailRegex.test(value) ? setValid(prev => {
                        return {
                              ...prev,
                              [name]: true
                        }
                  }) : setValid(prev => {
                        return {
                              ...prev,
                              [name]: false
                        }
                  })
            }
      }

      const handleSubmit = (e) => {
            (!valid.name || !valid.email) && e.preventDefault()
      }

      return (
            <div className={styles.form}>
                  <button onClick={() => props.formPopout()} />
                  <form>
                        <input type="text" name="name" value={input.name}
                        placeholder="Sylvan Esso" style={nameStyle}
                        onChange={handleChange}/>
                        <input type="email" name="email" value={input.email}
                        placeholder="sylvan.esso@gmail.com" style={emailStyle}
                        onChange={handleChange}/>
                        <div className={styles.line} />
                        <input type="submit" value="Request Download Link" onClick={handleSubmit}/>
                  </form>
            </div>
      )
}

export default Form