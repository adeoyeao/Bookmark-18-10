import Head from "next/head"

import Header from "../layouts/Header"
import Hero from "../layouts/Hero"
import ShortSection from "../layouts/ShortSection"
import Features from "../layouts/Features"
import Cards from "../layouts/Cards"
import Faq from "../layouts/Faq"
import Signup from "../layouts/Signup"
import Footer from "../layouts/Footer"
import Form from "../components/Form"

import { useState } from "react"

const Index = () => {
      const [ visible, setVisible ] = useState(false)

      const formPopout = () => setVisible(!visible)

      return (
            <main>
                  <Head>
                        <title>Bookmark || Landing Page</title>
                  </Head>
                  <Header />
                  <Hero formPopout={formPopout}/>
                  <ShortSection 
                  type="secondary"
                  head="Features"
                  text="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
                  id="features"/>
                  <Features />
                  <ShortSection 
                  type="secondary"
                  head="Download the extension"
                  text="We've got more browswers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
                  id="download"/>
                  <Cards formPopout={formPopout}/>
                  <ShortSection 
                  type="secondary"
                  head="Frequently Asked Questions"
                  text="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
                  id="faqs"/>
                  <Faq />
                  <Signup />
                  <Footer />
                  {visible && <Form formPopout={formPopout}/>}
            </main>
      )
}

export default Index