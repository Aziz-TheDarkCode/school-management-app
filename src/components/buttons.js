const Button=({text,color})=>
{
    return(
        <a>
            <button className='btn  rounded-btn w-25' style={{backgroundColor:color}}>{text}</button>
        </a>
    )
}
export default Button;