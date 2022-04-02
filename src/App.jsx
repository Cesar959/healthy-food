// Importação de Components
import Header from "./components/Header"
import Home from "./components/Home"
import Revenue from "./components/Revenue"
import Service from "./components/Service"
import Blog from "./components/Blog"
import Join from "./components/Join"
import Rodape from "./components/Footer"

function App() {
  return (
    <>
      <Home>
        <Header/>
      </Home>
      <Revenue/>
      <Service/>
      <Blog/>
      <Join/>
      <Rodape/>
    </>
  )
}

export default App
