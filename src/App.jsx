import Category from "./pages/Category"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import { Routes, Route } from "react-router"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="categorie/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
