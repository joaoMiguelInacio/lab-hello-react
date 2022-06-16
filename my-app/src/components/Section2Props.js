function Section2Props (props) {
    return (
        <div className="light-small-container">
            <img className="icon" src={props.data.icon} alt="icon" />
            <h3>{props.data.headline}</h3>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Section2Props;