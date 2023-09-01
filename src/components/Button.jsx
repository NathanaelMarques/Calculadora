import "./Button.css"

const Button = (props) => {
    return (
        <button className={`
            button any
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}
        onClick={_ => props.click ? props.click(props.label) : null}
        >
            {props.label}
        </button>
    )
}

export default Button