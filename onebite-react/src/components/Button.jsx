const Button = ({text, color = "black"}) => {
    return <button onClick={(e) => {console.log(e)}} style={{color: color}} >{text}</button>
}

export default Button