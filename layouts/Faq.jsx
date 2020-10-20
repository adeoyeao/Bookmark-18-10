import styles from "../styles/layouts/faq.module.scss"
import React, {useState} from "react"

import Faq__answer from "../components/Faq__answer"
import Faq__button from "../components/Faq__button"
import Faq__question from "../components/Faq__question"

const Faqs = () => {
      const [ visible, setVisible ] = useState({
            0: false,
            1: false,
            2: false,
            3: false
      })

      const handleClick = (e) => {
            const name = e.target.name
            setVisible(prev => {
                  return {
                        ...prev,
                        [name]: !prev[name]
                  }
            })
      }

      return(
            <div className={styles.faq}>
                  <div>
                        <Faq__question question="What is Bookmark?" />
                        <Faq__button index={0} handleClick={handleClick} visible={visible[0]}/>
                        {visible[0] && <Faq__answer answer="Bookmark is a browser extension that organizes your bookmarks folder." />}
                  </div>
                  <div>
                        <Faq__question question="How can I request a new browser?" />
                        <Faq__button index={1} handleClick={handleClick} visible={visible[1]}/>
                        {visible[1] && <Faq__answer answer="Feel free to message us and let us know which browsers you would like to access." />}
                  </div>
                  <div>
                        <Faq__question question="Is there a mobile app" />
                        <Faq__button index={2} handleClick={handleClick} visible={visible[2]}/>
                        {visible[2] && <Faq__answer answer="The mobile app will be launching in Q1 2021." />}
                  </div>
                  <div>
                        <Faq__question question="What about other Chromium browsers?" />
                        <Faq__button index={3} handleClick={handleClick} visible={visible[3]}/>
                        {visible[3] && <Faq__answer answer="We are currently working on broadening the scope of available browsers. Watch this space!" />}
                  </div>
            </div>
      )
}

export default Faqs