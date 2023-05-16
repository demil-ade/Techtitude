function Input(props){
    return(
        <input type ={props.type} placeholder= {props.placeholder} className= {props.className}>{props.text}</input>
    );
}
export default Input;