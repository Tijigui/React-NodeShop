import { Footer } from './Components/Footer/JS/footer';
import { Header } from './Components/Header/JS/header';
import { Main } from './Components/Main/JS/main';
import { Nav } from './Components/Nav/JS/nav';
import { Section } from './Components/Section/JS/section';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Section/>
      <Footer/>
    </div>
  );
}

