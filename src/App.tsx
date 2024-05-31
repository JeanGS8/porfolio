import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Conhecimentos } from './pages/Conhecimentos/Conhecimentos';
import { Projetos } from './pages/Projetos/Projetos';
import { Contatos } from './pages/Contatos/Contatos';

export const App = () => {
  
  return (
    <>      
      <Navbar />
      <Home />
      <Conhecimentos />
      <Projetos />
      <Contatos />
    </>
  );
}