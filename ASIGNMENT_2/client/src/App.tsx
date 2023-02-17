import { Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import { Nation } from './pages/nation'
import { Player } from './pages/player'
import { UserLayout } from './components/layout';
import { ChakraProvider } from "@chakra-ui/react"

const App = () => {
  return (
    <ChakraProvider>
      <UserLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/nation" element={<Nation />} />
        </Routes>
      </UserLayout>
    </ChakraProvider>

  )
}

export default App
