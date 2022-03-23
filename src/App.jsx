// Importação de Components
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Revenue from "./components/Revenue/Revenue"
import Service from "./components/Service/Service"
import Blog from "./components/Blog/Blog"

function App() {
  return (
    <>
      <Home>
        <Header></Header>
      </Home>
      <Revenue></Revenue>
      <Service></Service>
      <Blog></Blog>
    </>
  )
}

export default App
