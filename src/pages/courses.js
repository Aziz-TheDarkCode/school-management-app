import Card from '../components/card'
import Web from './web.png'
import Network from './network.jpg'
import { AiOutlineArrowRight} from "react-icons/ai";
import Cyber from './cyber-security.jpg'
import { Link } from 'react-router-dom';
const Coursepage = ()=>
{
        return(
            <div className='p-3' >
                <div className='mt-6 text-center mb-4'>
                    <p className='text-bold text-larger mb-3'>TROUVER MA FORMATION</p>
                    <p>le GROUPE SUP'INFO vous propose des formations plusieurs formation dans le domaine de l'informatique .</p>
                </div>
                <div className='card__section mt-5'>
                    <Card title='Web Developpement' img={Web} description={`Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range`} duration='3ans' color='#FBFBFB'/>
                    <Card title='Cyber Sécurité' img={Cyber} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `} duration='3ans' color='#FBFBFB'/>
                    <Card title="Reseaux Telecom'" img={Network} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `} duration='3ans' color='#FBFBFB'/>       
                    <Card title="Reseaux Telecom'" img={Network} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `} duration='3ans' color='#FBFBFB'/>       
                    <Card title="Reseaux Telecom'" img={Network} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `} duration='3ans' color='#FBFBFB'/>       
                    <Card title="Reseaux Telecom'" img={Network} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `} duration='3ans' color='#FBFBFB'/>       
                </div>
            <Link to='/signup' className='router-link'>
            </Link>    
            </div>
        )
}
export default Coursepage