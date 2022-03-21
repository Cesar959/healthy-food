// Importação de Components
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Revenue from "./components/Revenue/Revenue"
import Service from "./components/Service/Service"

function App() {
  return (
    <>
      <Home>
        <Header></Header>
      </Home>
      <Revenue></Revenue>
      <Service></Service>
    </>
  )
}

export default App
