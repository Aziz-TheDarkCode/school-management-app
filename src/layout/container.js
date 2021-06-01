import HeroSection from './heroSection'
import presentation from './presentation.jpg'
import FixedSideBar from '../components/mini-sidebar'

const Container =()=>
{
    return(
        <div className='container'>
             <HeroSection/>
             <FixedSideBar/>
             <div id='presentation' className='mt-5 p-5'>
                    <p className='mt-5 mb-4 p-4 text-larger text-center text-bold'>Presentation du <span className='text-secondary'>GROUPE SUP'INFO</span></p>
                    <div className='d-flex p-5 align-items-center'>
                        <p className='col-6 lh'>
                            Le<span className='text-primary text-bold'> GROUPE SUP’INFO</span>, institut supérieur d’informatique et de management d’entreprises, 
                            basé à Dakar (Sénégal) a été créé en Décembre 1991. C’est un établissement 
                            d’enseignement supérieur et de formation professionnelle reconnu par l’état 
                            du Sénégal et la plupart des organismes d’accréditation nationaux et 
                            internationaux. L’institut SUP’INFO est membre du Groupe SUP’INFO SENEGAL.
                        </p>
                        <img src={presentation} width='500px'/>
                    </div>
                    
            </div>     
        </div>
           
    )
}
export default Container;