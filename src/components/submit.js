import { IoIosArrowForward} from "react-icons/io";
const Submit=({text,variant,width})=>
{

    return(
        <a href='#presentation'>
            <button className={` d-flex align-items-center justify-content-center btn btn-${variant} rounded-btn w-${width}`}>{text}<IoIosArrowForward/></button>
        </a>
    )
}
export default Submit;