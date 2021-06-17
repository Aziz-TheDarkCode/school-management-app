import MiddleCard from '../components/middle-card'
import Footer from '../layout/footer'
function Fiche() {
    if (localStorage.length>=1) 
    {    
        return(
            <>
            <div className='w-75 centered-box'>
                <MiddleCard/>
            </div>
            <Footer/>
       </> 
        )
    }else
    {
        window.location.replace("/homepage")
    }
    
}
export default Fiche;