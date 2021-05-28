import HeroSection from './heroSection'
import FixedSideBar from '../components/mini-sidebar'
const Container =()=>
{
    return(
        <div className='container'>
             <HeroSection/>
             <FixedSideBar/>      
        </div>
           
    )
}
export default Container;