import { IoIosArrowForward} from "react-icons/io";
const Button=({text,variant,width,onclick})=>
{

    return(
        <a href='#presentation'>
            <button className={` d-flex align-items-center justify-content-center btn btn-${variant} rounded-btn w-${width}`} onClick={()=>{onclick && onclick()}}>{text}<IoIosArrowForward/></button>
        </a>
    )
}
export default Button;