const Button = ({type, style, content, handler}) => {
    return(
        <button type={type} className={style} onClick={handler}>
            {content}
        </button>
    )
}
export default Button