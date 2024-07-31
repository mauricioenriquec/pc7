import{AppRouters} from "./AppRouter"
import { PokemonProvider } from './context/PokemonProvider';

function App() {

  return (
    <PokemonProvider>
    <AppRouters />
  </PokemonProvider>
  )
}

export default App
