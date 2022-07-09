import { MenuProvider } from "./context/Menu"
import { Event } from "./pages/Event"


function App() {

  return (
    <MenuProvider>
      <Event />
    </MenuProvider>
  )
}

export default App
