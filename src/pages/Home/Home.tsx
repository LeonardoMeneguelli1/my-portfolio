import Navbar from "../../components/Navbar/Navbar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Baseboard from "./sections/Baseboard/Baseboard"

const Home = () => {

    return (
      <>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Baseboard/>
      </>
    )
  }
  
  export default Home
  