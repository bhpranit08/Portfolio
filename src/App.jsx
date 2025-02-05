import Tabs from "./components/Tabs"
import Content from "./components/Content"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
// import Footer from "./components/Footer"

import { useEffect } from "react"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start gap-30">
      <Tabs />
      <div className="w-full h-screen flex flex-col items-center justify-start gap-30">
        <Content />
        <Projects />
        <Skills />
        <Contact />
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
