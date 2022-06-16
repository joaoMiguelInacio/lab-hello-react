import './App.css';
import Logo from './components/Logo';
import MenuButton from './components/MenuButton';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Button from './components/Button';

//Section2 using map
import Section2 from './components/Section2';

//Section2 using props
import Section2Props from './components/Section2Props';
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
let data = [
  {
    icon: icon1,
    headline: "Declarative",
    description: "Reach makes it painless to create interactive UIs."
  },
  {
    icon: icon2,
    headline: "Components",
    description: "Build encapsulated components that manage their state."
  },
  {
    icon: icon3,
    headline: "Single-Way",
    description: "A set of immutable values are passed to the component's."
  },
  {
    icon: icon4,
    headline: "JSX",
    description: "A set of immutable values are passed to the component's."
  },
];

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

      {/*Section2 using map*/}
      <Section2 />

      {/*Section2 using props*/}
      <div className="light-large-container">
        <Section2Props data = {data[0]} />
        <Section2Props data = {data[1]} />
        <Section2Props data = {data[2]} />
        <Section2Props data = {data[3]} />
      </div>
    </>
  );
}
export default App;