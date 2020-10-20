import React, {useState} from "react"
import FeaturesButton from "../components/FeaturesButton"
import Image from "../components/Image"
import Copy from "../components/Copy"

import styles from "../styles/layouts/features.module.scss"

const Features = () => {
      const [ visible, setVisible ] = useState(0)

      const handleClick = (e) => setVisible(e.target.name)
      
      const header = ["Bookmark in one click", "Intelligent Search", "Share your bookmarks"]

      const text = ["Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.", "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.", "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button" ]

      const url = ["illustration-features-tab-1","illustration-features-tab-2","illustration-features-tab-3"]

      return (
            <section className={styles.features}>
                  <span>
                        <FeaturesButton feature="Simple Bookmarking" index={0}
                        handleClick={handleClick}/>
                        <FeaturesButton feature="Speedy Searching" index={1}
                        handleClick={handleClick}/>
                        <FeaturesButton feature="Easy Sharing" index={2}
                        handleClick={handleClick}/>
                  </span>
                  <Image url={url[visible]}/>
                  <Copy
                  align="left" 
                  type="secondary"
                  head={header[visible]}
                  text={text[visible]}/>
            </section>
      )
} 

export default Features