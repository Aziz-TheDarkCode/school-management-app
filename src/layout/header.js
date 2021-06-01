import logo from './logo.jpg'
import NavLinks from '../components/NavLinks'
import { Link } from 'react-router-dom';
const Header = ()=>
{
    return(
        <div className='d-flex header justify-content-between align-items-center p-3 w-100'>
            <img src={logo} width='150px'/>
            <div className='d-flex header--menu'>
                <Link to='/homepage'><NavLinks link='Accueil'/></Link>
                <Link to='/signup'><NavLinks link='Inscription'/></Link>
                <Link to='/signin'><NavLinks link='Connexion'/></Link>
                <Link to='/courses'><NavLinks link='Les formations'/></Link>
            </div> 
        </div>

    )
}

export default Header;