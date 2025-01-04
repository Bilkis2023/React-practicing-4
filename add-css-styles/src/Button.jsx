// import Styles from './Button.module.css';

function Button() {

const styles ={
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "2em",
    backgroundColor: "hsl(171, 30%, 51%)",
    color: "hsl(0, 0%, 98%)",
    borderRadius: "5px",
    padding: "20px 30px",
    margin: "40px",
    border: "none",
    cursor: "pointer"
}

return (<button style={styles}>Click Me</button>);

}

        
    
    


export default Button