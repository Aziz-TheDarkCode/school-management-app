import logo from './logo.jpg'
import NavLinks from '../components/NavLinks'
const Header = ()=>
{
    return(
        <div className='d-flex header justify-content-between align-items-center p-3'>
            <img src={logo} width='150px'/>
            <div className='d-flex header--menu'>
                <NavLinks link='Accueil'/>
                <NavLinks link='Connexion'/>
                <NavLinks link='Inscription'/>
                <NavLinks link='FAQ'/>
            </div>     
        </div>

    )
}

export default Header;