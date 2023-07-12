const Button = (props) => {
    return(
        <div className="">
            <button className={props.className} onClick={props.onClick} > SEE PRODUCT </button>
        </div>
    )
}

export default Button