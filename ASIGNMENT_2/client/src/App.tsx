import { Route, Routes } from "react-router-dom"
import { UserLayout } from "./components/layouts"
import { Home } from './pages/home'
import { Nation } from './pages/nation'
import { Player } from './pages/player'


const App = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/nation" element={<Nation />} />
      </Routes>
    </UserLayout>
  )
}

export default App
