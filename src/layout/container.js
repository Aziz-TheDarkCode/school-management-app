import HeroSection from './heroSection'
import { Accordion }from 'react-accessible-accordion';
import presentation from './presentation.jpg'
import AccordionComponent from '../components/accordion'
import FixedSideBar from '../components/mini-sidebar'
import 'react-accessible-accordion/dist/fancy-example.css';
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
         
                <div className='accordion-section p-5 w-75'>
                <p className=" p-2 mb-5 text-larger text-center text-bold">FAQ</p>
                <Accordion className='no-border'> 
                <AccordionComponent title="Ou se trouve Sup'info ?" text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has`}/>
                   <AccordionComponent title="Le diplome de SUP'INFO est-elle reconnu par l'Etat ?" text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has`}/>
                   <AccordionComponent title="Combien de temps dure la formation ?" text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has`}/>
                </Accordion>
                </div> 
        </div>
           
    )
}
export default Container;