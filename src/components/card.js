import { AiOutlineClockCircle} from "react-icons/ai";
import { AiOutlineArrowRight} from "react-icons/ai";


const Card = ({color,title,img,description,duration})=>
{
    return(
        <div className='text-small d-flex'>
                <img  src={img} className='card--img'/>
                <div className='px-1'>
                        <p className='text-medium text-bold mb-3'>{title}</p>
                        <p className='sm-lh'>{description}</p>
                        <div className='mt-2  d-flex justify-content-between align-items-center'>
                                <div className='d-flex'>
                                        <AiOutlineClockCircle/>
                                        <p className='ml-2'>{duration}</p>
                                </div>
                                <div className='d-flex'>
                                        <p className='mr-2'>En savoir plus</p>
                                        <AiOutlineArrowRight/>
                                </div>
                        </div>           
                </div>      
        </div>
    )
}
export default Card