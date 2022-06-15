import './App.css';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';
import Section2 from './Section2';

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