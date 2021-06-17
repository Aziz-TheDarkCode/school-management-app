import MiddleCard from '../components/middle-card'
import Footer from '../layout/footer'
function Fiche() {
    const user = JSON.parse(localStorage.getItem("User"))
    if (localStorage.length>=1 && user.faculty !==undefined) 
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