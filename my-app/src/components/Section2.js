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

function Section2() {
  const items = data.map((element) => (
    <div className="light-small-container">
      <img className="icon" src={element.icon} alt="icon" />
      <h3>{element.headline}</h3>
      <p>{element.description}</p>
    </div>
  ));

  return <div className="light-large-container">{items}</div>;
}

export default Section2;
