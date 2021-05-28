import illustration from './hero-image.png'
import Button from '../components/buttons'
const HeroSection = ()=>
{
    return(
        <div className='hero__section d-flex p-3 align-items-center'>
            <div className='col-6'>
                <p className='text-larger hero__section--text mb-3'>
                    <p className='text-bold'>Passionné de technologie ?</p>
                    <p>prenez de l'avance avec le</p>
                    <span className='text-primary text-bold'>GROUPE SUP'INFO .</span>
                </p>
                <Button text='Decouvrir' color='red'/>
            </div>
            <img  src={illustration} alt='this is the hero illustration' width='600px'/>
        </div>
    )
}
export default HeroSection;