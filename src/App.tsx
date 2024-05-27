import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Conhecimentos } from './pages/Conhecimentos/Conhecimentos';
import { Projetos } from './pages/Projetos/Projetos';
import { Contatos } from './pages/Contatos/Contatos';
import style from "./App.module.scss"

export const App = () => {
  
  return (
    <div className={style.container}>      
      <Navbar />
      <Home />
      <Conhecimentos />
      <Projetos />
      <Contatos />
    </div>
  );
}