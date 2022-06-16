import './App.css';
import Logo from './components/Logo';
import MenuButton from './components/MenuButton';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Button from './components/Button';
import Section2 from './components/Section2';

function App() {
  return (
    <>
      <div className='navbar'>
        <Logo />  
        <MenuButton />
      </div>
      <section className='dark'>
        <Title />
        <Subtitle />
        <Button />
      </section>
      <Section2 />
    </>
  );
}
export default App;