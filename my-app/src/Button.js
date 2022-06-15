function Button() {
    function handleClick() {
        alert('You are!');
    }
    return (
    <button className="button" onClick={handleClick}>
        Awesome!
    </button>
    );
  };
  
  export default Button;