
import './assets/style/main.css'
import { About } from './cmps/About'
import { Hero } from './cmps/Hero'
import { Navbar } from './cmps/Navbar'
import { Video } from './cmps/Video'
import { Name } from './cmps/Name'
import GooEffect from './cmps/GooEffect'
import { WorldMap } from './cmps/WorldMap'
import { Services } from './cmps/Services'
import { Contact } from './cmps/Contact'
import { Skills } from './cmps/Skills'
import { Footer } from './cmps/Footer'

function App() {


  return (
    <section className='main-layout'>
      <Hero />
      {/* <Video /> */}
      <About />
      <Services />
      <Contact />
      <Skills />
      <Footer />
      {/* <WorldMap /> */}
    </section>
  )
}

export default App
