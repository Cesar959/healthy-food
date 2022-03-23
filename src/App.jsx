// Importação de Components
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Revenue from "./components/Revenue/Revenue"
import Service from "./components/Service/Service"
import Blog from "./components/Blog/Blog"
import Join from "./components/Join/Join"
import Rodape from "./components/Rodape/Rodape"

function App() {
  return (
    <>
      <Home>
        <Header></Header>
      </Home>
      <Revenue></Revenue>
      <Service></Service>
      <Blog></Blog>
      <Join></Join>
      <Rodape></Rodape>
    </>
  )
}

export default App
