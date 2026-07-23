import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from './layout/Layout'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
