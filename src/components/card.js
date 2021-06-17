import { AiOutlineClockCircle} from "react-icons/ai";
import { AiOutlineArrowRight} from "react-icons/ai";


const Card = ({color,title,img,description,duration})=>
{
    return(
        <div className='text-small d-flex card'>
                <img  src={img} className='card--img' alt="this is the card's illustration"/>
                <div className='px-2  '>
                        <p className='mt-3 text-medium text-bold mb-3'>{title}</p>
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