import { Route, Routes } from "react-router-dom"
import { UserLayout } from "./components/layout"
import { Home } from './pages/home'
import { Nation } from './pages/nation'
import { Player } from './pages/player'
import AuthContextProvider from "./utils/authContext"



const App = () => {


  return (
    <AuthContextProvider>
      <UserLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/nation" element={<Nation />} />
        </Routes>
      </UserLayout>
    </AuthContextProvider>

  )
}

export default App
